const RecursiveCount = (parsed) => {
    let counts = {};

    for (let i in parsed) {
        if (parsed[i].type === 'element') {
            counts[parsed[i].element] = isNaN(counts[parsed[i].element])
                ? (parsed[i].count || 1)
                : (parsed[i].count || 1) * counts[parsed[i].element];
        } else if (parsed[i].type === 'subgroup' || parsed[i].type === 'complex') {
            let groupCount = RecursiveCount(parsed[i].children);
            for (let o in groupCount) {
                if (parsed[i].count) groupCount[o] *= parsed[i].count;
                counts[o] = isNaN(counts[o])
                    ? (groupCount[o] || 0)
                    : (groupCount[o] || 0) + counts[o];
            }
        }
    }

    return counts;
};

module.exports = RecursiveCount;