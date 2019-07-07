const FindById = require('./shared/mol/findById');

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

    findById = (id) => (FindById(id, this.#state.children));

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
            } else if (['subgroup', 'complex', 'fngroup', 'chain'].indexOf(mol[i].type) !== -1) {
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
        let ids = {};
        for (let i in this.#state.children) {
            ids[this.#state.children[i].id] = this.#state.id;
            if (this.#state.children[i].childIds) {
                ids = {
                    ...ids,
                    ...this.#state.children[i].childIds,
                };
            }
        }
        return ids;
    }

    setType = (type) => {
        const types = ['subgroup', 'complex', 'fngroup', 'chain'];
        if (types.indexOf(type) !== -1) {
            this.#state.type = type;
        } else if (type) {
            throw new Error(`Invalid subgroup type: ${type}`);
        }
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
        let sum = 0;
        for (let i in this.#state.children) {
            sum += this.#state.children[i].mass;
        }
        return sum * this.#state.meta.count;
    }

    set = (key, value) => {
        if (key === 'count' && (isNaN(value) || !Number.isInteger(value) || value === 0)) return;
        if (key === 'charge' && (isNaN(value) || !Number.isInteger(value))) return;

        this.#state.meta = {
            ...this.#state.meta,
            [key]: value,
        };
    };

    append = (item) => {
        const types = ['element', 'subgroup', 'complex', 'chain', 'fngroup'];
        if (!item || types.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');
        this.#state.children.push(item);
    }

    get parent() {
        return this.#state.molecule.findById(this.#state.molecule.childIds[this.#state.id]);
    }
}

module.exports = Subgroup;