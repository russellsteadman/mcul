{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">hydrogenateCarbon</li>
  </ol>
</nav>

# Molecule.hydrogenateCarbon

## Arguments

```js
let molecule = new Molecule();

molecule.hydrogenateCarbon(carbonAtom /* type: Atom */);
```

- `carbonAtom` - The carbon atom to hydrogenate

## Returns

**Type:** `Molecule`

The function returns the parent `Molecule`.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let carbons = molecule.chainCarbons('C', 2);
molecule.hydrogenateCarbon(carbons[0]);

console.log(molecule.getBondCount(carbons[0]), molecule.getBondCount(carbons[1]));</p></div>