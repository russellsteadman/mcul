const Molecule = require('./Molecule');

class Generator {
    #state = {
        parsers: {},
        defaultFormat: 'basic'
    }

    create = (options) => {
        return new Molecule({
            ...options,
            parsers: this.#state.parsers,
            parent: this
        });
    };
    
    createFromText = (rawText, format, options) => {
        if (!format) format = this.#state.defaultFormat;
        return new Molecule({
            ...options,
            parsers: this.#state.parsers,
            rawText,
            format,
            parent: this
        });
    };

    setDefaultFormat = (format) => {
        this.#state.defaultFormat = format;
    };
    
    addParser = (parser, format) => {
        if (typeof parser !== 'function' && typeof format !== 'string') {
            throw new Error('Parser and format must be specified.');
        }
        this.#state.parsers[format] = parser;
    };
}

module.exports = new Generator();