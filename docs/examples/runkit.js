const { Molecule, Atom } = require('mcul');

// Generate new Molecule instance
let ethanol = new Molecule();

// Use Molecule.createAtoms to create an array of atoms
let hydrogen = ethanol.createAtoms('H', 6);

// You can also create individual atoms and link them to the mo
let carbon = [new Atom('C').in(ethanol), ethanol.contains(new Atom('C'))];
let oxygen = ethanol.createAtom('O');

ethanol
    .bond(carbon[0], carbon[1])
    .bond(carbon[0], hydrogen[0])
    .bond(carbon[0], hydrogen[1])
    .bond(carbon[0], hydrogen[2])
    .bond(carbon[1], hydrogen[3])
    .bond(carbon[1], hydrogen[4])
    .bond(carbon[1], oxygen)
    .bond(oxygen, hydrogen[5]);

// Get the mass of the ethanol
console.log(ethanol.mass);

// Get all possible connected paths to an atom
console.log(ethanol.getBranchPaths(carbon[0]));

// Get all bonded atoms
console.log(ethanol.getBondedAtoms(carbon[1]).map((atom) => atom.name));