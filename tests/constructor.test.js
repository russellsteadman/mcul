/* global test expect */
const Molecule = require("./../src/mcul");

test("Generator has correct types", () => {
  expect(typeof Molecule).toBe('object');
  expect(typeof Molecule.create).toBe('function');
  expect(typeof Molecule.createFromText).toBe('function');
  expect(typeof Molecule.addParser).toBe('function');
  expect(typeof Molecule.parsers).toBe('undefined');
});

test("Instance has correct types", () => {
  let instance = Molecule.createFromText('CO2', 'basic');
  expect(typeof instance).toBe('object');
  expect(typeof instance.parse).toBe('function');
  expect(typeof instance.setState).toBe('undefined');
  expect(typeof instance.state).toBe('undefined');
});