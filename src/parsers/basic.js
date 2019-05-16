const Parser = require('rd-parse');
const Y = require('./../shared/generator');
const ConvertToAtomic = require('./../shared/convertToAtomic');

const BasicGrammar = function (Token, All, Any, Plus, Optional, Node) {
    return Y(function (ThisGrammar) {
        Token(/\s+/g, 'ignore');
        Token(/([()\][^_])/g, 'verbatim');

        const Element = Token(/([A-Z][a-z]*)/g, 'element');
        const Count = Token(/((?<![\^+-])[0-9]+)/g, 'count');
        const Charge = Token(/([+-]?[0-9]+)/g, 'charge');

        const ChargeNode = Node(All('^', Charge), (charge) => ((Number(charge) && Number(charge) !== 0) ? {charge: Number(charge)} : {}));
        const CountNode = Node(All(Optional('_'), Count), (count) => ((Number(count) && Number(count) !== 1) ? {count: Number(count)} : {}));

        const Suffix = Node(Any(All(Optional(ChargeNode), Optional(CountNode)), All(Optional(CountNode), Optional(ChargeNode))), (stack) => (stack || []));

        const ParentheticalGroup = Node(All('(', ThisGrammar, ')', Suffix), ([subgroup, suffix]) => ({
            type: 'subgroup',
            subgroup,
            ...suffix.reduce((a, b) => {
                a = {...a, ...b};
                return a;
            }, {})
        }));

        const ComplexGroup = Node(All('[', ThisGrammar, ']', Suffix), ([subgroup, suffix]) => ({
            type: 'complex',
            subgroup,
            ...suffix.reduce((a, b) => {
                a = {...a, ...b};
                return a;
            }, {})
        }));

        const FreeElement = Node(All(Element, Suffix), ([symbol, suffix]) => ({
            type: 'element',
            element: ConvertToAtomic(symbol),
            ...suffix.reduce((a, b) => {
                a = {...a, ...b};
                return a;
            }, {})
        }));

        return Node(Plus(Any(FreeElement, ParentheticalGroup, ComplexGroup)), stack => stack);
    });
};

const BasicParser = new Parser(BasicGrammar);

module.exports = (text) => BasicParser.parse(text);