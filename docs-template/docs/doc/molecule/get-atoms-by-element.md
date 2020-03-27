{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getAtomsByElement</li>
  </ol>
</nav>

# Molecule.getAtomsByElement

## Arguments

```js
let molecule = new Molecule();

molecule.getAtomsByElement(elementSymbol /* type: String */);
```

- `elementSymbol` - The symbol for the corresponding element

## Returns

**Type:** `Array`[`Atom` Instance]

The function returns an array of atom instances of the selected element.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();
molecule.createAtoms('H', 4);

let hydrogens = molecule.getAtomsByElement('H');

console.log(hydrogens);</p></div>