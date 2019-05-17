/* global test expect */
const Molecule = require("./../src/mcul");

test("Generator has correct types", () => {
  expect(typeof Molecule).toBe('object');
  expect(typeof Molecule.create).toBe('function');
  expect(typeof Molecule.addParser).toBe('function');
  expect(typeof Molecule.parsers).toBe('undefined');
});

test("Instance has correct types", () => {
  let instance = Molecule.create('CO2', 'basic');
  expect(typeof instance).toBe('object');
  expect(typeof instance.parse).toBe('function');
  expect(typeof instance.setState).toBe('undefined');
  expect(typeof instance.state).toBe('object');
  expect(typeof instance.data).toBe('undefined');
});

test("State immutability", () => {
  let instance = Molecule.create('CO2', 'basic');
  expect(instance.state.parsed[0].element).toBe(6);
  instance.state.rawText = 'SO2';
  expect(instance.state.rawText).toBe('CO2');
  instance.parse();
  expect(instance.state.parsed[0].element).toBe(6);
  expect(instance.state.rawText).toBe('CO2');
});