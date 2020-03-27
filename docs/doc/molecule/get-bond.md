<!-- WARNING: Edit this file in /docs-template -->

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getBond</li>
  </ol>
</nav>

# Molecule.getBond

## Arguments

```js
let molecule = new Molecule();

molecule.getBond(atomOne /* type: Atom */, atomTwo /* type: Atom */);
```

- `atomOne` - The first atom involved in the bond
- `atomTwo` - The second atom involved in the bond

## Returns

**Type:** `Object`

The function returns the [bond configuration](/doc/bonding/options).

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let atoms = molecule.createAtoms('C', 2);

molecule.bond(atoms[0], atoms[1], {count: 2});

console.log(molecule.getBond(atoms[0], atoms[1]));</p></div>