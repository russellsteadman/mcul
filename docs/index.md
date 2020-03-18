---
redirect_from:
  - /doc/
---

<!-- WARNING: Edit this file in /docs-template -->

# MCUL

MCUL simplifies the logic behind organizing atoms into molecules.

<a href="https://www.npmjs.com/package/mcul"><img alt="npm downloads" src="https://img.shields.io/npm/dt/mcul?label=NPM%20downloads&style=flat-square"></a>
<img src="https://img.shields.io/bundlephobia/minzip/mcul?style=flat-square" alt="package size" />
<a href="https://www.patreon.com/russellsteadman" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-red.svg?style=flat-square" alt="Patreon donate button" /></a>

## Installation

MCUL can be used in Node.js or with webpack, browserify, etc. Add using NPM or Yarn.
```sh
npm i mcul
yarn add mcul
```

MCUL can also be used over CDN. In this case, mcul loads as `window.mcul`.
```html
<script src="https://cdn.jsdelivr.net/npm/mcul@0.1.0-alpha3/dist/mcul.js"></script>
```

### Custom Installation

To make changes to the code, clone it and install the development dependencies.
```sh
git clone https://github.com/teamtofu/mcul.git
cd mcul
yarn install # or npm install
```

After the changes, run `yarn build` or `npm run build` to build the code. Use `dist/mcul.js` **ONLY** if you plan to load in the code as a script on a website. For Node.js and packagers like webpack or Rollup, use `dist/mcul.node.js`.


## Example

<div data-example>const { Molecule, Atom } = require('mcul');

// Generate new Molecule instance
let ethanol = new Molecule();

// Use Molecule.createAtoms to create an array of atoms
let hydrogen = ethanol.createAtoms('H', 6);

// You can also create individual atoms and link them to the mo
let carbon = [new Atom('C').in(ethanol), ethanol.contains(new Atom('C'))];
let oxygen = ethanol.createAtom('O');

ethanol
    .bond(carbon[0], carbon[1])
    .bond(carbon[0], hydrogen[0])
    .bond(carbon[0], hydrogen[1])
    .bond(carbon[0], hydrogen[2])
    .bond(carbon[1], hydrogen[3])
    .bond(carbon[1], hydrogen[4])
    .bond(carbon[1], oxygen)
    .bond(oxygen, hydrogen[5]);

// Get the mass of the ethanol
console.log(ethanol.mass);

// Get all possible connected paths to an atom
console.log(ethanol.getBranchPaths(carbon[0]));

// Get all bonded atoms
console.log(ethanol.getBondedAtoms(carbon[1]).map((atom) => atom.name));</div>

### Molecule Methods

| Name                         | Returns          |
| ---------------------------- | ---------------- |
| createFromText(text, format) | MoleculeInstance |
| create()                     | MoleculeInstance |
| setDefaultFormat(format)     | None             |
| addParser(parser, format)    | None             |

### MoleculeInstance Methods

| Name                            | Returns                                |
| ------------------------------- | -------------------------------------- |
| serialize()                     | serializedObject                       |
| unserialize(serializedObject)   | None                                   |
| findById(id)                    | Element, Subgroup, or MoleculeInstance |
| createElement(element, options) | Element                                |
| addParser(parser, format)       | None                                   |

## Data Sources

| Data                  | Source |
| --------------------- | ------ |
| Average Atomic Masses | [PubChem](https://pubchem.ncbi.nlm.nih.gov/periodic-table/#view=list) |

## License

<a href="https://patreon.com/russellsteadman" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-red.svg?style=flat-square" alt="Patreon donate button" /></a>

Copyright &copy; 2020 [Russell Steadman](https://www.russellsteadman.com/?utm_source=mcul&utm_medium=copyright). Licensed under an MIT License (see the LICENSE file for terms).