{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item active" aria-current="page">Molecule</li>
  </ol>
</nav>

# Molecule

## Declaration

The `Molecule` constuctor does not accept any arguments.

```js
let molecule = new Molecule();
```

## Methods

- [`Molecule.createAtom`](/doc/molecule/create-atom)
- [`Molecule.createAtoms`](/doc/molecule/create-atoms)
- [`Molecule.getAtomId`](/doc/molecule/get-atom-id)
- [`Molecule.getAtomById`](/doc/molecule/get-atom-by-id)
- [`Molecule.getAtomsByElement`](/doc/molecule/get-atoms-by-element)
- [`Molecule.contains`](/doc/molecule/contains)
- [`Molecule.getAtomsByElement`](/doc/molecule/get-atoms-by-element)
- [`Molecule.bond`](/doc/molecule/bond)
- [`Molecule.modifyBond`](/doc/molecule/modify-bond)
- [`Molecule.getBond`](/doc/molecule/get-bond)
- [`Molecule.getBondedAtoms`](/doc/molecule/get-bonded-atoms)
- [`Molecule.getBondCount`](/doc/molecule/get-bond-count)
- [`Molecule.getBranchPaths`](/doc/molecule/get-branch-paths)
- [`Molecule.pack`](/doc/molecule/pack)
- [`Molecule.unpack`](/doc/molecule/unpack)
- [`Molecule.chainCarbons`](/doc/molecule/chain-carbons)
- [`Molecule.hydrogenateCarbon`](/doc/molecule/hydrogenate-carbon)
- [`Molecule.hydrogenateCarbons`](/doc/molecule/hydrogenate-carbons)

## Properties

### Molecule.mass

**Type:** `Number`

The mass of the molecule in daltons. 

### Molecule.atomCounts

**Type:** `Object`

The counts of individual atoms by symbol and atomic number.

**Example:** Butane
```
Object {
    "atomic": Object {
        "1": 10,
        "6": 4,
    },
    "symbol": Object {
        "C": 4,
        "H": 10,
    },
}
```

### Molecule.moleFraction

**Type:** `Object`

The elemental composition with respect to moles by symbol and atomic number.

**Example:** Butane
```
Object {
    "atomic": Object {
        "1": 0.7143,
        "6": 0.2857,
    },
    "symbol": Object {
        "C": 0.2857,
        "H": 0.7143,
    },
}
```

### Molecule.massFraction

**Type:** `Object`

The elemental composition with respect to mass by symbol and atomic number.

**Example:** Butane
```
Object {
    "atomic": Object {
        "1": 0.1734,
        "6": 0.8266,
    },
    "symbol": Object {
        "C": 0.8266,
        "H": 0.1734,
    },
}
```