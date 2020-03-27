<!-- WARNING: Edit this file in /docs-template -->

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getAtomId</li>
  </ol>
</nav>

# Molecule.getAtomId

## Arguments

```js
let molecule = new Molecule();

molecule.getAtomId(atom /* type: Atom */);
```

- `atom`

## Returns

**Type:** `String`

The function returns a string identifier for the atom in the molecule.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();
let hydrogen = molecule.createAtom('H');

let id = molecule.getAtomId(hydrogen);

console.log(id);</p></div>