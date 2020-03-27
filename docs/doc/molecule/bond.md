<!-- WARNING: Edit this file in /docs-template -->

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">bond</li>
  </ol>
</nav>

# Molecule.bond

## Arguments

```js
let molecule = new Molecule();

molecule.bond(atomOne /* type: Atom */, atomTwo /* type: Atom */, options /* type: Object */);
```

- `atomOne` - The first atom involved in the bond
- `atomTwo` - The second atom involved in the bond
- `options` - Options for the bond ([see all here](/doc/bonding/options))

## Returns

**Type:** `Molecule`

The function returns the parent molecule, and is thus chainable (e.g. `Molecule.bond(a, b).bond(b, c)`).

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let atoms = molecule.createAtoms('C', 2);

molecule.bond(atoms[0], atoms[1], {count: 2});

console.log(molecule.getBond(atoms[0], atoms[1]));</p></div>