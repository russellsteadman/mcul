let Types = {
    subgroup: [
        'subgroup',
        'complex',
        'chain',
        'fngroup',
    ],
    element: [
        'element',
    ],
};

Types.all = Types.subgroup.concat(Types.element);

module.exports = Types;