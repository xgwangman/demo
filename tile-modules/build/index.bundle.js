// {"framework" : "Rax"}
define("index.bundle", function(require) {/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _tileLink = __webpack_require__(7);

	var _tileLink2 = _interopRequireDefault(_tileLink);

	var _tileImage = __webpack_require__(9);

	var _tileImage2 = _interopRequireDefault(_tileImage);

	var _tileIcon = __webpack_require__(22);

	var _tileIcon2 = _interopRequireDefault(_tileIcon);

	var _tileScrollview = __webpack_require__(25);

	var _tileScrollview2 = _interopRequireDefault(_tileScrollview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var demos = {
	  base: {
	    mtop: __webpack_require__(28),
	    fetch: __webpack_require__(60),
	    jsonp: __webpack_require__(61),
	    storage: __webpack_require__(62)
	  },
	  interface: {
	    navigator: __webpack_require__(63),
	    toast: __webpack_require__(64)
	  },
	  device: {
	    env: __webpack_require__(65),
	    geolocation: __webpack_require__(66),
	    network: __webpack_require__(67)
	  },
	  other: {
	    wangwang: __webpack_require__(68),
	    user: __webpack_require__(69),
	    scancode: __webpack_require__(70)
	  }
	};

	var Index = function (_Component) {
	  _inherits(Index, _Component);

	  function Index() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Index);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      part: function () {
	        var m = window.location.href.match(/part=([^#&?$]+)/);
	        return m && m[1];
	      }(),
	      demo: function () {
	        var m = window.location.href.match(/demo=([^#&?$]+)/);
	        return m && m[1];
	      }(),
	      isSingle: function () {
	        var m = window.location.href.match(/isSingle(=([^#&?$]+))?/);
	        return m && m[1];
	      }()
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Index, [{
	    key: 'changeDemoName',
	    value: function changeDemoName(part, demo) {
	      this.setState({
	        part: part,
	        demo: demo
	      });
	      if (window.history && window.history.replaceState) {
	        window.history.replaceState(null, null, '?part=' + part + '&demo=' + demo);
	      }
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(DemoName) {
	      var _this2 = this;

	      var demo = this.state.demo;
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: [styles.itemWrapper, styles.wholeWrapper] },
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { style: styles.titleWrapper },
	          (0, _rax.createElement)(
	            _tileView2.default,
	            { style: styles.itemIconLink, onClick: function onClick() {
	                return _this2.changeDemoName(null, null);
	              } },
	            !this.state.isSingle && (0, _rax.createElement)(_tileIcon2.default, {
	              style: styles.itemIcon,
	              fontFamily: 'iconfont',
	              source: { uri: '//at.alicdn.com/t/font_383853_eoj22s8ewx6flxr.ttf', codePoint: '\uE607' }
	            }),
	            (0, _rax.createElement)(_tileText2.default, null)
	          ),
	          (0, _rax.createElement)(
	            _tileText2.default,
	            { style: styles.itemTitle },
	            'Tida.',
	            demo
	          )
	        ),
	        (0, _rax.createElement)(
	          _tileScrollview2.default,
	          { ref: function ref(scrollview) {
	              _this2.scrollview = scrollview;
	            } },
	          (0, _rax.createElement)(
	            _tileView2.default,
	            { style: [styles.pWrapper, { marginTop: 40 }] },
	            (0, _rax.createElement)(
	              _tileView2.default,
	              { style: styles.pindexTitle },
	              (0, _rax.createElement)(
	                _tileText2.default,
	                { style: styles.pTitleText },
	                '\u5F15\u7528\u65B9\u5F0F'
	              )
	            ),
	            (0, _rax.createElement)(
	              _tileView2.default,
	              { style: styles.install },
	              (0, _rax.createElement)(
	                _tileText2.default,
	                { style: styles.installText },
	                '// Tida \u662F\u6846\u67B6\u6CE8\u5165\u7684\u5168\u5C40\u53D8\u91CF'
	              ),
	              (0, _rax.createElement)(
	                _tileText2.default,
	                null,
	                'const ',
	                demo,
	                ' = Tida.',
	                demo,
	                ';'
	              )
	            )
	          ),
	          (0, _rax.createElement)(
	            _tileView2.default,
	            { style: styles.pWrapper },
	            (0, _rax.createElement)(
	              _tileView2.default,
	              { style: styles.pindexTitle },
	              (0, _rax.createElement)(
	                _tileText2.default,
	                { style: styles.pTitleText },
	                '\u6548\u679C\u6F14\u793A'
	              )
	            )
	          ),
	          (0, _rax.createElement)(DemoName, null),
	          (0, _rax.createElement)(
	            _tileView2.default,
	            { style: styles.footer },
	            (0, _rax.createElement)(
	              _tileText2.default,
	              { style: styles.footerText, onclick: function onclick() {
	                  return _this2.changeDemoName(null);
	                } },
	              '\xA9 TOBM - Tida'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderIndex',
	    value: function renderIndex() {
	      var _this3 = this;

	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: [styles.indexWrapper, styles.wholeWrapper] },
	        (0, _rax.createElement)(
	          _tileScrollview2.default,
	          null,
	          (0, _rax.createElement)(
	            _tileView2.default,
	            { style: styles.header },
	            (0, _rax.createElement)(
	              _tileText2.default,
	              { style: styles.headerText },
	              'Tida / \u6A21\u5757\u5217\u8868'
	            )
	          ),
	          Object.keys(demos).map(function (part) {
	            var coms = demos[part];
	            return (0, _rax.createElement)(
	              _tileView2.default,
	              null,
	              (0, _rax.createElement)(
	                _tileView2.default,
	                { style: styles.indexTitle },
	                (0, _rax.createElement)(
	                  _tileText2.default,
	                  { style: styles.indexTitleText },
	                  firstLetterUpperCase(part)
	                )
	              ),
	              Object.keys(coms).map(function (demo) {
	                return (0, _rax.createElement)(
	                  _tileView2.default,
	                  { style: styles.list },
	                  (0, _rax.createElement)(
	                    _tileView2.default,
	                    { style: styles.item, onClick: function onClick() {
	                        return _this3.changeDemoName(part, demo);
	                      } },
	                    (0, _rax.createElement)(_tileIcon2.default, {
	                      style: styles.icon,
	                      fontFamily: 'iconfont',
	                      source: { uri: '//at.alicdn.com/t/font_383853_eoj22s8ewx6flxr.ttf', codePoint: '\uE644' }
	                    }),
	                    (0, _rax.createElement)(
	                      _tileText2.default,
	                      { style: styles.itemText },
	                      firstLetterUpperCase(demo)
	                    ),
	                    (0, _rax.createElement)(_tileIcon2.default, {
	                      style: styles.iconArrow,
	                      fontFamily: 'iconfont',
	                      source: { uri: '//at.alicdn.com/t/font_383853_eoj22s8ewx6flxr.ttf', codePoint: icons.right }
	                    })
	                  )
	                );
	              })
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var part = this.state.part;
	      var demo = this.state.demo;
	      var showItem = part && demo && demos[part] && demos[part][demo];
	      if (!showItem) {
	        return this.renderIndex();
	      } else {
	        return this.renderItem(showItem);
	      }
	    }
	  }]);

	  return Index;
	}(_rax.Component);

	function firstLetterUpperCase(text) {
	  return text.charAt(0).toUpperCase() + text.slice(1);
	}

	var styles = {
	  wholeWrapper: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0
	  },
	  itemWrapper: {
	    backgroundColor: '#FFF'
	  },
	  indexWrapper: {
	    backgroundColor: '#f2f3f4'
	  },
	  header: {
	    backgroundColor: '#FFF',
	    padding: 20,
	    marginBottom: 20,
	    display: 'flex',
	    alignItems: 'center',
	    borderBottom: '1px solid #e0e0e0'
	  },
	  headerText: {
	    fontSize: 40,
	    color: '#F60'
	  },
	  indexTitle: {
	    width: 750,
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    height: 120,
	    lineHeight: 120
	  },
	  indexTitleText: {
	    fontSize: 40,
	    color: '#555'
	  },
	  list: {
	    backgroundColor: '#FFF',
	    borderTop: '1px solid #f2f3f4'
	  },
	  item: {
	    display: 'flex',
	    height: 90,
	    flexDirection: 'row',
	    justifyContent: 'flex-start',
	    alignItems: 'center',
	    padding: 20,
	    borderBottomWidth: 2,
	    borderBottomStyle: 'solid',
	    borderBottomColor: '#f2f3f4',
	    position: 'relative'
	  },
	  itemText: {
	    color: '#555'
	  },
	  icon: {
	    color: '#F60',
	    fontSize: 34,
	    marginRight: 18
	  },
	  iconArrow: {
	    color: '#999',
	    position: 'absolute',
	    fontSize: 24,
	    right: 20
	  },
	  pWrapper: {
	    padding: 20
	  },
	  pTitleText: {
	    borderLeftWidth: 8,
	    borderLeftStyle: 'solid',
	    borderLeftColor: '#F60',
	    paddingLeft: 20,
	    paddingRight: 20,
	    paddingTop: 16,
	    paddingBottom: 18,
	    color: '#666',
	    fontSize: 32,
	    backgroundColor: '#f2f3f4'
	  },
	  install: {
	    padding: 20,
	    color: '#666',
	    marginTop: 20,
	    fontFamily: 'Consolas, sans-serif'
	  },
	  installText: {
	    fontSize: 28,
	    marginBottom: 20,
	    color: '#999'
	  },
	  itemIconLink: {
	    width: 50,
	    height: 50,
	    position: 'absolute',
	    top: 20,
	    left: 14
	  },
	  itemIcon: {
	    color: '#F60',
	    fontSize: 36
	  },
	  titleWrapper: {
	    display: 'flex',
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderBottom: '1px solid #E0E0E0',
	    position: 'relative',
	    backgroundColor: '#f2f3f4'
	  },
	  itemTitle: {
	    paddingTop: 20,
	    paddingBottom: 20,
	    fontSize: 40,
	    fontFamily: 'Consolas, sans-serif',
	    color: '#777'
	  },
	  container: {
	    borderStyle: 'solid',
	    borderColor: '#dddddd',
	    borderWidth: 1,
	    marginLeft: 20,
	    marginRight: 20,
	    marginBottom: 10
	  },
	  footer: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    marginTop: 40,
	    marginBottom: 20
	  },
	  footerText: {
	    color: '#f60',
	    fontSize: 24
	  }
	};

	var icons = {
	  share: '\uE644',
	  image: '\uE600',
	  waterfall: '\uE62F',
	  video: '\uEA21',
	  refreshcontrol: '\uE6C7',
	  gotop: '\uE616',
	  button: '\uE904',
	  icon: '\uE622',
	  calendar: '\uE6BD',
	  slider: '\uE617',
	  input: '\uE64E',
	  countdown: '\uE618',
	  recyclerview: '\uE60D',
	  text: '\uE6CA',
	  multirow: '\uE83D',
	  view: '\uE8CB',
	  listview: '\uE6B4',
	  scrollview: '\uE61D',
	  link: '\uE62C',
	  picker: '\uE624',
	  modal: '\uE685',
	  right: '\uE643'
	};

	(0, _rax.render)((0, _rax.createElement)(Index, null));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = (function(){ var mod;if (!mod) { try { mod = require("rax") } catch(e) {} }return mod;})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _raxView = __webpack_require__(3);

	var _raxView2 = _interopRequireDefault(_raxView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TBOCView = function (_View) {
	  _inherits(TBOCView, _View);

	  function TBOCView() {
	    _classCallCheck(this, TBOCView);

	    return _possibleConstructorReturn(this, (TBOCView.__proto__ || Object.getPrototypeOf(TBOCView)).apply(this, arguments));
	  }

	  _createClass(TBOCView, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      if (props.clickable) {
	        props.onClick = props.onPress;
	        props.style = Object.assign({
	          cursor: 'pointer'
	        }, props.style);
	        return (0, _rax.createElement)(_raxView2.default, props);
	      } else {
	        return (0, _rax.createElement)(_raxView2.default, props);
	      }
	    }
	  }]);

	  return TBOCView;
	}(_raxView2.default);

	exports.default = TBOCView;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var View = function (_Component) {
	  _inherits(View, _Component);

	  function View() {
	    _classCallCheck(this, View);

	    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	  }

	  _createClass(View, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      if (_universalEnv.isWeex) {
	        // TODO: do not pass object value in props
	        return (0, _rax.createElement)('div', props);
	      } else {
	        var styleProps = _extends({}, styles.initial, props.style);
	        return (0, _rax.createElement)('div', _extends({}, props, { style: styleProps }));
	      }
	    }
	  }]);

	  return View;
	}(_rax.Component);

	View.propTypes = {};

	var styles = {
	  initial: {
	    border: '0 solid black',
	    position: 'relative',
	    boxSizing: 'border-box',
	    display: 'flex',
	    flexDirection: 'column',
	    alignContent: 'flex-start',
	    flexShrink: 0
	  }
	};

	exports.default = View;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	var isWeex = exports.isWeex = typeof callNative === 'function';
	var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	exports['default'] = module.exports;
	exports.default = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rax = __webpack_require__(1);

	var _raxText = __webpack_require__(6);

	var _raxText2 = _interopRequireDefault(_raxText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _raxText2.default;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Text = function (_Component) {
	  _inherits(Text, _Component);

	  function Text() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Text);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _this.renderText = function () {
	      var props = _this.props;
	      var nativeProps = _extends({}, props, {
	        style: props.style || {}
	      });

	      var textString = '';
	      if (props.children != null) {
	        if (!Array.isArray(props.children)) {
	          textString = props.children.toString();
	        } else {
	          textString = props.children.join('');
	        }
	      }

	      if (_this.context.isInAParentText) {
	        return (0, _rax.createElement)('span', nativeProps, textString);
	      }

	      if (props.onPress) {
	        nativeProps.onClick = props.onPress;
	      }

	      if (_universalEnv.isWeex) {
	        if (props.numberOfLines) {
	          nativeProps.style.lines = props.numberOfLines;
	        }

	        nativeProps.value = textString;

	        return (0, _rax.createElement)('text', nativeProps);
	      } else {
	        var styleProps = _extends({}, styles.text, nativeProps.style);
	        var numberOfLines = props.numberOfLines;
	        if (numberOfLines) {
	          if (parseInt(numberOfLines) === 1) {
	            styleProps.whiteSpace = 'nowrap';
	          } else {
	            styleProps.display = '-webkit-box';
	            styleProps.webkitBoxOrient = 'vertical';
	            styleProps.webkitLineClamp = String(numberOfLines);
	          }

	          styleProps.overflow = 'hidden';
	        }

	        return (0, _rax.createElement)('span', _extends({}, nativeProps, { style: styleProps }), textString);
	      }
	    }, _this.renderRichText = function () {
	      var props = _this.props;
	      var children = props.children;

	      var nativeProps = _extends({}, props, {
	        style: props.style || {}
	      });
	      var styleProps = _extends({}, styles.richtext, nativeProps.style);

	      if (_universalEnv.isWeex) {
	        children = transformChildren(children, _this);
	      }

	      return (0, _rax.createElement)('p', _extends({}, nativeProps, { style: styleProps }), children);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Text, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        isInAParentText: true
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var children = props.children;

	      if (!Array.isArray(children)) {
	        children = [children];
	      }

	      var nested = false;
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (child && (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
	          nested = true;
	          break;
	        }
	      }

	      return nested ? this.renderRichText() : this.renderText();
	    }
	  }]);

	  return Text;
	}(_rax.Component);

	Text.propTypes = {};
	Text.contextTypes = {
	  isInAParentText: _rax.PropTypes.bool
	};
	Text.childContextTypes = {
	  isInAParentText: _rax.PropTypes.bool
	};

	function transformChild(child, instance) {
	  var ChildComponent = child.type,
	      props = child.props;
	  var children = props.children;

	  if (typeof ChildComponent === 'function') {
	    var childInstance = new ChildComponent();
	    childInstance.props = props;
	    if (children) {
	      childInstance.props.children = transformChildren(children, instance);
	    }
	    childInstance.context = instance.getChildContext();

	    return childInstance.render();
	  } else {
	    return child;
	  }
	}

	function transformChildren(children, instance) {
	  var elements = [];
	  if (!Array.isArray(children)) {
	    children = [children];
	  }

	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (typeof child === 'string') {
	      elements.push(child);
	    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
	      elements.push(transformChild(child, instance));
	    }
	  }

	  return elements;
	}

	var styles = {
	  text: {
	    border: '0 solid black',
	    position: 'relative',
	    boxSizing: 'border-box',
	    display: 'block',
	    flexDirection: 'column',
	    alignContent: 'flex-start',
	    flexShrink: 0,
	    fontSize: 32
	  },
	  richtext: {
	    marginTop: 0,
	    marginBottom: 0
	  }
	};

	exports.default = Text;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rax = __webpack_require__(1);

	var _raxLink = __webpack_require__(8);

	var _raxLink2 = _interopRequireDefault(_raxLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _raxLink2.default;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	var _raxText = __webpack_require__(6);

	var _raxText2 = _interopRequireDefault(_raxText);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Link = function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
	  }

	  _createClass(Link, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        isInAParentLink: true
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // https://www.w3.org/TR/html4/struct/links.html#h-12.2.2
	      if (this.context.isInAParentLink) {
	        return console.error('Nested links are illegal');
	      }

	      var props = this.props;
	      var children = props.children;
	      var nativeProps = _extends({}, props);
	      var style = _extends({}, styles.initial, nativeProps.style);
	      var textStyle = {
	        color: style.color,
	        lines: style.lines,
	        fontSize: style.fontSize,
	        fontStyle: style.fontStyle,
	        fontWeight: style.fontWeight,
	        textDecoration: style.textDecoration,
	        textAlign: style.textAlign,
	        fontFamily: style.fontFamily,
	        textOverflow: style.textOverflow
	      };

	      if (nativeProps.onPress) {
	        nativeProps.onClick = nativeProps.onPress;
	        delete nativeProps.onPress;
	      }

	      var content = children;
	      if (typeof children === 'string' && !this.context.isInAParentText) {
	        content = (0, _rax.createElement)(_raxText2.default, { style: textStyle }, children);
	      }

	      if (_universalEnv.isWeex) {
	        return (0, _rax.createElement)('a', nativeProps, content);
	      } else {
	        return (0, _rax.createElement)('a', _extends({}, nativeProps, { style: style }), content);
	      }
	    }
	  }]);

	  return Link;
	}(_rax.Component);

	Link.contextTypes = {
	  isInAParentLink: _rax.PropTypes.bool,
	  isInAParentText: _rax.PropTypes.bool
	};
	Link.childContextTypes = {
	  isInAParentLink: _rax.PropTypes.bool
	};

	var styles = {
	  initial: {
	    textDecoration: 'none'
	  }
	};

	exports.default = Link;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rax = __webpack_require__(1);

	var _raxPicture = __webpack_require__(10);

	var _raxPicture2 = _interopRequireDefault(_raxPicture);

	var _raxImage = __webpack_require__(12);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TBOCImage = _raxPicture2.default;
	TBOCImage.resizeMode = _raxImage2.default.resizeMode;

	exports.default = TBOCImage;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(4);

	var Picture = void 0;
	if (_universalEnv.isWeb) {
	  Picture = __webpack_require__(11);
	} else {
	  Picture = __webpack_require__(21);
	}

	exports.default = Picture;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _raxView = __webpack_require__(3);

	var _raxView2 = _interopRequireDefault(_raxView);

	var _raxImage = __webpack_require__(12);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	var _index = __webpack_require__(13);

	var _index2 = _interopRequireDefault(_index);

	var _webp = __webpack_require__(20);

	var _webp2 = _interopRequireDefault(_webp);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var toString = {}.toString;
	var isArray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	var isSupportJPG = false;
	var isSupportPNG = false;

	_webp2.default.isSupport(function (_isSupportJPG) {
	  isSupportJPG = _isSupportJPG;
	});

	_webp2.default.isSupport(function (_isSupportPNG) {
	  isSupportPNG = _isSupportPNG;
	}, 'alpha');

	/**
	 * @param  {String|Array} suffix
	 * @return {[type]}        [description]
	 */
	function parseSuffix(suffix) {
	  var result = [];
	  var ret = [];

	  if (typeof suffix === 'string') {
	    ret = suffix.split(',');
	  }

	  if (isArray(suffix)) {
	    ret = suffix;
	  }

	  if (ret && ret[0]) {
	    result[0] = ret[0];
	  }
	  if (ret && ret[1]) {
	    result[1] = ret[1];
	  }

	  return result;
	}

	/**
	 * @param  {String|Array} suffix
	 * @return {[type]}
	 */
	function getQualitySuffix(highQuality, suffix) {
	  var _suffix = parseSuffix(suffix);
	  return highQuality ? _suffix[0] : _suffix[1];
	}

	var Picture = function (_Component) {
	  _inherits(Picture, _Component);

	  function Picture() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Picture);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picture.__proto__ || Object.getPrototypeOf(Picture)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      visible: false
	    }, _this.uri = '', _this.newStyle = {}, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Picture, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      if (this.props.source.uri !== nextProps.source.uri) {
	        this.uri = '';
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.props.forceUpdate || this.props.children) {
	        return true;
	      }

	      return this.props.source.uri !== nextProps.source.uri || this.state.visible !== nextState.visible;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          children = _props.children,
	          _props$style = _props.style,
	          style = _props$style === undefined ? {} : _props$style,
	          _props$source = _props.source,
	          source = _props$source === undefined ? {} : _props$source,
	          resizeMode = _props.resizeMode,
	          width = _props.width,
	          height = _props.height,
	          defaultHeight = _props.defaultHeight,
	          autoRemoveScheme = _props.autoRemoveScheme,
	          autoReplaceDomain = _props.autoReplaceDomain,
	          autoScaling = _props.autoScaling,
	          autoWebp = _props.autoWebp,
	          autoCompress = _props.autoCompress,
	          highQuality = _props.highQuality,
	          compressSuffix = _props.compressSuffix,
	          autoPixelRatio = _props.autoPixelRatio,
	          lazyload = _props.lazyload,
	          placeholder = _props.placeholder,
	          ignoreGif = _props.ignoreGif,
	          uri = source.uri;

	      var nativeProps = this.props;

	      if (!this.uri) {
	        var sWidth = style.width,

	        // style width of picture
	        sHeight = style.height; // style width of picture

	        // according to the original height and width of the picture
	        if (!sHeight && sWidth && width && height) {
	          var pScaling = width / parseInt(sWidth, 10);
	          sHeight = parseInt(height / pScaling, 10);
	        }

	        this.newStyle = Object.assign({
	          height: sHeight
	        }, style);

	        this.uri = uri;

	        if (uri) {
	          if (autoPixelRatio && window.devicePixelRatio > 1) {
	            // devicePixelRatio >= 2 for web
	            if (typeof sWidth === 'string' && sWidth.indexOf('rem') > -1) {
	              sWidth = parseInt(sWidth.split('rem')[0]) * 2 + 'rem';
	            }
	          }

	          this.uri = (0, _index2.default)(uri, {
	            ignoreGif: ignoreGif,
	            ignorePng: true,
	            removeScheme: autoRemoveScheme,
	            replaceDomain: autoReplaceDomain,
	            scalingWidth: autoScaling ? sWidth : 0,
	            webp: autoWebp && isSupportJPG && isSupportPNG,
	            compressSuffix: autoCompress ? getQualitySuffix(highQuality, compressSuffix) : ''
	          });
	        }

	        if (resizeMode) {
	          this.newStyle.resizeMode = resizeMode;
	        }
	      }

	      var url = placeholder;
	      if (lazyload) {
	        var visible = this.state.visible;

	        nativeProps.onAppear = function () {
	          return _this2.lazyLoad();
	        };
	        if (visible) {
	          url = this.uri;
	        }
	      } else {
	        url = this.uri;
	      }

	      if (children || resizeMode) {
	        return (0, _rax.createElement)(_raxView2.default, _extends({}, nativeProps, {
	          'data-once': true,
	          style: [this.newStyle, {
	            backgroundImage: 'url(' + url + ')',
	            backgroundSize: resizeMode || 'cover',
	            backgroundRepeat: 'no-repeat'
	          }, resizeMode === 'cover' || resizeMode === 'contain' ? {
	            backgroundPosition: 'center'
	          } : null, !this.newStyle.height ? { height: defaultHeight } : null]
	        }), children);
	      } else {
	        return (0, _rax.createElement)(_raxImage2.default, _extends({}, nativeProps, {
	          'data-once': true,
	          source: {
	            uri: url
	          },
	          style: this.newStyle
	        }));
	      }
	    }
	  }, {
	    key: 'lazyLoad',
	    value: function lazyLoad() {
	      this.setState({ visible: true });
	    }
	  }]);

	  return Picture;
	}(_rax.Component);

	Picture.defaultProps = {
	  placeholder: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==',
	  source: {
	    uri: ''
	  },
	  autoRemoveScheme: true,
	  autoReplaceDomain: true,
	  autoScaling: true,
	  autoWebp: true,
	  ignoreGif: true,
	  autoCompress: true,
	  highQuality: true,
	  compressSuffix: ['Q75', 'Q50'],
	  defaultHeight: '750rem',

	  lazyload: false,
	  autoPixelRatio: true
	};
	Picture.propTypes = {
	  style: _rax.PropTypes.object,
	  source: _rax.PropTypes.object.isRequired,
	  resizeMode: _rax.PropTypes.oneOf(['contain', 'cover', 'stretch']),

	  width: _rax.PropTypes.string, // width of picture
	  height: _rax.PropTypes.string, // height of picture
	  defaultHeight: _rax.PropTypes.string, // default height when the height setting fails

	  autoRemoveScheme: _rax.PropTypes.bool,
	  autoReplaceDomain: _rax.PropTypes.bool,
	  autoScaling: _rax.PropTypes.bool,
	  autoWebp: _rax.PropTypes.bool,
	  autoCompress: _rax.PropTypes.bool,
	  highQuality: _rax.PropTypes.bool,
	  compressSuffix: _rax.PropTypes.array,

	  lazyload: _rax.PropTypes.bool,
	  placeholder: _rax.PropTypes.string,
	  autoPixelRatio: _rax.PropTypes.bool,
	  forceUpdate: _rax.PropTypes.bool,
	  ignoreGif: _rax.PropTypes.bool
	};
	exports.default = Picture;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	var _raxView = __webpack_require__(3);

	var _raxView2 = _interopRequireDefault(_raxView);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Image = function (_Component) {
	  _inherits(Image, _Component);

	  function Image() {
	    _classCallCheck(this, Image);

	    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	  }

	  _createClass(Image, [{
	    key: 'render',
	    value: function render() {
	      var nativeProps = _extends({}, this.props);
	      var source = nativeProps.source;

	      // Source must a object
	      if (source && source.uri) {
	        var style = nativeProps.style;
	        var width = source.width,
	            height = source.height,
	            uri = source.uri;

	        // Default is 0

	        if (width == null && height == null && style.height == null && style.width == null) {
	          width = 0;
	          height = 0;
	        }

	        nativeProps.style = _extends(_extends({}, !this.context.isInAParentText && { display: 'flex' }, {
	          width: width,
	          height: height
	        }), style);
	        nativeProps.src = uri;

	        delete nativeProps.source;

	        var NativeImage = void 0;
	        if (_universalEnv.isWeex) {
	          NativeImage = 'image';
	        } else {
	          NativeImage = 'img';
	        }

	        // for cover and contain
	        var resizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;
	        if (resizeMode) {
	          if (_universalEnv.isWeex) {
	            nativeProps.resize = resizeMode;
	            nativeProps.style.resizeMode = resizeMode;
	          } else {
	            nativeProps.style.objectFit = resizeMode;
	          }
	        }

	        if (this.props.children) {
	          nativeProps.children = null;
	          return (0, _rax.createElement)(_raxView2.default, { style: nativeProps.style }, (0, _rax.createElement)(NativeImage, nativeProps), (0, _rax.createElement)(_raxView2.default, { style: styles.absoluteImage }, this.props.children));
	        } else {
	          return (0, _rax.createElement)(NativeImage, nativeProps);
	        }
	      }
	      return null;
	    }
	  }]);

	  return Image;
	}(_rax.Component);

	Image.propTypes = {};
	Image.resizeMode = {
	  contain: 'contain',
	  cover: 'cover',
	  stretch: 'stretch',
	  center: 'center',
	  repeat: 'repeat'
	};
	Image.contextTypes = {
	  isInAParentText: _rax.PropTypes.bool
	};

	var styles = {
	  absoluteImage: {
	    left: 0,
	    top: 0,
	    position: 'absolute'
	  }
	};

	exports.default = Image;
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (uri, config) {
	  var scalingWidth = config.scalingWidth,
	      webp = config.webp,
	      compressSuffix = config.compressSuffix,
	      quality = config.quality,
	      acutance = config.acutance,
	      removeScheme = config.removeScheme,
	      replaceDomain = config.replaceDomain,
	      ignoreGif = config.ignoreGif,
	      ignorePng = config.ignorePng;

	  var newUrl = uri;
	  if (typeof uri === 'string') {
	    var ret = (0, _isCdnImage2.default)(uri);

	    // is cdn image
	    if (ret) {
	      var host = ret[1];
	      var path = ret[2];
	      var suffixRet = path.match(REG_IMG_SUFFIX) || [];
	      var notGif = !~path.indexOf('gif') && !~path.indexOf('GIF') || !ignoreGif;
	      var notPng = !~path.indexOf('png') && !~path.indexOf('png') || !ignorePng;

	      var scalingSuffix = suffixRet[1] || '';
	      if (scalingWidth && notGif) {
	        scalingSuffix = (0, _scaling2.default)(scalingWidth, path) || scalingSuffix;
	      }

	      // webp
	      var webpSuffix = suffixRet[5] || '';
	      if (webp && notGif) {
	        webpSuffix = (0, _webp2.default)() || webpSuffix;
	      }

	      var _compressSuffix = suffixRet[3] || '';
	      if ((compressSuffix || quality || acutance) && notGif && notPng) {
	        _compressSuffix = (0, _compress2.default)(compressSuffix, quality, acutance) || _compressSuffix;
	      }

	      var cut = scalingSuffix ? suffixRet[2] || '' : '';
	      var suffix = scalingSuffix || _compressSuffix ? suffixRet[4] || '.jpg' : '';
	      var prev = scalingSuffix || _compressSuffix ? '_' : '';

	      if (notGif) {
	        if (suffixRet[0] !== '_.jpg') {
	          newUrl = newUrl.replace(suffixRet[0], '');
	        }
	        newUrl += prev + scalingSuffix + cut + _compressSuffix + suffix + webpSuffix;

	        if (removeScheme) {
	          newUrl = (0, _removeScheme2.default)(newUrl);
	        }
	      }

	      if (replaceDomain) {
	        newUrl = (0, _replaceDomain2.default)(newUrl, host);
	      }
	    }
	  }

	  return newUrl;
	};

	var _isCdnImage = __webpack_require__(14);

	var _isCdnImage2 = _interopRequireDefault(_isCdnImage);

	var _removeScheme = __webpack_require__(15);

	var _removeScheme2 = _interopRequireDefault(_removeScheme);

	var _replaceDomain = __webpack_require__(16);

	var _replaceDomain2 = _interopRequireDefault(_replaceDomain);

	var _scaling = __webpack_require__(17);

	var _scaling2 = _interopRequireDefault(_scaling);

	var _webp = __webpack_require__(18);

	var _webp2 = _interopRequireDefault(_webp);

	var _compress = __webpack_require__(19);

	var _compress2 = _interopRequireDefault(_compress);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var REG_IMG_SUFFIX = /_(\d+x\d+|cy\d+i\d+|sum|m|b)?(xz|xc)?((?:q\d+)?(?:s\d+)?)(\.jpg)?(_\.webp)?$/i;

	/**
	 *
	 * @param {String} uri
	 * @param {Object} config
	 *    scalingWidth
	 *    webp
	 *    compressSuffix
	 *    removeScheme
	 *    replaceDomain
	 * @returns {String} newUrl
	 */
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (url) {
	  return url.match(REG_IMG_URL);
	};

	var REG_IMG_URL = /^(?:(?:http|https):)?\/\/(.+\.(?:alicdn|taobaocdn|taobao)\.(?:com|net))(\/.*(?:\.(jpg|png|gif|jpeg|webp))?)$/i;

	/**
	 * @param url
	 * @returns {Bool}
	 */
	module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (url) {
	  return url.replace(/(http|https):/gi, '');
	};

	module.exports = exports['default']; /**
	                                      * @param url
	                                      * @returns {String}
	                                      */

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (url, host) {
	  var hostReg = host.match(ALI_HOST);
	  if (hostReg && hostReg[0] != DEFAULT_HOSTNAME) {
	    if (filterDomains.indexOf(host) === -1) {
	      return url.replace(host, DEFAULT_HOSTNAME);
	    }
	  }
	  return url;
	};

	var DEFAULT_HOSTNAME = 'gw.alicdn.com';
	var ALI_HOST = /(.+\.(?:alicdn|taobaocdn|taobao|mmcdn)\.com)/;
	var filterDomains = ['a.tbcdn.cn', 'assets.alicdn.com', 'wwc.taobaocdn.com', 'wwc.alicdn.com', 'cbu01.alicdn.com'];

	/**
	 * use gw.alicdn.com
	 *
	 * @param url
	 * @param host
	 * @returns {String}
	 */
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = function (sWidth) {
	  var isRem = typeof sWidth === 'string' && sWidth.indexOf('rem') > -1;
	  var isNum = typeof sWidth === 'number';
	  if (isRem || isNum) {
	    var xWidth = parseFloat(sWidth, 10);
	    var scaling = 1;

	    if (isRem) {
	      scaling = visualStandard / width;
	    }

	    var newWidth = find(parseInt(xWidth / scaling, 10), scalingWidth);
	    if (newWidth) {
	      return newWidth + 'x10000';
	    }
	  }

	  return '';
	};

	var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';

	var width = window.screen.width;
	if (isWeb) {
	  width = document.documentElement.clientWidth / 750 * width;
	}

	var scalingWidth = [// use width
	110, 140, 150, 170, 220, 230, 240, 290, 300, 360, 450, 570, 580, 620, 790];
	var visualStandard = 750;

	function find(c, arr) {
	  var min = 1000;
	  var result = c;
	  var fKey = 0;
	  arr.forEach(function (num, key) {
	    var abs = Math.abs(num - c);

	    if (abs === 0) {
	      result = num;
	      fKey = key;
	      return false;
	    }

	    if (min > abs) {
	      min = abs;
	      result = num;
	      fKey = key;
	    }
	  });

	  if (c > result && arr[fKey + 1]) {
	    result = arr[fKey + 1];
	  }

	  if (arr.indexOf(result) > -1) {
	    return result;
	  }
	}

	/**
	 * @param sWidth
	 * @returns {String}
	 */
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return webpSuffix;
	};

	var webpSuffix = '_.webp';

	/**
	 * @param url
	 * @param path
	 * @returns {String}
	 */
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (compressSuffix, quality, acutance) {
	  return compressSuffix ? compressSuffix : (quality ? 'Q' + quality : '') + (acutance ? 'S' + acutance : '');
	};

	module.exports = exports['default']; /**
	                                      * @param  {Number} quality
	                                      * @param  {Number} acutance
	                                      * @return {String}
	                                      */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(4);

	var isIOS = void 0; /**
	                     * lossy : Lossy compression
	                     * lossless : lossless compression
	                     * alpha : example png
	                     * animation : example gif
	                     */

	var typeObj = {
	  lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
	  lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
	  alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
	  animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
	};
	if (!_universalEnv.isWeex) {
	  isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	}

	function isSupportTest(callback, type) {
	  if ('function' != typeof callback) return;
	  var img = new Image();
	  img.onload = function () {
	    var is = img.width > 0 && img.height > 0;
	    setLocalStorage(is, type);
	    callback(is);
	  };img.onerror = function () {
	    setLocalStorage(false, type);
	    callback(false);
	  };
	}

	function setLocalStorage(isSupport, type) {
	  if (window.localStorage && typeof window.localStorage.setItem == 'function') {
	    try {
	      window.localStorage.setItem('webpsupport-' + type, isSupport);
	    } catch (e) {}
	  }
	}

	function isSupport(callback, type) {
	  if (_universalEnv.isWeex) {
	    return callback(true);
	  }
	  if ('function' == typeof callback) {
	    type = type || 'lossy';

	    if (window.navigator.userAgent.match(/windows|win32/i) || isIOS && window.navigator.userAgent.match(/UCBrowser/i)) {
	      callback(false);
	    } else if (window.chrome || window.opera) {
	      callback(true);
	    } else {
	      var val = window.localStorage && window.localStorage.getItem('webpsupport-' + type);
	      if (val) {
	        callback(val == 'true');
	      } else {
	        isSupportTest(callback, type);
	      }
	    }
	  }
	}

	var Webp = {};
	Webp.isSupport = isSupport;
	exports.default = Webp;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _raxImage = __webpack_require__(12);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Picture = function (_Component) {
	  _inherits(Picture, _Component);

	  function Picture() {
	    _classCallCheck(this, Picture);

	    return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
	  }

	  _createClass(Picture, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      if (this.props.forceUpdate || this.props.children) {
	        return true;
	      }

	      return this.props.source.uri !== nextProps.source.uri;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          _props$style = _props.style,
	          style = _props$style === undefined ? {} : _props$style,
	          _props$source = _props.source,
	          source = _props$source === undefined ? {} : _props$source,
	          resizeMode = _props.resizeMode,
	          width = _props.width,
	          height = _props.height,
	          defaultHeight = _props.defaultHeight;

	      var styleWidth = style.width; // style width of picture
	      var styleHeight = style.height; // style width of picture

	      // according to the original height and width of the picture
	      if (!styleHeight && styleWidth && width && height) {
	        var pScaling = width / parseInt(styleWidth, 10);
	        styleHeight = parseInt(height / pScaling, 10);
	      }

	      if (!styleHeight) {
	        styleHeight = defaultHeight;

	        if (!resizeMode) {
	          // ensure that the picture can be displayed
	          resizeMode = 'contain';
	        }
	      }

	      var newStyle = Object.assign({
	        height: styleHeight
	      }, style);

	      if (resizeMode) {
	        newStyle.resizeMode = resizeMode;
	      }

	      return (0, _rax.createElement)(_raxImage2.default, _extends({}, this.props, { source: source, style: newStyle }), children);
	    }
	  }]);

	  return Picture;
	}(_rax.Component);

	Picture.defaultProps = {
	  source: {
	    uri: ''
	  },
	  defaultHeight: 750
	};
	Picture.propTypes = {
	  style: _rax.PropTypes.object,
	  source: _rax.PropTypes.object.isRequired,
	  resizeMode: _rax.PropTypes.oneOf(['contain', 'cover', 'stretch']),

	  width: _rax.PropTypes.string, // width of picture
	  height: _rax.PropTypes.string, // height of picture
	  defaultHeight: _rax.PropTypes.string, // default height when the height setting fails

	  forceUpdate: _rax.PropTypes.bool
	};
	exports.default = Picture;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createIconSet = undefined;

	var _rax = __webpack_require__(1);

	var _raxIcon = __webpack_require__(23);

	var _raxIcon2 = _interopRequireDefault(_raxIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _raxIcon2.default;
	exports.createIconSet = _raxIcon.createIconSet;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	exports.createIconSet = createIconSet;

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	var _raxView = __webpack_require__(3);

	var _raxView2 = _interopRequireDefault(_raxView);

	var _raxText = __webpack_require__(6);

	var _raxText2 = _interopRequireDefault(_raxText);

	var _raxImage = __webpack_require__(12);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Icon = function (_Component) {
	  _inherits(Icon, _Component);

	  function Icon() {
	    _classCallCheck(this, Icon);

	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }

	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var style = this.props.style || {};

	      // for images
	      if (this.props.source.uri && !this.props.source.codePoint) {
	        return (0, _rax.createElement)(_raxImage2.default, {
	          source: { uri: this.props.source.uri },
	          style: style
	        });
	      }

	      // for iconfont
	      var uri = this.props.source.uri;
	      var fontFamily = this.props.fontFamily;
	      var iconStyle = _extends({}, style, {
	        fontFamily: fontFamily
	      });

	      if (_universalEnv.isWeb) {
	        var FontFace = window.FontFace;
	        var iconfont = new FontFace(fontFamily, 'url(' + uri + ')');
	        document.fonts.add(iconfont);
	      }

	      if (_universalEnv.isWeex) {
	        var domModule = __webpack_require__(24);
	        domModule.addRule('fontFace', {
	          'fontFamily': fontFamily,
	          'src': "url('" + uri + "')" // single quotes are required around uri, and double quotes can not work
	        });
	      }
	      return (0, _rax.createElement)(_raxText2.default, { style: iconStyle }, this.props.source.codePoint);
	    }
	  }]);

	  return Icon;
	}(_rax.Component);

	Icon.propTypes = {
	  fontFamily: _rax.PropTypes.string,
	  source: _rax.PropTypes.object
	};
	exports.default = Icon;
	function createIconSet(glyphMap, fontFamily, uri) {
	  var IconFont = function (_Component2) {
	    _inherits(IconFont, _Component2);

	    function IconFont() {
	      _classCallCheck(this, IconFont);

	      return _possibleConstructorReturn(this, (IconFont.__proto__ || Object.getPrototypeOf(IconFont)).apply(this, arguments));
	    }

	    _createClass(IconFont, [{
	      key: 'render',
	      value: function render() {
	        var codePoint = '';
	        if (this.props.codePoint) {
	          codePoint = this.props.codePoint;
	        } else if (this.props.name) {
	          codePoint = glyphMap[this.props.name];
	        }
	        return (0, _rax.createElement)(Icon, {
	          style: this.props.style,
	          fontFamily: fontFamily,
	          source: {
	            uri: uri,
	            codePoint: codePoint
	          } });
	      }
	    }]);

	    return IconFont;
	  }(_rax.Component);

	  return IconFont;
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rax = __webpack_require__(1);

	var _raxScrollview = __webpack_require__(26);

	var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _raxScrollview2.default;
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	var _raxView = __webpack_require__(3);

	var _raxView2 = _interopRequireDefault(_raxView);

	var _raxRefreshcontrol = __webpack_require__(27);

	var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var DEFAULT_END_REACHED_THRESHOLD = 500;
	var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
	var FULL_WIDTH = 750;

	var ScrollView = function (_Component) {
	  _inherits(ScrollView, _Component);

	  function ScrollView(props) {
	    _classCallCheck(this, ScrollView);

	    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

	    _this.lastScrollDistance = 0;
	    _this.lastScrollContentSize = 0;
	    _this.loadmoreretry = 1;

	    _this.handleScroll = function (e) {
	      if (_universalEnv.isWeb) {
	        if (_this.props.onScroll) {
	          e.nativeEvent = {
	            get contentOffset() {
	              return {
	                x: e.target.scrollLeft,
	                y: e.target.scrollTop
	              };
	            }
	          };
	          _this.props.onScroll(e);
	        }

	        if (_this.props.onEndReached) {
	          if (!_this.scrollerNode) {
	            _this.scrollerNode = (0, _rax.findDOMNode)(_this.refs.scroller);
	            _this.scrollerContentNode = (0, _rax.findDOMNode)(_this.refs.contentContainer);

	            _this.scrollerNodeSize = _this.props.horizontal ? _this.scrollerNode.offsetWidth : _this.scrollerNode.offsetHeight;
	          }

	          // NOTE：in iOS7/8 offsetHeight/Width is is inaccurate （ use scrollHeight/Width ）
	          var scrollContentSize = _this.props.horizontal ? _this.scrollerNode.scrollWidth : _this.scrollerNode.scrollHeight;
	          var scrollDistance = _this.props.horizontal ? _this.scrollerNode.scrollLeft : _this.scrollerNode.scrollTop;
	          var isEndReached = scrollContentSize - scrollDistance - _this.scrollerNodeSize < _this.props.onEndReachedThreshold;

	          var isScrollToEnd = scrollDistance > _this.lastScrollDistance;
	          var isLoadedMoreContent = scrollContentSize != _this.lastScrollContentSize;

	          if (isEndReached && isScrollToEnd && isLoadedMoreContent) {
	            _this.lastScrollContentSize = scrollContentSize;
	            _this.props.onEndReached(e);
	          }

	          _this.lastScrollDistance = scrollDistance;
	        }
	      }
	      if (_universalEnv.isWeex) {
	        e.nativeEvent = {
	          contentOffset: {
	            // HACK: weex scroll event value is opposite of web
	            x: -e.contentOffset.x,
	            y: -e.contentOffset.y
	          }
	        };
	        _this.props.onScroll(e);
	      }
	    };

	    _this.resetScroll = function () {
	      if (_universalEnv.isWeb) {
	        _this.lastScrollContentSize = 0;
	        _this.lastScrollDistance = 0;
	      } else {
	        _this.setState({
	          loadmoreretry: _this.loadmoreretry++
	        });
	      }
	    };

	    _this.scrollTo = function (options) {
	      var x = parseInt(options.x);
	      var y = parseInt(options.y);

	      if (_universalEnv.isWeex) {
	        var dom = __weex_require__('@weex-module/dom');
	        var contentContainer = (0, _rax.findDOMNode)(_this.refs.contentContainer);
	        dom.scrollToElement(contentContainer.ref, {
	          offset: x || y || 0,
	          animated: options && typeof options.animated !== 'undefined' ? options.animated : true
	        });
	      } else {
	        var pixelRatio = document.documentElement.clientWidth / FULL_WIDTH;

	        if (x >= 0) {
	          (0, _rax.findDOMNode)(_this.refs.scroller).scrollLeft = pixelRatio * x;
	        }

	        if (y >= 0) {
	          (0, _rax.findDOMNode)(_this.refs.scroller).scrollTop = pixelRatio * y;
	        }
	      }
	    };

	    _this.state = {
	      loadmoreretry: 0
	    };
	    return _this;
	  }

	  _createClass(ScrollView, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          id = _props.id,
	          style = _props.style,
	          scrollEventThrottle = _props.scrollEventThrottle,
	          showsHorizontalScrollIndicator = _props.showsHorizontalScrollIndicator,
	          showsVerticalScrollIndicator = _props.showsVerticalScrollIndicator,
	          onEndReached = _props.onEndReached,
	          onEndReachedThreshold = _props.onEndReachedThreshold,
	          onScroll = _props.onScroll,
	          children = _props.children;

	      // In weex must be int value

	      onEndReachedThreshold = parseInt(onEndReachedThreshold, 10);

	      var contentContainerStyle = [this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle];

	      // bugfix: fix scrollview flex in ios 78
	      if (!_universalEnv.isWeex && !this.props.horizontal) {
	        contentContainerStyle.push(styles.containerWebStyle);
	      }

	      if (this.props.style) {
	        var childLayoutProps = ['alignItems', 'justifyContent'].filter(function (prop) {
	          return _this2.props.style[prop] !== undefined;
	        });

	        if (childLayoutProps.length !== 0) {
	          console.warn('ScrollView child layout (' + JSON.stringify(childLayoutProps) + ') must be applied through the contentContainerStyle prop.');
	        }
	      }

	      var refreshContainer = (0, _rax.createElement)(_raxView2.default, null),
	          contentChild = void 0;
	      if (Array.isArray(children)) {
	        contentChild = children.map(function (child, index) {
	          if (child && child.type == _raxRefreshcontrol2.default) {
	            refreshContainer = child;
	          } else {
	            return child;
	          }
	        });
	      } else {
	        contentChild = children;
	      }

	      var contentContainer = (0, _rax.createElement)(_raxView2.default, {
	        ref: 'contentContainer',
	        style: contentContainerStyle }, contentChild);

	      var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;

	      var scrollerStyle = _extends({}, baseStyle, this.props.style);

	      var showsScrollIndicator = this.props.horizontal ? showsHorizontalScrollIndicator : showsVerticalScrollIndicator;

	      if (_universalEnv.isWeex) {
	        return (0, _rax.createElement)('scroller', _extends({}, this.props, {
	          style: scrollerStyle,
	          showScrollbar: showsScrollIndicator,
	          onLoadmore: onEndReached,
	          onScroll: onScroll ? this.handleScroll : null,
	          loadmoreoffset: onEndReachedThreshold,
	          loadmoreretry: this.state.loadmoreretry,
	          scrollDirection: this.props.horizontal ? 'horizontal' : 'vertical'
	        }), refreshContainer, contentContainer);
	      } else {
	        var handleScroll = this.handleScroll;
	        if (scrollEventThrottle) {
	          handleScroll = throttle(handleScroll, scrollEventThrottle);
	        }

	        var _document;
	        try {
	          _document = eval('document');
	        } catch (err) {
	          _document = null;
	        }
	        if (_document && !showsScrollIndicator && !_document.getElementById('rax-scrollview-style')) {
	          var styleNode = _document.createElement('style');
	          styleNode.id = 'rax-scrollview-style';
	          _document.head.appendChild(styleNode);
	          styleNode.innerHTML = '.' + this.props.className + '::-webkit-scrollbar{display: none;}';
	        }

	        scrollerStyle.webkitOverflowScrolling = 'touch';
	        scrollerStyle.overflow = 'scroll';

	        var webProps = _extends({}, this.props, {
	          ref: 'scroller',
	          style: scrollerStyle,
	          onScroll: handleScroll
	        });
	        delete webProps.onEndReachedThreshold;

	        return (0, _rax.createElement)(_raxView2.default, webProps, contentContainer);
	      }
	    }
	  }]);

	  return ScrollView;
	}(_rax.Component);

	ScrollView.propTypes = {};
	ScrollView.defaultProps = {
	  scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
	  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
	  showsHorizontalScrollIndicator: true,
	  showsVerticalScrollIndicator: true,
	  className: 'rax-scrollview'
	};

	function throttle(func, wait) {
	  var ctx, args, rtn, timeoutID;
	  var last = 0;

	  function call() {
	    timeoutID = 0;
	    last = +new Date();
	    rtn = func.apply(ctx, args);
	    ctx = null;
	    args = null;
	  }

	  return function throttled() {
	    ctx = this;
	    args = arguments;
	    var delta = new Date() - last;
	    if (!timeoutID) if (delta >= wait) call();else timeoutID = setTimeout(call, wait - delta);
	    return rtn;
	  };
	}

	var styles = {
	  baseVertical: {
	    flex: 1,
	    flexDirection: 'column'
	  },
	  baseHorizontal: {
	    flex: 1,
	    flexDirection: 'row'
	  },
	  contentContainerHorizontal: {
	    flexDirection: 'row'
	  },
	  containerWebStyle: {
	    display: 'block'
	  }
	};

	exports.default = ScrollView;
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var RefreshControl = function (_Component) {
	  _inherits(RefreshControl, _Component);

	  function RefreshControl() {
	    _classCallCheck(this, RefreshControl);

	    return _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments));
	  }

	  _createClass(RefreshControl, [{
	    key: 'render',
	    value: function render() {
	      if (_universalEnv.isWeex) {
	        var displayRefresh = this.props.refreshing ? 'show' : 'hide';
	        return (0, _rax.createElement)('refresh', _extends({}, this.props, { display: displayRefresh }), this.props.children);
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return RefreshControl;
	}(_rax.Component);

	exports.default = RefreshControl;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MtopDemo = function (_Component) {
	  _inherits(MtopDemo, _Component);

	  function MtopDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MtopDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MtopDemo.__proto__ || Object.getPrototypeOf(MtopDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      data: null
	    }, _this.fetch = function () {
	      _index.mtop.request({
	        api: 'mtop.user.getUserSimple',
	        type: 'POST',
	        secType: 2,
	        date: {
	          foo: 'bar'
	        }
	      }, function (json) {
	        _this.setState({
	          data: JSON.stringify(json)
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MtopDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          { style: demoStyles.text },
	          'Mtop \u8BF7\u6C42\u7ED3\u679C\uFF1A',
	          this.state.data
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.fetch, onClick: this.fetch, style: demoStyles.button },
	          '\u53D1\u8D77 Mtop \u8BF7\u6C42'
	        )
	      );
	    }
	  }]);

	  return MtopDemo;
	}(_rax.Component);

	var demoStyles = {
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = MtopDemo;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var _styles = {
	  "app": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "appHeader": {
	    "backgroundColor": "rgb(34,34,34)",
	    "height": 160,
	    "paddingTop": "40rem",
	    "paddingRight": "40rem",
	    "paddingBottom": "40rem",
	    "paddingLeft": "40rem"
	  },
	  "appBanner": {
	    "textAlign": "center",
	    "fontSize": 80,
	    "color": "white"
	  },
	  "appIntro": {
	    "textAlign": "center",
	    "marginTop": 40,
	    "fontSize": 40,
	    "lineHeight": "60rem"
	  }
	};
	  
	  
	  
	  module.exports = _styles;
	  

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var env = __webpack_require__(31);
	var fetch = __webpack_require__(33);
	var geolocation = __webpack_require__(34);
	var mtop = __webpack_require__(37);
	var jsonp = __webpack_require__(40);
	var navigator = __webpack_require__(42);
	var network = __webpack_require__(47);
	var scancode = __webpack_require__(48);
	var storage = __webpack_require__(49);
	var toast = __webpack_require__(51);
	var user = __webpack_require__(54);
	var wangwang = __webpack_require__(58);

	if (env.isWeb && !window.Promise) {
	  window.console && window.console.error && window.console.error(("[Tile Error]") + ' \u8BF7\u5148\u5F15\u5165 lib.promise \u5E93\uFF08' + ("https://g.alicdn.com/mtb/lib-promise/3.1.3/polyfillB.js") + '\uFF09');
	}

	module.exports = {
	  mtop: mtop,
	  jsonp: jsonp,
	  fetch: fetch,
	  storage: storage,

	  navigator: navigator,
	  toast: toast,

	  env: env,
	  geolocation: geolocation,
	  network: network,

	  scancode: scancode,
	  user: user,
	  wangwang: wangwang
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	module.exports = {
	  isWeex: _universalEnv.isWeex,
	  isWeb: _universalEnv.isWeb,
	  isReactNative: _universalEnv.isReactNative,
	  isNode: _universalEnv.isNode
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	var isWeex = exports.isWeex = typeof callNative === 'function';
	var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	exports['default'] = module.exports;
	exports.default = module.exports;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Rax 提供了全局变量 fetch
	 * 
	 * @see //rax.alibaba-inc.com/guide/network
	 */

	if (typeof fetch === 'undefined') {
	  window.fetch = function () {
	    throw new Error(("[Tile Error]") + ' \u5F53\u524D\u73AF\u5883\u4E0B\u6CA1\u6709\u5168\u5C40 fetch \u65B9\u6CD5\u3002');
	  };
	}

	module.exports = fetch;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	var Windvane = __webpack_require__(35);

	module.exports = {
	  getCurrentPosition: function getCurrentPosition(success, error, options) {
	    if (!options.address) {
	      options.address = 1;
	    }
	    Windvane.call('WVLocation', 'getLocation', options, function (result) {
	      result = JSON.parse(result);
	      var coords = result.coords;
	      // fix longitude/latitude string value on iOS
	      if (coords) {
	        coords.longitude = parseFloat(coords.longitude);
	        coords.latitude = parseFloat(coords.latitude);
	        coords.accuracy = parseFloat(coords.accuracy);
	      }
	      result.errorCode = 0;
	      success && success(result);
	    }, function (result) {
	      if (result.ret[0] === 'HY_NOT_SUPPORT_DEVICE') {
	        try {
	          window.navigator.geolocation.getCurrentPosition(success, error, options);
	        } catch (e) {
	          error && error(e);
	        }
	      }
	    });
	  }
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// h5deps=windvane

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(32);

	var WV = {};

	WV.call = function (className, method, data, successCallback, failCallback) {
	  if (_universalEnv.isWeex) {
	    var Windvane = __webpack_require__(36);
	    if (Windvane.call) {
	      Windvane.call({
	        class: className,
	        method: method,
	        data: data
	      }, successCallback);
	    }
	  } else {
	    var isWindVane = typeof WindVane !== 'undefined';
	    if (!(window.lib || window.lib.windvane)) {
	      throw new Error(("[Tile Error]") + ' \u8BF7\u5148\u5F15\u5165 lib.windvane \u5E93\uFF08' + ("https://g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js") + '\uFF09');
	      return;
	    }
	    if (isWindVane && WindVane.isAvailable) {
	      WV.isAvailable = WindVane.isAvailable;
	      WindVane.call(className, method, data, successCallback, failCallback);
	    } else {
	      // 失败
	      failCallback && failCallback({
	        msg: ("[Tile Warn]") + ' \u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Windvane\uFF0C\u65E0\u6CD5\u8C03\u7528 Windvane \u7684 ' + className + ' \u65B9\u6CD5',
	        ret: ['HY_NOT_SUPPORT_DEVICE']
	      });
	    }
	  }
	};

	exports.default = WV;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/windvane");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mtop = __webpack_require__(38);

	module.exports = mtop;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/// h5deps=mtop

	'use strict';

	var _universalEnv = __webpack_require__(32);

	module.exports = {
	  request: function request(options, success, error) {
	    options = Object.assign({
	      v: '1.0',
	      needLogin: false,
	      type: 'GET',
	      dataType: 'json',
	      secType: 0,
	      timeout: 8000
	    }, options);
	    if (_universalEnv.isWeex) {
	      var weexMtop = __webpack_require__(39);
	      weexMtop.request(options, success, error);
	    } else if (_universalEnv.isWeb) {
	      var request = window.lib && window.lib.mtop && window.lib.mtop.request;
	      if (!request) {
	        throw new Error(("[Tile Error]") + ' \u8BF7\u5148\u5F15\u5165 lib.mtop \u5E93\uFF08' + ("https://g.alicdn.com/mtb/lib-mtop/2.4.2/mtop.js") + '\uFF09');
	        return;
	      }
	      request(options, success, error);
	    }
	  }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/mtop");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalJsonp = __webpack_require__(41);

	var _universalJsonp2 = _interopRequireDefault(_universalJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _universalJsonp2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(32);

	// From https://github.com/camsong/fetch-jsonp
	var defaultOptions = {
	  timeout: 5000,
	  jsonpCallback: 'callback'
	};

	function generateCallbackFunction() {
	  return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	}

	// Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined' error if request timeout
	function clearFunction(functionName) {
	  // IE8 throws an exception when you try to delete a property on window
	  // http://stackoverflow.com/a/1824228/751089
	  try {
	    delete window[functionName];
	  } catch (e) {
	    window[functionName] = undefined;
	  }
	}

	function removeScript(script) {
	  document.getElementsByTagName('head')[0].removeChild(script);
	}

	var JSONP = function JSONP(url) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (_universalEnv.isWeex) {
	    var Stream = __weex_require__('@weex-module/stream');

	    return new Promise(function (resolve, reject) {
	      var jsonpCallback = options.jsonpCallback != null ? options.jsonpCallback : defaultOptions.jsonpCallback;
	      var callbackFunction = options.jsonpCallbackFunctionName || generateCallbackFunction();
	      if (url.indexOf(jsonpCallback) == -1) {
	        url += url.indexOf('?') === -1 ? '?' : '&';
	        url = url + jsonpCallback + '=' + callbackFunction;
	      }
	      var params = {
	        url: url,
	        method: 'GET',
	        type: 'jsonp'
	      };
	      Stream.fetch(params, function (response) {
	        try {
	          if (typeof response === 'string') {
	            // parse the response（it is string in weex-android & obj in ios）
	            response = JSON.parse(response);
	            if (response.data && typeof response.data === 'string' && response.ok) {
	              try {
	                response.data = JSON.parse(response.data);
	              } catch (e) {
	                throw new Error('the response.data in not valid json');
	              }
	            }
	          }
	          // resolve the response no matter success or fail(the user decide what to do)
	          resolve({
	            ok: response.ok,
	            status: response.status,
	            statusText: response.statusText,
	            data: response.data,
	            json: function json() {
	              return Promise.resolve(response.data);
	            }
	          });
	        } catch (e) {
	          reject(e);
	        }
	      }, function (progress) {});
	    });
	  } else {
	    // !weex env
	    return new Promise(function (resolve, reject) {
	      var timeout = options.timeout != null ? options.timeout : defaultOptions.timeout;
	      var jsonpCallback = options.jsonpCallback != null ? options.jsonpCallback : defaultOptions.jsonpCallback;
	      var timeoutId = void 0;
	      var callbackFunction = options.jsonpCallbackFunctionName || generateCallbackFunction();
	      var jsonpScript = document.createElement('script');

	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });
	        if (timeoutId) clearTimeout(timeoutId);
	        removeScript(jsonpScript);
	        clearFunction(callbackFunction);
	      };

	      url += url.indexOf('?') === -1 ? '?' : '&';

	      jsonpScript.setAttribute('src', url + jsonpCallback + '=' + callbackFunction);
	      // jsonpScript.id = jsonpCallback + '_' + callbackFunction;
	      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + url + ' timed out'));
	        clearFunction(callbackFunction);
	        removeScript(jsonpScript);
	      }, timeout);
	    });
	  }
	};

	exports.default = JSONP;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	var navigator = void 0;

	if (_universalEnv.isWeex) {
	  navigator = __webpack_require__(43);
	} else {
	  navigator = __webpack_require__(46);
	}

	module.exports = navigator;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var navigator = {};

	var wm_navigator = __webpack_require__(44);
	['push', 'pop', 'open', 'close'].forEach(function (name) {
	  navigator[name] = wm_navigator[name];
	});

	/**
	 * 暂不开放方法：
	 * 
	 *  'setLeftItem', 'setRightItem', 'setStyle',
	 *  'appendMenu', 'hasMenu', 'setStatusBarStyle'
	 * 
	 * 尽量保证所有的 Weex 方法都有对应的 Web 方法
	 */
	var wm_navigatorBar = __webpack_require__(45);
	['show', 'hide', 'setTitle'].forEach(function (name) {
	  navigator[name] = wm_navigatorBar[name];
	});

	module.exports = navigator;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/navigator");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/navigationBar");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var navigator = {
	  push: function push(params) {
	    if (params.url) {
	      window.location.href = params.url;
	    }
	  },
	  pop: function pop() {
	    window.history.back();
	  },
	  open: function open(params) {
	    if (params.url) {
	      window.open(params.url);
	    }
	  },
	  close: function close() {
	    window.close();
	  },
	  show: function show() {
	    window.console && window.console.info && window.console.info(("[Tile Log]") + ' Web \u4E0B\u6CA1\u6709 titleBar\uFF0C\u65E0\u9700\u5C55\u793A');
	  },
	  hide: function hide() {
	    window.console && window.console.info && window.console.info(("[Tile Log]") + ' Web \u4E0B\u6CA1\u6709 titleBar\uFF0C\u65E0\u9700\u9690\u85CF');
	  },
	  setTitle: function setTitle(params) {
	    if (params && params.title) {
	      document.title = params.title;
	    }
	  }
	};

	module.exports = navigator;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	var Windvane = __webpack_require__(35);

	module.exports = {
	  /**
	   * 获取网络类型。
	   * 2G - 移动和联通GPRS或EDGE，电信CDMA
	   * 3G - 联通UMTS或HSDPA，电信EVDO
	   */
	  getType: function getType(callback, error) {
	    Windvane.call('WVNetwork', 'getNetworkType', {}, function (result) {
	      result = JSON.parse(result);
	      var type = result.type;
	      var data = {
	        errorCode: 0,
	        type: type,
	        networkAvailable: type !== '',
	        isOnline: type !== '',
	        isWifi: type === 'WIFI',
	        is3G: type === '3G',
	        is2G: type === '2G',
	        isG: type === 'G',
	        isH: type === 'H',
	        isE: type === 'E'
	      };
	      callback && callback(data);
	    }, function (data) {
	      if (_universalEnv.isWeb && data.ret[0] === 'HY_NOT_SUPPORT_DEVICE') {
	        try {
	          var isOnline = window.navigator.onLine;
	          var ret = {
	            errorCode: 0,
	            type: 'online',
	            networkAvailable: isOnline,
	            isOnline: isOnline
	          };
	          callback(ret);
	        } catch (e) {
	          error(e);
	        }
	      } else {
	        error(data);
	      }
	    });
	  }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	var WindVane = __webpack_require__(35);

	module.exports = function (_callback) {
	  if (_universalEnv.isWeb) {
	    window.console && window.console.warn && window.console.warn(("[Tile Warn]") + ' Web \u4E0B\u4E0D\u652F\u6301\u626B\u7801');
	    return;
	  }
	  var callback = function callback(data) {
	    try {
	      data = JSON.parse(data);
	    } catch (e) {
	      data = {};
	    }
	    var result = {};
	    result.errorCode = data.ret == 'HY_SUCCESS' || data.code == 0 ? 0 : -1;
	    if (result.errorCode == 0) {
	      result.type = data.type;
	      result.code = data.code;
	    }
	    _callback && _callback(result);
	  };
	  WindVane.call('Scancode', 'scan', {}, callback, callback);
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _universalEnv = __webpack_require__(32);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var storage = {};

	if (!_universalEnv.isWeex) {
	  if (typeof localStorage !== 'undefined' && localStorage !== null) {
	    // 无痕浏览模式下 localStorage 为 null，需要兼容，否则 storage.getItem 会报错
	    storage = localStorage;
	  }
	} else {
	  storage = __webpack_require__(50);
	}

	var AsyncStorage = function () {
	  function AsyncStorage() {
	    _classCallCheck(this, AsyncStorage);
	  }

	  _createClass(AsyncStorage, null, [{
	    key: 'getItem',
	    value: function getItem(key) {
	      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	      if (storage.getItem) {
	        if (!_universalEnv.isWeex) {
	          var value = storage.getItem(key);
	          callback({
	            data: value ? value : 'undefined',
	            result: 'success'
	          });
	        } else {
	          storage.getItem(key, callback);
	        }
	      }
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	      if (storage.setItem) {
	        if (!_universalEnv.isWeex) {
	          storage.setItem(key, value);
	          callback({
	            data: undefined,
	            result: 'success'
	          });
	        } else {
	          storage.setItem(key, value, callback);
	        }
	      }
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	      if (storage.removeItem) {
	        if (!_universalEnv.isWeex) {
	          storage.removeItem(key);
	          callback({
	            data: undefined,
	            result: 'success'
	          });
	        } else {
	          storage.removeItem(key, callback);
	        }
	      }
	    }
	  }, {
	    key: 'getAllKeys',
	    value: function getAllKeys() {
	      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

	      if (storage.length) {
	        if (!_universalEnv.isWeex) {
	          callback({
	            data: Object.keys(storage),
	            result: 'success'
	          });
	        } else {
	          storage.getAllKeys(callback);
	        }
	      }
	    }

	    // Todo 增加回调

	  }, {
	    key: 'clear',
	    value: function clear() {
	      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

	      AsyncStorage.getAllKeys(function (s) {
	        AsyncStorage.multiRemove(s.data);
	      });
	    }

	    // Todo 增加回调

	  }, {
	    key: 'multiRemove',
	    value: function multiRemove(keys) {
	      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	      keys.forEach(function (key) {
	        AsyncStorage.removeItem(key);
	      });
	    }
	  }, {
	    key: 'sLength',
	    value: function sLength() {
	      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

	      if (storage.length) {
	        if (!_universalEnv.isWeex) {
	          callback({
	            data: storage.length,
	            result: 'success'
	          });
	        } else {
	          storage.length(callback);
	        }
	      }
	    }
	  }]);

	  return AsyncStorage;
	}();

	exports.default = AsyncStorage;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/storage");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalToast = __webpack_require__(52);

	var _universalToast2 = _interopRequireDefault(_universalToast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  SHORT: _universalToast2.default.SHORT_DELAY,
	  LONG: _universalToast2.default.LONG_DELAY,
	  show: _universalToast2.default.show,
	  hide: _universalToast2.default.hide
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(32);

	var LONG_DELAY = 3500; // 3.5 seconds
	var SHORT_DELAY = 2000; // 2 seconds

	var queue = [];
	var isProcessing = false;
	var toastWin = void 0;

	function showToastWindow(message) {
	  if (!toastWin) {
	    toastWin = document.createElement('div');

	    for (var key in styles.container) {
	      toastWin.style[key] = styles.container[key];
	    }

	    document.body.appendChild(toastWin);
	  }

	  toastWin.style.transform = 'translateX(-50%)';
	  toastWin.style.webkitTransform = 'translateX(-50%)';
	  toastWin.innerHTML = message;

	  // setTimeout(() => {
	  //   toastWin.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
	  // }, 0);
	}

	function hideToastWindow() {
	  if (!toastWin) {
	    return;
	  }

	  setTimeout(function () {
	    toastWin.style.transform = 'translateX(-50%) scale(0.8)';
	    toastWin.style.webkitTransform = 'translateX(-50%) scale(0.8)';
	  }, 0);
	}

	var toast = {
	  push: function push(message, duration) {
	    queue.push({
	      message: message,
	      duration: duration
	    });
	    this.show();
	  },
	  show: function show() {
	    var _this = this;

	    // All messages had been toasted already, so remove the toast window,
	    if (!queue.length) {
	      if (toastWin) {
	        toastWin.parentNode.removeChild(toastWin);
	      }
	      toastWin = null;
	      return;
	    }

	    // the previous toast is not ended yet.
	    if (isProcessing) {
	      return;
	    }
	    isProcessing = true;

	    var toastInfo = queue.shift();
	    showToastWindow(toastInfo.message);
	    setTimeout(function () {
	      hideToastWindow();
	      isProcessing = false;
	      setTimeout(function () {
	        return _this.show();
	      }, 600);
	    }, toastInfo.duration);
	  }
	};

	var Toast = {
	  SHORT: SHORT_DELAY,
	  LONG: LONG_DELAY,

	  /*
	   * @param message {String}
	   * @param duration {Number}
	   * @param userStyle {Object} user defined style
	   */
	  show: function show(message) {
	    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SHORT_DELAY;

	    if (_universalEnv.isWeex) {
	      var weexModal = __webpack_require__(53);

	      if (weexModal.toast) {
	        weexModal.toast({
	          message: message,
	          duration: Number(duration) / 1000
	        });
	      }
	    } else {
	      toast.push(message, duration);
	    }
	  }
	};

	var styles = {
	  container: {
	    backgroundColor: 'rgba(0, 0, 0, 0.6)',
	    boxSizing: 'border-box',
	    maxWidth: '80%',
	    color: '#ffffff',
	    padding: '8px 16px',
	    position: 'fixed',
	    left: '50%',
	    bottom: '50%',
	    fontSize: '16px',
	    lineHeight: '32px',
	    fontWeight: '600',
	    borderRadius: '4px',
	    textAlign: 'center',
	    transition: 'all 0.4s ease-in-out',
	    webkitTransition: 'all 0.4s ease-in-out',
	    transform: 'translateX(-50%)',
	    webkitTransform: 'translateX(-50%)',
	    zIndex: 9999
	  }
	};

	exports.default = Toast;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/modal");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	var User = void 0;
	if (_universalEnv.isWeex) {
	  User = __webpack_require__(55);
	} else {
	  User = __webpack_require__(57);
	}

	module.exports = User;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var User = __webpack_require__(56);

	exports.default = {
	  getUserInfo: function getUserInfo(callback) {
	    if (User.getUserInfo) {
	      User.getUserInfo(function (info) {
	        if (typeof info === 'string') {
	          info = JSON.parse(info);
	        }
	        callback && callback(info);
	      });
	    }
	  },
	  login: function login(callback) {
	    if (User.login) {
	      User.login(function (ret) {
	        if (typeof ret === 'string') {
	          ret = JSON.parse(ret);
	        }
	        var callbackData = {
	          isLogin: false
	        };
	        var isLogin = false;
	        if (ret && ret.status === 'success') {
	          callbackData.isLogin = true;
	        }
	        if (ret.info) {
	          callbackData.info = ret.info;
	        }
	        callback && callback(callbackData);
	      });
	    }
	  },
	  logout: function logout(callback) {
	    if (User.logout) {
	      User.logout(callback);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/user");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/// h5deps=login

	'use strict';

	var h5login = {

	  libLogin: window.lib && window.lib.login,

	  getLibLogin: function getLibLogin() {
	    if (!h5login.libLogin) {
	      throw new Error(("[Tile Error]") + ' \u8BF7\u5148\u5F15\u5165 lib.login \u5E93\uFF08' + ("https://g.alicdn.com/mtb/lib-login/1.5.6/login.js") + '\uFF09');
	      return;
	    }
	    return h5login.libLogin;
	  },
	  getUserInfo: function getUserInfo(callback) {
	    if (!h5login.getLibLogin()) return;
	    h5login.libLogin.isLogin(function (res, info) {
	      var data = info ? info.data || {} : {};
	      callback && callback({
	        isLogin: res,
	        info: {
	          userId: data.userNumId,
	          nick: data.nick
	        }
	      });
	    });
	  },
	  login: function login(callback) {
	    if (!h5login.getLibLogin()) return;
	    h5login.libLogin.isLogin(function (res, info) {
	      var data = info ? info.data || {} : {};
	      if (res === true) {
	        callback && callback({
	          isLogin: res,
	          info: {
	            userId: data.userNumId,
	            nick: data.nick
	          }
	        });
	      } else {
	        h5login.libLogin.goLogin(undefined, callback);
	      }
	    });
	  },
	  logout: function logout(callback) {
	    if (!h5login.getLibLogin()) return;
	    if (h5login.libLogin.isLogin()) {
	      h5login.libLogin.goLogout();
	    } else {
	      callback && callback();
	    }
	  }
	};

	module.exports = h5login;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _universalEnv = __webpack_require__(32);

	var _base64Utf8Transfer = __webpack_require__(59);

	var _base64Utf8Transfer2 = _interopRequireDefault(_base64Utf8Transfer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 旺旺  
	 *
	 * @memberOf Tida
	 * @name wangwang
	 * @function
	 *
	 * @param {object} options 入参
	 * @param {number} options.itemId 商品ID
	 * @param {number} options.shopId 店铺ID
	 * @param {number} options.orderId 订单ID 三者至少一个不为空
	 * @param {number} options.sellerNick 卖家昵称 不可以为空
	 * @param {function} callback 回调函数
	 *
	 */
	module.exports = function (options, callback) {
	  var sellerNick = options.sellerNick || '';
	  var url = 'https://im.m.taobao.com/ww/ad_ww_dialog.htm?pds=wwseller%23h%23detail';
	  var nick = _base64Utf8Transfer2.default.encode(sellerNick);
	  var itemId = options.itemId || '';
	  url = 'https://h5.m.taobao.com/ww/index.htm?#!dialog-' + nick + '-' + itemId + '---';

	  if (_universalEnv.isWeex) {
	    __webpack_require__(44).push({
	      url: url,
	      animated: 'true'
	    }, function (e) {
	      callback && callback(e);
	    });
	  } else {
	    location.href = url;
	  }
	};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";

	// private property
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	// private method for UTF-8 decoding
	function _utf8_decode(utftext) {
	  var string = "",
	      i = 0,
	      c,
	      c3,
	      c2;
	  c = c3 = c2 = 0;
	  while (i < utftext.length) {
	    c = utftext.charCodeAt(i);
	    if (c < 128) {
	      string += String.fromCharCode(c);
	      i++;
	    } else if (c > 191 && c < 224) {
	      c2 = utftext.charCodeAt(i + 1);
	      string += String.fromCharCode((c & 31) << 6 | c2 & 63);
	      i += 2;
	    } else {
	      c2 = utftext.charCodeAt(i + 1);
	      c3 = utftext.charCodeAt(i + 2);
	      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
	      i += 3;
	    }
	  }
	  return string;
	}

	// private method for UTF-8 encoding
	function _utf8_encode(string) {
	  string = string.replace(/\r\n/g, "\n");
	  var utftext = "";
	  for (var n = 0; n < string.length; n++) {
	    var c = string.charCodeAt(n);
	    if (c < 128) {
	      utftext += String.fromCharCode(c);
	    } else if (c > 127 && c < 2048) {
	      utftext += String.fromCharCode(c >> 6 | 192);
	      utftext += String.fromCharCode(c & 63 | 128);
	    } else {
	      utftext += String.fromCharCode(c >> 12 | 224);
	      utftext += String.fromCharCode(c >> 6 & 63 | 128);
	      utftext += String.fromCharCode(c & 63 | 128);
	    }
	  }
	  return utftext;
	}

	// public method for encoding
	module.exports = {
	  encode: function encode(input) {
	    var output = "";
	    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	    var i = 0;
	    input = _utf8_encode(input);
	    while (i < input.length) {
	      chr1 = input.charCodeAt(i++);
	      chr2 = input.charCodeAt(i++);
	      chr3 = input.charCodeAt(i++);
	      enc1 = chr1 >> 2;
	      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
	      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
	      enc4 = chr3 & 63;
	      if (isNaN(chr2)) {
	        enc3 = enc4 = 64;
	      } else if (isNaN(chr3)) {
	        enc4 = 64;
	      }
	      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
	    }
	    return output;
	  },

	  // public method for decoding
	  decode: function decode(input) {
	    var output = "";
	    var chr1, chr2, chr3;
	    var enc1, enc2, enc3, enc4;
	    var i = 0;
	    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	    while (i < input.length) {
	      enc1 = _keyStr.indexOf(input.charAt(i++));
	      enc2 = _keyStr.indexOf(input.charAt(i++));
	      enc3 = _keyStr.indexOf(input.charAt(i++));
	      enc4 = _keyStr.indexOf(input.charAt(i++));
	      chr1 = enc1 << 2 | enc2 >> 4;
	      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
	      chr3 = (enc3 & 3) << 6 | enc4;
	      output = output + String.fromCharCode(chr1);
	      if (enc3 !== 64) {
	        output = output + String.fromCharCode(chr2);
	      }
	      if (enc4 !== 64) {
	        output = output + String.fromCharCode(chr3);
	      }
	    }
	    output = _utf8_decode(output);
	    return output;
	  }
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	;

	var FetchDemo = function (_Component) {
	  _inherits(FetchDemo, _Component);

	  function FetchDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, FetchDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FetchDemo.__proto__ || Object.getPrototypeOf(FetchDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      fetchData: null,
	      jsonData: null
	    }, _this.doFetch = function () {
	      (0, _index.fetch)('https://g.alicdn.com/??kissy/k/6.2.4/seed-min.js').then(function (response) {
	        return response.text();
	      }).then(function (text) {
	        _this.setState({
	          fetchData: text.slice(1, 100) + '...'
	        });
	      }).catch(function (ex) {
	        _this.setState({
	          fetchData: JSON.stringify(ex)
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(FetchDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          { style: demoStyles.text },
	          'Fetch \u8BF7\u6C42\u7ED3\u679C\uFF1A',
	          this.state.fetchData
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.doFetch, onClick: this.doFetch, style: demoStyles.button },
	          '\u53D1\u8D77 Fetch \u8BF7\u6C42'
	        )
	      );
	    }
	  }]);

	  return FetchDemo;
	}(_rax.Component);

	var demoStyles = {
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    marginBottom: 40,
	    backgroundColor: '#EEE'
	  }
	};

	module.exports = FetchDemo;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var JsonpDemo = function (_Component) {
	  _inherits(JsonpDemo, _Component);

	  function JsonpDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, JsonpDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JsonpDemo.__proto__ || Object.getPrototypeOf(JsonpDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      jsonData: null
	    }, _this.doJsonp = function () {
	      (0, _index.jsonp)('//t.alicdn.com/t/gettime', {
	        method: 'jsonp',
	        timeout: 2000,
	        callback: 'abc',
	        body: 'a=123&b=456&c=789'
	      }).then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        _this.setState({
	          jsonData: JSON.stringify(json)
	        });
	      }).catch(function (ex) {
	        _this.setState({
	          jsonData: JSON.stringify(ex)
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(JsonpDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          { style: demoStyles.text },
	          'Jsonp \u8BF7\u6C42\u7ED3\u679C\uFF1A',
	          this.state.jsonData
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.doJsonp, onClick: this.doJsonp, style: demoStyles.button },
	          '\u53D1\u8D77 Jsonp \u8BF7\u6C42'
	        )
	      );
	    }
	  }]);

	  return JsonpDemo;
	}(_rax.Component);

	var demoStyles = {
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    marginBottom: 40,
	    backgroundColor: '#EEE'
	  }
	};

	module.exports = JsonpDemo;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var log = [];

	var StorageDemo = function (_Component) {
	  _inherits(StorageDemo, _Component);

	  function StorageDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, StorageDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StorageDemo.__proto__ || Object.getPrototypeOf(StorageDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      val: null,
	      log: []
	    }, _this.setVal = function () {
	      var val = Math.random();
	      _index.storage.setItem('val', val, function () {
	        log.push('val = ' + val);
	        _this.setState({
	          log: log
	        });
	      });
	    }, _this.getVal = function () {
	      _index.storage.getItem('val', function (val) {
	        log.push('get val: ' + val.data);
	        _this.setState({
	          log: log
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(StorageDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        this.state.log.map(function (val) {
	          return (0, _rax.createElement)(
	            _tileText2.default,
	            null,
	            val
	          );
	        }),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.setVal, onClick: this.setVal, style: demoStyles.button },
	          '\u4FDD\u5B58\u4E00\u4E2A\u968F\u673A\u6570'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.getVal, onClick: this.getVal, style: demoStyles.button },
	          '\u83B7\u53D6'
	        )
	      );
	    }
	  }]);

	  return StorageDemo;
	}(_rax.Component);

	var demoStyles = {
	  input: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid'
	  },
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = StorageDemo;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var appkey = 23025092;

	function pushWindowFunc() {
	  _index.navigator.push({
	    url: "https://h5.m.taobao.com/lanlan/index.html",
	    animated: true
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  });
	}
	function popWindowFunc() {
	  _index.navigator.pop({
	    animated: true
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  });
	}
	function openWindowFunc() {
	  _index.navigator.open({
	    url: "https://h5.m.taobao.com/lanlan/index.html",
	    animated: true,
	    target: "_blank"
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  });
	}
	function closeWindowFunc() {
	  _index.navigator.close({
	    animated: true
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  });
	}
	function showTitleFunc() {
	  _index.navigator.show({
	    animated: true
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  });
	}
	function hideTitleFunc() {
	  _index.navigator.hide({
	    animated: true
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  });
	}
	function setTitleFunc() {
	  _index.navigator.setTitle({
	    title: "I am title",
	    subTitle: "I am subtitle",
	    icon: "//img.alicdn.com/tfs/TB1XlF3RpXXXXc6XXXXXXXXXXXX-16-16.png"
	  }, function (e) {
	    console.log(JSON.stringify(e));
	  }, function (e) {
	    alert(JSON.stringify(e));
	  });
	}

	var NavigatorDemo = function (_Component) {
	  _inherits(NavigatorDemo, _Component);

	  function NavigatorDemo() {
	    _classCallCheck(this, NavigatorDemo);

	    return _possibleConstructorReturn(this, (NavigatorDemo.__proto__ || Object.getPrototypeOf(NavigatorDemo)).apply(this, arguments));
	  }

	  _createClass(NavigatorDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: pushWindowFunc, onClick: pushWindowFunc, style: demoStyles.button },
	          '\u6267\u884C push \u65B9\u6CD5'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: popWindowFunc, onClick: popWindowFunc, style: demoStyles.button },
	          '\u6267\u884C pop \u65B9\u6CD5'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: openWindowFunc, onClick: openWindowFunc, style: demoStyles.button },
	          '\u6267\u884C open \u65B9\u6CD5'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: closeWindowFunc, onClick: closeWindowFunc, style: demoStyles.button },
	          '\u6267\u884C close \u65B9\u6CD5'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: showTitleFunc, onClick: showTitleFunc, style: demoStyles.button },
	          '\u6267\u884C show \u65B9\u6CD5'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: hideTitleFunc, onClick: hideTitleFunc, style: demoStyles.button },
	          '\u6267\u884C hide \u65B9\u6CD5'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: setTitleFunc, onClick: setTitleFunc, style: demoStyles.button },
	          '\u6267\u884C setTitle \u65B9\u6CD5'
	        )
	      );
	    }
	  }]);

	  return NavigatorDemo;
	}(_rax.Component);

	var demoStyles = {
	  input: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid'
	  },
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	module.exports = NavigatorDemo;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Share = function (_Component) {
	  _inherits(Share, _Component);

	  function Share() {
	    _classCallCheck(this, Share);

	    return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
	  }

	  _createClass(Share, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileView2.default,
	          _defineProperty({ clickable: true, style: _style2.default.text,
	            onPress: function onPress() {
	              _index.toast.show('Hi');
	            } }, 'style', demoStyles.button),
	          'Hi'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          _defineProperty({ clickable: true, style: _style2.default.text,
	            onPress: function onPress() {
	              _index.toast.show('Hello Short', _index.toast.SHORT);
	            } }, 'style', demoStyles.button),
	          'Hello Short'
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          _defineProperty({ clickable: true, style: _style2.default.text,
	            onPress: function onPress() {
	              _index.toast.show('Hello Long', _index.toast.LONG);
	            } }, 'style', demoStyles.button),
	          'Hello Long'
	        )
	      );
	    }
	  }]);

	  return Share;
	}(_rax.Component);

	var demoStyles = {
	  input: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid'
	  },
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = Share;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ENV = function (_Component) {
	  _inherits(ENV, _Component);

	  function ENV() {
	    _classCallCheck(this, ENV);

	    return _possibleConstructorReturn(this, (ENV.__proto__ || Object.getPrototypeOf(ENV)).apply(this, arguments));
	  }

	  _createClass(ENV, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileView2.default,
	          null,
	          '\u5F53\u524D\u73AF\u5883\u662F\uFF1A ',
	          (0, _rax.createElement)(
	            _tileText2.default,
	            { style: { color: '#F60', fontSize: 50 } },
	            _index.isWeex ? 'Weex' : 'Web'
	          )
	        )
	      );
	    }
	  }]);

	  return ENV;
	}(_rax.Component);

	exports.default = ENV;
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GeolocationDemo = function (_Component) {
	  _inherits(GeolocationDemo, _Component);

	  function GeolocationDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, GeolocationDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GeolocationDemo.__proto__ || Object.getPrototypeOf(GeolocationDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isFetching: false,
	      crd: {
	        latitude: '',
	        longitude: '',
	        accuracy: ''
	      }
	    }, _this.fetch = function () {
	      if (_this.state.isFetching) return;
	      _this.setState({
	        isFetching: true
	      });
	      _index.geolocation.getCurrentPosition(function (data) {
	        console.log(data);
	        _this.setState({
	          isFetching: false,
	          crd: data.coords
	        });
	      }, function (err) {
	        _this.setState({
	          isFetching: false
	        });
	        console.log(err);
	      }, {
	        enableHighAccuracy: true,
	        timeout: 3000,
	        maximumAge: 0
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(GeolocationDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          null,
	          '\u7EAC\u5EA6: ',
	          this.state.crd.latitude
	        ),
	        (0, _rax.createElement)(
	          _tileText2.default,
	          null,
	          '\u7ECF\u5EA6: ',
	          this.state.crd.longitude
	        ),
	        (0, _rax.createElement)(
	          _tileText2.default,
	          null,
	          '\u7CBE\u5EA6: ',
	          this.state.crd.accuracy
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.fetch, onClick: this.fetch, style: demoStyles.button },
	          '\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E',
	          this.state.isFetching ? "(获取中...)" : null
	        )
	      );
	    }
	  }]);

	  return GeolocationDemo;
	}(_rax.Component);

	var demoStyles = {
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = GeolocationDemo;
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NetworkDemo = function (_Component) {
	  _inherits(NetworkDemo, _Component);

	  function NetworkDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, NetworkDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NetworkDemo.__proto__ || Object.getPrototypeOf(NetworkDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      type: ''
	    }, _this.fetch = function () {
	      _index.network.getType(function (data) {
	        console.log(data);
	        _this.setState({
	          type: data.type
	        });
	      }, function (e) {
	        console.log(e);
	        _this.setState({
	          type: e.type
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(NetworkDemo, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          null,
	          '\u7F51\u7EDC\u7C7B\u578B: ',
	          this.state.type
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.fetch, onClick: this.fetch, style: demoStyles.button },
	          '\u83B7\u53D6\u7F51\u7EDC\u7C7B\u578B'
	        )
	      );
	    }
	  }]);

	  return NetworkDemo;
	}(_rax.Component);

	var demoStyles = {
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = NetworkDemo;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function openWangwang() {
	  (0, _index.wangwang)({
	    sellerNick: "莱夫箱包旗舰店",
	    itemId: "42828909348",
	    shopId: "100179231",
	    orderId: ""
	  }, function (s) {
	    console.log(s);
	  });
	}

	var Wangwang = function (_Component) {
	  _inherits(Wangwang, _Component);

	  function Wangwang() {
	    _classCallCheck(this, Wangwang);

	    return _possibleConstructorReturn(this, (Wangwang.__proto__ || Object.getPrototypeOf(Wangwang)).apply(this, arguments));
	  }

	  _createClass(Wangwang, [{
	    key: 'render',
	    value: function render() {
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: openWangwang, onClick: openWangwang, style: demoStyles.button },
	          '\u6253\u5F00\u65FA\u65FA\u804A\u5929'
	        )
	      );
	    }
	  }]);

	  return Wangwang;
	}(_rax.Component);

	var demoStyles = {
	  input: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid'
	  },
	  text: {
	    paddingLeft: 20,
	    paddingRight: 20
	  },
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = Wangwang;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserDemo = function (_Component) {
	  _inherits(UserDemo, _Component);

	  function UserDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, UserDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserDemo.__proto__ || Object.getPrototypeOf(UserDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      data: {
	        isLogin: false,
	        info: {
	          userId: '',
	          nick: ''
	        }
	      }
	    }, _this.login = function () {
	      _index.user.login(function (data) {
	        _this.setState({
	          data: data
	        });
	      });
	    }, _this.logout = function () {
	      _index.user.logout(function (data) {
	        _this.setState({
	          data: data
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(UserDemo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      _index.user.getUserInfo(function (data) {
	        console.log(data);
	        _this2.setState({
	          data: data
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isLogin = this.state.data.isLogin == true || this.state.data.isLogin == 'true';
	      var loginStatus = !isLogin ? '未登录' : '已登录';
	      var nick = '';
	      if (isLogin) {
	        nick = this.state.data.info.nick;
	      }
	      nick = nick ? nick + ', ' : '';
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          null,
	          'Hi, ',
	          nick,
	          '\u60A8\u5F53\u524D\u7684\u767B\u5F55\u72B6\u6001\u4E3A\uFF1A',
	          loginStatus
	        ),
	        !isLogin ? (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.login, onClick: this.login, style: demoStyles.button },
	          '\u70B9\u51FB\u767B\u5F55'
	        ) : (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.logout, onClick: this.logout, style: demoStyles.button },
	          '\u70B9\u51FB\u9000\u51FA'
	        )
	      );
	    }
	  }]);

	  return UserDemo;
	}(_rax.Component);

	var demoStyles = {
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = UserDemo;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _tileView = __webpack_require__(2);

	var _tileView2 = _interopRequireDefault(_tileView);

	var _tileText = __webpack_require__(5);

	var _tileText2 = _interopRequireDefault(_tileText);

	var _style = __webpack_require__(29);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScancodeDemo = function (_Component) {
	  _inherits(ScancodeDemo, _Component);

	  function ScancodeDemo() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ScancodeDemo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScancodeDemo.__proto__ || Object.getPrototypeOf(ScancodeDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      code: '',
	      errorCode: -1
	    }, _this.openScancode = function () {
	      (0, _index.scancode)(function (data) {
	        console.log(data);
	        _this.setState({
	          code: data.code,
	          errorCode: data.errorCode
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ScancodeDemo, [{
	    key: 'render',
	    value: function render() {
	      var code = this.state.code;
	      return (0, _rax.createElement)(
	        _tileView2.default,
	        { style: _style2.default.app },
	        (0, _rax.createElement)(
	          _tileText2.default,
	          null,
	          code
	        ),
	        (0, _rax.createElement)(
	          _tileView2.default,
	          { clickable: true, onPress: this.openScancode, style: demoStyles.button },
	          '\u70B9\u51FB\u626B\u7801\uFF08\u4E0D\u652F\u6301 Web\uFF09'
	        )
	      );
	    }
	  }]);

	  return ScancodeDemo;
	}(_rax.Component);

	var demoStyles = {
	  button: {
	    borderWidth: 2,
	    borderColor: '#CCC',
	    borderStyle: 'solid',
	    paddingLeft: 20,
	    paddingRight: 20,
	    marginTop: 40,
	    backgroundColor: '#EEE'
	  }
	};

	exports.default = ScancodeDemo;
	module.exports = exports['default'];

/***/ })
/******/ ])}); require("index.bundle");;