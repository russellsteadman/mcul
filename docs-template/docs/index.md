{{notice}}

# MCUL

MCUL is a molecular parsing engine that takes text such as `CH4` or `methane` and is able to provide information such as the average atomic mass or hydrogen count.

## Installation

MCUL can be used in Node.js or with webpack, browserify, etc. Add using NPM or Yarn.
```sh
npm i mcul
yarn add mcul
```

MCUL can also be used over CDN.
```html
<script src="https://cdn.jsdelivr.net/npm/mcul@{{version}}/dist/mcul.js"></script>
```

## Documentation

```js
import Molecule from 'mcul';

let Methane = Molecule.createFromText('CH4', 'basic');

console.log(Methane.mass); // 16.043
console.log(Methane.counts); // {"1": 4, "6": 1}
```

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

Copyright &copy; {{year}} [Russell Steadman](https://www.russellsteadman.com/?utm_source=mcul&utm_medium=copyright). Licensed under an MIT License (see the LICENSE file for terms).