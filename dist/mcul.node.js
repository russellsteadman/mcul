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

    Molecule_defineProperty(this, "contains", component => {
      if (component) {
        if (component.type === 'molecule') {
          let index = this.s.i;

          for (let i in component.s.a) {
            let id = (parseInt(i, 36) + index).toString(36);
            this.s.i += 1;
            this.s.a[id] = component.s.a[i];
          }

          for (let i in component.s.b) {
            if (!component.s.b) continue;
            let [idOne, idTwo] = i.split('-');
            idOne = (parseInt(idOne, 36) + index).toString(36);
            idTwo = (parseInt(idTwo, 36) + index).toString(36);
            this.s.b[`${idOne}-${idTwo}`] = component.s.b[i];
            this.s.b[`${idTwo}-${idOne}`] = null;
          }

          delete component.s;
          component.s = this.s;
          return this;
        } else if (component.type === 'atom') {
          return component.in(this);
        } else {
          throw new Error('Must pass an molecule or atom');
        }
      } else {
        throw new Error('Must pass a component');
      }
    });

    Molecule_defineProperty(this, "in", molecule => {
      if (!molecule || molecule.type !== 'molecule') throw new Error('Must pass in a Molecule instance');
      return molecule.contains(this);
    });

    Molecule_defineProperty(this, "getAtomById", id => {
      let atom = new src_Atom(null, this, id);
      atom.s.a = this.s.a[id] || {};
      return atom;
    });

    Molecule_defineProperty(this, "getAtomsByElement", el => {
      el = el ? typeof el === 'string' ? atomicToSymbol.indexOf(el) + 1 : el : 0;
      let atoms = [];

      for (let id in this.s.a) {
        if (this.s.a[id].el !== el) continue;
        let atom = new src_Atom(null, this, id);
        atom.s.a = this.s.a[id] || {};
        atoms.push(atom);
      }

      return atoms;
    });

    Molecule_defineProperty(this, "getBondedAtoms", atom => {
      let id = atom && atom.s && atom.s.id;
      let atoms = [];

      for (let i in this.s.b) {
        if (i.split('-')[0] !== id) continue;
        let atom = new src_Atom(null, this, i.split('-')[1]);
        atom.s.a = this.s.a[i.split('-')[1]] || {};
        atoms.push(atom);
      }

      return atoms;
    });

    Molecule_defineProperty(this, "getBranchPaths", (atom, priorId, originalId) => {
      let id = atom && atom.s && atom.s.id || atom;
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
      let idOne = atomOne && atomOne.s && atomOne.s.id;
      let idTwo = atomTwo && atomTwo.s && atomTwo.s.id;
      this.s.b[`${idOne}-${idTwo}`] = Molecule_objectSpread({
        type: 'c',
        // One of: c (Covalent), i (Ionic), m (Metallic)
        count: 1
      }, options);
      this.s.b[`${idTwo}-${idOne}`] = null;
      return this;
    });

    Molecule_defineProperty(this, "modifyBond", (atomOne, atomTwo, changes) => {
      let idOne = atomOne && atomOne.s && atomOne.s.id;
      let idTwo = atomTwo && atomTwo.s && atomTwo.s.id;
      let bond = this.s.b[`${idOne}-${idTwo}`];

      if (typeof bond === 'object' && bond) {
        this.s.b[`${idOne}-${idTwo}`] = Molecule_objectSpread({}, this.s.b[`${idOne}-${idTwo}`], {}, changes);
      } else if (typeof bond === 'object' && !bond) {
        this.s.b[`${idTwo}-${idOne}`] = Molecule_objectSpread({}, this.s.b[`${idTwo}-${idOne}`], {}, changes);
      } else {
        throw new Error('Unable to modify bond, does not exist');
      }
    });

    Molecule_defineProperty(this, "getBond", (atomOne, atomTwo) => {
      let idOne = atomOne && atomOne.s && atomOne.s.id;
      let idTwo = atomTwo && atomTwo.s && atomTwo.s.id;
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
  } // Create a new atom


  get mass() {
    let mass = 0;

    for (let i in this.s.a) {
      mass += atomicToAMU[this.s.a[i].el - 1] || 0;
    }

    return Math.round(mass * 1000) / 1000;
  }

}, Molecule_temp);
/* harmony default export */ var src_Molecule = (Molecule_Molecule);
// CONCATENATED MODULE: ../src/mcul.js




/***/ })
/******/ ]);
//# sourceMappingURL=mcul.node.js.map