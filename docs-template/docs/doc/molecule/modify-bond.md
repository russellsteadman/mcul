{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">modifyBond</li>
  </ol>
</nav>

# Molecule.modifyBond

## Arguments

```js
let molecule = new Molecule();

molecule.bond(atomOne /* type: Atom */, atomTwo /* type: Atom */, changes /* type: Object */);
```

- `atomOne` - The first atom involved in the bond
- `atomTwo` - The second atom involved in the bond
- `changes` - Changed options for the bond ([see all here](/doc/bonding/options))

## Returns

**Type:** `Molecule`

The function returns the parent molecule, and is thus chainable (e.g. `Molecule.modifyBond(a, b, opt).modifyBond(b, c, opt)`).

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let atoms = molecule.createAtoms('C', 2);

molecule.bond(atoms[0], atoms[1], {count: 2});

molecule.modifyBond(atoms[0], atoms[1], {count: 3});

console.log(molecule.getBond(atoms[0], atoms[1]));</p></div>