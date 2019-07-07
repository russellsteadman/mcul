const Basic = require('./parsers/basic');
const Iupac = require('./parsers/iupac');
const Element = require('./Element');
const Subgroup = require('./Subgroup');
const Collection = require('./shared/Collection');
const Types = require('./shared/types');

const SCHEMA_VERSION = '0.1.0';

class Molecule {
    #state = {
        type: 'molecule',
        children: [],
        idIndex: 0,
        formats: ['basic', 'iupac'],
    };

    constructor({rawText, format, parent, ...options}) {
        for (let i in options.parsers) {
            this.#state.formats.push(i);
        }

        const fromText = typeof rawText === 'string';

        if (fromText && this.#state.formats.indexOf(format) === -1) {
            throw new Error(`Text to parse and format must be specified.`);
        }

        this.#state = {
            ...this.#state,
            ...{
                rawText,
                format,
                parent,
                options: {
                    ...{},
                    ...options,
                },
            },
        };

        if (fromText) this.parse();
    }

    #createId = () => {
        this.#state.idIndex += 1;
        return this.#state.idIndex.toString(36);
    };

    findById = Collection.findById.bind(this.#state, this);

    serialize = () => {
        let children = Array.prototype.slice.call(this.#state.children);

        for (let i in children) {
            if (typeof children[i].serialize === 'function') {
                children[i] = children[i].serialize();
            }
        }

        return {
            type: 'molecule',
            version: SCHEMA_VERSION,
            children,
            idIndex: this.#state.idIndex,
            ...(this.#state.rawText ? {fromText: this.#state.rawText} : {}),
        };
    };

    unserialize = (mol) => {
        if (mol.version.split('.')[0] !== SCHEMA_VERSION.split('.')[0]) throw new Error('Incompatible version');

        this.#state.idIndex = mol.idIndex;
        this.#state.rawText = mol.fromText;

        for (let i in mol.children) {
            if (mol.children[i].type === Types.element[0]) {
                let elProps = {...mol.children[i]};
                delete elProps.type;
                delete elProps.element;
                let el = this.createElement(mol.children[i].element, elProps);
                this.append(el);
            } else if (Types.subgroup.indexOf(mol.children[i].type) !== -1) {
                let groupProps = {...mol.children[i]};
                delete groupProps.children;
                delete groupProps.type;
                let group = this.createSubgroup([], groupProps);
                group.unserialize(mol.children[i].children || []);
                this.append(group);
            }
        }
    };

    createElement = (element, options) => (new Element(element, {
        ...options,
        molecule: this,
        id: this.#createId(),
    }));

    createSubgroup = (constituents, options) => (new Subgroup(constituents, {
        ...options,
        molecule: this,
        id: this.#createId(),
    }));

    append = Collection.append.bind(this.#state);

    get children() {
        return Array.prototype.slice.call(this.#state.children);
    }

    get type() {
        return this.#state.type;
    }

    get version() {
        return SCHEMA_VERSION;
    }

    get mass() {
        return Collection.getMass.call(this.#state);
    }

    get counts() {
        return Collection.getCounts.call(this.#state);
    }

    get childIds() {
        return Collection.getChildIds.call(this.#state);
    }

    getElementFraction = Collection.getElementFraction.bind(this.#state);
    getMassFraction = Collection.getMassFraction.bind(this.#state);

    parse = () => {
        let { rawText, format } = this.#state;
        if (format === this.#state.formats[0]) {
            this.#state.children = Basic.call(this, rawText);
        } else if (format === this.#state.formats[1]) {
            this.#state.children = Iupac.call(this, rawText);
        } else if (typeof this.#state.options.parsers[format] === 'function') {
            this.#state.children = this.#state.options.parsers[format].call(this, rawText);
        } else {
            throw new Error(`Cannot parse type "${format}".`);
        }
    };
}

module.exports = Molecule;