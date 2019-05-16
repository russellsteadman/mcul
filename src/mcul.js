const Molecule = require('./Molecule');

class Generator {
    #parsers = {};
    #defaultFormat = 'basic';
    
    create = (rawText, format, options) => {
        if (!format) format = this.defaultFormat;
        return new Molecule(rawText, format, {
            ...options,
            parsers: this.parsers
        });
    };

    setDefaultFormat = (format) => {
        this.defaultFormat = format;
    };
    
    addParser = (parser, format) => {
        if (typeof parser !== 'function' && typeof format !== 'string') {
            throw new Error('Parser and format must be specified.');
        }
        this.parsers[format] = parser;
    };
}

module.exports = new Generator();