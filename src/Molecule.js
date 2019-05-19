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
        members: [],
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

        /** Initialize state */
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

    findById = (id) => (FindById(id, this.#state.members));

    serialize = () => {
        let members = Array.prototype.slice.call(this.#state.members);

        for (let i in members) {
            if (typeof members[i].serialize === 'function') {
                members[i] = members[i].serialize();
            }
        }

        return {
            type: 'molecule',
            version: SCHEMA_VERSION,
            members,
            idIndex: this.#state.idIndex,
            ...(this.#state.rawText ? {fromText: this.#state.rawText} : {})
        };
    }

    createElement = (element, options) => (new Element(element, {
        ...options,
        parent: this,
        id: this.#createId()
    }));

    createSubgroup = (constituents, options) => (new Subgroup(constituents, {
        ...options,
        parent: this,
        id: this.#createId()
    }));

    get members() {
        return Array.prototype.slice.call(this.#state.members);
    }

    get mass() {
        let sum = 0;
        for (let i in this.#state.members) {
            sum += this.#state.members[i].mass;
        }
        return sum;
    }

    getCounts = () => (RecursiveCount(this.#state.members));
    getCount = (element) => (RecursiveCount(this.#state.members)[element] || 0);
    getElementFraction = (element) => (ElementFraction(this.#state.members, element));

    parse = () => {
        let { rawText, format } = this.#state;
        if (format === this.#formats[0]) {
            this.#state.members = Basic.call(this, rawText);
        } else if (format === this.#formats[1]) {
            this.#state.members = Iupac.call(this, rawText);
        } else if (typeof this.#state.options.parsers[format] === 'function') {
            this.#state.members = this.#state.options.parsers[format].call(this, rawText);
        } else {
            throw new Error(`Cannot parse type "${format}".`);
        }
    };
}

module.exports = Molecule;