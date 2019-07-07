const Types = require('./types');
const AtomicToAMU = require('./../maps/atomicToAMU.json');

const getCounts = function () {
    let counts = {};

    for (let i in this.children) {
        if (this.children[i].type === Types.element[0]) {
            counts[this.children[i].element] = counts[this.children[i].element] || 0;
            counts[this.children[i].element] += this.children[i].count || 1;
        } else {
            let groupCount = this.children[i].counts;
            for (let o in groupCount) {
                if (this.children[i].count) groupCount[o] *= this.children[i].count;
                counts[o] = (groupCount[o] || 0) + (counts[o] || 0);
            }
        }
    }

    return counts;
};

const getMass = function () {
    const counts = getCounts.call(this); 
    let sum = 0;
    for (let i in counts) {
        sum += AtomicToAMU[Number(i) - 1] * counts[i];
    }
    return this.type === 'molecule' ? Math.round(sum * 1000) / 1000 : sum;
};

const append = function (item) {
    if (!item || Types.all.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');
    this.children.push(item);
};

const findById = function (self, id) {
    if (id === false) return self;
    const members = this.children;
    for (let i in members) {
        if (members[i].id === id) return members[i];
        if (typeof members[i].findById === 'function') {
            let subsearch = members[i].findById(id);
            if (subsearch) return subsearch;
        }
    }
    return null;
};

const getChildIds = function () {
    let ids = {};
    for (let i in this.children) {
        ids[this.children[i].id] = false;
        if (this.children[i].childIds) {
            ids = {
                ...ids,
                ...this.children[i].childIds,
            };
        }
    }
    return ids;
};

const getElementFraction = function (element) {
    const counts = getCounts.call(this);
    let sum = 0;

    for (let i in counts) {
        sum += counts[i] || 0;
    }

    return (counts[element] || 0) / sum;
};

const getMassFraction = function (element) {
    const counts = getCounts.call(this);
    const mass = getMass.call(this);
    ((counts[element] || 0) * AtomicToAMU[Number(element) - 1]) / mass;
};

module.exports = {
    getCounts,
    getMass,
    append,
    findById,
    getChildIds,
    getElementFraction,
    getMassFraction,
};