<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">createAtom</li>
  </ol>
</nav>

# Molecule.createAtom

## Arguments

```js
let molecule = new Molecule();

molecule.createAtom(elementSymbol /* type: String */);
```

- `elementSymbol` - The symbol corresponding to the element of the atom

## Returns

**Type:** `Atom` Instance

The function returns the generated `Atom` instance linked to the molecule.

## Interactive Example

<div data-example><p class="d-none my-5">import { Molecule } from 'mcul';

let molecule = new Molecule();

let hydrogen = molecule.createAtom('H');

console.log(hydrogen);</p></div>