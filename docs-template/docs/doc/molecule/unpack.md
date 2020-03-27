{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/molecule/">Molecule</a></li>
    <li class="breadcrumb-item active" aria-current="page">unpack</li>
  </ol>
</nav>

# Molecule.unpack

## Arguments

```js
let molecule = new Molecule();

molecule.unpack(packedData /* type: String */);
```

- `packedData` - Packed data produced by [`Molecule.pack`](/doc/molecule/pack)

## Returns

**Type:** None

## Interactive Example

<div data-example><p class="d-none my-5">const { Molecule } = require('mcul');

let molecule = new Molecule();

console.log(molecule.unpack(molecule.pack()));</p></div>