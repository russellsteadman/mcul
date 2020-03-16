import AtomicToAMU from './maps/atomicToAMU';
import AtomicToSymbol from './maps/atomicToSymbol';
import Atom from './Atom';

const SCHEMA_VERSION = 1;

const Molecule = class {
    constructor() {
        this.s = {
            a: {}, // Atoms mapped "id" -> information
            b: {}, // Bonds mapped "id-id" -> information
            i: 0, // Index, beginning at 0
        };

        this.type = 'molecule';
    }

    // Create a new atom
    createAtom = (el) => {
        let id = this.s.i.toString(36);
        this.s.i += 1;

        let atom = new Atom(el, this, id);
        this.s.a[id] = atom.s.a;

        return atom;
    };

    // Attach a subcomponent
    contains = (component) => {
        if (component) {
            if (component.type === 'molecule') {
                let index = this.s.i;

                for (let i in component.s.a) {
                    let id = (parseInt(i, 36) + index).toString(36);
                    this.s.i += 1;
                    this.s.a[id] = component.s.a[i];
                }

                for (let i in component.s.b) {
                    if (!component.s.b) continue;
                    let [idOne, idTwo] = i.split('-');
                    idOne = (parseInt(idOne, 36) + index).toString(36);
                    idTwo = (parseInt(idTwo, 36) + index).toString(36);
                    this.s.b[`${idOne}-${idTwo}`] = component.s.b[i];
                    this.s.b[`${idTwo}-${idOne}`] = null;
                }

                delete component.s;
                component.s = this.s;

                return this;
            } else if (component.type === 'atom') {
                return component.in(this);
            } else {
                throw new Error('Must pass an molecule or atom');
            }
        } else {
            throw new Error('Must pass a component');
        }
    };

    // Attach to a parent molecule
    in = (molecule) => {
        if (!molecule || molecule.type !== 'molecule') throw new Error('Must pass in a Molecule instance');
        return molecule.contains(this);
    };

    // Get information on an atom
    getAtomById = (id) => {
        let atom = new Atom(null, this, id);
        atom.s.a = this.s.a[id] || {};
        return atom;
    };

    // Get atoms by elements
    getAtomsByElement = (el) => {
        el = el ? (typeof el === 'string' ? AtomicToSymbol.indexOf(el) + 1 : el) : 0;

        let atoms = [];
        for (let id in this.s.a) {
            if (this.s.a[id].el !== el) continue;
            let atom = new Atom(null, this, id);
            atom.s.a = this.s.a[id] || {};
            atoms.push(atom);
        }

        return atoms;
    };

    // Get atoms bonded to an atom
    getBondedAtoms = (atom) => {
        let id = (atom && atom.s) && atom.s.id;

        let atoms = [];
        for (let i in this.s.b) {
            if (i.split('-')[0] !== id) continue;

            let atom = new Atom(null, this, i.split('-')[1]);
            atom.s.a = this.s.a[i.split('-')[1]] || {};
            atoms.push(atom);
        }

        return atoms;
    };

    // Get atoms bonded to an atom
    getBranchPaths = (atom, priorId, originalId) => {
        let id = ((atom && atom.s) && atom.s.id) || atom;

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
        let idOne = (atomOne && atomOne.s) && atomOne.s.id;
        let idTwo = (atomTwo && atomTwo.s) && atomTwo.s.id;

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
        let idOne = (atomOne && atomOne.s) && atomOne.s.id;
        let idTwo = (atomTwo && atomTwo.s) && atomTwo.s.id;
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
        let idOne = (atomOne && atomOne.s) && atomOne.s.id;
        let idTwo = (atomTwo && atomTwo.s) && atomTwo.s.id;
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
};

export default Molecule;