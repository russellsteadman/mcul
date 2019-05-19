const Molecule = require('./Molecule');
const Element = require('./Element');
const Subgroup = require('./Subgroup');

class Generator {
    #parsers = {};
    #defaultFormat = 'basic';

    create = (options) => {
        return new Molecule({
            ...options,
            parsers: this.#parsers
        });
    };
    
    createFromText = (rawText, format, options) => {
        if (!format) format = this.#defaultFormat;
        return new Molecule({
            ...options,
            parsers: this.#parsers,
            rawText,
            format
        });
    };

    createElement = (element) => (new Element(element));

    createSubgroup = (options, ...constituents) => (new Subgroup(constituents, options));

    setDefaultFormat = (format) => {
        this.#defaultFormat = format;
    };
    
    addParser = (parser, format) => {
        if (typeof parser !== 'function' && typeof format !== 'string') {
            throw new Error('Parser and format must be specified.');
        }
        this.#parsers[format] = parser;
    };
}

module.exports = new Generator();