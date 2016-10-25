(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Joometrie"] = factory();
	else
		root["Joometrie"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Polygon = exports.MultiPoint = exports.Point = undefined;
	
	var _Point = __webpack_require__(1);
	
	var _MultiPoint = __webpack_require__(4);
	
	var _Polygon = __webpack_require__(5);
	
	exports.Point = _Point.Point;
	exports.MultiPoint = _MultiPoint.MultiPoint;
	exports.Polygon = _Polygon.Polygon;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Point = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _JoomArray2 = __webpack_require__(2);
	
	var _MultiPoint = __webpack_require__(4);
	
	var _errors = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Point = function (_JoomArray) {
		_inherits(Point, _JoomArray);
	
		function Point() {
			var _ref;
	
			_classCallCheck(this, Point);
	
			// make a new error generator
			var makeError = new _errors.ErrorMaker('point');
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			makeError.if(args.length === 0, _errors.ERRORS.VALUE_MISSING);
			// super(fn, ...args) a new JoomArray with a flatmap function
	
			// error if no matches
			var _this = _possibleConstructorReturn(this, (_ref = Point.__proto__ || Object.getPrototypeOf(Point)).call.apply(_ref, [this,
			// force matches to numbers and return them
			function (arg) {
				return typeof arg === 'number'
				// if arg is a number, it's good to return
				? [arg] : arg
				// if not, convert it to a string...
				.toString()
				// ...scour it for any semblance of a signed decimal...
				.match(/(\-?[\d]+(\.?\d+)?)/g)
				// ...and force all matches to number or zero
				.map(function (item) {
					return Number(item) || 0;
				});
			}].concat(args)));
	
			makeError.if(!_this, _errors.ERRORS.NO_MATCHES);
			// error if final point has more than 3 coords
			makeError.if(_this.length !== 3, _errors.ERRORS.NOT_ENOUGH_VAL);
			return _this;
		}
	
		_createClass(Point, [{
			key: 'push',
			value: function push() {
				for (var _len2 = arguments.length, vals = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					vals[_key2] = arguments[_key2];
				}
	
				var point = new Point(vals);
				return new _MultiPoint.MultiPoint(this, point);
			}
		}]);
	
		return Point;
	}(_JoomArray2.JoomArray);
	
	exports.Point = Point;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.JoomArray = undefined;
	
	var _errors = __webpack_require__(3);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
		function ExtendableBuiltin() {
			var instance = Reflect.construct(cls, Array.from(arguments));
			Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
			return instance;
		}
	
		ExtendableBuiltin.prototype = Object.create(cls.prototype, {
			constructor: {
				value: cls,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	
		if (Object.setPrototypeOf) {
			Object.setPrototypeOf(ExtendableBuiltin, cls);
		} else {
			ExtendableBuiltin.__proto__ = cls;
		}
	
		return ExtendableBuiltin;
	}
	
	var JoomArray = function (_extendableBuiltin2) {
		_inherits(JoomArray, _extendableBuiltin2);
	
		function JoomArray(flatmapFn) {
			var _ref;
	
			_classCallCheck(this, JoomArray);
	
			// make a new error generator
			// error immediately if no args present
			var makeError = new _errors.ErrorMaker('JoomArray');
	
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}
	
			makeError.if(args.length === 0, _errors.ERRORS.VALUE_MISSING);
	
			// const vals = Array.prototype.concat.apply([], args.map(flatmapFn));
			var vals = Reflect.apply(Array.prototype.concat, [], args.map(flatmapFn));
			return _possibleConstructorReturn(this, (_ref = JoomArray.__proto__ || Object.getPrototypeOf(JoomArray)).call.apply(_ref, [this].concat(_toConsumableArray(vals))));
		}
	
		return JoomArray;
	}(_extendableBuiltin(Array));
	
	exports.JoomArray = JoomArray;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
		function ExtendableBuiltin() {
			var instance = Reflect.construct(cls, Array.from(arguments));
			Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
			return instance;
		}
	
		ExtendableBuiltin.prototype = Object.create(cls.prototype, {
			constructor: {
				value: cls,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	
		if (Object.setPrototypeOf) {
			Object.setPrototypeOf(ExtendableBuiltin, cls);
		} else {
			ExtendableBuiltin.__proto__ = cls;
		}
	
		return ExtendableBuiltin;
	}
	
	var ERRORS = {
		VALUE_MISSING: 'no values provided',
		NO_MATCHES: 'no valid values found',
		NOT_ENOUGH_VAL: 'invalid number of values'
	};
	
	var JoomError = function (_extendableBuiltin2) {
		_inherits(JoomError, _extendableBuiltin2);
	
		function JoomError(type, msg) {
			_classCallCheck(this, JoomError);
	
			var _this = _possibleConstructorReturn(this, (JoomError.__proto__ || Object.getPrototypeOf(JoomError)).call(this, msg));
	
			_this.type = type;
			_this.message = _this.message + ' for ' + _this.type;
			_this.name = 'JoomError';
			return _this;
		}
	
		_createClass(JoomError, [{
			key: 'toString',
			value: function toString() {
				return this.message + ' for ' + this.type;
			}
		}]);
	
		return JoomError;
	}(_extendableBuiltin(Error));
	
	var ErrorMaker = function () {
		function ErrorMaker(type) {
			_classCallCheck(this, ErrorMaker);
	
			this.type = type;
			Object.assign(this, ERRORS);
		}
	
		_createClass(ErrorMaker, [{
			key: 'if',
			value: function _if(cond, msg) {
				if (!!cond) throw new JoomError(this.type, msg);
			}
		}]);
	
		return ErrorMaker;
	}();
	
	exports.ErrorMaker = ErrorMaker;
	exports.ERRORS = ERRORS;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MultiPoint = undefined;
	
	var _JoomArray2 = __webpack_require__(2);
	
	var _Point = __webpack_require__(1);
	
	var _errors = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MultiPoint = function (_JoomArray) {
		_inherits(MultiPoint, _JoomArray);
	
		function MultiPoint() {
			var _ref;
	
			_classCallCheck(this, MultiPoint);
	
			var makeError = new _errors.ErrorMaker('multipoint');
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			makeError.if(args.length === 0, _errors.ERRORS.VALUE_MISSING);
	
			// error if no matches
			var _this = _possibleConstructorReturn(this, (_ref = MultiPoint.__proto__ || Object.getPrototypeOf(MultiPoint)).call.apply(_ref, [this,
			// force matches to numbers and return them
			function (arg) {
				return arg instanceof _Point.Point
				// if arg is a number, it's good to return
				? [arg] : arg
				// if not, convert it to a string...
				.toString()
				// ...scour it for any semblance of a signed decimal...
				.match(/(\ *(\-?[\d]+(\.?\d+)?)+\ *[\,]?){3}/g)
				// ...and force all matches to number or zero
				.map(function (item) {
					return new _Point.Point(item) || 0;
				});
			}].concat(args)));
	
			makeError.if(!_this || !_this.length, _errors.ERRORS.NO_MATCHES);
			// makeError.if( (this.length === 1), ERRORS.NOT_ENOUGH_VAL);
			return _this;
		}
	
		return MultiPoint;
	}(_JoomArray2.JoomArray);
	
	exports.MultiPoint = MultiPoint;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Polygon = undefined;
	
	var _JoomArray2 = __webpack_require__(2);
	
	var _MultiPoint = __webpack_require__(4);
	
	var _errors = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Polygon = function (_JoomArray) {
		_inherits(Polygon, _JoomArray);
	
		function Polygon() {
			var _ref;
	
			_classCallCheck(this, Polygon);
	
			var makeError = new _errors.ErrorMaker('polygon');
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			makeError.if(args.length === 0, _errors.ERRORS.VALUE_MISSING);
	
			var _this = _possibleConstructorReturn(this, (_ref = Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call.apply(_ref, [this,
			// force matches to numbers and return them
			function (arg) {
				return arg instanceof _MultiPoint.MultiPoint
				// if arg is a number, it's good to return
				? [arg] : arg
				// if not, convert it to a string...
				.toString()
				// ...scour it for any semblance of a signed decimal...
				.match(/((\ *(\-?[\d]+(\.?\d+)?)+\ *[\,]?){3})+/g)
				// ...and force all matches to number or zero
				.map(function (item) {
					return new _MultiPoint.MultiPoint(item) || 0;
				});
			}].concat(args)));
	
			makeError.if(!_this || !_this.length, _errors.ERRORS.NO_MATCHES);
			return _this;
		}
	
		return Polygon;
	}(_JoomArray2.JoomArray);
	
	exports.Polygon = Polygon;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=joometries.js.map