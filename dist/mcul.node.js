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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("rd-parse");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (gen) {
  return function (f) {
    return f(f);
  }(function (f) {
    return gen(function () {
      return f(f).apply(null, arguments);
    });
  });
};

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const RecursiveCount = parsed => {
  let counts = {};

  for (let i in parsed) {
    if (parsed[i].type === 'element') {
      counts[parsed[i].element] = isNaN(counts[parsed[i].element]) ? parsed[i].count || 1 : (parsed[i].count || 1) * counts[parsed[i].element];
    } else if (parsed[i].type === 'subgroup' || parsed[i].type === 'complex') {
      let groupCount = RecursiveCount(parsed[i].children);

      for (let o in groupCount) {
        if (parsed[i].count) groupCount[o] *= parsed[i].count;
        counts[o] = isNaN(counts[o]) ? groupCount[o] || 0 : (groupCount[o] || 0) + counts[o];
      }
    }
  }

  return counts;
};

module.exports = RecursiveCount;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = (id, members) => {
  for (let i in members) {
    if (members[i].id === id) return members[i];

    if (typeof members[i].findById === 'function') {
      let subsearch = members[i].findById(id);
      if (subsearch) return subsearch;
    }
  }

  return null;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const Molecule = __webpack_require__(6);

class Generator {
  constructor() {
    _state.set(this, {
      writable: true,
      value: {
        parsers: {},
        defaultFormat: 'basic'
      }
    });

    _defineProperty(this, "create", options => {
      return new Molecule(_objectSpread({}, options, {
        parsers: _classPrivateFieldGet(this, _state).parsers,
        parent: this
      }));
    });

    _defineProperty(this, "createFromText", (rawText, format, options) => {
      if (!format) format = _classPrivateFieldGet(this, _state).defaultFormat;
      return new Molecule(_objectSpread({}, options, {
        parsers: _classPrivateFieldGet(this, _state).parsers,
        rawText,
        format,
        parent: this
      }));
    });

    _defineProperty(this, "setDefaultFormat", format => {
      _classPrivateFieldGet(this, _state).defaultFormat = format;
    });

    _defineProperty(this, "addParser", (parser, format) => {
      if (typeof parser !== 'function' && typeof format !== 'string') {
        throw new Error('Parser and format must be specified.');
      }

      _classPrivateFieldGet(this, _state).parsers[format] = parser;
    });
  }

}

var _state = new WeakMap();

module.exports = new Generator();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const Basic = __webpack_require__(7);

const Iupac = __webpack_require__(9);

const RecursiveCount = __webpack_require__(3);

const ElementFraction = __webpack_require__(13);

const FindById = __webpack_require__(4);

const Element = __webpack_require__(14);

const Subgroup = __webpack_require__(17);

const SCHEMA_VERSION = '0.1.0';

class Molecule {
  constructor(_ref) {
    let _rawText = _ref.rawText,
        _format = _ref.format,
        _options = _objectWithoutProperties(_ref, ["rawText", "format"]);

    _formats.set(this, {
      writable: true,
      value: ['basic', 'iupac']
    });

    _state.set(this, {
      writable: true,
      value: {
        children: [],
        idIndex: 0
      }
    });

    _defineProperty(this, "version", SCHEMA_VERSION);

    _defineProperty(this, "type", 'molecule');

    _createId.set(this, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _state).idIndex += 1;
        return _classPrivateFieldGet(this, _state).idIndex.toString(36);
      }
    });

    _defineProperty(this, "findById", id => {
      if (id === false) return this;
      return FindById(id, _classPrivateFieldGet(this, _state).children);
    });

    _defineProperty(this, "serialize", () => {
      let children = Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);

      for (let i in children) {
        if (typeof children[i].serialize === 'function') {
          children[i] = children[i].serialize();
        }
      }

      return _objectSpread({
        type: 'molecule',
        version: SCHEMA_VERSION,
        children,
        idIndex: _classPrivateFieldGet(this, _state).idIndex
      }, _classPrivateFieldGet(this, _state).rawText ? {
        fromText: _classPrivateFieldGet(this, _state).rawText
      } : {});
    });

    _defineProperty(this, "createElement", (element, options) => new Element(element, _objectSpread({}, options, {
      molecule: this,
      id: _classPrivateFieldGet(this, _createId).call(this)
    })));

    _defineProperty(this, "createSubgroup", (constituents, options) => new Subgroup(constituents, _objectSpread({}, options, {
      molecule: this,
      id: _classPrivateFieldGet(this, _createId).call(this)
    })));

    _defineProperty(this, "append", item => {
      const types = ['element', 'subgroup', 'complex'];
      if (!item || types.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');

      _classPrivateFieldGet(this, _state).children.push(item);
    });

    _defineProperty(this, "getCounts", () => RecursiveCount(_classPrivateFieldGet(this, _state).children));

    _defineProperty(this, "getCount", element => RecursiveCount(_classPrivateFieldGet(this, _state).children)[element] || 0);

    _defineProperty(this, "getElementFraction", element => ElementFraction(_classPrivateFieldGet(this, _state).children, element));

    _defineProperty(this, "parse", () => {
      let _classPrivateFieldGet2 = _classPrivateFieldGet(this, _state),
          rawText = _classPrivateFieldGet2.rawText,
          format = _classPrivateFieldGet2.format;

      if (format === _classPrivateFieldGet(this, _formats)[0]) {
        _classPrivateFieldGet(this, _state).children = Basic.call(this, rawText);
      } else if (format === _classPrivateFieldGet(this, _formats)[1]) {
        _classPrivateFieldGet(this, _state).children = Iupac.call(this, rawText);
      } else if (typeof _classPrivateFieldGet(this, _state).options.parsers[format] === 'function') {
        _classPrivateFieldGet(this, _state).children = _classPrivateFieldGet(this, _state).options.parsers[format].call(this, rawText);
      } else {
        throw new Error(`Cannot parse type "${format}".`);
      }
    });

    for (let i in _options.parsers) {
      _classPrivateFieldGet(this, _formats).push(i);
    }

    const fromText = typeof _rawText === 'string';

    if (fromText && _classPrivateFieldGet(this, _formats).indexOf(_format) === -1) {
      throw new Error(`Text to parse and format must be specified.`);
    }

    _classPrivateFieldSet(this, _state, _objectSpread({}, _classPrivateFieldGet(this, _state), {
      rawText: _rawText,
      format: _format,
      options: _objectSpread({}, {}, _options)
    }));

    if (fromText) this.parse();
  }

  get children() {
    return Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);
  }

  get mass() {
    let sum = 0;

    for (let i in _classPrivateFieldGet(this, _state).children) {
      sum += _classPrivateFieldGet(this, _state).children[i].mass;
    }

    return sum;
  }

  get childIds() {
    let ids = {};

    for (let i in _classPrivateFieldGet(this, _state).children) {
      ids[_classPrivateFieldGet(this, _state).children[i].id] = false;

      if (_classPrivateFieldGet(this, _state).children[i].childIds) {
        ids = _objectSpread({}, ids, _classPrivateFieldGet(this, _state).children[i].childIds);
      }
    }

    return ids;
  }

}

var _formats = new WeakMap();

var _state = new WeakMap();

var _createId = new WeakMap();

module.exports = Molecule;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Parser = __webpack_require__(0);

const Y = __webpack_require__(1);

const ConvertToAtomic = __webpack_require__(8);

const BasicGrammar = function BasicGrammar(Token, All, Any, Plus, Optional, Node) {
  const Molecule = this;
  return Y(function (ThisGrammar) {
    Token(/\s+/g, 'ignore');
    Token(/([()\][^_])/g, 'verbatim');
    const ElementToken = Token(/([A-Z][a-z]*)/g, 'element');
    const Count = Token(/[^^+-]([0-9]+)/g, 'count');
    const Charge = Token(/([+-]?[0-9]+)/g, 'charge');
    const ChargeNode = Node(All('^', Charge), charge => Number(charge) && Number(charge) !== 0 ? {
      charge: Number(charge)
    } : {});
    const CountNode = Node(All(Optional('_'), Count), count => Number(count) && Number(count) !== 1 ? {
      count: Number(count)
    } : {});
    const Suffix = Node(Any(All(Optional(ChargeNode), Optional(CountNode)), All(Optional(CountNode), Optional(ChargeNode))), stack => stack || []);
    const ParentheticalGroup = Node(All('(', ThisGrammar, ')', Suffix), ([subgroup, suffix]) => Molecule.createSubgroup(subgroup, suffix.reduce((a, b) => {
      a = _objectSpread({}, a, b);
      return a;
    }, {})));
    const ComplexGroup = Node(All('[', ThisGrammar, ']', Suffix), ([subgroup, suffix]) => Molecule.createSubgroup(subgroup, suffix.reduce((a, b) => {
      a = _objectSpread({}, a, b);
      return a;
    }, {
      type: 'complex'
    })));
    const FreeElement = Node(All(ElementToken, Suffix), ([symbol, suffix]) => Molecule.createElement(ConvertToAtomic(symbol), suffix.reduce((a, b) => {
      a = _objectSpread({}, a, b);
      return a;
    }, {})));
    return Node(Plus(Any(FreeElement, ParentheticalGroup, ComplexGroup)), stack => stack);
  });
};

module.exports = function (text) {
  return new Parser(BasicGrammar.bind(this)).parse(text);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const AtomicToSymbol = __webpack_require__(2);

const SymbolToAtomic = AtomicToSymbol.reduce((a, b, c) => {
  a[b] = Number(c) + 1;
  return a;
}, {});

module.exports = symbol => {
  if (SymbolToAtomic.hasOwnProperty(symbol)) return SymbolToAtomic[symbol];
  throw new Error(`Unable to resolve "${symbol}" to an atomic number.`);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Parser = __webpack_require__(0);

const Y = __webpack_require__(1);

const HydrocarbonPrefix = __webpack_require__(10);

const FunctionalGroups = __webpack_require__(11);

const GreekCounts = __webpack_require__(12);

const IupacGrammar = function IupacGrammar(Token, All, Any, Plus, Optional, Node) {
  return Y(function (ThisGrammar) {
    Token(/\s+/g, 'ignore');
    Token(/([()\-,])/g, 'verbatim');
    const PrefixNode = Node(Token(new RegExp(`(${HydrocarbonPrefix.join('|')})`, 'g'), 'prefix'), ([prefix]) => ({
      prefix
    }));
    const BondCountNode = Node(Token(/(ane?|ene?|yne?)/g, 'bondCount'), ([bondCount]) => ({
      bondCount
    }));
    const CyclicNode = Node(Token(/(cyclo)/g, 'cyclic'), () => ({
      cyclic: true
    }));
    const LocationNode = Node(Token(/([0-9]+)/g, 'location'), ([location]) => location);
    const PreFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter(group => !!FunctionalGroups[group].pre).join('|')})`, 'g'), 'prefn'), ([fn]) => ({
      fn
    }));
    const PostFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter(group => !FunctionalGroups[group].pre).join('|')})`, 'g'), 'postfn'), ([fn]) => ({
      fn
    }));
    const GreekCount = Node(Token(new RegExp(`(${GreekCounts.join('|')})`, 'g'), 'greekCount'), ([groupCount]) => ({
      groupCount
    }));
    const LocationGroup = Node(All(Optional('-'), LocationNode, Optional(Plus(All(',', LocationNode))), Optional(','), '-'), groups => ({
      location: groups.reduce((a, b) => {
        a.push(Number(b));
        return a;
      }, [])
    }));
    const PreFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PreFunctionalNode), groups => ({
      subgroup: _objectSpread({
        type: 'fngroup'
      }, groups.reduce((a, b) => {
        if (b.hasOwnProperty('location')) {
          a.location = a.location.concat(b.location);
          return a;
        }

        return _objectSpread({}, a, b);
      }, {
        location: []
      }))
    }));
    const PostFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PostFunctionalNode), groups => ({
      subgroup: _objectSpread({
        type: 'fngroup'
      }, groups.reduce((a, b) => {
        if (b.hasOwnProperty('location')) {
          a.location = a.location.concat(b.location);
          return a;
        }

        return _objectSpread({}, a, b);
      }, {
        location: []
      }))
    }));
    const FreeChain = Node(All( // 1,2,2-trichloro-
    Optional(Plus(PreFunctionalGroup)), // cyclo-
    Optional(CyclicNode), // but-
    PrefixNode, // -1,2-
    Optional(LocationGroup), // -ane, -ene, -yne
    BondCountNode, // -1,2-diol
    Optional(Plus(PostFunctionalGroup))), groups => _objectSpread({
      type: 'chain'
    }, groups.reduce((a, b) => {
      if (b.hasOwnProperty('location')) {
        a.location = a.location.concat(b.location);
        return a;
      }

      if (b.hasOwnProperty('subgroup')) {
        a.subgroups.push(b.subgroup);
        return a;
      }

      return _objectSpread({}, a, b);
    }, {
      location: [],
      subgroups: []
    })));
    return Node(Plus(Any(FreeChain)), stack => stack);
  });
};

const IupacParser = new Parser(IupacGrammar);

module.exports = text => IupacParser.parse(text);

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = ["meth","eth","prop","but","pent","hex","hept","oct","non","dec","undec","dodec","tridec","tetradec","pentadec","hexadec","heptadec","octadec","nonadec","icosn"];

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = {"fluoro":{"type":"element","element":9,"pre":true},"chloro":{"type":"element","element":17,"pre":true},"bromo":{"type":"element","element":35,"pre":true},"iodo":{"type":"element","element":53,"pre":true},"ol":{"type":"subgroup","subgroup":[{"element":8,"type":"element"},{"element":1,"type":"element"}],"pre":false}};

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = ["mono","di","tri","tetra","penta","hexa","hepta","octa","ennea","deca","hendeca","dodeca","triskaideca","tetrakaideca","pentakaideca","hexakaideca","heptakaideca","octakaideca","enneakaideca","icosa"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const RecursiveCount = __webpack_require__(3);

const Fraction = (parsed, element) => {
  let counts = RecursiveCount(parsed);
  let sum = 0;

  for (let i in counts) {
    sum += counts[i] || 0;
  }

  return (counts[element] || 0) / sum;
};

module.exports = Fraction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const AtomicToSymbol = __webpack_require__(2);

const AtomicToName = __webpack_require__(15);

const AtomicToAMU = __webpack_require__(16);

class Element {
  constructor(atomicNumber, {
    count: _count,
    charge: _charge,
    id,
    molecule
  }) {
    _state.set(this, {
      writable: true,
      value: {
        el: 1,
        count: 1,
        charge: 0,
        id: '',
        molecule: null
      }
    });

    _defineProperty(this, "serialize", () => {
      return _objectSpread({
        type: 'element',
        element: _classPrivateFieldGet(this, _state).el,
        id: _classPrivateFieldGet(this, _state).id
      }, _classPrivateFieldGet(this, _state).count !== 1 ? {
        count: _classPrivateFieldGet(this, _state).count
      } : {}, _classPrivateFieldGet(this, _state).charge !== 0 ? {
        charge: _classPrivateFieldGet(this, _state).charge
      } : {});
    });

    _defineProperty(this, "type", 'element');

    _defineProperty(this, "setCount", count => {
      if (isNaN(count) || !Number.isInteger(count) || count === 0) return;
      _classPrivateFieldGet(this, _state).count = count;
    });

    _defineProperty(this, "setCharge", charge => {
      if (isNaN(charge) || !Number.isInteger(charge)) return;
      _classPrivateFieldGet(this, _state).charge = charge;
    });

    _classPrivateFieldGet(this, _state).el = Number(atomicNumber);
    this.setCount(_count);
    this.setCharge(_charge);
    _classPrivateFieldGet(this, _state).id = id;
    _classPrivateFieldGet(this, _state).molecule = molecule;
  }

  get element() {
    return _classPrivateFieldGet(this, _state).el;
  }

  get symbol() {
    return AtomicToSymbol[_classPrivateFieldGet(this, _state).el - 1];
  }

  get name() {
    return AtomicToName[_classPrivateFieldGet(this, _state).el - 1];
  }

  get mass() {
    return AtomicToAMU[_classPrivateFieldGet(this, _state).el - 1] * _classPrivateFieldGet(this, _state).count;
  }

  get count() {
    return _classPrivateFieldGet(this, _state).count;
  }

  get charge() {
    return _classPrivateFieldGet(this, _state).charge;
  }

  get parent() {
    return _classPrivateFieldGet(this, _state).molecule.findById(_classPrivateFieldGet(this, _state).molecule.childIds[_classPrivateFieldGet(this, _state).id]);
  }

  get id() {
    return _classPrivateFieldGet(this, _state).id;
  }

}

var _state = new WeakMap();

module.exports = Element;

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium"];

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = [1.008,4.003,6.941,9.012,10.811,12.011,14.007,15.999,18.998,20.18,22.99,24.305,26.982,28.086,30.974,32.065,35.453,39.948,39.098,40.078,44.956,47.867,50.942,51.996,54.938,55.845,58.933,58.693,63.546,65.39,69.723,72.64,74.922,78.96,79.904,83.8,85.468,87.62,88.906,91.224,92.906,95.94,98,101.07,102.906,106.42,107.868,112.411,114.818,118.71,121.76,127.6,126.905,131.293,132.906,137.327,138.906,140.116,140.908,144.24,145,150.36,151.964,157.25,158.925,162.5,164.93,167.259,168.934,173.04,174.967,178.49,180.948,183.84,186.207,190.23,192.217,195.078,196.967,200.59,204.383,207.2,208.98,209,210,222,223,226,227,232.038,231.036,238.029,237,244,243,247,247,251,252,257,258,259,262,261,262,266,264,277,268];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const FindById = __webpack_require__(4);

class Subgroup {
  constructor(_children, {
    type: _type,
    count: _count,
    charge: _charge,
    id: _id
  }) {
    _state.set(this, {
      writable: true,
      value: {
        children: [],
        type: 'subgroup',
        count: 1,
        charge: 0,
        id: ''
      }
    });

    _defineProperty(this, "findById", id => FindById(id, _classPrivateFieldGet(this, _state).children));

    _defineProperty(this, "serialize", () => {
      let children = Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);

      for (let i in children) {
        if (typeof children[i].serialize === 'function') {
          children[i] = children[i].serialize();
        }
      }

      return _objectSpread({
        type: _classPrivateFieldGet(this, _state).type,
        children,
        id: _classPrivateFieldGet(this, _state).id
      }, _classPrivateFieldGet(this, _state).count !== 1 ? {
        count: _classPrivateFieldGet(this, _state).count
      } : {}, _classPrivateFieldGet(this, _state).charge !== 0 ? {
        charge: _classPrivateFieldGet(this, _state).charge
      } : {});
    });

    _defineProperty(this, "setType", type => {
      const types = ['subgroup', 'complex'];

      if (types.indexOf(type) !== -1) {
        _classPrivateFieldGet(this, _state).type = type;
      } else if (type) {
        throw new Error(`Invalid subgroup type: ${type}`);
      }
    });

    _defineProperty(this, "setCount", count => {
      if (isNaN(count) || !Number.isInteger(count) || count === 0) return;
      _classPrivateFieldGet(this, _state).count = count;
    });

    _defineProperty(this, "setCharge", charge => {
      if (isNaN(charge) || !Number.isInteger(charge)) return;
      _classPrivateFieldGet(this, _state).charge = charge;
    });

    _defineProperty(this, "append", item => {
      const types = ['element', 'subgroup', 'complex'];
      if (!item || types.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');

      _classPrivateFieldGet(this, _state).children.push(item);

      item.setParent(this);
    });

    this.setType(_type);
    this.setCount(_count);
    this.setCharge(_charge);
    _classPrivateFieldGet(this, _state).id = _id;

    for (let i in _children) {
      if (Array.isArray(_children[i])) {
        _classPrivateFieldGet(this, _state).children = _classPrivateFieldGet(this, _state).children.concat(_children[i]);
      } else {
        _classPrivateFieldGet(this, _state).children.push(_children[i]);
      }
    }
  }

  get id() {
    return _classPrivateFieldGet(this, _state).id;
  }

  get type() {
    return _classPrivateFieldGet(this, _state).type;
  }

  get children() {
    return Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);
  }

  get childIds() {
    let ids = {};

    for (let i in _classPrivateFieldGet(this, _state).children) {
      ids[_classPrivateFieldGet(this, _state).children[i].id] = _classPrivateFieldGet(this, _state).id;

      if (_classPrivateFieldGet(this, _state).children[i].childIds) {
        ids = _objectSpread({}, ids, _classPrivateFieldGet(this, _state).children[i].childIds);
      }
    }

    return ids;
  }

  get count() {
    return _classPrivateFieldGet(this, _state).count;
  }

  get charge() {
    return _classPrivateFieldGet(this, _state).charge;
  }

  get mass() {
    let sum = 0;

    for (let i in _classPrivateFieldGet(this, _state).children) {
      sum += _classPrivateFieldGet(this, _state).children[i].mass;
    }

    return sum * _classPrivateFieldGet(this, _state).count;
  }

  get parent() {
    return _classPrivateFieldGet(this, _state).molecule.findById(_classPrivateFieldGet(this, _state).molecule.childIds[_classPrivateFieldGet(this, _state).id]);
  }

}

var _state = new WeakMap();

module.exports = Subgroup;

/***/ })
/******/ ]);
//# sourceMappingURL=mcul.node.js.map