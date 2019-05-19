class Subgroup {
    #state = {
        members: [],
        type: 'subgroup',
        count: 1,
        charge: 0
    };

    constructor(constituents, {type, count, charge}) {
        this.setType(type);
        this.setCount(count);
        this.setCharge(charge);

        for (let i in constituents) {
            if (Array.isArray(constituents[i])) {
                this.#state.members = this.#state.members.concat(constituents[i]);
            } else {
                this.#state.members.push(constituents[i]);
            }
        }
    }

    serialize() {
        let members = Array.prototype.slice.call(this.#state.members);

        for (let i in members) {
            if (typeof members[i].serialize === 'function') {
                members[i] = members[i].serialize();
            }
        }

        return {
            type: this.#state.type,
            members,
            ...(this.#state.count !== 1 ? {count: this.#state.count} : {}),
            ...(this.#state.charge !== 0 ? {charge: this.#state.charge} : {})
        };
    }

    get type() {
        return this.#state.type;
    }

    get members() {
        return Array.prototype.slice.call(this.#state.members);
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
        for (let i in this.#state.members) {
            sum += this.#state.members[i].mass;
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
}

module.exports = Subgroup;