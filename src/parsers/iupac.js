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
        const LocationGroup = Node(All(Optional('-'), LocationNode, Optional(Plus(All(',', LocationNode))), Optional(','), '-'), (groups) => ({
            location: groups.reduce((a, b) => {
                a.push(Number(b));
                return a;
            }, []),
        }));

        /** ex. 2,3-difluoro */
        const PreFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PreFunctionalNode), (groups) => {
            let subgroup = Molecule.createSubgroup([], {
                type: 'fngroup',
                ...groups.reduce((a, b) => {
                    if (b.hasOwnProperty('location')) {
                        a.location = a.location.concat(b.location);
                        return a;
                    }
                    return {...a, ...b};
                }, {location: []}),
            });
            subgroup.unserialize(FunctionalGroups[subgroup.functionalGroup].members);
            return { subgroup };
        });

        /** ex. -1,2-diol */
        const PostFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PostFunctionalNode), (groups) => {
            let subgroup = Molecule.createSubgroup([], {
                type: 'fngroup',
                ...groups.reduce((a, b) => {
                    if (b.hasOwnProperty('location')) {
                        a.location = a.location.concat(b.location);
                        return a;
                    }
                    return {...a, ...b};
                }, {location: []}),
            });
            subgroup.unserialize(FunctionalGroups[subgroup.functionalGroup].members);
            return { subgroup };
        });

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
            Optional(Plus(PostFunctionalGroup))
        ), (groups) => {
            let chainProps = groups.reduce((a, b) => {
                if (b.hasOwnProperty('location')) {
                    a.location = a.location.concat(b.location);
                    return a;
                }
                if (b.hasOwnProperty('subgroup')) {
                    a.children.push(b.subgroup);
                }
                return {...a, ...b};
            }, {location: [], children:[]});

            let groupCount = chainProps.children.reduce((a, b) => {
                return a + (b.count || 1);
            }, 0);
            let locLength = chainProps.location.length || 1;
            let chainCount = chainProps.prefix || 1;
            let bondCount = chainProps.bondCount;
            let hydrogenCount = (chainCount * 2) + 2 - ((bondCount - 1) * locLength * 2) - groupCount;
            // 2 2 0 3

            let chainChildren = chainProps.children.concat([
                Molecule.createElement(6, {
                    count: chainProps.prefix,
                    chain: true,
                }),
            ]);
            delete chainProps.children;
            delete chainProps.subgroup;

            let chain = Molecule.createSubgroup(chainChildren, {
                type: 'chain',
                ...chainProps,
            });

            chain.append(Molecule.createElement(1, {
                count: hydrogenCount,
                chain: true,
            }));
            
            return chain;
        });

        return Node(Plus(Any(FreeChain)), stack => stack);
    });
};

module.exports = function (text) {
    return new Parser(IupacGrammar.bind(this)).parse(text);
};