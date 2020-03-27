<!-- WARNING: Edit this file in /docs-template -->

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">chainCarbons</li>
  </ol>
</nav>

# Molecule.chainCarbons

## Arguments

```js
let molecule = new Molecule();

molecule.chainCarbons(carbonCount /* type: Number */, bondOptions);
```

- `carbonCount` - The number of carbons to chain
- `bondOptions` - [Bond options](/doc/bonding/options) for the carbon-carbon bonds

## Returns

**Type:** `Array`[`Atom` instance]

The function returns an array of bonded carbons.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

let carbons = molecule.chainCarbons('C', 5);

console.log(carbons);</p></div>