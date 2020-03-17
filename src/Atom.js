import AtomicToSymbol from './maps/atomicToSymbol';
import AtomicToName from './maps/atomicToName';
import AtomicToAMU from './maps/atomicToAMU';

const Atom = class {
    constructor(el, p, id) {
        this.s = {
            a: {
                el: el ? (typeof el === 'string' ? AtomicToSymbol.indexOf(el) + 1 : el) : 0,
            },
            p, // Parent molecule
            id, // Id of atom in molecule
        };

        this.type = 'atom';
    }

    set symbol (symbol) {
        this.atomic = AtomicToSymbol.indexOf(symbol) + 1;
    }

    set atomic (atomic) {
        this.s.a.el = atomic;

        if (this.s.p && this.s.id) {
            this.s.p.s.a[this.s.id] = {
                ...this.s.p.s.a[this.s.id],
                el: atomic,
            };
        }
    }

    set charge (charge) {
        if (typeof charge !== 'number') throw new Error('Charge must be an integer');
        this.s.a.c = charge || 0;

        if (this.s.p && this.s.id) {
            this.s.p.s.a[this.s.id] = {
                ...this.s.p.s.a[this.s.id],
                c: charge,
            };
        }
    }

    get charge () {
        return this.s.a.c || 0;
    }

    get symbol () {
        return AtomicToSymbol[this.s.a.el - 1] || '';
    }

    get name () {
        return AtomicToName[this.s.a.el - 1] || '';
    }

    get atomic () {
        return this.s.a.el;
    }

    get mass () {
        return AtomicToAMU[this.s.a.el - 1] || 0;
    }

    // Attach to a parent molecule
    in = (molecule) => {
        if (!molecule || molecule.type !== 'molecule') throw new Error('Must pass in a Molecule instance');
        
        this.s.p = molecule;
        this.s.id = molecule.s.i.toString(36);
        molecule.s.i += 1;
        molecule.s.a[this.s.id] = this.s.a;

        return this;
    };

    // Clone the atom without the context
    clone = () => {
        let atom = new Atom();
        atom.s.a = this.s.a;
        return atom;
    };
};

export default Atom;