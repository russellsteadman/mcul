const Basic = require('./parsers/basic');

class Molecule {
    constructor(options) {        
        this.state = {};
        this.options = {
            ...options,
            ...{
                a: 1
            }
        };
    }

    parse = (text, type) => {
        if (type === 'basic') {
            Basic(text);
        }
    };
}

module.exports = function MoleculeGenerator (options) {
    return new Molecule(options);
};