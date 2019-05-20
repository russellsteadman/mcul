const Basic = require('./parsers/basic');
const Iupac = require('./parsers/iupac');
const RecursiveCount = require('./shared/mol/recursiveCount');
const ElementFraction = require('./shared/mol/elementFraction');
const FindById = require('./shared/mol/findById');
const Element = require('./Element');
const Subgroup = require('./Subgroup');

const SCHEMA_VERSION = '0.1.0';

class Molecule {
    #formats = ['basic', 'iupac'];
    #state = {
        children: [],
        idIndex: 0
    };
    version = SCHEMA_VERSION;
    type = 'molecule';

    constructor({rawText, format, ...options}) {
        for (let i in options.parsers) {
            this.#formats.push(i);
        }

        const fromText = typeof rawText === 'string';

        if (fromText && this.#formats.indexOf(format) === -1) {
            throw new Error(`Text to parse and format must be specified.`);
        }

        this.#state = {
            ...this.#state,
            ...{
                rawText,
                format,
                options: {
                    ...{},
                    ...options
                }
            }
        };

        if (fromText) this.parse();
    }

    #createId = () => {
        this.#state.idIndex += 1;
        return this.#state.idIndex.toString(36);
    };

    findById = (id) => {
        if (id === false) return this;
        return FindById(id, this.#state.children);
    };

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
            ...(this.#state.rawText ? {fromText: this.#state.rawText} : {})
        };
    }

    createElement = (element, options) => (new Element(element, {
        ...options,
        molecule: this,
        id: this.#createId()
    }));

    createSubgroup = (constituents, options) => (new Subgroup(constituents, {
        ...options,
        molecule: this,
        id: this.#createId()
    }));

    append = (item) => {
        const types = ['element', 'subgroup', 'complex'];
        if (!item || types.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');
        this.#state.children.push(item);
    }

    get children() {
        return Array.prototype.slice.call(this.#state.children);
    }

    get mass() {
        let sum = 0;
        for (let i in this.#state.children) {
            sum += this.#state.children[i].mass;
        }
        return sum;
    }

    getCounts = () => (RecursiveCount(this.#state.children));
    getCount = (element) => (RecursiveCount(this.#state.children)[element] || 0);
    getElementFraction = (element) => (ElementFraction(this.#state.children, element));

    parse = () => {
        let { rawText, format } = this.#state;
        if (format === this.#formats[0]) {
            this.#state.children = Basic.call(this, rawText);
        } else if (format === this.#formats[1]) {
            this.#state.children = Iupac.call(this, rawText);
        } else if (typeof this.#state.options.parsers[format] === 'function') {
            this.#state.children = this.#state.options.parsers[format].call(this, rawText);
        } else {
            throw new Error(`Cannot parse type "${format}".`);
        }
    };

    get childIds() {
        let ids = {};
        for (let i in this.#state.children) {
            ids[this.#state.children[i].id] = false;
            if (this.#state.children[i].childIds) {
                ids = {
                    ...ids,
                    ...this.#state.children[i].childIds
                };
            }
        }
        return ids;
    }
}

module.exports = Molecule;