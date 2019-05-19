const AtomicToSymbol = require('./maps/atomicToSymbol.json');
const AtomicToName = require('./maps/atomicToName.json');
const AtomicToAMU = require('./maps/atomicToAMU.json');

class Element {
    #state = {
        el: 1,
        count: 1,
        charge: 0
    };

    constructor(atomicNumber, {count, charge}) {
        this.#state.el = Number(atomicNumber);
        this.setCount(count);
        this.setCharge(charge);
    }

    serialize = () => {
        return {
            type: 'element',
            element: this.#state.el,
            ...(this.#state.count !== 1 ? {count: this.#state.count} : {}),
            ...(this.#state.charge !== 0 ? {charge: this.#state.charge} : {})
        };
    };

    type = 'element';

    get element() {
        return this.#state.el;
    }

    get symbol() {
        return AtomicToSymbol[this.#state.el - 1];
    }

    get name() {
        return AtomicToName[this.#state.el - 1];
    }

    get mass() {
        return AtomicToAMU[this.#state.el - 1] * this.#state.count;
    }

    get count() {
        return this.#state.count;
    }

    get charge() {
        return this.#state.charge;
    }

    setCount = (count) => {
        if (isNaN(count) || !Number.isInteger(count) || count === 0) return;
        this.#state.count = count;
    };

    setCharge = (charge) => {
        if (isNaN(charge) || !Number.isInteger(charge)) return;
        this.#state.charge = charge;
    };
}

module.exports = Element;