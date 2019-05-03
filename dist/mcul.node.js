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
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Basic = __webpack_require__(1);

class Molecule {
  constructor(options) {
    _defineProperty(this, "parse", (text, type) => {
      if (type === 'basic') {
        Basic(text);
      }
    });

    this.state = {};
    this.options = _objectSpread({}, options, {
      a: 1
    });
  }

}

module.exports = function MoleculeGenerator(options) {
  return new Molecule(options);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Parser = __webpack_require__(2);

const Y = function Y(gen) {
  return function (f) {
    return f(f);
  }(function (f) {
    return gen(function () {
      return f(f).apply(null, arguments);
    });
  });
};

const BasicGrammar = function BasicGrammar(Token, All, Any, Plus, Optional, Node) {
  return Y(function (ThisGrammar) {
    Token(/\s+/g, 'ignore');
    Token(/([()\][^_])/g, 'verbatim');
    const Element = Token(/([A-Z][a-z]*)/g, 'element');
    const Count = Token(/((?<![\^+-])[0-9]+)/g, 'count');
    const Charge = Token(/([+-]?[0-9]+)/g, 'charge');
    const ChargeNode = Node(All('^', Charge), charge => Number(charge) && Number(charge) !== 0 ? {
      charge: Number(charge)
    } : {});
    const CountNode = Node(All(Optional('_'), Count), count => Number(count) && Number(count) !== 1 ? {
      count: Number(count)
    } : {});
    const Suffix = Node(Any(All(Optional(ChargeNode), Optional(CountNode)), All(Optional(CountNode), Optional(ChargeNode))), stack => stack || []);
    const ParentheticalGroup = Node(All('(', ThisGrammar, ')', Suffix), ([subgroup, suffix]) => _objectSpread({
      type: 'subgroup',
      subgroup
    }, suffix.reduce((a, b) => {
      a = _objectSpread({}, a, b);
      return a;
    }, {})));
    const ComplexGroup = Node(All('[', ThisGrammar, ']', Suffix), ([subgroup, suffix]) => _objectSpread({
      type: 'complex',
      subgroup
    }, suffix.reduce((a, b) => {
      a = _objectSpread({}, a, b);
      return a;
    }, {})));
    const FreeElement = Node(All(Element, Suffix), ([symbol, suffix]) => _objectSpread({
      type: 'element',
      symbol
    }, suffix.reduce((a, b) => {
      a = _objectSpread({}, a, b);
      return a;
    }, {})));
    return Node(Plus(Any(FreeElement, ParentheticalGroup, ComplexGroup)), stack => stack);
  });
};

const BasicParser = new Parser(BasicGrammar);

module.exports = text => BasicParser.parse(text);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rd-parse");

/***/ })
/******/ ]);