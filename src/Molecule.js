const Basic = require('./parsers/basic');
const Iupac = require('./parsers/iupac');

class Molecule {
    constructor(rawText, format, options) {
        if (typeof rawText !== 'string' || this.formats.indexOf(format) === -1) {
            throw new Error(`Text to parse and format must be specified.`);
        }

        /** Initialize state */
        this.state = {
            rawText,
            format,
            options: {
                ...{
                    a: 1
                },
                ...options
            }
        };

        this.parse();
    }

    #formats = ['basic', 'iupac'];

    /** Private state updater */
    #setState = (newState) => {
        this.state = {
            ...this.state,
            ...newState
        };
    };

    parse = () => {
        let { rawText, format } = this.state;
        if (format === this.formats[0]) {
            this.setState({
                parsed: Basic(rawText)
            });
        } else if (format === this.formats[1]) {
            this.setState({
                parsed: Iupac(rawText)
            });
        } else if (typeof this.state.options.parsers[format] === 'function') {
            this.setState({
                parsed: this.state.options.parsers[format](rawText)
            });
        } else {
            throw new Error(`Cannot parse type "${format}".`);
        }
    };
}

module.exports = Molecule;