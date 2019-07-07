const AtomicToSymbol = require('./maps/atomicToSymbol.json');
const AtomicToName = require('./maps/atomicToName.json');
const AtomicToAMU = require('./maps/atomicToAMU.json');

class Element {
    #state = {
        el: 1,
        id: '',
        molecule: null,
        meta: {
            count: 1,
            charge: 0,
        },
    };

    constructor(atomicNumber, {count, charge, id, molecule, ...meta}) {
        this.#state.el = Number(atomicNumber);
        this.set('count', count);
        this.set('charge', charge);
        this.#state.id = id;
        this.#state.molecule = molecule;
        this.#state.meta = {
            ...this.#state.meta,
            ...meta,
        };
    }

    serialize = () => {
        let meta = {...this.#state.meta};
        if (meta.charge === 0) delete meta.charge;
        if (meta.count === 1) delete meta.count;

        return {
            type: 'element',
            element: this.#state.el,
            id: this.#state.id,
            ...(Object.keys(meta).length === 0 ? {} : meta),
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
        return AtomicToAMU[this.#state.el - 1] * this.#state.meta.count;
    }

    get count() {
        return this.#state.meta.count;
    }

    get charge() {
        return this.#state.meta.charge;
    }

    set = (key, value) => {
        if (key === 'count' && (isNaN(value) || !Number.isInteger(value) || value === 0)) return;
        if (key === 'charge' && (isNaN(value) || !Number.isInteger(value))) return;

        this.#state.meta = {
            ...this.#state.meta,
            [key]: value,
        };
    };

    get parent() {
        return this.#state.molecule.findById(this.#state.molecule.childIds[this.#state.id]);
    }

    get id() {
        return this.#state.id;
    }
}

module.exports = Element;