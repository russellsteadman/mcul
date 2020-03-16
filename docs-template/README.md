{{notice}}

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
<script src="https://cdn.jsdelivr.net/npm/mcul@{{version}}/dist/mcul.js"></script>
```

## Example

Try it out for yourself [in the browser](https://npm.runkit.com/mcul).

```js
import { Molecule, Atom } from 'mcul';

let ethanol = new Molecule();

let hydrogen = ethanol.createAtoms('H', 6);
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
```

## Documentation

MCUL is currently in alpha development, and thus does not have documentation.

## Data Sources

| Data                  | Source |
| --------------------- | ------ |
| Average Atomic Masses | [PubChem](https://pubchem.ncbi.nlm.nih.gov/periodic-table/#view=list) |

## License

<a href="https://patreon.com/russellsteadman" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-red.svg?style=flat-square" alt="Patreon donate button" /></a>

Copyright &copy; {{year}} [Russell Steadman](https://www.russellsteadman.com/?utm_source=mcul&utm_medium=copyright). Licensed under an MIT License (see the LICENSE file for terms).