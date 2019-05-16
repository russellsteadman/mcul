const AtomicToSymbol = require('./../maps/atomicToSymbol.json');

const SymbolToAtomic = AtomicToSymbol.reduce((a, b, c) => {
    a[b] = Number(c) + 1;
    return a;
}, {});

module.exports = (symbol) => {
    if (SymbolToAtomic.hasOwnProperty(symbol)) return SymbolToAtomic[symbol];
    throw new Error(`Unable to resolve "${symbol}" to an atomic number.`);
};