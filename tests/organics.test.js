/* global test expect */
const { Molecule } = require("../dist/mcul.node");

test("Can autochain octane", () => {
  let octane = new Molecule();

  octane.chainCarbons(8, 1);
  octane.hydrogenateCarbons();

  expect(octane.mass).toBe(114.232);
});

test("Can autochain heptene", () => {
    let heptene = new Molecule();
  
    let carbons = heptene.chainCarbons(7, 1);
    heptene.modifyBond(carbons[0], carbons[1], {count: 2});

    heptene.hydrogenateCarbons();
  
    expect(heptene.mass).toBe(98.189);
});