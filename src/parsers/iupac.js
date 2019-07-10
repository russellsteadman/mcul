const Parser = require('rd-parse');
const Y = require('../shared/combinator');
const HydrocarbonPrefix = require('./../maps/hydrocarbonPrefix.json');
const FunctionalGroups = require('./../maps/functionalGroups.json');
const GreekCounts = require('./../maps/greekCounts.json');

const IupacGrammar = function (Token, All, Any, Plus, Optional, Node) {
    const Molecule = this;
    
    return Y(function (ThisGrammar) {
        Token(/\s+/g, 'ignore'); // Ignore whitespace
        Token(/([(),-])/g, 'verbatim'); // Assistive characters

        /** ex. meth, eth, prop, ... */
        const PrefixNode = Node(Token(new RegExp(`(${HydrocarbonPrefix.join('|')})(?!yl)`, 'g'), 'prefix'), ([prefix]) => ({
            prefix: Number(HydrocarbonPrefix.indexOf(prefix)) + 1,
        }));

        /** ex. ane, ene, an (depending upon context) ... */
        const BondCountNode = Node(Token(/(ane?|ene?|yne?)/g, 'bondCount'), ([bondCount]) => ({
            bondCount: bondCount[0] === 'a' ? 1 : bondCount[0] === 'e' ? 2 : 3,
        }));

        /** ex. cyclo */
        const CyclicNode = Node(Token(/(cyclo)/g, 'cyclic'), () => ({cyclic: true}));

        /** ex. acid */
        const AcidNode = Node(Token(/(\sacid)/g, 'acid'), () => ({acid: true}));

        /** ex. 1 */
        const LocationNode = Node(Token(/([0-9]+)/g, 'location'), ([location]) => (location));

        /** ex. fluoro */
        const PreFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter((group) => (!!FunctionalGroups[group].pre)).join('|')})`, 'g'), 'prefn'), ([fn]) => ({fn}));

        /** ex. ol */
        const PostFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter((group) => (!FunctionalGroups[group].pre)).join('|')})`, 'g'), 'postfn'), ([fn]) => ({fn}));

        /** ex. di, tri */
        const GreekCount = Node(Token(new RegExp(`(${GreekCounts.join('|')})`, 'g'), 'greekCount'), ([groupCount]) => ({
            count: Number(GreekCounts.indexOf(groupCount)) + 1,
        }));

        /** ex. -1,2,3- or -1,2,3,- */
        const LocationGroup = Node(All(Optional('-'), LocationNode, Optional(Plus(All(',', LocationNode))), Optional(','), '-'), (location) => {
            for (let i in location) location[i] = Number(location[i]);
            return { location };
        });

        const FunctionalHandler = (groups) => {
            let options = {
                type: 'fngroup',
                location: [],
            };

            for (let i in groups) {
                if (groups[i].hasOwnProperty('location')) {
                    options.location = options.location.concat(groups[i].location);
                    continue;
                }
                options = {...options, ...groups[i]};
            }

            while (options.location.length < (options.count || 1)) options.location.push(-1);

            let fngroups = [];
            for (let i in options.location) {
                fngroups.push({
                    ...options,
                    location: options.location[i],
                    count: 1,
                });
            }

            return { fngroups };
        };

        /** ex. 2,3-difluoro */
        const PreFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PreFunctionalNode), FunctionalHandler);

        /** ex. -1,2-diol */
        const PostFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PostFunctionalNode), FunctionalHandler);

        const FreeChain = Node(All(
            // 1,2,2-trichloro-
            Optional(Plus(PreFunctionalGroup)),
            // -1,2- (can be either at start or middle)
            Optional(LocationGroup),
            // cyclo-
            Optional(CyclicNode),
            // but-
            PrefixNode,
            // -1,2- (denotes same thing as first one)
            Optional(LocationGroup),
            // -ane, -ene, -yne
            BondCountNode,
            // -1,2-diol
            Optional(Plus(PostFunctionalGroup)),
            // acid
            Optional(AcidNode)
        ), (groups) => {
            // All props
            let chainProps = {location: [], children:[]};
            
            for (let i in groups) {
                if (groups[i].hasOwnProperty('fngroups')) {
                    chainProps.children = chainProps.children.concat(groups[i].fngroups);
                    continue;
                }
                chainProps = {...chainProps, ...groups[i]};
            }

            // Generate carbons in main chain
            let carbons = Molecule.createElements(6, {
                count: chainProps.prefix,
                chain: true,
                bond: {
                    bondCount: 1,
                },
            });
            let carbonIds = [];
            for (let i in carbons) carbonIds.push(carbons[i].id);

            // Generate child functional groups
            let chainChildren = carbons.slice();
            let implicitChildren = [];
            for (let i in chainProps.children) {
                let { location } = chainProps.children[i];
                delete chainProps.children[i].location;
                let group = Molecule.createSubgroup([], chainProps.children[i]);
                group.unserialize(FunctionalGroups[chainProps.children[i].fn].members);
                if (location === -1) {
                    implicitChildren.push(group);
                } else {
                    for (let o in group.children) {
                        let bond = (FunctionalGroups[chainProps.children[i].fn].bonds || [])[o] || {};
                        Molecule.createBond(carbonIds[location - 1], group.children[o].id, bond);
                    }
                }
                chainChildren.push(group);
            }

            delete chainProps.children;

            // Generate the main chain group
            let chain = Molecule.createSubgroup(chainChildren, {
                type: 'chain',
                ...chainProps,
            });

            // ethene, ethyne, propene, propyne can be implicitly at location 1
            if (chainProps.bondCount !== 1 && chainProps.location.length === 0 && (chainProps.prefix === 2 || chainProps.prefix === 3)) chainProps.location.push(1);

            // Change bond counts for main chain
            for (let i in chainProps.location) {
                Molecule.createBond(carbonIds[chainProps.location[i]], carbonIds[chainProps.location[i] - 1], {
                    bondCount: chainProps.bondCount || 1,
                });
            }

            // Append the chain
            Molecule.append(chain);

            // Fix implicitly bonded functional groups (e.g. trichloroethene)
            for (let i in carbons) {
                if (!implicitChildren[0]) break;
                let bondCount = 0;
                let bonds = Molecule.getBonds(carbons[i]);
                for (let o in bonds) {
                    let bond = Molecule.getBond(carbons[i], bonds[o].split('-')[1]);
                    bondCount += bond.bondCount;
                }
                for (let o = bondCount; o < 4; o += 1) {
                    if (!implicitChildren[0]) break;
                    for (let u in implicitChildren[0].children) {
                        let bond = (FunctionalGroups[implicitChildren[0].functionalGroup].bonds || [])[u] || {};
                        Molecule.createBond(carbons[i], implicitChildren[0].children[u], bond);
                    }
                    implicitChildren = implicitChildren.slice(1);
                }
            }

            // Dynamically add and bond hydrogens to carbon
            const flat = Molecule.childIds;
            for (let i in flat) {
                if (flat[i].element === 6) {
                    let bondCount = 0;
                    let bonds = Molecule.getBonds(flat[i]);
                    for (let o in bonds) {
                        let bond = Molecule.getBond(i, bonds[o].split('-')[1]);
                        bondCount += bond.bondCount;
                    }
                    for (let o = bondCount; o < 4; o += 1) {
                        let el = Molecule.createElement(1);
                        flat[i].parent.append(el);
                        Molecule.createBond(flat[i], el);
                    }
                }
            }
            
            return chain;
        });

        return Node(Plus(Any(FreeChain)), stack => stack);
    });
};

module.exports = function (text) {
    return new Parser(IupacGrammar.bind(this)).parse(text);
};