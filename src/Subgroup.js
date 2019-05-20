const FindById = require('./shared/mol/findById');

class Subgroup {
    #state = {
        children: [],
        type: 'subgroup',
        count: 1,
        charge: 0,
        id: ''
    };

    constructor(children, {type, count, charge, id}) {
        this.setType(type);
        this.setCount(count);
        this.setCharge(charge);
        this.#state.id = id;

        for (let i in children) {
            if (Array.isArray(children[i])) {
                this.#state.children = this.#state.children.concat(children[i]);
            } else {
                this.#state.children.push(children[i]);
            }
        }
    }

    get id() {
        return this.#state.id;
    }

    findById = (id) => (FindById(id, this.#state.children));

    serialize = () => {
        let children = Array.prototype.slice.call(this.#state.children);

        for (let i in children) {
            if (typeof children[i].serialize === 'function') {
                children[i] = children[i].serialize();
            }
        }

        return {
            type: this.#state.type,
            children,
            id: this.#state.id,
            ...(this.#state.count !== 1 ? {count: this.#state.count} : {}),
            ...(this.#state.charge !== 0 ? {charge: this.#state.charge} : {})
        };
    };

    get type() {
        return this.#state.type;
    }

    get children() {
        return Array.prototype.slice.call(this.#state.children);
    }

    get childIds() {
        let ids = {};
        for (let i in this.#state.children) {
            ids[this.#state.children[i].id] = this.#state.id;
            if (this.#state.children[i].childIds) {
                ids = {
                    ...ids,
                    ...this.#state.children[i].childIds
                };
            }
        }
        return ids;
    }

    setType = (type) => {
        const types = ['subgroup', 'complex'];
        if (types.indexOf(type) !== -1) {
            this.#state.type = type;
        } else if (type) {
            throw new Error(`Invalid subgroup type: ${type}`);
        }
    }

    get count() {
        return this.#state.count;
    }

    get charge() {
        return this.#state.charge;
    }

    get mass() {
        let sum = 0;
        for (let i in this.#state.children) {
            sum += this.#state.children[i].mass;
        }
        return sum * this.#state.count;
    }

    setCount = (count) => {
        if (isNaN(count) || !Number.isInteger(count) || count === 0) return;
        this.#state.count = count;
    };

    setCharge = (charge) => {
        if (isNaN(charge) || !Number.isInteger(charge)) return;
        this.#state.charge = charge;
    };

    append = (item) => {
        const types = ['element', 'subgroup', 'complex'];
        if (!item || types.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');
        this.#state.children.push(item);
        item.setParent(this);
    }

    get parent() {
        return this.#state.molecule.findById(this.#state.molecule.childIds[this.#state.id]);
    }
}

module.exports = Subgroup;