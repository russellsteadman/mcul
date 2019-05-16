/* global test expect */
const Molecule = require("./..");

test("Generator has correct types", () => {
  expect(typeof Molecule).toBe('function');
  expect(typeof Molecule.addParser).toBe('function');
});

test("Instance has correct types", () => {
  let instance = Molecule('CO2', 'basic');
  expect(typeof instance).toBe('object');
  expect(typeof instance.parse).toBe('function');
  expect(typeof instance.setState).toBe('undefined');
});