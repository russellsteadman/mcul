const Parser = require('rd-parse');
const Y = require('./../shared/generator');
const HydrocarbonPrefix = require('./../maps/hydrocarbonPrefix.json');
const FunctionalGroups = require('./../maps/functionalGroups.json');
const GreekCounts = require('./../maps/greekCounts.json');

const IupacGrammar = function (Token, All, Any, Plus, Optional, Node) {
    return Y(function (ThisGrammar) {
        Token(/\s+/g, 'ignore');
        Token(/([()\-,])/g, 'verbatim');

        const PrefixNode = Node(Token(new RegExp(`(${HydrocarbonPrefix.join('|')})`, 'g'), 'prefix'), ([prefix]) => ({prefix}));
        const BondCountNode = Node(Token(/(ane?|ene?|yne?)/g, 'bondCount'), ([bondCount]) => ({bondCount}));
        const CyclicNode = Node(Token(/(cyclo)/g, 'cyclic'), () => ({cyclic: true}));
        const LocationNode = Node(Token(/([0-9]+)/g, 'location'), ([location]) => (location));
        const PreFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter((group) => (!!FunctionalGroups[group].pre)).join('|')})`, 'g'), 'prefn'), ([fn]) => ({fn}));
        const PostFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter((group) => (!FunctionalGroups[group].pre)).join('|')})`, 'g'), 'postfn'), ([fn]) => ({fn}));
        const GreekCount = Node(Token(new RegExp(`(${GreekCounts.join('|')})`, 'g'), 'greekCount'), ([groupCount]) => ({groupCount}));

        const LocationGroup = Node(All(Optional('-'), LocationNode, Optional(Plus(All(',', LocationNode))), Optional(','), '-'), (groups) => ({
            location: groups.reduce((a, b) => {
                a.push(Number(b));
                return a;
            }, [])
        }));

        const PreFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PreFunctionalNode), (groups) => ({
            subgroup: {
                type: 'fngroup',
                ...groups.reduce((a, b) => {
                    if (b.hasOwnProperty('location')) {
                        a.location = a.location.concat(b.location);
                        return a;
                    }
                    return {...a, ...b};
                }, {location: []})
            }
        }));
        const PostFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PostFunctionalNode), (groups) => ({
            subgroup: {
                type: 'fngroup',
                ...groups.reduce((a, b) => {
                    if (b.hasOwnProperty('location')) {
                        a.location = a.location.concat(b.location);
                        return a;
                    }
                    return {...a, ...b};
                }, {location: []})
            }
        }));

        const FreeChain = Node(All(
            // 1,2,2-trichloro-
            Optional(Plus(PreFunctionalGroup)),
            // cyclo-
            Optional(CyclicNode),
            // but-
            PrefixNode,
            // -1,2-
            Optional(LocationGroup),
            // -ane, -ene, -yne
            BondCountNode,
            // -1,2-diol
            Optional(Plus(PostFunctionalGroup))
        ), (groups) => ({
            type: 'chain',
            ...groups.reduce((a, b) => {
                if (b.hasOwnProperty('location')) {
                    a.location = a.location.concat(b.location);
                    return a;
                }
                if (b.hasOwnProperty('subgroup')) {
                    a.subgroups.push(b.subgroup);
                    return a;
                }
                return {...a, ...b};
            }, {location: [], subgroups: []})
        }));

        return Node(Plus(Any(FreeChain)), stack => stack);
    });
};

const IupacParser = new Parser(IupacGrammar);

module.exports = (text) => IupacParser.parse(text);