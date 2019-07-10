const AtomicToSymbol = require('./../maps/atomicToSymbol.json');

const SymbolToAtomic = {};

for (let i in AtomicToSymbol) {
    SymbolToAtomic[AtomicToSymbol[i]] = Number(i) + 1;
}

module.exports = (symbol) => {
    if (SymbolToAtomic.hasOwnProperty(symbol)) return SymbolToAtomic[symbol];
    throw new Error(`Unable to resolve "${symbol}" to an atomic number.`);
};