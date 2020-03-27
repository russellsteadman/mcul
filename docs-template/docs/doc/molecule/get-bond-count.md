{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">getBondCount</li>
  </ol>
</nav>

# Molecule.getBondCount

## Arguments

```js
let molecule = new Molecule();

molecule.getBondCount(atom /* type: Atom */);
```

- `atom` - The atom involved in bonding

## Returns

**Type:** `Number`

The function returns the number of bonds, counting double bonds as two, and triple bonds as three.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let c = molecule.createAtom('C');
molecule.hydrogenateCarbons();

console.log(molecule.getBondCount(c));</p></div>