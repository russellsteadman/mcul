const RecursiveCount = require('./recursiveCount');

const Fraction = (parsed, element) => {
    let counts = RecursiveCount(parsed);
    let sum = 0;

    for (let i in counts) {
        sum += counts[i] || 0;
    }

    return (counts[element] || 0) / sum;
};

module.exports = Fraction;