<!-- WARNING: Edit this file in /docs-template -->

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getBondedAtoms</li>
  </ol>
</nav>

# Molecule.getBondedAtoms

## Arguments

```js
let molecule = new Molecule();

molecule.getBondedAtoms(atom /* type: Atom */);
```

- `atom` - The atom involved in bonding

## Returns

**Type:** `Array`[`Atom` instance]

The function returns an array of bonded atoms.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let c = molecule.createAtom('C');
molecule.hydrogenateCarbons();

console.log(molecule.getBondedAtoms(c));</p></div>