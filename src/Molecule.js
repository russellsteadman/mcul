import AtomicToAMU from './maps/atomicToAMU';
import AtomicToSymbol from './maps/atomicToSymbol';
import Atom from './Atom';
import Add from './ext/Add';

const SCHEMA_VERSION = 1;

const Molecule = class {
    constructor() {
        this.s = {
            a: {}, // Atoms mapped "id" -> information
            b: {}, // Bonds mapped "id-id" -> information
            i: 0, // Index, beginning at 0
        };

        this.type = 'molecule';

        this.add = Add.bind(this);
    }

    // Create a new atom
    createAtom = (el) => {
        let id = this.s.i.toString(36);
        this.s.i += 1;

        let atom = new Atom(el, this, id);
        this.s.a[id] = atom.s.a;

        return atom;
    };

    createAtoms = (el, count) => {
        let atoms = [];
        if (typeof count !== 'number' || count < 1) throw new Error('Count must be a positive number');

        for (let i = 0; i < count; i++) {
            let id = this.s.i.toString(36);
            this.s.i += 1;

            atoms.push(new Atom(el, this, id));
            this.s.a[id] = atoms[i].s.a;
        }

        return atoms;
    };

    // Attach a subcomponent
    contains = (atom) => {
        if (atom && atom.type === 'atom') {
            return atom.in(this);
        } else {
            throw new Error('Must pass an atom');
        }
    };

    // Get information on an atom
    getAtomById = (id) => {
        if (id && id.type === 'atom') return id;
        let atom = new Atom(null, this, id);
        atom.s.a = this.s.a[id] || {};
        return atom;
    };

    // Get atom id
    getAtomId = (atom) => {
        if (typeof atom === 'string') return atom;
        atom = (atom && atom.s) && atom.s.id;
        if (typeof atom !== 'string') throw new Error('Not an atom');
        return atom;
    };

    // Get atoms by elements
    getAtomsByElement = (el) => {
        el = el ? (typeof el === 'string' ? AtomicToSymbol.indexOf(el) + 1 : el) : 0;

        let atoms = [];
        for (let id in this.s.a) {
            if (this.s.a[id].el !== el) continue;
            atoms.push(this.getAtomById(id));
        }

        return atoms;
    };

    // Get atoms bonded to an atom
    getBondedAtoms = (atom) => {
        let id = this.getAtomId(atom);

        let atoms = [];
        for (let i in this.s.b) {
            if (i.split('-')[0] !== id) continue;
            atoms.push(this.getAtomById(i.split('-')[1]));
        }

        return atoms;
    };

    // Get atoms bonded to an atom
    getBondCount = (atom) => {
        let id = this.getAtomId(atom);
        let count = 0;
        let bond;

        for (let i in this.s.b) {
            bond = this.s.b[i];
            if (!bond) bond = this.s.b[`${i.split('-')[1]}-${i.split('-')[0]}`];
            if (i.split('-')[0] === id) count += (bond.count || 1);
        }

        return count;
    };

    // Get atoms bonded to an atom
    getBranchPaths = (atom, priorId, originalId) => {
        let id = this.getAtomId(atom);

        let linearPrefix = priorId ? `-${id}` : id;
        let branchLines = [];
        let pathEnd = true;

        // Checking for originalId prevents looping for cyclic structures
        if (id !== originalId) {
            if (!originalId) originalId = id;

            for (let i in this.s.b) {
                if (i.split('-')[0] !== id || i.split('-')[1] === priorId) continue;

                pathEnd = false;
                branchLines = this.getBranchPaths(i.split('-')[1], id, originalId).concat(branchLines);
            }
        }

        if (pathEnd) {
            // This is the end of a path, so create a new branch
            branchLines.push(linearPrefix);
        } else {
            // Add to all paths as a part in the change
            for (let i in branchLines) {
                branchLines[i] = linearPrefix + branchLines[i];
            }
        }

        return branchLines;
    };

    // Bond two atoms
    bond = (atomOne, atomTwo, options) => {
        let idOne = this.getAtomId(atomOne);
        let idTwo = this.getAtomId(atomTwo);

        this.s.b[`${idOne}-${idTwo}`] = {
            type: 'c', // One of: c (Covalent), i (Ionic), m (Metallic)
            count: 1, // Combined sigma / pi bonding count for covalent
            ...options,
        };

        this.s.b[`${idTwo}-${idOne}`] = null;

        return this;
    };

    // Modify bonds
    modifyBond = (atomOne, atomTwo, changes) => {
        let idOne = this.getAtomId(atomOne);
        let idTwo = this.getAtomId(atomTwo);
        let bond = this.s.b[`${idOne}-${idTwo}`];

        if (typeof bond === 'object' && bond) {
            this.s.b[`${idOne}-${idTwo}`] = {
                ...this.s.b[`${idOne}-${idTwo}`],
                ...changes,
            };
        } else if (typeof bond === 'object' && !bond) {
            this.s.b[`${idTwo}-${idOne}`] = {
                ...this.s.b[`${idTwo}-${idOne}`],
                ...changes,
            };
        } else {
            throw new Error('Unable to modify bond, does not exist');
        }
    };

    // Get a bond
    getBond = (atomOne, atomTwo) => {
        let idOne = this.getAtomId(atomOne);
        let idTwo = this.getAtomId(atomTwo);
        let bond = this.s.b[`${idOne}-${idTwo}`];

        if (typeof bond === 'object' && bond) {
            return bond;
        } else if (typeof bond === 'object' && !bond) {
            return this.s.b[`${idTwo}-${idOne}`];
        } else {
            return null;
        }
    };

    // Serialize molecule data to a string
    pack = () => {
        return JSON.stringify({
            v: SCHEMA_VERSION,
            s: this.s,
        });
    };

    // Unserialize molecule data from a string
    unpack = (packed) => {
        try {
            let pack = JSON.parse(packed);
            if (pack.v > SCHEMA_VERSION) throw new Error('Upgrade mcul to use newer package schema');
            this.s = pack.s;
        } catch (e) {
            throw new Error('Unable to parse packed data');
        }

        return this;
    };

    // Generate a chain of carbons (simplifies many organic compounds)
    chainCarbons = (count, bondCount) => {
        if (!bondCount) bondCount = 1;
        if ((bondCount < 1 && bondCount > 3) || (bondCount === 3 && count > 2)) {
            throw new Error('Chain must have a possible number of bonds');
        }

        let carbons = this.createAtoms('C', count);

        for (let i = 1; i < count; i++) {
            this.bond(carbons[i - 1], carbons[i], {count: bondCount});
        }

        return carbons;
    };

    // Hydrogenate one carbon
    hydrogenateCarbon = (carbon) => {
        let bondCount = this.getBondCount(carbon);
            
        for (let o = bondCount; o < 4; o++) {
            let hydrogen = this.createAtom('H');
            this.bond(carbon, hydrogen);
        }

        return this;
    };

    // Hydrogenate all carbons (simplifies many organic compounds)
    hydrogenateCarbons = () => {
        let carbons = this.getAtomsByElement('C');
        
        for (let i in carbons) {
            let bondCount = this.getBondCount(carbons[i]);
            
            for (let o = bondCount; o < 4; o++) {
                let hydrogen = this.createAtom('H');
                this.bond(carbons[i], hydrogen);
            }
        }

        return this;
    };

    // Create a new, identical molecule.
    clone = () => {
        let double = new Molecule();
        double.s = JSON.parse(JSON.stringify(this.s));
        return double;
    };

    get mass () {
        let mass = 0;
        for (let i in this.s.a) {
            mass += AtomicToAMU[this.s.a[i].el - 1] || 0;
        }
        return Math.round(mass * 1000) / 1000;
    }

    get atomCounts () {
        let counts = {};
        let countsSymbol = {};

        for (let i in this.s.a) {
            counts[this.s.a[i].el] = counts[this.s.a[i].el] || 0;
            counts[this.s.a[i].el]++;
        }
        
        for (let i in counts) countsSymbol[AtomicToSymbol[Number(i) - 1]] = counts[i];

        return {symbol: countsSymbol, atomic: counts};
    }

    get moleFraction () {
        let counts = {};
        let countsSymbol = {};
        let total = 0;

        for (let i in this.s.a) {
            counts[this.s.a[i].el] = counts[this.s.a[i].el] || 0;
            counts[this.s.a[i].el]++;
            total++;
        }

        for (let i in counts) {
            counts[i] /= total;
            counts[i] = Math.round(counts[i] * 10000) / 10000;
            countsSymbol[AtomicToSymbol[Number(i) - 1]] = counts[i];
        }

        return {symbol: countsSymbol, atomic: counts};
    }

    get massFraction () {
        let counts = {};
        let countsSymbol = {};
        let total = 0;

        for (let i in this.s.a) {
            counts[this.s.a[i].el] = counts[this.s.a[i].el] || 0;
            counts[this.s.a[i].el] += AtomicToAMU[this.s.a[i].el - 1];
            total += AtomicToAMU[this.s.a[i].el - 1];
        }

        for (let i in counts) {
            counts[i] /= total;
            counts[i] = Math.round(counts[i] * 10000) / 10000;
            countsSymbol[AtomicToSymbol[Number(i) - 1]] = counts[i];
        }

        return {symbol: countsSymbol, atomic: counts};
    }
};

export default Molecule;