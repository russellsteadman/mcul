const pkg = require('../package.json');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob-all');

const options = {
    version: pkg.version,
    year: new Date().getFullYear(),
    notice: '<!-- WARNING: Edit this file in /docs-template -->',
};

const files = glob.sync([
    'docs-template/**/*.*',
    'docs-template/LICENSE',
]);

for (let i in files) {
    let file = handlebars.compile(fs.readFileSync(path.resolve(files[i])).toString('utf8'), {noEscape: true});
    let writePath = path.resolve(files[i].replace('docs-template/', ''));
    fs.ensureFileSync(writePath);
    fs.writeFileSync(writePath, file(options));   
}

console.log('\nDocs compilation successful.\n');