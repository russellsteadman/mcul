/* global test expect */
const Molecule = require("../src/mcul");

test("Generator has correct types", () => {
  let instance = Molecule.createFromText("[Cu(NH3)6]3(H2O)12Mo", "basic");
  expect(instance.counts).toMatchInlineSnapshot(`
    Object {
      "1": 78,
      "29": 3,
      "42": 1,
      "7": 18,
      "8": 12,
    }
  `);
  expect(instance.counts[1]).toBe(78);
  expect(instance.mass).toBe(809.388);
});
