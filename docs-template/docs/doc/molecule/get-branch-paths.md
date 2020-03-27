{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getBranchPaths</li>
  </ol>
</nav>

# Molecule.getBranchPaths

## Arguments

```js
let molecule = new Molecule();

molecule.getBranchPaths(atom /* type: Atom */);
```

- `atom` - The atom involved in bonding

## Returns

**Type:** `Array`[`String`]

The function returns an array of strings in the format `'id1-id2-id3'` that trace all available paths from a atom.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let carbons = molecule.chainCarbons(3);
molecule.hydrogenateCarbons();

console.log(molecule.getBranchPaths(carbons[0]));</p></div>