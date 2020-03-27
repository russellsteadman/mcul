{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">hydrogenateCarbons</li>
  </ol>
</nav>

# Molecule.hydrogenateCarbons

```js
let molecule = new Molecule();

molecule.hydrogenateCarbons();
```

## Returns

**Type:** `Molecule`

The function returns the parent `Molecule`.

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

molecule.chainCarbons('C', 5);
molecule.hydrogenateCarbons();

console.log(molecule.mass, 'This is pentane\'s mass');</p></div>