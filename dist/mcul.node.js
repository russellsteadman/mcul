module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Molecule", function() { return /* reexport */ src_Molecule; });
__webpack_require__.d(__webpack_exports__, "Atom", function() { return /* reexport */ src_Atom; });

// CONCATENATED MODULE: ../src/maps/atomicToAMU.js
/* harmony default export */ var atomicToAMU = ([1.008, 4.003, 7, 9.012, 10.81, 12.011, 14.007, 15.999, 18.998, 20.18, 22.99, 24.305, 26.982, 28.085, 30.974, 32.07, 35.45, 39.9, 39.098, 40.08, 44.956, 47.87, 50.941, 51.996, 54.938, 55.84, 58.933, 58.693, 63.55, 65.4, 69.72, 72.63, 74.922, 78.97, 79.9, 83.8, 85.468, 87.6, 88.906, 91.22, 92.906, 96, 97.907, 101.1, 102.906, 106.4, 107.868, 112.41, 114.82, 118.71, 121.76, 127.6, 126.905, 131.29, 132.905, 137.33, 138.906, 140.12, 140.908, 144.24, 144.913, 150.4, 151.96, 157.2, 158.925, 162.5, 164.93, 167.26, 168.934, 173.04, 174.967, 178.5, 180.948, 183.8, 186.21, 190.2, 192.22, 195.08, 196.967, 200.59, 204.383, 207, 208.98, 208.982, 209.987, 222.018, 223.02, 226.025, 227.028, 232.038, 231.036, 238.029, 237.048, 244.064, 243.061, 247.07, 247.07, 251.08, 252.083, 257.095, 258.098, 259.101, 262.11, 267.122, 268.126, 271.134, 274.144, 277.152, 278.156, 281.165, 282.169, 285.177, 286.183, 289.191, 290.196, 293.205, 294.211, 294.214]);
// CONCATENATED MODULE: ../src/maps/atomicToSymbol.js
/* harmony default export */ var atomicToSymbol = (["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"]);
// CONCATENATED MODULE: ../src/maps/atomicToName.js
/* harmony default export */ var atomicToName = (["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium"]);
// CONCATENATED MODULE: ../src/Atom.js
var _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Atom_Atom = (_temp = class Atom {
  constructor(el, p, id) {
    _defineProperty(this, "in", molecule => {
      if (!molecule || molecule.type !== 'molecule') throw new Error('Must pass in a Molecule instance');
      this.s.p = molecule;
      this.s.id = molecule.s.i.toString(36);
      molecule.s.i += 1;
      molecule.s.a[this.s.id] = this.s.a;
      return this;
    });

    _defineProperty(this, "clone", () => {
      let atom = new Atom();
      atom.s.a = this.s.a;
      return atom;
    });

    this.s = {
      a: {
        el: el ? typeof el === 'string' ? atomicToSymbol.indexOf(el) + 1 : el : 0
      },
      p,
      // Parent molecule
      id // Id of atom in molecule

    };
    this.type = 'atom';
  }

  set symbol(symbol) {
    this.atomic = atomicToSymbol.indexOf(symbol) + 1;
  }

  set atomic(atomic) {
    this.s.a.el = atomic;

    if (this.s.p && this.s.id) {
      this.s.p.s.a[this.s.id] = _objectSpread({}, this.s.p.s.a[this.s.id], {
        el: atomic
      });
    }
  }

  set charge(charge) {
    if (typeof charge !== 'number') throw new Error('Charge must be an integer');
    this.s.a.c = charge || 0;

    if (this.s.p && this.s.id) {
      this.s.p.s.a[this.s.id] = _objectSpread({}, this.s.p.s.a[this.s.id], {
        c: charge
      });
    }
  }

  get charge() {
    return this.s.a.c || 0;
  }

  get symbol() {
    return atomicToSymbol[this.s.a.el - 1] || '';
  }

  get name() {
    return atomicToName[this.s.a.el - 1] || '';
  }

  get atomic() {
    return this.s.a.el;
  }

  get mass() {
    return atomicToAMU[this.s.a.el - 1] || 0;
  } // Attach to a parent molecule


}, _temp);
/* harmony default export */ var src_Atom = (Atom_Atom);
// CONCATENATED MODULE: ../src/maps/alkyl.js
/* harmony default export */ var alkyl = (['methyl', 'ethyl', 'propyl', 'butyl', 'pentyl', 'hexyl', 'heptyl', 'octyl', 'nonyl', 'decyl', 'undecyl', 'dodecyl']);
// CONCATENATED MODULE: ../src/ext/Add.js

const Isoalkyl = alkyl.slice(2).map(alkyl => `iso${alkyl}`);
const Halide = ['fluoro', 'chloro', 'bromo', 'iodo'];

const Add = function (name, carbon, carbonTwo) {
  if (alkyl.indexOf(name) !== -1) {
    // Add an alkyl group
    let plus = this.chainCarbons(alkyl.indexOf(name) + 1);
    this.bond(plus[0], carbon);

    for (let i in plus) this.hydrogenateCarbon(plus[i]);
  } else if (Isoalkyl.indexOf(name) !== -1) {
    // Add an isoalkyl group
    let plus = this.chainCarbons(alkyl.indexOf(name) + 1);
    let carbons = this.createAtoms('C', 2);
    this.bond(plus[plus.length - 1], carbons[0]).bond(plus[plus.length - 1], carbons[1]).bond(plus[0], carbon);

    for (let i in plus) this.hydrogenateCarbon(plus[i]);

    for (let i in carbons) this.hydrogenateCarbon(carbons[i]);
  } else if (name === 's-butyl' || name === 'sec-butyl') {
    // Add an s-butyl
    let plus = this.chainCarbons(3);
    let sub = this.createAtom('C');
    this.bond(plus[1], sub).bond(plus[0], carbon);

    for (let i in plus) this.hydrogenateCarbon(plus[i]);

    this.hydrogenateCarbon(sub);
  } else if (name === 't-butyl' || name === 'tert-butyl') {
    // Add an t-butyl
    let plus = this.chainCarbons(2);
    let carbons = this.createAtoms('C', 2);
    this.bond(plus[1], carbons[0]).bond(plus[1], carbons[1]).bond(plus[0], carbon);

    for (let i in plus) this.hydrogenateCarbon(plus[i]);

    for (let i in carbons) this.hydrogenateCarbon(carbons[i]);
  } else if (name === 'benzene') {
    // Add an benzene ring
    let plus = this.chainCarbons(6, 1);

    for (let i = 0; i < 6; i += 2) this.modifyBond(plus[i], plus[i + 1], {
      count: 2
    });

    this.bond(plus[0], plus[5]).bond(plus[0], carbon);

    for (let i in plus) this.hydrogenateCarbon(plus[i]);
  } else if (name === 'amine') {
    // Add an amine
    let n = this.createAtom('N');
    let h = this.createAtoms('H', 2);
    this.bond(carbon, n).bond(n, h[0]).bond(n, h[1]);
  } else if (Halide.indexOf(name) !== -1) {
    // Add a halide
    this.bond(this.createAtom(['F', 'Cl', 'Br', 'I'][Halide.indexOf(name)]), carbon);
  } else if (name === 'hydroxyl') {
    // Add an alcohol
    let o = this.createAtom('O');
    this.bond(o, this.createAtom('H')).bond(o, carbon);
  } else if (name === 'carbonyl') {
    // Add a ketone
    let o = this.createAtom('O');
    this.bond(o, carbon, {
      count: 2
    });
  } else if (name === 'aldehyde') {
    // Add a ketone
    let o = this.createAtom('O');
    this.bond(o, carbon, {
      count: 2
    });
    if (this.getBondCount(carbon) < 4) this.bond(carbon, this.createAtom('H'));
  } else if (name === 'carbonate') {
    // Add a carbonate
    if (!carbonTwo) throw new Error('Must provide a second R group for a carbonate');
    let o = this.createAtoms('O', 3);
    let c = this.createAtom('C');
    this.bond(o[0], c, {
      count: 2
    }).bond(o[1], c).bond(o[2], c);
    this.bond(carbon, o[1]).bond(carbonTwo, o[2]).bond(c, this.createAtom('H'));
  } else if (name === 'carboxylate') {
    // Add a carboxylate ion
    let o = this.createAtoms('O', 2);
    o[0].charge = -1;
    this.bond(o[1], carbon, {
      count: 2
    }).bond(o[0], carbon);
  } else if (name === 'carboxyl') {
    // Add a carboxyl group
    let o = this.createAtoms('O', 2);
    this.bond(o[1], carbon, {
      count: 2
    }).bond(o[0], carbon).bond(o[0], this.createAtom('H'));
  } else if (name === 'carboalkoxy') {
    // Add an ester group
    if (!carbonTwo) throw new Error('Must provide a second R group for an ester');
    let o = this.createAtoms('O', 2);
    this.bond(o[1], carbon, {
      count: 2
    }).bond(o[0], carbon).bond(o[0], this.createAtom('H'));
  } else {
    throw new Error(`Unable to resolve functional group "${name}"`);
  }
};

/* harmony default export */ var ext_Add = (Add);
// CONCATENATED MODULE: ../src/Molecule.js
var Molecule_temp;

function Molecule_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Molecule_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Molecule_ownKeys(Object(source), true).forEach(function (key) { Molecule_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Molecule_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Molecule_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SCHEMA_VERSION = 1;
const Molecule_Molecule = (Molecule_temp = class Molecule {
  constructor() {
    Molecule_defineProperty(this, "createAtom", el => {
      let id = this.s.i.toString(36);
      this.s.i += 1;
      let atom = new src_Atom(el, this, id);
      this.s.a[id] = atom.s.a;
      return atom;
    });

    Molecule_defineProperty(this, "createAtoms", (el, count) => {
      let atoms = [];
      if (typeof count !== 'number' || count < 1) throw new Error('Count must be a positive number');

      for (let i = 0; i < count; i++) {
        let id = this.s.i.toString(36);
        this.s.i += 1;
        atoms.push(new src_Atom(el, this, id));
        this.s.a[id] = atoms[i].s.a;
      }

      return atoms;
    });

    Molecule_defineProperty(this, "contains", atom => {
      if (atom && atom.type === 'atom') {
        return atom.in(this);
      } else {
        throw new Error('Must pass an atom');
      }
    });

    Molecule_defineProperty(this, "getAtomById", id => {
      if (id && id.type === 'atom') return id;
      let atom = new src_Atom(null, this, id);
      atom.s.a = this.s.a[id] || {};
      return atom;
    });

    Molecule_defineProperty(this, "getAtomId", atom => {
      if (typeof atom === 'string') return atom;
      atom = atom && atom.s && atom.s.id;
      if (typeof atom !== 'string') throw new Error('Not an atom');
      return atom;
    });

    Molecule_defineProperty(this, "getAtomsByElement", el => {
      el = el ? typeof el === 'string' ? atomicToSymbol.indexOf(el) + 1 : el : 0;
      let atoms = [];

      for (let id in this.s.a) {
        if (this.s.a[id].el !== el) continue;
        atoms.push(this.getAtomById(id));
      }

      return atoms;
    });

    Molecule_defineProperty(this, "getBondedAtoms", atom => {
      let id = this.getAtomId(atom);
      let atoms = [];

      for (let i in this.s.b) {
        if (i.split('-')[0] !== id) continue;
        atoms.push(this.getAtomById(i.split('-')[1]));
      }

      return atoms;
    });

    Molecule_defineProperty(this, "getBondCount", atom => {
      let id = this.getAtomId(atom);
      let count = 0;
      let bond;

      for (let i in this.s.b) {
        bond = this.s.b[i];
        if (!bond) bond = this.s.b[`${i.split('-')[1]}-${i.split('-')[0]}`];
        if (i.split('-')[0] === id) count += bond.count || 1;
      }

      return count;
    });

    Molecule_defineProperty(this, "getBranchPaths", (atom, priorId, originalId) => {
      let id = this.getAtomId(atom);
      let linearPrefix = priorId ? `-${id}` : id;
      let branchLines = [];
      let pathEnd = true; // Checking for originalId prevents looping for cyclic structures

      if (id !== originalId) {
        if (!originalId) originalId = id;

        for (let i in this.s.b) {
          if (i.split('-')[0] !== id || i.split('-')[1] === priorId) continue;
          pathEnd = false;
          branchLines = this.getBranchPaths(i.split('-')[1], id, originalId).concat(branchLines);
        }
      }

      if (pathEnd) {
        // This is the end of a path, so create a new branch
        branchLines.push(linearPrefix);
      } else {
        // Add to all paths as a part in the change
        for (let i in branchLines) {
          branchLines[i] = linearPrefix + branchLines[i];
        }
      }

      return branchLines;
    });

    Molecule_defineProperty(this, "bond", (atomOne, atomTwo, options) => {
      let idOne = this.getAtomId(atomOne);
      let idTwo = this.getAtomId(atomTwo);
      this.s.b[`${idOne}-${idTwo}`] = Molecule_objectSpread({
        type: 'c',
        // One of: c (Covalent), i (Ionic), m (Metallic)
        count: 1
      }, options);
      this.s.b[`${idTwo}-${idOne}`] = null;
      return this;
    });

    Molecule_defineProperty(this, "modifyBond", (atomOne, atomTwo, changes) => {
      let idOne = this.getAtomId(atomOne);
      let idTwo = this.getAtomId(atomTwo);
      let bond = this.s.b[`${idOne}-${idTwo}`];

      if (typeof bond === 'object' && bond) {
        this.s.b[`${idOne}-${idTwo}`] = Molecule_objectSpread({}, this.s.b[`${idOne}-${idTwo}`], {}, changes);
      } else if (typeof bond === 'object' && !bond) {
        this.s.b[`${idTwo}-${idOne}`] = Molecule_objectSpread({}, this.s.b[`${idTwo}-${idOne}`], {}, changes);
      } else {
        throw new Error('Unable to modify bond, does not exist');
      }

      return this;
    });

    Molecule_defineProperty(this, "getBond", (atomOne, atomTwo) => {
      let idOne = this.getAtomId(atomOne);
      let idTwo = this.getAtomId(atomTwo);
      let bond = this.s.b[`${idOne}-${idTwo}`];

      if (typeof bond === 'object' && bond) {
        return bond;
      } else if (typeof bond === 'object' && !bond) {
        return this.s.b[`${idTwo}-${idOne}`];
      } else {
        return null;
      }
    });

    Molecule_defineProperty(this, "pack", () => {
      return JSON.stringify({
        v: SCHEMA_VERSION,
        s: this.s
      });
    });

    Molecule_defineProperty(this, "unpack", packed => {
      try {
        let pack = JSON.parse(packed);
        if (pack.v > SCHEMA_VERSION) throw new Error('Upgrade mcul to use newer package schema');
        this.s = pack.s;
      } catch (e) {
        throw new Error('Unable to parse packed data');
      }

      return this;
    });

    Molecule_defineProperty(this, "chainCarbons", (count, bondCount) => {
      if (!bondCount) bondCount = 1;

      if (bondCount < 1 && bondCount > 3 || bondCount === 3 && count > 2) {
        throw new Error('Chain must have a possible number of bonds');
      }

      let carbons = this.createAtoms('C', count);

      for (let i = 1; i < count; i++) {
        this.bond(carbons[i - 1], carbons[i], {
          count: bondCount
        });
      }

      return carbons;
    });

    Molecule_defineProperty(this, "hydrogenateCarbon", carbon => {
      let bondCount = this.getBondCount(carbon);

      for (let o = bondCount; o < 4; o++) {
        let hydrogen = this.createAtom('H');
        this.bond(carbon, hydrogen);
      }

      return this;
    });

    Molecule_defineProperty(this, "hydrogenateCarbons", () => {
      let carbons = this.getAtomsByElement('C');

      for (let i in carbons) {
        let bondCount = this.getBondCount(carbons[i]);

        for (let o = bondCount; o < 4; o++) {
          let hydrogen = this.createAtom('H');
          this.bond(carbons[i], hydrogen);
        }
      }

      return this;
    });

    Molecule_defineProperty(this, "clone", () => {
      let double = new Molecule();
      double.s = JSON.parse(JSON.stringify(this.s));
      return double;
    });

    this.s = {
      a: {},
      // Atoms mapped "id" -> information
      b: {},
      // Bonds mapped "id-id" -> information
      i: 0 // Index, beginning at 0

    };
    this.type = 'molecule';
    this.add = ext_Add.bind(this);
  } // Create a new atom


  get mass() {
    let mass = 0;

    for (let i in this.s.a) {
      mass += atomicToAMU[this.s.a[i].el - 1] || 0;
    }

    return Math.round(mass * 1000) / 1000;
  }

  get atomCounts() {
    let counts = {};
    let countsSymbol = {};

    for (let i in this.s.a) {
      counts[this.s.a[i].el] = counts[this.s.a[i].el] || 0;
      counts[this.s.a[i].el]++;
    }

    for (let i in counts) countsSymbol[atomicToSymbol[Number(i) - 1]] = counts[i];

    return {
      symbol: countsSymbol,
      atomic: counts
    };
  }

  get moleFraction() {
    let counts = {};
    let countsSymbol = {};
    let total = 0;

    for (let i in this.s.a) {
      counts[this.s.a[i].el] = counts[this.s.a[i].el] || 0;
      counts[this.s.a[i].el]++;
      total++;
    }

    for (let i in counts) {
      counts[i] /= total;
      counts[i] = Math.round(counts[i] * 10000) / 10000;
      countsSymbol[atomicToSymbol[Number(i) - 1]] = counts[i];
    }

    return {
      symbol: countsSymbol,
      atomic: counts
    };
  }

  get massFraction() {
    let counts = {};
    let countsSymbol = {};
    let total = 0;

    for (let i in this.s.a) {
      counts[this.s.a[i].el] = counts[this.s.a[i].el] || 0;
      counts[this.s.a[i].el] += atomicToAMU[this.s.a[i].el - 1];
      total += atomicToAMU[this.s.a[i].el - 1];
    }

    for (let i in counts) {
      counts[i] /= total;
      counts[i] = Math.round(counts[i] * 10000) / 10000;
      countsSymbol[atomicToSymbol[Number(i) - 1]] = counts[i];
    }

    return {
      symbol: countsSymbol,
      atomic: counts
    };
  }

}, Molecule_temp);
/* harmony default export */ var src_Molecule = (Molecule_Molecule);
// CONCATENATED MODULE: ../src/mcul.js




/***/ })
/******/ ]);
//# sourceMappingURL=mcul.node.js.map