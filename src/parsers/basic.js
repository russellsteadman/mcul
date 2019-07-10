const Parser = require('rd-parse');
const Y = require('./../shared/combinator');
const ConvertToAtomic = require('./../shared/convertToAtomic');

const BasicGrammar = function (Token, All, Any, Plus, Optional, Node) {
    const Molecule = this;

    return Y(function (ThisGrammar) {
        Token(/\s+/g, 'ignore');
        Token(/([()\][^_])/g, 'verbatim');

        const ElementToken = Token(/([A-Z][a-z]*)/g, 'element');
        const Count = Token(/([0-9]+)/g, 'count');
        const Charge = Token(/([+-]?[0-9]+)/g, 'charge');

        const ChargeNode = Node(
            All('^', Charge),
            (charge) => ((Number(charge) && Number(charge) !== 0) ? {charge: Number(charge)} : {}));
        
        const CountNode = Node(
            All(Count),
            (count) => ((Number(count) && Number(count) !== 1) ? {count: Number(count)} : {}));

        const Suffix = Node(Any(
            All(Optional('_'), CountNode, ChargeNode),
            All(ChargeNode, '_', CountNode),
            ChargeNode,
            All(Optional('_'), CountNode)
        ), (stack) => (stack || []));

        const ParentheticalGroup = Node(
            All('(', ThisGrammar, ')', Optional(Suffix)),
            ([subgroup, suffix]) => {
                let opts = {};
                suffix = suffix || [];
                for (let i in suffix) {
                    opts = {...opts, ...suffix[i]};
                }
                return Molecule.createSubgroup(subgroup, opts);
            }
        );

        const ComplexGroup = Node(
            All('[', ThisGrammar, ']', Optional(Suffix)),
            ([subgroup, suffix]) => {
                let opts = {
                    type: 'complex',
                };
                suffix = suffix || [];
                for (let i in suffix) {
                    opts = {...opts, ...suffix[i]};
                }
                return Molecule.createSubgroup(subgroup, opts);
            }
        );

        const FreeElement = Node(
            All(ElementToken, Optional(Suffix)),
            ([symbol, suffix]) => {
                let opts = {};
                suffix = suffix || [];
                for (let i in suffix) {
                    opts = {...opts, ...suffix[i]};
                }
                return Molecule.createElement(ConvertToAtomic(symbol), opts);
            }
        );

        return Node(Plus(Any(FreeElement, ParentheticalGroup, ComplexGroup)), stack => stack);
    });
};

module.exports = function (text) {
    return new Parser(BasicGrammar.bind(this)).parse(text);
};