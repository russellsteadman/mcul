const Parser = require('rd-parse');

const Y = function (gen) {
    return (function(f) {return f(f)})(function(f) {
      return gen(function() {return f(f).apply(null, arguments)});
    });
};

const BasicGrammar = function (Token, All, Any, Plus, Optional, Node) {

    return (gen) => gen(function (ThisGrammar) {
        Token(/\s+/g, 'ignore');
        Token(/(\(\)])/g, 'verbatim');

        const Element = Token(/([A-Z][a-z]*)/g, 'element');
        const Text = (
        Token(/'([^']*)'/g, 'string'),
        Token(/"([^"]*)"/g, 'string')
        );

        const ElementGroup = Node(All('(', ThisGrammar, ')'), ([body]) => ({body}));

        const FreeElement = Node(Element, ([symbol]) => ({ type: 'element', symbol }));

        return Node(Plus(Any(Element, ElementGroup)), stack => stack);
    });
};

module.exports = (text) => {
    let p = new Parser(BasicGrammar);

    let ast = p.parse(text);

    return JSON.stringify(ast, null, 2);
};