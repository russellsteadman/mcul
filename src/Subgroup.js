const Collection = require('./shared/Collection');
const Types = require('./shared/types');

class Subgroup {
    #state = {
        children: [],
        type: 'subgroup',
        id: '',
        meta: {
            count: 1,
            charge: 0,
        },
    };

    constructor(children, {type, count, charge, id, molecule, ...meta}) {
        this.setType(type);
        this.#state.id = id;
        this.#state.molecule = molecule;

        this.set('count', count);
        this.set('charge', charge);
        for (let i in meta) this.set(i, meta[i]);

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

    findById = Collection.findById.bind(this.#state, this);

    serialize = () => {
        let children = Array.prototype.slice.call(this.#state.children);
        let meta = {...this.#state.meta};

        for (let i in children) {
            if (typeof children[i].serialize === 'function') {
                children[i] = children[i].serialize();
            }
        }

        if (meta.charge === 0) delete meta.charge;
        if (meta.count === 1) delete meta.count;

        return {
            type: this.#state.type,
            children,
            id: this.#state.id,
            ...(Object.keys(meta).length === 0 ? {} : meta),
        };
    };

    unserialize = (mol) => {
        for (let i in mol) {
            if (mol[i].type === 'element') {
                let elProps = {...mol[i]};
                delete elProps.type;
                delete elProps.element;
                let el = this.#state.molecule.createElement(mol[i].element, elProps); //test
                this.append(el);
            } else if (Types.subgroup.indexOf(mol[i].type) !== -1) {
                let groupProps = {...mol[i]};
                delete groupProps.children;
                delete groupProps.type;
                let group = this.#state.molecule.createSubgroup([], groupProps);
                group.unserialize(mol[i].children || []);
                this.append(group);
            }
        }
    };

    get type() {
        return this.#state.type;
    }

    get children() {
        return Array.prototype.slice.call(this.#state.children);
    }

    get childIds() {
        return Collection.getChildIds.call(this.#state);
    }

    setType = (type) => {
        if (Types.subgroup.indexOf(type) !== -1) {
            this.#state.type = type;
        } else if (type) {
            throw new Error(`Invalid subgroup type: ${type}`);
        }
    }

    get counts() {
        return Collection.getCounts.call(this.#state);
    }

    get count() {
        return this.#state.meta.count;
    }

    get charge() {
        return this.#state.meta.charge;
    }

    get functionalGroup() {
        return this.#state.meta.fn;
    }

    get mass() {
        return Collection.getMass.call(this.#state);
    }

    set = (key, value) => {
        if (key === 'count' && (isNaN(value) || !Number.isInteger(value) || value === 0)) return;
        if (key === 'charge' && (isNaN(value) || !Number.isInteger(value))) return;

        this.#state.meta = {
            ...this.#state.meta,
            [key]: value,
        };
    };

    append = Collection.append.bind(this.#state);

    get parent() {
        return this.#state.molecule.findById(this.#state.molecule.childIds[this.#state.id]);
    }
}

module.exports = Subgroup;