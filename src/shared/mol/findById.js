module.exports = (id, members) => {
    for (let i in members) {
        if (members[i].id === id) return members[i];
        if (typeof members[i].findById === 'function') {
            let subsearch = members[i].findById(id);
            if (subsearch) return subsearch;
        }
    }
    return null;
};