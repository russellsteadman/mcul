<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getAtomById</li>
  </ol>
</nav>

# Molecule.getAtomById

## Arguments

```js
let molecule = new Molecule();

molecule.getAtomById(id /* type: String */);
```

- `id` - An identifier string for an atom

## Returns

**Type:** `String`

The function returns an a string identifier for the atom in the molecule.

## Interactive Example

<div data-example><p class="d-none my-5">import { Molecule } from 'mcul';

let molecule = new Molecule();
let hydrogen = molecule.createAtom('H');

let id = molecule.getAtomId(hydrogen);

hydrogen = molecule.getAtomById(id);

console.log(hydrogen);</p></div>