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

const appendAll = function (items) {
    for (let i in items) {
        append.call(this, items[i]);
    }
};

const findById = function (self, id) {
    if (id === false) return self;
    const childIds = getChildIds.call(this);
    return childIds[id] || null;
};

const getChildIds = function () {
    let ids = {};
    for (let i in this.children) {
        ids[this.children[i].id] = this.children[i];
        if (this.children[i].childIds) {
            ids = {
                ...ids,
                ...this.children[i].childIds,
            };
        }
    }
    return ids;
};

const getParent = function () {
    const { childIds } = this.molecule;
    for (let i in childIds) {
        if (childIds[i].children) {
            for (let o in childIds[i].children) {
                if (childIds[i].children[o].id === this.id) {
                    return childIds[i];
                }
            }
        }
    }
    return this.molecule;
}

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
    appendAll,
    findById,
    getChildIds,
    getParent,
    getElementFraction,
    getMassFraction,
};