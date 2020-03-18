<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">createAtoms</li>
  </ol>
</nav>

# Molecule.createAtoms

## Arguments

```js
let molecule = new Molecule();

molecule.createAtoms(elementSymbol /* type: String */, count /* type: Number */);
```

- `elementSymbol` - The symbol corresponding to the element of the atom
- `count` - The number of atoms to generate

## Returns

**Type:** `Array`[`Atom` Instance]

The function returns an array of generated `Atom` instances linked to the molecule.

## Interactive Example

<div data-example><p class="d-none my-5">import { Molecule } from 'mcul';

let molecule = new Molecule();

let hydrogen = molecule.createAtoms('H', 3);

console.log(hydrogen);</p></div>