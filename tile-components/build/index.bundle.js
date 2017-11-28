// {"framework" : "Rax"}
define("index.bundle", function(require) {/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = (function(){ var mod;if (!mod) { try { mod = require("rax") } catch(e) {} }return mod;})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxView2.default;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxText2.default;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return (0, _rax.createElement)(
          'span',
          nativeProps,
          textString
        );
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

        return (0, _rax.createElement)(
          'span',
          _extends({}, nativeProps, { style: styleProps }),
          textString
        );
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

      return (0, _rax.createElement)(
        'p',
        _extends({}, nativeProps, { style: styleProps }),
        children
      );
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



Animated=function(){function Animated(){_classCallCheck(this,Animated);}_createClass(Animated,[{key:'__attach',value:function __attach()
{}},{key:'__detach',value:function __detach()
{}},{key:'__getValue',value:function __getValue()
{}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
{return this.__getValue();}},{key:'__addChild',value:function __addChild(
child){}},{key:'__removeChild',value:function __removeChild(
child){}},{key:'__getChildren',value:function __getChildren()
{return[];}}]);return Animated;}();


module.exports=Animated;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          return (0, _rax.createElement)(
            _raxView2.default,
            { style: nativeProps.style },
            (0, _rax.createElement)(NativeImage, nativeProps),
            (0, _rax.createElement)(
              _raxView2.default,
              { style: styles.absoluteImage },
              this.props.children
            )
          );
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Touchable = function (_Component) {
  _inherits(Touchable, _Component);

  function Touchable() {
    _classCallCheck(this, Touchable);

    return _possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));
  }

  _createClass(Touchable, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var nativeProps = _extends({}, props, {
        style: _extends({}, styles.initial, props.style),
        onClick: props.onPress
      });

      delete nativeProps.onPress;

      return (0, _rax.createElement)(_raxView2.default, nativeProps);
    }
  }]);

  return Touchable;
}(_rax.Component);

Touchable.propTypes = {};


var styles = {
  initial: {
    cursor: 'pointer'
  }
};

exports.default = Touchable;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);var

AnimatedWithChildren=function(_Animated){_inherits(AnimatedWithChildren,_Animated);


function AnimatedWithChildren(){_classCallCheck(this,AnimatedWithChildren);var _this=_possibleConstructorReturn(this,(AnimatedWithChildren.__proto__||Object.getPrototypeOf(AnimatedWithChildren)).call(this));

_this._children=[];return _this;
}_createClass(AnimatedWithChildren,[{key:'__addChild',value:function __addChild(

child){
if(this._children.length===0){
this.__attach();
}
this._children.push(child);
}},{key:'__removeChild',value:function __removeChild(

child){
var index=this._children.indexOf(child);
if(index===-1){
console.warn('Trying to remove a child that doesn\'t exist');
return;
}
this._children.splice(index,1);
if(this._children.length===0){
this.__detach();
}
}},{key:'__getChildren',value:function __getChildren()

{
return this._children;
}}]);return AnimatedWithChildren;}(Animated);


module.exports=AnimatedWithChildren;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxPicture = __webpack_require__(43);

var _raxPicture2 = _interopRequireDefault(_raxPicture);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TBOCImage = _raxPicture2.default;
TBOCImage.resizeMode = _raxImage2.default.resizeMode;

exports.default = TBOCImage;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__(9);
var InteractionManager=__webpack_require__(36);
var AnimatedInterpolation=__webpack_require__(18);
var Interpolation=__webpack_require__(14);
var Animation=__webpack_require__(15);
var guid=__webpack_require__(27);
var Set;
if(typeof global=='object'&&global.Set){
Set=global.Set;
}else if(typeof window=='object'&&window.Set){
Set=window.Set;
}else{
Set=__webpack_require__(108);
}




























function _flush(rootNode){
var animatedStyles=new Set();
function findAnimatedStyles(node){
if(typeof node.update==='function'){
animatedStyles.add(node);
}else{
node.__getChildren().forEach(findAnimatedStyles);
}
}
findAnimatedStyles(rootNode);
animatedStyles.forEach(function(animatedStyle){return animatedStyle.update();});
}var







AnimatedValue=function(_AnimatedWithChildren){_inherits(AnimatedValue,_AnimatedWithChildren);






function AnimatedValue(value){_classCallCheck(this,AnimatedValue);var _this=_possibleConstructorReturn(this,(AnimatedValue.__proto__||Object.getPrototypeOf(AnimatedValue)).call(this));

_this._value=value;
_this._offset=0;
_this._animation=null;
_this._listeners={};return _this;
}_createClass(AnimatedValue,[{key:'__detach',value:function __detach()

{
this.stopAnimation();
}},{key:'__getValue',value:function __getValue()

{
return this._value+this._offset;
}},{key:'setValue',value:function setValue(





value){
if(this._animation){
this._animation.stop();
this._animation=null;
}
this._updateValue(value);
}},{key:'setOffset',value:function setOffset(






offset){
this._offset=offset;
}},{key:'flattenOffset',value:function flattenOffset()





{
this._value+=this._offset;
this._offset=0;
}},{key:'addListener',value:function addListener(






callback){
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'removeAllListeners',value:function removeAllListeners()

{
this._listeners={};
}},{key:'stopAnimation',value:function stopAnimation(






callback){
this.stopTracking();
this._animation&&this._animation.stop();
this._animation=null;
callback&&callback(this.__getValue());
}},{key:'interpolate',value:function interpolate(





config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'animate',value:function animate(





animation,callback){var _this2=this;
var handle=null;
if(animation.__isInteraction){
handle=InteractionManager.current.createInteractionHandle();
}
var previousAnimation=this._animation;
this._animation&&this._animation.stop();
this._animation=animation;
animation.start(
this._value,
function(value){
_this2._updateValue(value);
},
function(result){
_this2._animation=null;
if(handle!==null){
InteractionManager.current.clearInteractionHandle(handle);
}
callback&&callback(result);
},
previousAnimation);

}},{key:'stopTracking',value:function stopTracking()




{
this._tracking&&this._tracking.__detach();
this._tracking=null;
}},{key:'track',value:function track(




tracking){
this.stopTracking();
this._tracking=tracking;
}},{key:'_updateValue',value:function _updateValue(

value){
this._value=value;
_flush(this);
for(var key in this._listeners){
this._listeners[key]({value:this.__getValue()});
}
}}]);return AnimatedValue;}(AnimatedWithChildren);


module.exports=AnimatedValue;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxLink = __webpack_require__(42);

var _raxLink2 = _interopRequireDefault(_raxLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxLink2.default;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return (0, _rax.createElement)(
          'refresh',
          _extends({}, this.props, { display: displayRefresh }),
          this.props.children
        );
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var normalizeColor=__webpack_require__(107);

var invariant=__webpack_require__(19);












var linear=function linear(t){return t;};var





Interpolation=function(){function Interpolation(){_classCallCheck(this,Interpolation);}_createClass(Interpolation,null,[{key:'create',value:function create(
config){

if(config.outputRange&&typeof config.outputRange[0]==='string'){
return createInterpolationFromStringOutputRange(config);
}

var outputRange=config.outputRange;
checkInfiniteRange('outputRange',outputRange);

var inputRange=config.inputRange;
checkInfiniteRange('inputRange',inputRange);
checkValidInputRange(inputRange);

invariant(
inputRange.length===outputRange.length,
'inputRange ('+inputRange.length+') and outputRange ('+
outputRange.length+') must have the same length');


var easing=config.easing||linear;

var extrapolateLeft='extend';
if(config.extrapolateLeft!==undefined){
extrapolateLeft=config.extrapolateLeft;
}else if(config.extrapolate!==undefined){
extrapolateLeft=config.extrapolate;
}

var extrapolateRight='extend';
if(config.extrapolateRight!==undefined){
extrapolateRight=config.extrapolateRight;
}else if(config.extrapolate!==undefined){
extrapolateRight=config.extrapolate;
}

return function(input){
invariant(
typeof input==='number',
'Cannot interpolation an input which is not a number');


var range=findRange(input,inputRange);
return interpolate(
input,
inputRange[range],
inputRange[range+1],
outputRange[range],
outputRange[range+1],
easing,
extrapolateLeft,
extrapolateRight);

};
}}]);return Interpolation;}();


function interpolate(
input,
inputMin,
inputMax,
outputMin,
outputMax,
easing,
extrapolateLeft,
extrapolateRight)
{
var result=input;


if(result<inputMin){
if(extrapolateLeft==='identity'){
return result;
}else if(extrapolateLeft==='clamp'){
result=inputMin;
}else if(extrapolateLeft==='extend'){

}
}

if(result>inputMax){
if(extrapolateRight==='identity'){
return result;
}else if(extrapolateRight==='clamp'){
result=inputMax;
}else if(extrapolateRight==='extend'){

}
}

if(outputMin===outputMax){
return outputMin;
}

if(inputMin===inputMax){
if(input<=inputMin){
return outputMin;
}
return outputMax;
}


if(inputMin===-Infinity){
result=-result;
}else if(inputMax===Infinity){
result=result-inputMin;
}else{
result=(result-inputMin)/(inputMax-inputMin);
}


result=easing(result);


if(outputMin===-Infinity){
result=-result;
}else if(outputMax===Infinity){
result=result+outputMin;
}else{
result=result*(outputMax-outputMin)+outputMin;
}

return result;
}

function colorToRgba(input){
var int32Color=normalizeColor(input);
if(int32Color===null){
return input;
}

int32Color=int32Color||0;

var r=(int32Color&0xff000000)>>>24;
var g=(int32Color&0x00ff0000)>>>16;
var b=(int32Color&0x0000ff00)>>>8;
var a=(int32Color&0x000000ff)/255;

return'rgba('+r+', '+g+', '+b+', '+a+')';
}

var stringShapeRegex=/[0-9\.-]+/g;









function createInterpolationFromStringOutputRange(
config)
{
var outputRange=config.outputRange;
invariant(outputRange.length>=2,'Bad output range');
outputRange=outputRange.map(colorToRgba);
checkPattern(outputRange);












var outputRanges=outputRange[0].match(stringShapeRegex).map(function(){return[];});
outputRange.forEach(function(value){



value.match(stringShapeRegex).forEach(function(number,i){
outputRanges[i].push(+number);
});
});




var interpolations=outputRange[0].match(stringShapeRegex).map(function(value,i){
return Interpolation.create(_extends({},
config,{
outputRange:outputRanges[i]}));

});



var shouldRound=/^rgb/.test(outputRange[0]);

return function(input){
var i=0;



return outputRange[0].replace(stringShapeRegex,function(){
var val=interpolations[i++](input);
return String(shouldRound&&i<4?Math.round(val):val);
});
};
}

function checkPattern(arr){
var pattern=arr[0].replace(stringShapeRegex,'');
for(var i=1;i<arr.length;++i){
invariant(
pattern===arr[i].replace(stringShapeRegex,''),
'invalid pattern '+arr[0]+' and '+arr[i]);

}
}

function findRange(input,inputRange){
for(var i=1;i<inputRange.length-1;++i){
if(inputRange[i]>=input){
break;
}
}
return i-1;
}

function checkValidInputRange(arr){
invariant(arr.length>=2,'inputRange must have at least 2 elements');
for(var i=1;i<arr.length;++i){
invariant(
arr[i]>=arr[i-1],






'inputRange must be monotonically increasing '+arr);

}
}

function checkInfiniteRange(name,arr){
invariant(arr.length>=2,name+' must have at least 2 elements');
invariant(
arr.length!==2||arr[0]!==-Infinity||arr[1]!==Infinity,






name+'cannot be ]-infinity;+infinity[ '+arr);

}

module.exports=Interpolation;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var










Animation=function(){function Animation(){_classCallCheck(this,Animation);}_createClass(Animation,[{key:'start',value:function start(




fromValue,
onUpdate,
onEnd,
previousAnimation)
{}},{key:'stop',value:function stop()
{}},{key:'__debouncedOnEnd',value:function __debouncedOnEnd(

result){
var onEnd=this.__onEnd;
this.__onEnd=null;
onEnd&&onEnd(result);
}}]);return Animation;}();


module.exports=Animation;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@weex-module/dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxButton = __webpack_require__(71);

var _raxButton2 = _interopRequireDefault(_raxButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxButton2.default;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedWithChildren=__webpack_require__(9);
var invariant=__webpack_require__(19);
var Interpolation=__webpack_require__(14);
var guid=__webpack_require__(27);var



AnimatedInterpolation=function(_AnimatedWithChildren){_inherits(AnimatedInterpolation,_AnimatedWithChildren);





function AnimatedInterpolation(parent,interpolation){_classCallCheck(this,AnimatedInterpolation);var _this=_possibleConstructorReturn(this,(AnimatedInterpolation.__proto__||Object.getPrototypeOf(AnimatedInterpolation)).call(this));

_this._parent=parent;
_this._interpolation=interpolation;
_this._listeners={};return _this;
}_createClass(AnimatedInterpolation,[{key:'__getValue',value:function __getValue()

{
var parentValue=this._parent.__getValue();
invariant(
typeof parentValue==='number',
'Cannot interpolate an input which is not a number.');

return this._interpolation(parentValue);
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._parentListener){
this._parentListener=this._parent.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._parent.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._parent.__removeChild(this);
this._parentListener=this._parent.removeListener(this._parentListener);
}}]);return AnimatedInterpolation;}(AnimatedWithChildren);


module.exports=AnimatedInterpolation;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var thisRequestAnimationFrame;
if(typeof global=='object'){
thisRequestAnimationFrame=global.requestAnimationFrame;
}else if(typeof window=='object'){
thisRequestAnimationFrame=window.requestAnimationFrame;
}
var RequestAnimationFrame={
current:function current(cb){return thisRequestAnimationFrame(cb);},
inject:function inject(injected){
RequestAnimationFrame.current=injected;
}};


module.exports=RequestAnimationFrame;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var thisCancelAnimationFrame;
if(typeof global=='object'){
thisCancelAnimationFrame=global.cancelAnimationFrame;
}else if(typeof window=='object'){
thisCancelAnimationFrame=window.cancelAnimationFrame;
}
var CancelAnimationFrame={
current:function current(id){return thisCancelAnimationFrame(id);},
inject:function inject(injected){
CancelAnimationFrame.current=injected;
}};


module.exports=CancelAnimationFrame;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxScrollview = __webpack_require__(54);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxScrollview2.default;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxRefreshcontrol = __webpack_require__(13);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        var dom = __webpack_require__(16);
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

      var contentContainer = (0, _rax.createElement)(
        _raxView2.default,
        {
          ref: 'contentContainer',
          style: contentContainerStyle },
        contentChild
      );

      var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;

      var scrollerStyle = _extends({}, baseStyle, this.props.style);

      var showsScrollIndicator = this.props.horizontal ? showsHorizontalScrollIndicator : showsVerticalScrollIndicator;

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          'scroller',
          _extends({}, this.props, {
            style: scrollerStyle,
            showScrollbar: showsScrollIndicator,
            onLoadmore: onEndReached,
            onScroll: onScroll ? this.handleScroll : null,
            loadmoreoffset: onEndReachedThreshold,
            loadmoreretry: this.state.loadmoreretry,
            scrollDirection: this.props.horizontal ? 'horizontal' : 'vertical'
          }),
          refreshContainer,
          contentContainer
        );
      } else {
        var handleScroll = this.handleScroll;
        if (scrollEventThrottle) {
          handleScroll = throttle(handleScroll, scrollEventThrottle);
        }

        if (!showsScrollIndicator && !document.getElementById('rax-scrollview-style')) {
          var styleNode = document.createElement('style');
          styleNode.id = 'rax-scrollview-style';
          document.head.appendChild(styleNode);
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

        return (0, _rax.createElement)(
          _raxView2.default,
          webProps,
          contentContainer
        );
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _universalEnv = __webpack_require__(1);

var _TouchHistoryMath = __webpack_require__(66);

var _TouchHistoryMath2 = _interopRequireDefault(_TouchHistoryMath);

var _ResponderTouchHistoryStore = __webpack_require__(67);

var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentCentroidXOfTouchesChangedAfter = _TouchHistoryMath2.default.currentCentroidXOfTouchesChangedAfter;
var currentCentroidYOfTouchesChangedAfter = _TouchHistoryMath2.default.currentCentroidYOfTouchesChangedAfter;
var previousCentroidXOfTouchesChangedAfter = _TouchHistoryMath2.default.previousCentroidXOfTouchesChangedAfter;
var previousCentroidYOfTouchesChangedAfter = _TouchHistoryMath2.default.previousCentroidYOfTouchesChangedAfter;
var currentCentroidX = _TouchHistoryMath2.default.currentCentroidX;
var currentCentroidY = _TouchHistoryMath2.default.currentCentroidY;

/**
 * `PanResponder` reconciles several touches into a single gesture. It makes
 * single-touch gestures resilient to extra touches, and can be used to
 * recognize simple multi-touch gestures.
 *
 * By default, `PanResponder` holds an `InteractionManager handle to block
 * long-running JS events from interrupting active gestures.
 *
 * It provides a predictable wrapper of the responder handlers provided by the
 * [gesture responder system](docs/gesture-responder-system.html).
 * For each handler, it provides a new `gestureState` object alongside the
 * native event object:
 *
 * ```
 * onPanResponderMove: (event, gestureState) => {}
 * ```
 *
 * A native event is a synthetic touch event with the following form:
 *
 *  - `nativeEvent`
 *      + `changedTouches` - Array of all touch events that have changed since the last event
 *      + `identifier` - The ID of the touch
 *      + `locationX` - The X position of the touch, relative to the element
 *      + `locationY` - The Y position of the touch, relative to the element
 *      + `pageX` - The X position of the touch, relative to the root element
 *      + `pageY` - The Y position of the touch, relative to the root element
 *      + `target` - The node id of the element receiving the touch event
 *      + `timestamp` - A time identifier for the touch, useful for velocity calculation
 *      + `touches` - Array of all current touches on the screen
 *
 * A `gestureState` object has the following:
 *
 *  - `stateID` - ID of the gestureState- persisted as long as there at least
 *     one touch on screen
 *  - `moveX` - the latest screen coordinates of the recently-moved touch
 *  - `moveY` - the latest screen coordinates of the recently-moved touch
 *  - `x0` - the screen coordinates of the responder grant
 *  - `y0` - the screen coordinates of the responder grant
 *  - `dx` - accumulated distance of the gesture since the touch started
 *  - `dy` - accumulated distance of the gesture since the touch started
 *  - `vx` - current velocity of the gesture
 *  - `vy` - current velocity of the gesture
 *  - `numberActiveTouches` - Number of touches currently on screen
 *
 * ### Basic Usage
 *
 * ```
 *   componentWillMount: function() {
 *     this._panResponder = PanResponder.create({
 *       // Ask to be the responder:
 *       onStartShouldSetPanResponder: (evt, gestureState) => true,
 *       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
 *       onMoveShouldSetPanResponder: (evt, gestureState) => true,
 *       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
 *
 *       onPanResponderGrant: (evt, gestureState) => {
 *         // The guesture has started. Show visual feedback so the user knows
 *         // what is happening!
 *
 *         // gestureState.{x,y}0 will be set to zero now
 *       },
 *       onPanResponderMove: (evt, gestureState) => {
 *         // The most recent move distance is gestureState.move{X,Y}
 *
 *         // The accumulated gesture distance since becoming responder is
 *         // gestureState.d{x,y}
 *       },
 *       onPanResponderTerminationRequest: (evt, gestureState) => true,
 *       onPanResponderRelease: (evt, gestureState) => {
 *         // The user has released all touches while this view is the
 *         // responder. This typically means a gesture has succeeded
 *       },
 *       onPanResponderTerminate: (evt, gestureState) => {
 *         // Another component has become the responder, so this gesture
 *         // should be cancelled
 *       },
 *       onShouldBlockNativeResponder: (evt, gestureState) => {
 *         // Returns whether this component should block native components from becoming the JS
 *         // responder. Returns true by default. Is currently only supported on android.
 *         return true;
 *       },
 *     });
 *   },
 *
 *   render: function() {
 *     return (
 *       <View {...this._panResponder.panHandlers} />
 *     );
 *   },
 *
 * ```
 *
 * ### Working Example
 *
 * To see it in action, try the
 * [PanResponder example in UIExplorer](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/PanResponderExample.js)
 */

var PanResponder = {

  /**
   *
   * A graphical explanation of the touch data flow:
   *
   * +----------------------------+             +--------------------------------+
   * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
   * +----------------------------+             +----------+---------------------+
   * |Global store of touchHistory|             |Allocation-less math util       |
   * |including activeness, start |             |on touch history (centroids     |
   * |position, prev/cur position.|             |and multitouch movement etc)    |
   * |                            |             |                                |
   * +----^-----------------------+             +----^---------------------------+
   *      |                                          |
   *      | (records relevant history                |
   *      |  of touches relevant for                 |
   *      |  implementing higher level               |
   *      |  gestures)                               |
   *      |                                          |
   * +----+-----------------------+             +----|---------------------------+
   * | ResponderEventPlugin       |             |    |   Your App/Component      |
   * +----------------------------+             +----|---------------------------+
   * |Negotiates which view gets  | Low level   |    |             High level    |
   * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
   * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
   * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
   * +----------------------------+ attached to |  |         |     distance and  |
   *                                 each event |  +---------+     velocity.     |
   *                                            |                                |
   *                                            |                                |
   *                                            +--------------------------------+
   *
   *
   *
   * Gesture that calculates cumulative movement over time in a way that just
   * "does the right thing" for multiple touches. The "right thing" is very
   * nuanced. When moving two touches in opposite directions, the cumulative
   * distance is zero in each dimension. When two touches move in parallel five
   * pixels in the same direction, the cumulative distance is five, not ten. If
   * two touches start, one moves five in a direction, then stops and the other
   * touch moves fives in the same direction, the cumulative distance is ten.
   *
   * This logic requires a kind of processing of time "clusters" of touch events
   * so that two touch moves that essentially occur in parallel but move every
   * other frame respectively, are considered part of the same movement.
   *
   * Explanation of some of the non-obvious fields:
   *
   * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
   *   invalid. If a move event has been observed, `(moveX, moveY)` is the
   *   centroid of the most recently moved "cluster" of active touches.
   *   (Currently all move have the same timeStamp, but later we should add some
   *   threshold for what is considered to be "moving"). If a palm is
   *   accidentally counted as a touch, but a finger is moving greatly, the palm
   *   will move slightly, but we only want to count the single moving touch.
   * - x0/y0: Centroid location (non-cumulative) at the time of becoming
   *   responder.
   * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
   *   distance. Accounts for touch moves that are clustered together in time,
   *   moving the same direction. Only valid when currently responder (otherwise,
   *   it only represents the drag distance below the threshold).
   * - vx/vy: Velocity.
   */

  _initializeGestureState: function _initializeGestureState(gestureState) {
    gestureState.moveX = 0;
    gestureState.moveY = 0;
    gestureState.x0 = 0;
    gestureState.y0 = 0;
    gestureState.dx = 0;
    gestureState.dy = 0;
    gestureState.vx = 0;
    gestureState.vy = 0;
    gestureState.numberActiveTouches = 0;
    // All `gestureState` accounts for timeStamps up until:
    gestureState._accountsForMovesUpTo = 0;
  },

  /**
   * This is nuanced and is necessary. It is incorrect to continuously take all
   * active *and* recently moved touches, find the centroid, and track how that
   * result changes over time. Instead, we must take all recently moved
   * touches, and calculate how the centroid has changed just for those
   * recently moved touches, and append that change to an accumulator. This is
   * to (at least) handle the case where the user is moving three fingers, and
   * then one of the fingers stops but the other two continue.
   *
   * This is very different than taking all of the recently moved touches and
   * storing their centroid as `dx/dy`. For correctness, we must *accumulate
   * changes* in the centroid of recently moved touches.
   *
   * There is also some nuance with how we handle multiple moved touches in a
   * single event. With the way `ReactNativeEventEmitter` dispatches touches as
   * individual events, multiple touches generate two 'move' events, each of
   * them triggering `onResponderMove`. But with the way `PanResponder` works,
   * all of the gesture inference is performed on the first dispatch, since it
   * looks at all of the touches (even the ones for which there hasn't been a
   * native dispatch yet). Therefore, `PanResponder` does not call
   * `onResponderMove` passed the first dispatch. This diverges from the
   * typical responder callback pattern (without using `PanResponder`), but
   * avoids more dispatches than necessary.
   */
  _updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
    gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
    gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
    var movedAfter = gestureState._accountsForMovesUpTo;
    var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    var nextDX = gestureState.dx + (x - prevX);
    var nextDY = gestureState.dy + (y - prevY);

    // TODO: This must be filtered intelligently.
    var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
    gestureState.vx = (nextDX - gestureState.dx) / dt;
    gestureState.vy = (nextDY - gestureState.dy) / dt;

    gestureState.dx = nextDX;
    gestureState.dy = nextDY;
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },

  /**
   * @param {object} config Enhanced versions of all of the responder callbacks
   * that provide not only the typical `ResponderSyntheticEvent`, but also the
   * `PanResponder` gesture state.  Simply replace the word `Responder` with
   * `PanResponder` in each of the typical `onResponder*` callbacks. For
   * example, the `config` object would look like:
   *
   *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onPanResponderReject: (e, gestureState) => {...}`
   *  - `onPanResponderGrant: (e, gestureState) => {...}`
   *  - `onPanResponderStart: (e, gestureState) => {...}`
   *  - `onPanResponderEnd: (e, gestureState) => {...}`
   *  - `onPanResponderRelease: (e, gestureState) => {...}`
   *  - `onPanResponderMove: (e, gestureState) => {...}`
   *  - `onPanResponderTerminate: (e, gestureState) => {...}`
   *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
   *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
   *
   *  In general, for events that have capture equivalents, we update the
   *  gestureState once in the capture phase and can use it in the bubble phase
   *  as well.
   *
   *  Be careful with onStartShould* callbacks. They only reflect updated
   *  `gestureState` for start/end events that bubble/capture to the Node.
   *  Once the node is the responder, you can rely on every start/end event
   *  being processed by the gesture and `gestureState` being updated
   *  accordingly. (numberActiveTouches) may not be totally accurate unless you
   *  are the responder.
   */
  create: function create(config) {
    var gestureState = {
      // Useful for debugging
      stateID: Math.random()
    };
    PanResponder._initializeGestureState(gestureState);

    var setHandlers = {
      // Ask to be the responder:
      onStartShouldSetResponder: function onStartShouldSetResponder(e) {
        return config.onStartShouldSetPanResponder === undefined ? false : config.onStartShouldSetPanResponder(e, gestureState);
      },
      onMoveShouldSetResponder: function onMoveShouldSetResponder(e) {
        return config.onMoveShouldSetPanResponder === undefined ? false : config.onMoveShouldSetPanResponder(e, gestureState);
      },
      onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(e) {
        // TODO: Actually, we should reinitialize the state any time
        // touches.length increases from 0 active to > 0 active.
        if (e.nativeEvent.touches.length === 1) {
          PanResponder._initializeGestureState(gestureState);
        }
        gestureState.numberActiveTouches = _ResponderTouchHistoryStore2.default.touchHistory.numberActiveTouches;
        return config.onStartShouldSetPanResponderCapture !== undefined ? config.onStartShouldSetPanResponderCapture(e, gestureState) : false;
      },

      onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(e) {
        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
        // Responder system incorrectly dispatches should* to current responder
        // Filter out any touch moves past the first one - we would have
        // already processed multi-touch geometry during the first event.
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return false;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(e, gestureState) : false;
      }
    };

    var responderHandlers = {
      onResponderGrant: function onResponderGrant(e) {
        gestureState.x0 = currentCentroidX(_ResponderTouchHistoryStore2.default.touchHistory);
        gestureState.y0 = currentCentroidY(_ResponderTouchHistoryStore2.default.touchHistory);
        gestureState.dx = 0;
        gestureState.dy = 0;
        if (config.onPanResponderGrant) {
          config.onPanResponderGrant(e, gestureState);
        }
        // TODO: t7467124 investigate if this can be removed
        return config.onShouldBlockNativeResponder === undefined ? true : config.onShouldBlockNativeResponder();
      },

      onResponderReject: function onResponderReject(e) {
        config.onPanResponderReject && config.onPanResponderReject(e, gestureState);
      },

      onResponderRelease: function onResponderRelease(e) {
        config.onPanResponderRelease && config.onPanResponderRelease(e, gestureState);
        PanResponder._initializeGestureState(gestureState);
      },

      onResponderTerminate: function onResponderTerminate(e) {
        config.onPanResponderTerminate && config.onPanResponderTerminate(e, gestureState);
        PanResponder._initializeGestureState(gestureState);
      },

      onResponderTerminationRequest: function onResponderTerminationRequest(e) {
        return config.onPanResponderTerminationRequest === undefined ? true : config.onPanResponderTerminationRequest(e, gestureState);
      }
    };

    // Track for mouse event
    var isPanStart = false;

    // Default
    var panHandlers = {
      onTouchStart: function onTouchStart(e) {
        isPanStart = true;

        _ResponderTouchHistoryStore2.default.recordTouchTrack('start', e);

        responderHandlers.onResponderGrant(e);

        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;

        if (!setHandlers.onStartShouldSetResponder(e)) {
          return responderHandlers.onResponderReject(e);
        }

        if (config.onPanResponderStart) {
          config.onPanResponderStart(e, gestureState);
        }
      },

      onTouchMove: function onTouchMove(e) {
        if (!isPanStart) return;

        _ResponderTouchHistoryStore2.default.recordTouchTrack('move', e);

        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;

        // Guard against the dispatch of two touch moves when there are two
        // simultaneously changed touches.
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return;
        }

        // Filter out any touch moves past the first one - we would have
        // already processed multi-touch geometry during the first event.
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);

        if (!setHandlers.onMoveShouldSetResponder(e)) {
          return;
        }

        if (config.onPanResponderMove) {
          config.onPanResponderMove(e, gestureState);
        }
      },

      onTouchEnd: function onTouchEnd(e) {
        isPanStart = false;

        _ResponderTouchHistoryStore2.default.recordTouchTrack('end', e);

        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;

        if (config.onPanResponderEnd) {
          config.onPanResponderEnd(e, gestureState);
        }

        responderHandlers.onResponderRelease(e);
      }
    };

    if (_universalEnv.isWeb) {
      if ('ontouchstart' in window) {
        panHandlers = {
          onTouchStart: panHandlers.onTouchStart,
          onTouchMove: panHandlers.onTouchMove,
          onTouchEnd: panHandlers.onTouchEnd
        };
      } else {
        panHandlers = {
          onMouseDown: panHandlers.onTouchStart,
          onMouseMove: panHandlers.onTouchMove,
          onMouseUp: panHandlers.onTouchEnd
        };
      }
    }

    return { panHandlers: panHandlers };
  }
};

module.exports = PanResponder;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxCheckbox = __webpack_require__(73);

var _raxCheckbox2 = _interopRequireDefault(_raxCheckbox);

var _raxCounter = __webpack_require__(74);

var _raxCounter2 = _interopRequireDefault(_raxCounter);

var _raxSwitch = __webpack_require__(75);

var _raxSwitch2 = _interopRequireDefault(_raxSwitch);

var _raxTextinput = __webpack_require__(76);

var _raxTextinput2 = _interopRequireDefault(_raxTextinput);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input() {
    _classCallCheck(this, Input);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var type = props.type;
      switch (type) {
        case 'number':
          return (0, _rax.createElement)(_raxCounter2.default, props);
        case 'checkbox':
          return (0, _rax.createElement)(_raxCheckbox2.default, props);
        case 'switch':
          return (0, _rax.createElement)(_raxSwitch2.default, props);
        case 'text':
          delete props.multiline;
          return (0, _rax.createElement)(_raxTextinput2.default, props);
        case 'textarea':
          if (_universalEnv.isWeb) {
            // web 下 textarea 设置 type 属性会报错
            delete props.type;
          }
          return (0, _rax.createElement)(_raxTextinput2.default, _extends({ multiline: true }, props));
        default:
          return (0, _rax.createElement)(_raxTextinput2.default, props);
      }
    }
  }]);

  return Input;
}();

exports.default = Input;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@weex-module/picker");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var _uniqueId=0;

module.exports=function uniqueId(){
return String(_uniqueId++);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIconSet = undefined;

var _rax = __webpack_require__(0);

var _raxIcon = __webpack_require__(29);

var _raxIcon2 = _interopRequireDefault(_raxIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxIcon2.default;
exports.createIconSet = _raxIcon.createIconSet;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createIconSet = createIconSet;

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        var domModule = __webpack_require__(16);
        domModule.addRule('fontFace', {
          'fontFamily': fontFamily,
          'src': "url('" + uri + "')" // single quotes are required around uri, and double quotes can not work
        });
      }
      return (0, _rax.createElement)(
        _raxText2.default,
        { style: iconStyle },
        this.props.source.codePoint
      );
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxRecyclerview = __webpack_require__(31);

var _raxRecyclerview2 = _interopRequireDefault(_raxRecyclerview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxRecyclerview2.default;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxScrollview = __webpack_require__(23);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _raxRefreshcontrol = __webpack_require__(13);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_END_REACHED_THRESHOLD = 500;

var Cell = function (_PureComponent) {
  _inherits(Cell, _PureComponent);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex && this.context.isInARecyclerView) {
        return (0, _rax.createElement)('cell', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Cell;
}(_rax.PureComponent);

Cell.contextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

var Header = function (_PureComponent2) {
  _inherits(Header, _PureComponent2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex && this.context.isInARecyclerView) {
        return (0, _rax.createElement)('header', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Header;
}(_rax.PureComponent);

Header.contextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

var RecyclerView = function (_Component) {
  _inherits(RecyclerView, _Component);

  function RecyclerView(props) {
    _classCallCheck(this, RecyclerView);

    var _this3 = _possibleConstructorReturn(this, (RecyclerView.__proto__ || Object.getPrototypeOf(RecyclerView)).call(this, props));

    _this3.loadmoreretry = 1;

    _this3.handleScroll = function (e) {
      e.nativeEvent = {
        contentOffset: {
          // HACK: weex scroll event value is opposite of web
          x: -e.contentOffset.x,
          y: -e.contentOffset.y
        }
      };
      _this3.props.onScroll(e);
    };

    _this3.resetScroll = function () {
      if (_universalEnv.isWeex) {
        _this3.setState({
          loadmoreretry: _this3.loadmoreretry++ // for weex 0.9-
        });
        _this3.refs.list.resetLoadmore && _this3.refs.list.resetLoadmore(); // for weex 0.9+
      } else {
        _this3.refs.scrollview.resetScroll();
      }
    };

    _this3.scrollTo = function (options) {
      var x = parseInt(options.x);
      var y = parseInt(options.y);

      if (_universalEnv.isWeex) {
        var dom = __webpack_require__(16);
        var firstNode = (0, _rax.findDOMNode)(_this3.refs.firstNodePlaceholder);
        dom.scrollToElement(firstNode.ref, {
          offset: x || y || 0,
          animated: options && typeof options.animated !== 'undefined' ? options.animated : true
        });
      } else {
        _this3.refs.scrollview.scrollTo(options);
      }
    };

    _this3.state = {
      loadmoreretry: 0
    };
    return _this3;
  }

  _createClass(RecyclerView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInARecyclerView: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      if (_universalEnv.isWeex) {
        var children = props.children;
        if (!Array.isArray(children)) {
          children = [children];
        }

        var cells = children.map(function (child, index) {
          if (child) {
            var hasOnRefresh = child.props && typeof child.props.onRefresh == 'function';
            if (props._autoWrapCell && child.type != _raxRefreshcontrol2.default && child.type != Header && !hasOnRefresh) {
              return (0, _rax.createElement)(
                Cell,
                null,
                child
              );
            } else {
              return child;
            }
          } else {
            return (0, _rax.createElement)(Cell, null);
          }
        });

        // add firstNodePlaceholder after refreshcontrol
        var addIndex = cells[0].type == Cell || cells[0].type == Header ? 0 : 1;
        cells && cells.length && cells.splice(addIndex, 0, (0, _rax.createElement)(Cell, { ref: 'firstNodePlaceholder' }));

        return (0, _rax.createElement)(
          'list',
          _extends({}, props, {
            ref: 'list',
            onLoadmore: props.onEndReached,
            onScroll: props.onScroll ? this.handleScroll : null,
            loadmoreretry: this.state.loadmoreretry,
            loadmoreoffset: props.onEndReachedThreshold
          }),
          cells
        );
      } else {
        return (0, _rax.createElement)(_raxScrollview2.default, _extends({}, props, { ref: 'scrollview' }));
      }
    }
  }]);

  return RecyclerView;
}(_rax.Component);

RecyclerView.defaultProps = {
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD
};
RecyclerView.childContextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};


RecyclerView.Header = Header;
RecyclerView.Cell = Cell;

exports.default = RecyclerView;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxPlayer = __webpack_require__(61);

var _raxPlayer2 = _interopRequireDefault(_raxPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxPlayer2.default;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEVICE_WIDTH = 750;

var styles = {
  calendarContainer: {
    backgroundColor: '#ffffff'
  },
  monthContainer: {
    width: DEVICE_WIDTH
  },
  monthHeading: {
    padding: 10,
    alignItems: 'center',
    borderBottom: '1rem solid #f7f7f7',
    fontSize: 30
  },
  calendarControls: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  controlButton: {},
  controlButtonText: {
    margin: 20,
    fontSize: 30
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 38,
    margin: 10
  },
  calendarHeading: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  dayHeading: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10
  },
  weekendHeading: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    color: '#cccccc'
  },
  weekRow: {
    flexDirection: 'row'
  },
  dayButton: {
    alignItems: 'center',
    padding: 10,
    width: DEVICE_WIDTH / 7,
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9'
  },
  dayButtonFiller: {
    padding: 10,
    width: DEVICE_WIDTH / 7
  },
  day: {
    fontSize: 32,
    alignSelf: 'center',
    color: '#000000'
  },
  eventIndicatorFiller: {
    marginTop: 6,
    borderColor: 'transparent',
    width: 8,
    height: 8,
    borderRadius: 4
  },
  eventIndicator: {
    backgroundColor: '#cccccc'
  },
  dayCircleFiller: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 56,
    height: 56,
    borderRadius: 28
  },
  currentDayCircle: {
    backgroundColor: 'red'
  },
  currentDayText: {
    color: 'red'
  },
  selectedDayCircle: {
    backgroundColor: '#2ea2ef'
  },
  selectedDayText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  weekendDayText: {
    color: '#f74e00'
  },
  disabledDayText: {
    color: '#cccccc'
  }
};

exports.default = styles;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxScrollview = __webpack_require__(23);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _mapStyle = __webpack_require__(35);

var _mapStyle2 = _interopRequireDefault(_mapStyle);

var _animated = __webpack_require__(105);

var _animated2 = _interopRequireDefault(_animated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplyAnimatedValues(instance, props) {
  (0, _rax.setNativeProps)(instance, {
    style: (0, _mapStyle2.default)(props.style)
  });
}

var injectApplyAnimatedValues = _animated2.default.inject.ApplyAnimatedValues;
injectApplyAnimatedValues(ApplyAnimatedValues);

var RequestAnimationFrame;
var CancelAnimationFrame;

if (typeof requestAnimationFrame !== 'undefined') {
  RequestAnimationFrame = function RequestAnimationFrame(cb) {
    return requestAnimationFrame(cb);
  };
  CancelAnimationFrame = function CancelAnimationFrame(id) {
    return cancelAnimationFrame(id);
  };
  // Works around a rare bug in Safari 6 where the first request is never invoked.
  requestAnimationFrame(function () {});
} else {
  var lastTime = 0;
  RequestAnimationFrame = function RequestAnimationFrame(callback) {
    var currTime = Date.now();
    var timeDelay = Math.max(0, 16 - (currTime - lastTime));
    lastTime = currTime + timeDelay;
    return setTimeout(function () {
      callback(Date.now());
    }, timeDelay);
  };

  CancelAnimationFrame = function CancelAnimationFrame(id) {
    clearTimeout(id);
  };
}

var injectRequestAnimationFrame = _animated2.default.inject.RequestAnimationFrame;
injectRequestAnimationFrame(RequestAnimationFrame);

var injectCancelAnimationFrame = _animated2.default.inject.CancelAnimationFrame;
injectCancelAnimationFrame(CancelAnimationFrame);

exports.default = _extends({}, _animated2.default, {
  View: _animated2.default.createAnimatedComponent(_raxView2.default),
  Text: _animated2.default.createAnimatedComponent(_raxText2.default),
  Image: _animated2.default.createAnimatedComponent(_raxImage2.default),
  ScrollView: _animated2.default.createAnimatedComponent(_raxScrollview2.default)
});
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// { scale: 2 } => 'scale(2)'
function mapTransform(t) {
  var k = Object.keys(t)[0];
  var unit = '';
  // Only process translateX translateY translateZ
  if (k.indexOf('translate') === 0) {
    unit = 'rem';
  }
  return k + '(' + t[k] + unit + ')';
}

// NOTE(lmr):
// Since this is a hot code path, right now this is mutative...
// As far as I can tell, this shouldn't cause any unexpected behavior.
function mapStyle(style) {
  if (style && style.transform && typeof style.transform !== 'string') {
    // Use vendor prefixed styles
    var convertedValue = style.transform.map(mapTransform).join(' ');
    style.webkitTransform = convertedValue;
    style.transform = convertedValue;
  }

  return style;
}

exports.default = mapStyle;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var InteractionManager={
current:{
createInteractionHandle:function createInteractionHandle(){},
clearInteractionHandle:function clearInteractionHandle(){}},

inject:function inject(manager){
InteractionManager.current=manager;
}};


module.exports=InteractionManager;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedStyle=__webpack_require__(123);var

AnimatedProps=function(_Animated){_inherits(AnimatedProps,_Animated);



function AnimatedProps(
props,
callback)
{_classCallCheck(this,AnimatedProps);var _this=_possibleConstructorReturn(this,(AnimatedProps.__proto__||Object.getPrototypeOf(AnimatedProps)).call(this));

if(props.style){
props=_extends({},
props,{
style:new AnimatedStyle(props.style)});

}
_this._props=props;
_this._callback=callback;
_this.__attach();return _this;
}_createClass(AnimatedProps,[{key:'__getValue',value:function __getValue()

{
var props={};
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
props[key]=value.__getValue();
}else{
props[key]=value;
}
}
return props;
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
var props={};
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
props[key]=value.__getAnimatedValue();
}
}
return props;
}},{key:'__attach',value:function __attach()

{
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
value.__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
value.__removeChild(this);
}
}
}},{key:'update',value:function update()

{
this._callback();
}}]);return AnimatedProps;}(Animated);


module.exports=AnimatedProps;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var FlattenStyle={
current:function current(style){return style;},
inject:function inject(flatten){
FlattenStyle.current=flatten;
}};


module.exports=FlattenStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var ApplyAnimatedValues={
current:function ApplyAnimatedValues(instance,props){
if(instance.setNativeProps){
instance.setNativeProps(props);
}else{
return false;
}
},
inject:function inject(apply){
ApplyAnimatedValues.current=apply;
}};


module.exports=ApplyAnimatedValues;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _Row2 = __webpack_require__(131);

var _Row3 = _interopRequireDefault(_Row2);

var _Col2 = __webpack_require__(132);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _Row3.default;
exports.Col = _Col3.default;
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileLink = __webpack_require__(12);

var _tileLink2 = _interopRequireDefault(_tileLink);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileIcon = __webpack_require__(28);

var _tileIcon2 = _interopRequireDefault(_tileIcon);

var _tileScrollview = __webpack_require__(22);

var _tileScrollview2 = _interopRequireDefault(_tileScrollview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demos = {
  // style: require('./StyleDemo'),
  view: __webpack_require__(55),
  scrollview: __webpack_require__(56),
  refreshcontrol: __webpack_require__(57),
  image: __webpack_require__(59),
  video: __webpack_require__(60),
  input: __webpack_require__(72),
  picker: __webpack_require__(77),
  text: __webpack_require__(82),
  button: __webpack_require__(83),
  switch: __webpack_require__(84),
  listview: __webpack_require__(85),
  recyclerview: __webpack_require__(88),
  waterfall: __webpack_require__(89),
  link: __webpack_require__(92),
  calendar: __webpack_require__(93),
  countdown: __webpack_require__(99),
  gotop: __webpack_require__(102),
  grid: __webpack_require__(129),
  icon: __webpack_require__(133),
  modal: __webpack_require__(134),
  multirow: __webpack_require__(137),
  picture: __webpack_require__(140),
  player: __webpack_require__(141),
  slider: __webpack_require__(142)
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
      demoName: function () {
        var m = window.location.href.match(/demo=([^&$]+)/);
        return m && m[1];
      }(),
      isSingle: function () {
        var m = window.location.href.match(/isSingle=([^&$]+)/);
        return m && m[1];
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'renderIndex',
    value: function renderIndex() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        { style: [styles.indexWrapper, styles.wholeWrapper] },
        (0, _rax.createElement)(
          _tileScrollview2.default,
          { ref: 'scrollview' },
          (0, _rax.createElement)(
            _tileView2.default,
            { style: styles.header },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: styles.headerText },
              'Tile Components'
            )
          ),
          Object.keys(components).map(function (part) {
            var coms = components[part];
            return Object.keys(coms).map(function (key) {
              return (0, _rax.createElement)(
                _tileView2.default,
                null,
                (0, _rax.createElement)(
                  _tileView2.default,
                  { style: styles.indexTitle },
                  (0, _rax.createElement)(
                    _tileText2.default,
                    { style: styles.indexTitleText },
                    firstLetterUpperCase(key)
                  )
                ),
                (0, _rax.createElement)(
                  _tileView2.default,
                  { style: styles.list },
                  coms[key].map(function (demo) {
                    return (0, _rax.createElement)(
                      _tileView2.default,
                      { style: styles.item, onClick: function onClick() {
                          return _this2.changeDemoName(demo);
                        } },
                      (0, _rax.createElement)(_tileIcon2.default, {
                        style: styles.icon,
                        fontFamily: 'iconfont',
                        source: { uri: '//at.alicdn.com/t/font_383853_eoj22s8ewx6flxr.ttf', codePoint: icons[demo] }
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
                    );
                  })
                )
              );
            });
          })
        )
      );
    }
  }, {
    key: 'changeDemoName',
    value: function changeDemoName(name) {
      this.setState({
        demoName: name
      });
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, null, '?demo=' + name);
      }
    }
  }, {
    key: 'renderItem',
    value: function renderItem() {
      var _this3 = this;

      var name = this.state.demoName;
      var DemoName = Demos[name];
      var props = name === 'gotop' ? {
        onTop: function onTop() {
          _this3.scrollview.scrollTo({ y: 0 });
        }
      } : {};
      return (0, _rax.createElement)(
        _tileView2.default,
        { style: [styles.itemWrapper, styles.wholeWrapper] },
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.titleWrapper },
          (0, _rax.createElement)(
            _tileView2.default,
            { style: styles.itemIconLink, onClick: function onClick() {
                return _this3.changeDemoName(null);
              } },
            this.state.isSingle ? null : (0, _rax.createElement)(_tileIcon2.default, {
              style: styles.itemIcon,
              fontFamily: 'iconfont',
              source: { uri: '//at.alicdn.com/t/font_383853_eoj22s8ewx6flxr.ttf', codePoint: '\uE607' }
            }),
            (0, _rax.createElement)(_tileText2.default, null)
          ),
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.itemTitle },
            'Tile - ',
            name
          )
        ),
        (0, _rax.createElement)(
          _tileScrollview2.default,
          { ref: function ref(scrollview) {
              _this3.scrollview = scrollview;
            } },
          (0, _rax.createElement)(DemoName, props),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: styles.footer },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: styles.footerText, onclick: function onclick() {
                  return _this3.changeDemoName(null);
                } },
              '\xA9 Tile Components \u793A\u4F8B'
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var demoName = this.state.demoName;
      var showItem = demoName && Demos[demoName];
      if (!showItem) {
        return this.renderIndex();
      } else {
        return this.renderItem();
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

var components = {
  base: {
    basic: ['view', 'text', 'link', 'icon', 'button', 'image', 'video'],
    form: ['input', 'picker', 'calendar'],
    layout: ['grid', 'multirow', 'scrollview', 'listview', 'recyclerview']
  },
  enhance: {
    feedback: ['modal', 'refreshcontrol'],
    functional: ['gotop', 'countdown', 'slider', 'waterfall']
  }
};

var icons = {
  grid: '\uE644',
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        content = (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyle },
          children
        );
      }

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          'a',
          nativeProps,
          content
        );
      } else {
        return (0, _rax.createElement)(
          'a',
          _extends({}, nativeProps, { style: style }),
          content
        );
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var Picture = void 0;
if (_universalEnv.isWeb) {
  Picture = __webpack_require__(44);
} else {
  Picture = __webpack_require__(53);
}

exports.default = Picture;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _index = __webpack_require__(45);

var _index2 = _interopRequireDefault(_index);

var _webp = __webpack_require__(52);

var _webp2 = _interopRequireDefault(_webp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return (0, _rax.createElement)(
          _raxView2.default,
          _extends({}, nativeProps, {
            'data-once': true,
            style: [this.newStyle, {
              backgroundImage: 'url(' + url + ')',
              backgroundSize: resizeMode || 'cover',
              backgroundRepeat: 'no-repeat'
            }, resizeMode === 'cover' || resizeMode === 'contain' ? {
              backgroundPosition: 'center'
            } : null, !this.newStyle.height ? { height: defaultHeight } : null]
          }),
          children
        );
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _isCdnImage = __webpack_require__(46);

var _isCdnImage2 = _interopRequireDefault(_isCdnImage);

var _removeScheme = __webpack_require__(47);

var _removeScheme2 = _interopRequireDefault(_removeScheme);

var _replaceDomain = __webpack_require__(48);

var _replaceDomain2 = _interopRequireDefault(_replaceDomain);

var _scaling = __webpack_require__(49);

var _scaling2 = _interopRequireDefault(_scaling);

var _webp = __webpack_require__(50);

var _webp2 = _interopRequireDefault(_webp);

var _compress = __webpack_require__(51);

var _compress2 = _interopRequireDefault(_compress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      return (0, _rax.createElement)(
        _raxImage2.default,
        _extends({}, this.props, { source: source, style: newStyle }),
        children
      );
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxRefreshcontrol = __webpack_require__(13);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      var contentContainer = (0, _rax.createElement)(
        _raxView2.default,
        {
          ref: 'contentContainer',
          style: contentContainerStyle },
        contentChild
      );

      var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;

      var scrollerStyle = _extends({}, baseStyle, this.props.style);

      var showsScrollIndicator = this.props.horizontal ? showsHorizontalScrollIndicator : showsVerticalScrollIndicator;

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          'scroller',
          _extends({}, this.props, {
            style: scrollerStyle,
            showScrollbar: showsScrollIndicator,
            onLoadmore: onEndReached,
            onScroll: onScroll ? this.handleScroll : null,
            loadmoreoffset: onEndReachedThreshold,
            loadmoreretry: this.state.loadmoreretry,
            scrollDirection: this.props.horizontal ? 'horizontal' : 'vertical'
          }),
          refreshContainer,
          contentContainer
        );
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

        return (0, _rax.createElement)(
          _raxView2.default,
          webProps,
          contentContainer
        );
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewDemo = function (_Component) {
  _inherits(ViewDemo, _Component);

  function ViewDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ViewDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ViewDemo.__proto__ || Object.getPrototypeOf(ViewDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showBorder: true
    }, _this._handlePress = function () {
      console.log(_this.state.showBorder);
      _this.setState({ showBorder: !_this.state.showBorder });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ViewDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u5E03\u5C40\u63A7\u5236'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            '\u6A2A\u5411\u5E03\u5C40 (flex-direction: \'row\')'
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: {
                flexDirection: 'row'
              } },
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.row, { backgroundColor: '#3F51B5' }] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.rowText },
                '1'
              )
            ),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.row, { backgroundColor: '#8691d0' }] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.rowText },
                '2'
              )
            ),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.row, { backgroundColor: '#b9bfe4' }] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.rowText },
                '3'
              )
            )
          ),
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            '\u7EB5\u5411\u5E03\u5C40 (flex-direction: \'coloumn\')'
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.row, styles.col, { backgroundColor: '#3F51B5', marginTop: 20 }] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.rowText },
                '1'
              )
            ),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.row, styles.col, { backgroundColor: '#8691d0' }] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.rowText },
                '2'
              )
            ),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.row, styles.col, { backgroundColor: '#b9bfe4' }] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.rowText },
                '3'
              )
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u70B9\u51FB\u4E8B\u4EF6'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            { onClick: this._handlePress },
            (0, _rax.createElement)(
              _tileView2.default,
              null,
              (0, _rax.createElement)(
                _tileView2.default,
                { style: {
                    borderWidth: 2,
                    borderStyle: this.state.showBorder ? 'dashed' : 'solid',
                    padding: 10
                  } },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: { fontSize: 22 } },
                  'Dashed border style'
                )
              ),
              (0, _rax.createElement)(
                _tileView2.default,
                { style: {
                    marginTop: 10,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderStyle: this.state.showBorder ? 'dotted' : 'solid',
                    padding: 10
                  } },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: { fontSize: 22 } },
                  'Dotted border style'
                )
              )
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u900F\u660E\u5EA6\u63A7\u5236'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 0 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 0'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 0.1 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 0.1'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 0.3 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 0.3'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 0.5 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 0.5'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 0.7 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 0.7'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 0.9 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 0.9'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { opacity: 1 } },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              'Opacity 1'
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6837\u5F0F\u63A7\u5236'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            { style: [styles.box, { padding: 10 }] },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: { fontSize: 22 } },
              '10rem padding'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: [styles.box, { margin: 10 }] },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: { fontSize: 22 } },
              '10rem margin'
            )
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: [styles.box, { padding: 10, alignSelf: 'flex-start' }] },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: { fontSize: 22 } },
              '10rem margin and padding,'
            ),
            (0, _rax.createElement)(
              _tileText2.default,
              { style: { fontSize: 22 } },
              'widthAutonomous=true'
            )
          )
        )
      );
    }
  }]);

  return ViewDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  row: {
    width: 200,
    height: 300,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  col: {
    margin: 0,
    width: 300,
    height: 100
  },
  rowText: {
    color: '#FFF',
    fontSize: 40
  },
  title: {
    color: '#F60',
    padding: 20
  },
  box: {
    backgroundColor: '#bcc2e5',
    borderColor: '#3f51b5',
    borderWidth: 1
  }
};

exports.default = ViewDemo;
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileRecyclerview = __webpack_require__(30);

var _tileRecyclerview2 = _interopRequireDefault(_tileRecyclerview);

var _tileScrollview = __webpack_require__(22);

var _tileScrollview2 = _interopRequireDefault(_tileScrollview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumb = function (_Component) {
  _inherits(Thumb, _Component);

  function Thumb() {
    _classCallCheck(this, Thumb);

    return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
  }

  _createClass(Thumb, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        { style: styles.button },
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.box },
          this.props.data
        )
      );
    }
  }]);

  return Thumb;
}(_rax.Component);

var THUMBS = [];
for (var i = 0; i < 20; i++) {
  THUMBS.push(i);
}var createThumbRow = function createThumbRow(val, i) {
  return (0, _rax.createElement)(Thumb, { key: i, data: i });
};

var ScrollViewDemo = function (_Component2) {
  _inherits(ScrollViewDemo, _Component2);

  function ScrollViewDemo() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, ScrollViewDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ScrollViewDemo.__proto__ || Object.getPrototypeOf(ScrollViewDemo)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      horizontalScrollViewEventLog: false,
      scrollViewEventLog: false
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ScrollViewDemo, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6A2A\u5411\u6EDA\u52A8'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileScrollview2.default,
            {
              ref: function ref(scrollView) {
                _this3.horizontalScrollView = scrollView;
              },
              showsHorizontalScrollIndicator: true,
              style: {
                height: 100
              },
              horizontal: true
            },
            THUMBS.map(createThumbRow)
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { clickable: true, style: { justifyContent: 'center', alignItems: 'center' },
              onPress: function onPress() {
                return _this3.horizontalScrollView.scrollTo({ x: 0 });
              } },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: {
                  color: '#333',
                  backgroundColor: '#EBEBEB', borderRadius: 8, height: 60, lineHeight: 60,
                  paddingLeft: 40,
                  paddingRight: 40,
                  marginTop: 20
                } },
              ' \u2190 \u6EDA '
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u7EB5\u5411\u6EDA\u52A8'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileScrollview2.default,
            {
              ref: function ref(scrollView) {
                _this3.scrollView = scrollView;
              },
              showsVerticalScrollIndicator: true,
              style: {
                height: 500
              } },
            (0, _rax.createElement)(
              _tileView2.default,
              null,
              (0, _rax.createElement)(
                _tileView2.default,
                { style: styles.sticky },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: {
                      fontSize: 24
                    } },
                  '\u8FD9\u91CC\u7684 Sticky \u5143\u7D20\u4E0D\u80FD\u5438\u9876'
                )
              )
            ),
            THUMBS.map(createThumbRow)
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { clickable: true, style: { justifyContent: 'center', alignItems: 'center' },
              onPress: function onPress() {
                return _this3.scrollView.scrollTo({ y: 0 });
              } },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: {
                  color: '#333',
                  backgroundColor: '#EBEBEB', borderRadius: 8, height: 60, lineHeight: 60,
                  paddingLeft: 40,
                  paddingRight: 40,
                  marginTop: 20
                } },
              ' \u2191 \u6EDA '
            )
          )
        )
      );
    }
  }]);

  return ScrollViewDemo;
}(_rax.Component);

var styles = {
  sticky: {
    position: 'sticky',
    padding: '5px 10px',
    color: '#333',
    backgroundColor: '#EEE'
  },
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  button: _defineProperty({
    margin: 7,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
    justifyContent: 'center'
  }, 'alignItems', 'center'),
  box: {
    padding: '10px 15px'
  },
  eventLogBox: {
    padding: 10,
    margin: 10,
    height: 80,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
};

exports.default = ScrollViewDemo;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileScrollview = __webpack_require__(22);

var _tileScrollview2 = _interopRequireDefault(_tileScrollview);

var _tileRefreshcontrol = __webpack_require__(58);

var _tileRefreshcontrol2 = _interopRequireDefault(_tileRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RefreshControlDemo = function (_Component) {
  _inherits(RefreshControlDemo, _Component);

  function RefreshControlDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RefreshControlDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RefreshControlDemo.__proto__ || Object.getPrototypeOf(RefreshControlDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isRefreshing: false,
      loaded: 0,
      refreshText: '↓ Pull To Refresh',
      rowData: arrayFrom(new Array(20)).map(function (val, i) {
        return { text: 'Initial row ' + i, clicks: 0 };
      })
    }, _this.handleClick = function (row) {
      row.clicks++;
      _this.setState({
        rowData: _this.state.rowData
      });
    }, _this.handleRefresh = function (e) {
      _this.setState({
        isRefreshing: true,
        refreshText: '刷新中...'
      });
      setTimeout(function () {
        // prepend 10 items
        var rowData = arrayFrom(new Array(10)).map(function (val, i) {
          return {
            text: 'Loaded row ' + (+_this.state.loaded + i),
            clicks: 0
          };
        }).concat(_this.state.rowData);

        _this.setState({
          loaded: _this.state.loaded + 10,
          isRefreshing: false,
          rowData: rowData,
          refreshText: '↓ 下拉刷新'
        });
      }, 1000);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RefreshControlDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rows = this.state.rowData.map(function (row, ii) {
        return (0, _rax.createElement)(Row, { key: ii, data: row, onClick: _this2.handleClick });
      });
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E0B\u62C9\u5237\u65B0\uFF08\u4EC5 Weex \u6709\u6548\uFF09'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileScrollview2.default,
            {
              style: { height: 500 },
              refreshControl: null },
            (0, _rax.createElement)(
              _tileRefreshcontrol2.default,
              {
                style: styles.refreshView,
                refreshing: this.state.isRefreshing,
                onRefresh: this.handleRefresh },
              (0, _rax.createElement)(
                _tileText2.default,
                null,
                this.state.refreshText
              )
            ),
            rows
          )
        )
      );
    }
  }]);

  return RefreshControlDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3
  },
  box: {
    width: 64,
    height: 64
  },
  eventLogBox: {
    padding: 10,
    margin: 10,
    height: 80,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  },
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    margin: 5
  },
  text: {
    alignSelf: 'center',
    color: 'black'
  },
  refreshView: {
    height: 80,
    width: 750,
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  refreshArrow: {
    fontSize: 30,
    color: '#45b5f0'
  }
};

var arrayFrom = function arrayFrom(arrayLike /* , mapFn, thisArg */) {
  if (arrayLike == null) {
    throw new TypeError('Object is null or undefined');
  }

  // Optional args.
  var mapFn = arguments[1];
  var thisArg = arguments[2];

  var C = this;
  var items = Object(arrayLike);
  var symbolIterator = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
  var mapping = typeof mapFn === 'function';
  var usingIterator = typeof items[symbolIterator] === 'function';
  var key = 0;
  var ret;
  var value;

  if (usingIterator) {
    ret = typeof C === 'function' ? new C() : [];
    var it = items[symbolIterator]();
    var next;

    while (!(next = it.next()).done) {
      value = next.value;

      if (mapping) {
        value = mapFn.call(thisArg, value, key);
      }

      ret[key] = value;
      key += 1;
    }

    ret.length = key;
    return ret;
  }

  var len = items.length;
  if (isNaN(len) || len < 0) {
    len = 0;
  }

  ret = typeof C === 'function' ? new C(len) : new Array(len);

  while (key < len) {
    value = items[key];

    if (mapping) {
      value = mapFn.call(thisArg, value, key);
    }

    ret[key] = value;

    key += 1;
  }

  ret.length = key;
  return ret;
};

var Row = function (_Component2) {
  _inherits(Row, _Component2);

  function Row() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, Row);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref2, [this].concat(args))), _this3), _this3.handleClick = function (e) {
      _this3.props.onClick(_this3.props.data);
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        { onClick: this.handleClick },
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.row },
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.text },
            this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'
          )
        )
      );
    }
  }]);

  return Row;
}(_rax.Component);

exports.default = RefreshControlDemo;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxRefreshcontrol = __webpack_require__(13);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxRefreshcontrol2.default;
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileLink = __webpack_require__(12);

var _tileLink2 = _interopRequireDefault(_tileLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var image = {
  uri: 'https://img.alicdn.com/tfs/TB18TmKSVXXXXbLXXXXXXXXXXXX-142-135.png'
};

var base64Image = {
  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAMAAABkKdmIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURf///55gG/yyOvy/Pv3XRNJ1KPCgNP/+/qZnHf///vy1O+eVMf/2c/3fRaFjHP3PQf3RQtyFLNZ7Kd+HLeKOLuSRMPaqN6NkHP/5rP/7vP/9yv/3f//5p/SmN+2cM/3HP/y4O/3EP/3cRf3NQf3KQP3aRP3UQvP09P/4j/rx5v79+//6uPy8PfymOJxgGoZME4lOE/v17uqYMv/4meybM/3LS/3CPv/+2fKjNv7tUJteGZdcGdh+KtmBK96KLf/5ovzdRf3UUv/3if/8wf/+3f/1Zv3YXvisOKVmHf3fT//znv7vaPqtOf/2eotUFf3WQ3tCEnhIIP/5oP369s99Ov/5nee8lu6OMv/vc/z38v3SS/3cWf/4lf/8xv/6sf7nYP/3hP2+Q+aTMP/+57J3I/3gbfeoN7h9Jf/uifbFjv/wk//zW/vq2P7jd/rPQcvKyN/g4ctuJvbq3taSWPDaxc53Me/XwOjCnueFLv/4jP7pb/3jR/3QV/3ZSfjTnP/90fqfNt6gMv3URf3rZvnhyf/nheqoNfijQ/7rX//0bOKyN8+tOZlmHNyeMbefiYJIEpFUFvf5+fjJQO/w8aqTfdGULsK2rOrs7vO+POPl57qsoNvd3dbX1/Xm19mYYMxxKdOMUd6TUu/StemOMt6kcfefNfmXNP3iXf3lR/3dZPSWPv/uff/90/SmWvjXrfXYQ/7pefzbTP7kVrmQLO7MQffRQdWzOPzjUebJQ4dQFP3KRMObMdzBQ+/VSfixOatuILellvb295ZzU41hNsjBu8/R0Y9pRt+whuzQtcKJKtOGRdWYL+mkZOuqN9ODPv/wfv3cUe23hfPJnv/6tf/0i//9zfTNpvq3QP/91v/+4vrlzve3ZfqvQfewWti2O9qfMZBbGZNeGYpUHs+RLYVOGpp+ZYBTMbOmmqKJc/Lgzd+pe/SfNdyhb91/LPeSM/e2VMWiM/edPfnbufe/eKNwIal4JeekNKOFaNXQy6aJbsOHKeqqN4hcNNPQzf/zYJVlKPfTQtoAAAUUSURBVEjHY2AYfICdmmYZ3lpXV1e3rkVTizj1mnW3rzMrKisryzNff595i6Au9pzPd5j5L1RleNl7ZW1Y3qTIdPcTfk2GmXd0ojbErbmZDAI3zWOzohWZbufg0ZFzl2lXrmT9mhvmLiBgfmNNvZSXo0L7Opwh1dLO5ejl7BwrdRWo6wZQ/VWpWGdn7Vxm3UwtnDrcZOIua0tKOsfGSklJxcY6S0pqX46LawXqwWpPTjuTm5e9jIyERFycNlCfpDZQuYSEjIy9V6tOwzUseiLX6ppmZMUYh4YGgfVJgFUHhYYax2RlpXJ9bMHQwZnZkJjbmnGlslIjJsYYqBEIjI1jYjQ0Kq9kZLTW6K6NxHDWKh+33A2rz0snJCQ4OTlpgEClkxOQJ31+9Ybc1MRll9C1XGxIXJmaWhURwcPj6+srDQFAFg9PRERVVWpqje4qQ1Qdmqt0Td3clsc3e3t3ejd38kAAiOnt3Ry/cqVbDdeya6haLr1jMnWMjl4e39Gxo2fn7g5XMNjzwK87viN+eXS0Y01iw1qUQGM/s4xrV5TjhQubNu3169cP6M4Ggb36QOa9TdsvXHCMMk1sCNdECeHFSxUUd0XVbvT03K3PJz7h4XZLINhsAGT2bPTcWBtluotZN3wRspa5FUu5zOSVm1hqVXusGRkZ9XcAdVQ/BDL1dm6pZWniV1HUSQu/iKxlUcVSJh1FFWU1/60PrLv3fNXftmLFivV+Pdv2fNHvYlETUJFnVkgLP8OJpKW84jWTjpm8Cr/AVr9uXt69ftuqq6vX77zHq7RFv0tNQFnejJlLNnwhsv/DhNl8FJiB1ghs3bxeVZX3ww5eXl6HzQ5Kqkq7twgoq8ib6TDJLkbTIueuwAy0RlmAhYVFVdVBCQR4VVWBPDV+FXlFZgUmC1Qt5W+NxLh0zIDW8Auo+fuDdKmC1furCYAtYVbwYROZh6ylTChJlkmhcX/vDKB31NSAesCgCaiDX2XG/f29OlxiJsJLkEOsiFWEzYfrV2BggHXK1K4ZkyblgcCkSTO6pqZYBwQGpiswyXLbhCFr0TonbJLGNPVp/rQph54FBvTrG/gZGBjo9wcEPjv2YtaRp4+53NlEWUtQcssSmyQLn7Y/+UdnFxTM/nFk2qwDBw7MmnYkfw6QezT/8G8mWRPhENSkvIjVziRtn/Xzo3Nmz5w+Wf3gwYlAcFB98vSZs+fkP9cDWSL0BjUlB5+zTWJzf/zk2JRpc4B6JqtDwPSZf2e9OPZkqo+skR1rGVoWK2e1M7LYx2FlNeHR4UPfp/QBwZSfhw4/MphgbbV/n6yciFAxesFkeEpIxMTim544h4eHOB8jGPDxiXtwcIgztsmyJdliWMLAcILVVtREtpdRnAMViOv1irFxC7IuwSz9tF6xCgL1NPLxIWvw4ONrBOqwEzqlyYlZKkUWg/RYtKVYgZwD0SBulXJWVg6oo/QlJ6YWBk7NBayCIkZyYo0penp84uLifHpWKffF2IxEgTrK2LHoYOBkN5zHamsnasQmdvb0yfSU9JOn28TYTLhFBIVCSrDqAOmJPF4qJCgiamTCZmEhK2vBZmLELWJnw1pcxM6JXQsDJ6dWyQJWIUE7EdEkbiBIEhURtGENKY/EqQOkhz34RPF8ViFbQRCwtWGdHxKmyc7Oia/m42Rn15obNi9kfiEQlC44XhLMjscKhE3s7MGGRXOLNIO1QOo5iWkzcIK1gZVz0qGZQTUAAHpbpNhORZJqAAAAAElFTkSuQmCC'
};

var gifImage = {
  uri: 'http://storage.slide.news.sina.com.cn/slidenews/77_ori/2016_34/74766_703038_567223.gif'
};

var ImageDemo = function (_Component) {
  _inherits(ImageDemo, _Component);

  function ImageDemo() {
    _classCallCheck(this, ImageDemo);

    return _possibleConstructorReturn(this, (ImageDemo.__proto__ || Object.getPrototypeOf(ImageDemo)).apply(this, arguments));
  }

  _createClass(ImageDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'HTTP(S) Network Image'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileImage2.default, { source: image, style: {
              width: '50px',
              height: '48px'
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Base64 Image'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileImage2.default, { source: base64Image, style: {
              width: '50px',
              height: '48px'
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'GIF Image'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileImage2.default, {
            style: styles.gif,
            source: gifImage
          })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Image Border Radius'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileImage2.default, { source: {
              uri: 'https://img.alicdn.com/tfs/TB17iycSVXXXXcGXVXXXXXXXXXX-79-82.png'
            }, style: [styles.base, {
              borderRadius: 200
            }]
          })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Image Nesting Content'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileImage2.default,
            { source: image, style: [styles.base] },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: styles.nestedText },
              'Content'
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Image Resize Mode'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            'contain'
          ),
          (0, _rax.createElement)(_tileImage2.default, {
            style: styles.resizeMode,
            resizeMode: _tileImage2.default.resizeMode.contain,
            source: image
          }),
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            'cover'
          ),
          (0, _rax.createElement)(_tileImage2.default, {
            style: styles.resizeMode,
            resizeMode: _tileImage2.default.resizeMode.cover,
            source: image
          }),
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            'stretch'
          ),
          (0, _rax.createElement)(_tileImage2.default, {
            style: [styles.resizeMode, { width: 200, height: 200 }],
            resizeMode: _tileImage2.default.resizeMode.stretch,
            source: image
          })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Image Composite'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            null,
            (0, _rax.createElement)(_tileImage2.default, {
              style: [styles.base, { borderRadius: 10 }],
              resizeMode: _tileImage2.default.resizeMode.contain,
              source: image
            }),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: [styles.base, styles.mask] },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.maskTitle },
                'Content'
              )
            )
          )
        )
      );
    }
  }]);

  return ImageDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  base: {
    width: 100,
    height: 100
  },
  resizeMode: {
    width: 100,
    height: 60,
    borderWidth: 1,
    marginBottom: 30,
    borderColor: '#ccc'
  },
  gif: {
    height: 200,
    width: 350
  },
  nestedText: {
    marginLeft: 36,
    marginTop: 36,
    color: '#000'
  },
  title: {
    color: '#F60',
    padding: 20
  },
  mask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 40,
    backgroundColor: 'rgba(33,33,33,0.5)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  maskTitle: {
    color: 'white',
    paddingTop: 6,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center'
  }
};

exports.default = ImageDemo;
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileVideo = __webpack_require__(32);

var _tileVideo2 = _interopRequireDefault(_tileVideo);

var _tileButton = __webpack_require__(17);

var _tileButton2 = _interopRequireDefault(_tileButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoDemo = function (_Component) {
  _inherits(VideoDemo, _Component);

  function VideoDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoDemo.__proto__ || Object.getPrototypeOf(VideoDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      playControl: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E0D\u5C55\u793A\u63A7\u5236\u5668'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileVideo2.default, {
            style: {
              height: 350,
              backgroundColor: '#FFF'
            },
            autoPlay: false,
            controls: false,
            playControl: this.state.playControl,
            src: 'http://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4'
          }),
          (0, _rax.createElement)(
            _tileButton2.default,
            { onPress: function onPress() {
                var playControl = _this2.state.playControl !== 'play' ? 'play' : 'pause';
                _this2.setState({
                  playControl: playControl
                });
              },
              style: {
                fontSize: 32
              }
            },
            '\u64AD\u653E / \u6682\u505C'
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u9759\u97F3\u64AD\u653E'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileVideo2.default, {
            style: {
              height: 350,
              backgroundColor: '#FFF'
            },
            currentTime: 20,
            autoPlay: false,
            muted: true,
            src: 'http://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4'
          })
        )
      );
    }
  }]);

  return VideoDemo;
}(_rax.Component);

var styles = {
  container: {},
  title: {
    color: '#F60',
    padding: 20
  },
  box: {
    backgroundColor: '#527FE4',
    borderColor: '#000033',
    borderWidth: 1
  }
};

exports.default = VideoDemo;
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var Video = void 0;
if (_universalEnv.isWeb) {
  Video = __webpack_require__(62);
} else {
  Video = __webpack_require__(70);
}

exports.default = Video;
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _controller = __webpack_require__(63);

var _controller2 = _interopRequireDefault(_controller);

var _env = __webpack_require__(69);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultStyles = {
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  video: {
    width: 750,
    height: 300,
    backgroundColor: '#000000',
    zIndex: 1
  },
  controller: {
    height: 70
  },
  startBtn: {
    overflow: 'hidden',
    position: 'absolute',
    color: '#ffffff',
    top: 0,
    left: 0,
    zIndex: 1
  },
  startBtnImage: {
    width: 109,
    height: 111
  }
};

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pause: true,
      currentTime: 0,
      controllerTime: 0,
      duration: 0,
      fullScreen: false
    }, _this.switch = function () {
      var video = _this.refs.video;
      if (_this.switchStatus) {
        video && video.pause();
      } else {
        video && video.play();
      }
      _this.switchStatus = !_this.switchStatus;
      _this.setState({
        pause: _this.switchStatus
      });
    }, _this.timeUpdate = function (e) {
      if (_this.state.pause || _this.justifiing) {
        return e;
      }
      var currentTime = _this.getCurrentTime();
      if (currentTime !== undefined && currentTime !== 0) {
        _this.setState({
          currentTime: Math.floor(currentTime),
          duration: _this.refs.video.duration
        });
      }
      return currentTime;
    }, _this.onVideoPause = function (e) {
      typeof _this.props.onVideoPause === 'function' && _this.props.onVideoPause(e);
      if (_this.state.pause === false) {
        _this.setState({
          pause: true
        });
      }
    }, _this.onVideoPlay = function (e) {
      typeof _this.props.onVideoPlay === 'function' && _this.props.onVideoPlay(e);
      if (_this.state.pause === true) {
        _this.setState({
          pause: false
        });
      }
    }, _this.onVideoFinish = function (e) {
      typeof _this.props.onVideoFinish === 'function' && _this.props.onVideoFinish(e);
    }, _this.onVideoFail = function (e) {
      typeof _this.props.onVideoFail === 'function' && _this.props.onVideoFail(e);
    }, _this.onDurationChange = function (e) {
      var duration = _this.getDuration();
      if (duration !== _this.state.duration) {
        _this.setState({
          duration: duration
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.hasController = this.props.controls || false;
      delete this.props.controls;
    }

    /**
     * @description
     * @param status {Boolean} （true: play，false: pause）
     */

  }, {
    key: 'getCurrentTime',


    /**
     * @returns {number}（ms）
     */
    value: function getCurrentTime() {
      return this.refs.video.currentTime;
    }

    /**
     * @returns {number}（ms）
     */

  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(time) {
      this.refs.video.currentTime = time;
      return time;
    }

    /**
     * @returns {number}（ms）
     */

  }, {
    key: 'getDuration',
    value: function getDuration() {
      return this.refs.video.duration;
    }

    /**
     * @description video time update
     * @returns {number}（ms）
     */

  }, {
    key: 'justify',


    /**
     * @description Progress bar
     * @param second {Number}（ms）
     * @param status {String}（move: running，end: finish）
     */
    value: function justify(second, status) {
      if (status == 'move') {
        this.justifiing = true;
      } else if (status == 'end') {
        this.justifiing = false;
        this.setCurrentTime(second);
        this.setState({
          controllerTime: 0,
          currentTime: second
        });
      }
    }

    /**
     * @description pause
     * @param {Object} e
     */


    /**
     * @description play
     * @param {Object} e
     */


    /**
     * @description end
     * @param {Object} e
     */


    /**
     * @description fail
     * @param {Object} e
     */


    /**
     * @description
     * @param {Object} e
     */

  }, {
    key: 'fullScreen',


    /**
     * @description fullScreen
     */
    value: function fullScreen() {
      this.requestOriginFullscreen();
      return;
    }

    /**
     * @description exit fullScreen
     */

  }, {
    key: 'exitOriginFullScreen',
    value: function exitOriginFullScreen() {
      var element = this.refs.video;
      this._toggleFullScreen(false);
      if (element.webkitExitFullscreen || element.exitFullscreen || element.exitFullScreen) {
        element.webkitExitFullscreen && element.webkitExitFullscreen();
        element.exitFullscreen && element.exitFullscreen();
        element.exitFullScreen && element.exitFullScreen();
      }
    }

    /**
     * @description fullScreen
     */

  }, {
    key: 'requestOriginFullscreen',
    value: function requestOriginFullscreen() {
      var element = this.refs.video;
      this._toggleFullScreen(true);

      if (element.webkitEnterFullscreen || element.enterFullScreen || element.webkitEnterFullScreen) {
        element.webkitEnterFullscreen && element.webkitEnterFullscreen();
        element.enterFullScreen && element.enterFullScreen();
        element.webkitEnterFullscreen && element.webkitEnterFullscreen();
      }
    }

    /**
     * @description toggle fullScreen
     * @param fullscreen {Boolean}
     */

  }, {
    key: '_toggleFullScreen',
    value: function _toggleFullScreen(fullscreen) {
      var doc = window.document;
      var docEl = doc.documentElement;

      var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.webkitCancelFullScreen || doc.msExitFullscreen;

      if (fullscreen !== undefined) {
        if (fullscreen) {
          requestFullScreen && requestFullScreen.call(docEl);
        } else {
          cancelFullScreen && cancelFullScreen.call(doc);
        }
        return;
      }

      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }
    }

    /**
     * @description render
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var videoProps = this.calculateVideoProps();
      var styles = this.calculateStyle();
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.container },
        (0, _rax.createElement)('video', _extends({}, videoProps, {
          style: styles.video,
          'webkit-playsinline': true })),
        this.state.pause && this.props.startBtn ? (0, _rax.createElement)(
          _raxView2.default,
          {
            onClick: this.switch,
            style: styles.startBtn,
            ref: 'starBtn'
          },
          (0, _rax.createElement)(_raxImage2.default, { source: { uri: '//gw.alicdn.com/tps/TB1FxjDKFXXXXcRXVXXXXXXXXXX-109-111.png' }, style: styles.startBtnImage })
        ) : null,
        this.props.hasController && _env2.default.os.iphone && (0, _rax.createElement)(_controller2.default, {
          currentTime: this.state.controllerTime || this.state.currentTime,
          totalTime: this.state.duration,
          pause: this.state.pause,
          onPauseOrStart: this.switch,
          onJustify: function onJustify(second, status) {
            _this2.justify(second, status);
          },
          onFullScreen: this.fullScreen,
          hasFullScreen: this.props.hasFullScreen,
          style: styles.controller })
      );
    }
  }, {
    key: 'calculateVideoProps',
    value: function calculateVideoProps() {
      var videoProps = _extends({}, this.props, {
        poster: this.props.poster || this.props.coverImage,
        onTimeupdate: this.timeUpdate,
        onPause: this.onVideoPause,
        onPlay: this.onVideoPlay,
        onError: this.onVideoFail,
        onDurationChange: this.onDurationChange,
        onEnded: this.onVideoFinish,
        ref: 'video'
      });
      // Android forced to use default progress bar
      if (!_env2.default.os.iphone && this.props.hasController) {
        videoProps.controls = 'controls';
      }
      return videoProps;
    }

    /**
     * @description style
     */

  }, {
    key: 'calculateStyle',
    value: function calculateStyle() {
      var styles = _extends({}, defaultStyles);
      if (this.state.fullScreen === true && this.state.fullScreenType == 'mock') {
        styles.container = _extends({}, defaultStyles.container, {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%'
        });
      } else {
        styles.container = _extends({}, defaultStyles.container, this.props.style);
      }

      if (this.state.fullScreen === true && this.state.fullScreenType == 'mock') {
        styles.video = _extends({}, styles.video, {
          height: '100%',
          width: '100%'
        });
      } else {
        styles.video = _extends({}, defaultStyles.video, {
          height: this.props.style.height || defaultStyles.video.height,
          width: this.props.style.width || defaultStyles.video.width
        });
      }
      if (this.state.fullScreen === true && this.state.fullScreenType == 'mock') {
        styles.startBtn = _extends({}, defaultStyles.startBtn, {
          width: '100%',
          height: '100%'
        });
        styles.startBtnImage = _extends({}, defaultStyles.startBtnImage, {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-' + parseInt(defaultStyles.startBtnImage.width) / 2 + 'rem, -' + parseInt(defaultStyles.startBtnImage.height) / 2 + 'rem)'
        });
      } else {
        styles.startBtn = _extends({}, defaultStyles.startBtn, {
          width: styles.video.width,
          height: styles.video.height
        });
        styles.startBtnImage = _extends({}, defaultStyles.startBtnImage, {
          marginLeft: (parseInt(styles.video.width) - parseInt(defaultStyles.startBtnImage.width)) / 2 + 'rem',
          marginTop: (parseInt(styles.video.height) - parseInt(defaultStyles.startBtnImage.height)) / 2 + 'rem'
        });
      }
      styles.controller = _extends({}, defaultStyles.controller, {
        width: styles.video.width
      });

      return styles;
    }
  }]);

  return Video;
}(_rax.Component);

Video.defaultProps = {
  style: {
    width: 750,
    height: 450
  }
};

exports.default = Video;
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _raxIcon = __webpack_require__(29);

var _raxIcon2 = _interopRequireDefault(_raxIcon);

var _progress = __webpack_require__(64);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var playButtonImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAz1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oiJ5HAAAARHRSTlMAAQIDBAYHCAkLEBESFBUiIyYnKCkqOTo7PD9AQUJYWVtcX2FiY3x+f4CFhoiJi5qjpaatr7Cyx8jKz9Hk5unr9/n7/V5oMmcAAADoSURBVEjHldVrO0JBFMXxaY4uigqhiBAh5FYup3Lq+H//z+S9nqfW2q9/L2bP7L0mhDBJD4NewEfd0TCqOJr8JjE0ZGcFQ8O05WiY1B0NTxVHk18nhoasWzA0TA8cDeNdR8Nj2dHk/cTQkJ06GtJ9R6+2y4Z6KDua/CoaGn5OHA3pnqPhfdvRjBw92NL1S1U/92dDv5PZkf46i/Oov+WgqM/Ja1Wfwa+GPt+zY33TFr2o7+VtUd/5t5qeJ99NPdnmbT01lxdRz9i7kp7fa5pb0Wub+6fnHf0HXF5G8b/8hftSUGv4vKPSPzUd/ugvFZ/fAAAAAElFTkSuQmCC';
var pauseButtonImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAVFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////8wXzyWAAAAG3RSTlMAAQoLDA4VFhgbHCUuNThCRExPVVaer8jV9fky2J+9AAAAXUlEQVRIS+3KSQ6AIBAF0Y8zqKDizP3v6aKVlkRv0LWsPAAAoBpDVQpcrmnqAklreFp41nEGk2j+B0/L1/3o81MPokWLFi1atGjs8W88W9ZdostppsbsdXtP09t7XKB8ZhFk+PxMAAAAAElFTkSuQmCC';
var fullScreenImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAABOFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8CSeP7AAAAZ3RSTlMAAQIDBAUGBwgKCw0PEBESFBYYGRocHR4jJCUvNTg5Oz0+P0BBSUpNTk9QVVhZXmFiY2doaWtwcXN5e3+Ag4WLj5GUlZidpaaoq62yur7AxcfIyszO09XZ2tze4uTm6e/x8/X3+fv9zYUdSQAAAd5JREFUGBntwYdWE0EAhtE/y5rEroBYEaUpRSEqimLDBsToKAhsojGoyPf+b+C2zM4snMMLeK/wLMo3hkf4NqpyTOMTJd0RWfcoEVYvSu2OK/eIMmG16/LMmkwXSxS2T+gI9Q6WcHwJdUh1m4JwtQKVhJs4hKdZkWfgEy7he1+RI/iIR8S+LmC9VqHyAet+BxAxoxms57LeYU0pAkTMSLexHiv3ir6DG1IE6DNgJF0/oO+SUk/o278qKYJthZtgFLuyT2ZUmQt7ZPYGFYv4e06q7mCUGNojtn9NfRd/kfhxVomIW4rVO0ap8z+hN6jC4G9g56RS0UulTjWVOd35fkau4T+YqjLrgTI15ep1+UY2BpSr6b/jDel4E8qN8kK+iUnlZpQZ2VXmDrAs1yzMKWMeKFHtRko1SCyosEhsSSnDvGJNIiWekplR3zKpFSUMTEkNiCRVVukbV+YluTcVSQYYExBJwRrWpFLDWOuBZIgJiBS2sOaUu4nVCmWICYhqW1hLsu5ibdUMMQG9NtaKHA2sdpeY8LyV5xk+4VqvyLeKRzhagUoqa7hEYSvUIUELh7DaNR0h/EZBWF2TmZWn1sYSZQ+Vm9iNUj0sUTIv63KXEuGblqPaxCc8Y/I18PwDVK2CYvWMbnAAAAAASUVORK5CYII=';

var Controller = function (_Component) {
  _inherits(Controller, _Component);

  function Controller(props) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, props));

    _this.switch = function () {
      var status = !_this.props.pause;
      _this.props.onPauseOrStart && _this.props.onPauseOrStart(status);
    };

    return _this;
  }

  /**
   * @description Toggle playback status event processing
   */


  _createClass(Controller, [{
    key: 'justify',


    /**
     * @description justify
     */
    value: function justify(time, status) {
      this.props.onJustify && this.props.onJustify(time, status);
    }

    /**
     * @description fullScreen
     */

  }, {
    key: 'fullScreen',
    value: function fullScreen() {
      this.props.onFullScreen && this.props.onFullScreen();
    }

    /**
     * @description render
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var playImage = void 0;
      if (this.props.pause) {
        playImage = playButtonImage;
      } else {
        playImage = pauseButtonImage;
      }
      var styles = defaultStyles;
      styles.controller = _extends({}, defaultStyles.controller, this.props.style);
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.controller },
        (0, _rax.createElement)(_raxView2.default, { style: styles.background }),
        (0, _rax.createElement)(
          _raxView2.default,
          { onClick: this.switch, style: styles.iconContainer },
          (0, _rax.createElement)(_raxIcon2.default, { style: styles.play, source: { uri: playImage } })
        ),
        (0, _rax.createElement)(_progress2.default, { style: styles.progress, onJustify: function onJustify(time, status) {
            _this2.justify(time, status);
          }, totalTime: this.props.totalTime, currentTime: this.props.currentTime }),
        this.props.hasFullScreen ? (0, _rax.createElement)(
          _raxView2.default,
          { onClick: this.fullScreen, style: styles.iconContainer },
          (0, _rax.createElement)(_raxIcon2.default, { style: styles.fullScreen, source: { uri: fullScreenImage } })
        ) : null
      );
    }
  }]);

  return Controller;
}(_rax.Component);

var defaultStyles = {
  controller: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: '-1'
  },
  iconContainer: {
    paddingLeft: 15,
    paddingRight: 15
  },
  play: {
    width: 40,
    height: 40,
    marginTop: 15
  },
  progress: {},
  fullScreen: {
    width: 40,
    height: 40,
    marginTop: 15
  }
};

exports.default = Controller;
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _progresspoint = __webpack_require__(65);

var _progresspoint2 = _interopRequireDefault(_progresspoint);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultStyles = {
  progress: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 70,
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none'
  },
  currentTime: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 3,
    lineHeight: 70,
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'sans-serif'
  },
  totalTime: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 3,
    lineHeight: 70,
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'sans-serif'
  },
  progressBarWrap: {
    flex: 1,
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none'
  },
  progressBar: {
    width: '92%',
    height: 3,
    backgroundColor: '#cfeaff',
    position: 'absolute',
    left: 0,
    marginLeft: '4%',
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none'
  },
  progressLine: {
    position: 'absolute',
    height: 3,
    top: 0,
    left: 0,
    zIndex: '1',
    backgroundColor: '#25c1b7',
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none'
  },
  progressUpdate: {
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none'
  }
};

/**
 * format time (mm:ss)
 * @param second {Interger}（s）
 * @returns {string} time
 */
var formatTime = function formatTime(second) {
  second = second || 0;
  var minute = Math.floor(second / 60);
  var ss = parseInt(second % 60);
  minute = minute < 10 ? '0' + minute : minute;
  ss = ss < 10 ? '0' + ss : ss;
  return minute + ':' + ss;
};

/**
 * @description Progress
 */

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress(props) {
    _classCallCheck(this, Progress);

    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

    _this.state = {
      justifyTime: undefined
    };
    return _this;
  }

  /**
   * @description Playback progress adjustment event handling
   * @param position {Percentage} Progress bar position (%)
   * @param status {String} Control gesture state（move, end）
   * @param direction {String}  (toward: advance forward,， backward: back off)
   */


  _createClass(Progress, [{
    key: 'justify',
    value: function justify(position, status, direction) {
      var currentTime = this.props.totalTime * position;
      if (status == 'move') {
        this.state.justifyTime == undefined && this.props.onJustify(currentTime, status);
        this.setState({
          justifyTime: currentTime
        });
      } else if (status == 'end' && this.props.onJustify) {
        this.props.onJustify(currentTime, status);
        this.state.justifyTime = undefined;
      }
    }

    /**
     * @description render
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var time = this.state.justifyTime || this.props.currentTime;
      var styles = _extends({}, this.props.style, defaultStyles);
      styles.progressUpdate.top = styles.progressBar.top = parseInt(styles.progress.height) / 2 - 2 + 'rem';
      styles.progressLine.width = this.props.totalTime ? Math.min(1, time / this.props.totalTime) * 100 + '%' : 0;
      var currntTime = formatTime(time);
      var totalTime = formatTime(this.props.totalTime);
      var pointPosition = this.props.totalTime ? Math.min(1, time / this.props.totalTime) * 0.92 + 0.04 : 0.04;
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.progress },
        (0, _rax.createElement)(
          _raxText2.default,
          { style: styles.currentTime },
          currntTime
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: styles.progressBarWrap },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: styles.progressBar, id: 'progress-bar' },
            (0, _rax.createElement)(_raxView2.default, { style: styles.progressLine })
          ),
          (0, _rax.createElement)(_progresspoint2.default, { pointPosition: pointPosition, style: styles.progressUpdate, onJustify: function onJustify(position, status, direction) {
              _this2.justify(position, status, direction);
            } })
        ),
        (0, _rax.createElement)(
          _raxText2.default,
          { style: styles.totalTime, 'class': 'total-time J_TotalTime' },
          totalTime
        )
      );
    }
  }]);

  return Progress;
}(_rax.Component);

exports.default = Progress;
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pointWrapper;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalPanresponder = __webpack_require__(24);

var _universalPanresponder2 = _interopRequireDefault(_universalPanresponder);

var _dimensions = __webpack_require__(68);

var _dimensions2 = _interopRequireDefault(_dimensions);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Dimensions$get = _dimensions2.default.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width,
    scale = _Dimensions$get.scale;

width = width / scale * 0.8;

/**
 * @description Point for progress bar
 */

var Point = function (_Component) {
  _inherits(Point, _Component);

  function Point(props) {
    _classCallCheck(this, Point);

    var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, props));

    _this._handlePanResponderGrant = function (e, gestureState) {
      _this._calculateTotalWidth();
      return true;
    };

    _this._handlePanResponderMove = function (e, gestureState) {
      if (!_this.updating) {
        _this.updating = true;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        _this.previousPositionX = _this.previousPositionX || 0;
        var absDelta = gestureState.dx - _this.previousPositionX;
        if (absDelta == 0) {
          _this.updating = false;
          return;
        }
        _this.pointPosition = Math.min(Math.max(0, (_this.pointPosition - 0.04) / 0.92 + (gestureState.dx - _this.previousPositionX) / _this.totalWidth), 1) * 0.92 + 0.04;

        setTimeout(function () {
          _this.previousPositionX = gestureState.dx;
          _this.props.onJustify && _this.props.onJustify((_this.pointPosition - 0.04) / 0.92, 'move', absDelta > 0 ? 'toward' : 'backward');
          _this.updating = false;
        }, 0);
      }
    };

    _this._handlePanResponderEnd = function (e, gestureState) {
      _this.pointPosition = Math.min(Math.max(0, (_this.pointPosition - 0.04) / 0.92 + (gestureState.dx - _this.previousPositionX) / _this.totalWidth), 1) * 0.92 + 0.04;
      _this.props.onJustify && _this.props.onJustify((_this.pointPosition - 0.04) / 0.92, 'end');
      _this.previousPositionX = 0;
    };

    return _this;
  }

  _createClass(Point, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._panResponder = _universalPanresponder2.default.create({
        onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
        onPanResponderGrant: this._handlePanResponderGrant,
        onPanResponderMove: this._handlePanResponderMove,
        onPanResponderRelease: this._handlePanResponderEnd,
        onPanResponderTerminate: this._handlePanResponderEnd
      });
      this.previousPositionX = 0;
      this.totalWidth = this.props.totalWidth || width;
    }

    /**
     * @description render
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.pointPosition = this.props.pointPosition;
      var styles = defaultStyles;
      styles.pointWrapper = _extends({}, defaultStyles.pointWrapper, this.props.style, {
        marginLeft: (this.props.pointPosition || 0.04) * 100 + '%'
      });
      return (0, _rax.createElement)(
        _raxView2.default,
        _extends({
          ref: function ref(point) {
            _this2.point = point;
          },
          style: styles.pointWrapper
        }, this._panResponder.panHandlers),
        (0, _rax.createElement)(_raxView2.default, { style: styles.point })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._calculateTotalWidth();
    }

    /**
     * @description Calculated total length
     */

  }, {
    key: '_calculateTotalWidth',
    value: function _calculateTotalWidth() {
      if (!_universalEnv.isWeex) {
        var progressBar = document.getElementById('progress-bar');
        // console.log(progressBar.clientWidth);
        this.totalWidth = progressBar.clientWidth || this.totalWidth;
      }
    }
  }, {
    key: '_handleStartShouldSetPanResponder',
    value: function _handleStartShouldSetPanResponder(e, gestureState) {
      // Should we become active when the user presses down on the circle?
      return true;
    }
  }, {
    key: '_handleMoveShouldSetPanResponder',
    value: function _handleMoveShouldSetPanResponder(e, gestureState) {
      // Should we become active when the user moves a touch over the circle?
      return true;
    }

    /**
     * @description pan start
     * @param e {Event}
     * @param gestureState {Object}
     * @returns {boolean} true
     */


    /**
     * @description pan move
     * @param e {Event}
     * @param gestureState {Object}
     */


    /**
     * @description pan end
     * @param e {Event}
     * @param gestureState {Object}
     */

  }]);

  return Point;
}(_rax.Component);

var defaultStyles = {
  pointWrapper: (_pointWrapper = {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
    transform: 'translate(-25rem,-25rem)',
    webkitTransform: 'translate(-25rem,-25rem)',
    mozTransform: 'translate(-25rem,-25rem)',
    mskitTransform: 'translate(-25rem,-25rem)'
  }, _defineProperty(_pointWrapper, 'transform', 'translate(-25rem,-25rem)'), _defineProperty(_pointWrapper, 'zIndex', 2), _pointWrapper),
  point: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    marginTop: 12,
    marginLeft: 12
  }
};

exports.default = Point;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TouchHistoryMath = {
  /**
   * This code is optimized and not intended to look beautiful. This allows
   * computing of touch centroids that have moved after `touchesChangedAfter`
   * timeStamp. You can compute the current centroid involving all touches
   * moves after `touchesChangedAfter`, or you can compute the previous
   * centroid of all touches that were moved after `touchesChangedAfter`.
   *
   * @param {TouchHistoryMath} touchHistory Standard Responder touch track
   * data.
   * @param {number} touchesChangedAfter timeStamp after which moved touches
   * are considered "actively moving" - not just "active".
   * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
   * @param {boolean} ofCurrent Compute current centroid for actively moving
   * touches vs. previous centroid of now actively moving touches.
   * @return {number} value of centroid in specified dimension.
   */
  centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
    var touchBank = touchHistory.touchBank;
    var total = 0;
    var count = 0;

    var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;

    if (oneTouchData !== null) {
      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
        count = 1;
      }
    } else {
      for (var i in touchBank) {
        var touchTrack = touchBank[i];
        if (touchTrack !== null && touchTrack !== undefined && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
          var toAdd; // Yuck, program temporarily in invalid state.
          if (ofCurrent && isXAxis) {
            toAdd = touchTrack.currentPageX;
          } else if (ofCurrent && !isXAxis) {
            toAdd = touchTrack.currentPageY;
          } else if (!ofCurrent && isXAxis) {
            toAdd = touchTrack.previousPageX;
          } else {
            toAdd = touchTrack.previousPageY;
          }
          total += toAdd;
          count++;
        }
      }
    }
    return count > 0 ? total / count : TouchHistoryMath.noCentroid;
  },

  currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, // isXAxis
    true // ofCurrent
    );
  },

  currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, // isXAxis
    true // ofCurrent
    );
  },

  previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, // isXAxis
    false // ofCurrent
    );
  },

  previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, // isXAxis
    false // ofCurrent
    );
  },

  currentCentroidX: function currentCentroidX(touchHistory) {
    return TouchHistoryMath.centroidDimension(touchHistory, 0, // touchesChangedAfter
    true, // isXAxis
    true // ofCurrent
    );
  },

  currentCentroidY: function currentCentroidY(touchHistory) {
    return TouchHistoryMath.centroidDimension(touchHistory, 0, // touchesChangedAfter
    false, // isXAxis
    true // ofCurrent
    );
  },

  noCentroid: -1
};

module.exports = TouchHistoryMath;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Touch position/time tracking information by touchID. Typically, we'll only
 * see IDs with a range of 1-20 (they are recycled when touches end and then
 * start again). This data is commonly needed by many different interaction
 * logic modules so precomputing it is very helpful to do once.
 * Each touch object in `touchBank` is of the following form:
 * { touchActive: boolean,
 *   startTimeStamp: number,
 *   startPageX: number,
 *   startPageY: number,
 *   currentPageX: number,
 *   currentPageY: number,
 *   currentTimeStamp: number
 * }
 */
var touchHistory = {
  touchBank: {},
  numberActiveTouches: 0,
  // If there is only one active touch, we remember its location. This prevents
  // us having to loop through all of the touches all the time in the most
  // common case.
  indexOfSingleActiveTouch: -1,
  mostRecentTimeStamp: 0
};

/**
 * TODO: Instead of making gestures recompute filtered velocity, we could
 * include a built in velocity computation that can be reused globally.
 * @param {Touch} touch Native touch object.
 */
var initializeTouchData = function initializeTouchData(touch) {
  return {
    touchActive: true,
    startTimeStamp: touch.timestamp,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: touch.timestamp,
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: touch.timestamp
  };
};

var reinitializeTouchTrack = function reinitializeTouchTrack(touchTrack, touch) {
  touchTrack.touchActive = true;
  touchTrack.startTimeStamp = touch.timestamp;
  touchTrack.startPageX = touch.pageX;
  touchTrack.startPageY = touch.pageY;
  touchTrack.currentPageX = touch.pageX;
  touchTrack.currentPageY = touch.pageY;
  touchTrack.currentTimeStamp = touch.timestamp;
  touchTrack.previousPageX = touch.pageX;
  touchTrack.previousPageY = touch.pageY;
  touchTrack.previousTimeStamp = touch.timestamp;
};

var recordStartTouchData = function recordStartTouchData(touch) {
  var touchBank = touchHistory.touchBank;
  var identifier = touch.identifier;
  var touchTrack = touchBank[identifier];
  if (touchTrack) {
    reinitializeTouchTrack(touchTrack, touch);
  } else {
    touchBank[touch.identifier] = initializeTouchData(touch);
  }
  touchHistory.mostRecentTimeStamp = touch.timestamp;
};

var recordMoveTouchData = function recordMoveTouchData(touch) {
  var touchBank = touchHistory.touchBank;
  var touchTrack = touchBank[touch.identifier];
  touchTrack.touchActive = true;
  touchTrack.previousPageX = touchTrack.currentPageX;
  touchTrack.previousPageY = touchTrack.currentPageY;
  touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
  touchTrack.currentPageX = touch.pageX;
  touchTrack.currentPageY = touch.pageY;
  touchTrack.currentTimeStamp = touch.timestamp;
  touchHistory.mostRecentTimeStamp = touch.timestamp;
};

var recordEndTouchData = function recordEndTouchData(touch) {
  var touchBank = touchHistory.touchBank;
  var touchTrack = touchBank[touch.identifier];
  touchTrack.previousPageX = touchTrack.currentPageX;
  touchTrack.previousPageY = touchTrack.currentPageY;
  touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
  touchTrack.currentPageX = touch.pageX;
  touchTrack.currentPageY = touch.pageY;
  touchTrack.currentTimeStamp = touch.timestamp;
  touchTrack.touchActive = false;
  touchHistory.mostRecentTimeStamp = touch.timestamp;
};

function toArray(collection) {
  return collection && Array.prototype.slice.call(collection) || [];
}

function normalizeTouches(touches, nativeEvent) {
  // Weex is timestamp
  var timeStamp = nativeEvent.timeStamp || nativeEvent.timestamp;

  return toArray(touches).map(function (touch) {
    // Cloned touch
    return {
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,
      // FIXME: In weex android pageX/Y return a error value
      pageX: touch.screenX,
      pageY: touch.screenY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target || nativeEvent.target,
      timestamp: timeStamp,
      identifier: touch.identifier || 1 // MouseEvent without identifier
    };
  });
};

var ResponderTouchHistoryStore = {
  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
    var touchBank = touchHistory.touchBank;
    var changedTouches = normalizeTouches(nativeEvent.changedTouches || [nativeEvent], nativeEvent);
    if (topLevelType === 'move') {
      changedTouches.forEach(recordMoveTouchData);
    } else if (topLevelType === 'start') {
      changedTouches.forEach(recordStartTouchData);
      touchHistory.numberActiveTouches = changedTouches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = changedTouches[0].identifier;
      }
    } else if (topLevelType === 'end') {
      changedTouches.forEach(recordEndTouchData);
      touchHistory.numberActiveTouches = changedTouches.length;
      if (touchHistory.numberActiveTouches === 1) {
        for (var i in touchBank) {
          var touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
      }
    }
  },

  touchHistory: touchHistory
};

module.exports = ResponderTouchHistoryStore;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FULL_WIDTH = 750;
var NAVBAR_HEIGHT = 64;
var DEFAULT_SCALE = 2;

function getDimensions() {
  var dimensions = {};
  if (_universalEnv.isWeex) {
    var weexEnv = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {};
    var scale = weexEnv.scale || DEFAULT_SCALE;
    dimensions = {
      window: {
        width: FULL_WIDTH,
        height: (weexEnv.deviceHeight - NAVBAR_HEIGHT * scale) * FULL_WIDTH / weexEnv.deviceWidth,
        scale: scale,
        fontScale: 1
      },
      screen: {
        width: weexEnv.deviceWidth,
        height: weexEnv.deviceHeight
      }
    };
  } else if (_universalEnv.isWeb) {
    var documentElement = document.documentElement;
    dimensions = {
      window: {
        width: FULL_WIDTH,
        height: documentElement.clientHeight * FULL_WIDTH / documentElement.clientWidth,
        scale: window.devicePixelRatio || DEFAULT_SCALE,
        fontScale: 1
      },
      screen: screen
    };
  }

  return dimensions;
}

var Dimensions = function () {
  function Dimensions() {
    _classCallCheck(this, Dimensions);
  }

  _createClass(Dimensions, null, [{
    key: 'get',
    value: function get(dim) {
      return getDimensions()[dim];
    }
  }]);

  return Dimensions;
}();

exports.default = Dimensions;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ua = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';

exports.default = {
  os: {
    iphone: ua.match(/(iphone\sos)\s([\d_]+)/)
  }
};
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var supportVideoPlus = false;
var weexEnv = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {};
// TODO: rework by feature recognition
if (weexEnv.appName === 'TB' && weexEnv.appVersion) {
  var appVersion = weexEnv.appVersion.split('.');
  if (appVersion[0] >= 6 && appVersion[1] >= 2) {
    supportVideoPlus = true;
  }
}

var defaultStyles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: 750,
    height: 300
  },
  video: {
    width: 750,
    height: 300,
    zIndex: 1
  },
  poster: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  startBtn: {
    overflow: 'hidden',
    position: 'absolute',
    color: '#ffffff',
    top: 0,
    left: 0,
    zIndex: 1
  },
  startBtnImage: {
    width: 109,
    height: 111
  }
};

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.isNew = true, _this.state = {
      pause: _this.props.autoPlay ? false : true,
      poster: true,
      update: true
    }, _this.switch = function (status) {
      _this.setState({
        pause: status === 'stop',
        update: true
      });
    }, _this.onVideoPause = function (e) {
      typeof _this.props.onVideoPause === 'function' && _this.props.onVideoPause(e);
      if (_this.state.pause === false) {
        _this.setState({
          pause: true,
          update: false
        });
      }
    }, _this.onVideoPlay = function (e) {
      typeof _this.props.onVideoPlay === 'function' && _this.props.onVideoPlay(e);
      _this.state.poster = false;
      if (_this.state.pause === true) {
        _this.setState({
          pause: false,
          update: false
        });
      }
    }, _this.onVideoFail = function (e) {
      typeof _this.props.onVideoFail === 'function' && _this.props.onVideoFail(e);
    }, _this.onVideoFinish = function (e) {
      typeof _this.props.onVideoFinish === 'function' && _this.props.onVideoFinish(e);
    }, _this.onLandscape = function (e) {
      typeof _this.props.onLandscape === 'function' && _this.props.onLandscape(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.autoPlay) {
        return false;
      }
      if (this.isNew || nextState.update) {
        this.isNew = false;
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var VideoComponent = 'video';
      var styles = this.calculateStyle();
      var poster = this.props.poster || this.props.coverImage;
      var playStatus = this.state.pause ? 'stop' : 'play';
      var videoSrc = this.props.src.replace(/\/\/|http:\/\/|https:\/\//, location.protocol + '//');
      var props = _extends({}, this.props, {
        onPause: this.onVideoPause,
        onStart: this.onVideoPlay,
        onFail: this.onVideoFail,
        onFinish: this.onVideoFinish,
        ref: 'video',
        src: videoSrc,
        style: styles.video,
        playStatus: playStatus,
        autoPlay: this.props.autoPlay ? true : false
      });

      if (supportVideoPlus) {
        VideoComponent = 'videoplus';
        props = _extends({}, this.props, {
          src: videoSrc,
          autoPlay: true, // 因为videoplus现在有个bug，当autoPlay不为true的时候埋点会有问题，所有，当视频开始播放之后就设置autoPlay为true
          onPaused: this.onVideoPause,
          onPlaying: this.onVideoPlay,
          onError: this.onVideoFail,
          onFinish: this.onVideoFinish,
          onLandscape: this.onLandscape,
          style: styles.video,
          playControl: this.state.pause ? 'pause' : 'play'
        });
      }

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.container },
        poster && playStatus == 'stop' ? null : (0, _rax.createElement)(VideoComponent, props),
        playStatus == 'stop' && poster && this.state.poster && (0, _rax.createElement)(
          _raxView2.default,
          {
            style: styles.poster,
            ref: 'poster'
          },
          (0, _rax.createElement)(_raxImage2.default, {
            source: {
              uri: poster
            },
            style: styles.posterImage
          })
        ),
        playStatus == 'stop' && this.props.startBtn && (0, _rax.createElement)(
          _raxView2.default,
          {
            style: styles.startBtn,
            ref: 'starBtn'
          },
          (0, _rax.createElement)(_raxImage2.default, {
            source: {
              uri: 'https://gw.alicdn.com/tps/TB1FxjDKFXXXXcRXVXXXXXXXXXX-109-111.png'
            },
            style: styles.startBtnImage,
            onClick: function onClick() {
              _this2.switch(!playStatus);
            }
          })
        )
      );
    }
  }, {
    key: 'calculateStyle',
    value: function calculateStyle() {
      var styles = defaultStyles;
      styles.container = _extends({}, defaultStyles.container, this.props.style);
      styles.video = _extends({}, defaultStyles.video, {
        width: this.props.style.width || defaultStyles.video.width,
        height: this.props.style.height || defaultStyles.video.height
      });
      styles.startBtn = _extends({}, defaultStyles.startBtn, {
        width: styles.video.width,
        height: parseInt(styles.video.height) - 75
      });
      styles.startBtnImage = _extends({}, defaultStyles.startBtnImage, {
        marginLeft: (parseInt(styles.video.width) - parseInt(defaultStyles.startBtnImage.width)) / 2,
        marginTop: (parseInt(styles.video.height) - parseInt(defaultStyles.startBtnImage.height)) / 2
      });
      styles.poster = _extends({}, defaultStyles.poster, {
        width: styles.video.width,
        height: styles.video.height
      });
      styles.posterImage = {
        width: styles.video.width,
        height: styles.video.height
      };
      return styles;
    }
  }]);

  return Video;
}(_rax.Component);

exports.default = Video;
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var buttonStyles = [styles.button, props.style];
      var textStyles = [styles.text];

      if (props.color) {
        textStyles.push({ color: props.color });
      }

      if (props.disabled) {
        buttonStyles.push(styles.buttonDisabled);
        textStyles.push(styles.textDisabled);
      }

      var content = props.children || props.title;
      if (typeof content === 'string') {
        content = (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyles },
          content
        );
      }

      return (0, _rax.createElement)(
        _raxTouchable2.default,
        _extends({}, props, { style: buttonStyles }),
        content
      );
    }
  }]);

  return Button;
}(_rax.Component);

Button.propTypes = {};


var styles = {
  button: {},
  text: {
    color: '#0C42FD',
    textAlign: 'center',
    padding: 16,
    fontSize: 36
  },
  buttonDisabled: {},
  textDisabled: {
    color: '#cdcdcd'
  }
};

exports.default = Button;
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileInput = __webpack_require__(25);

var _tileInput2 = _interopRequireDefault(_tileInput);

var _tileButton = __webpack_require__(17);

var _tileButton2 = _interopRequireDefault(_tileButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputDemo = function (_Component) {
  _inherits(InputDemo, _Component);

  function InputDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputDemo.__proto__ || Object.getPrototypeOf(InputDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      falseSwitchIsOn: false,
      trueSwitchIsOn: true,
      checkBoxValue: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'text'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileInput2.default, { placeholder: 'Input Demo', type: 'text', style: {
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#CCC',
              width: 500
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'number'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileInput2.default, { type: 'number', style: {
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#CCC',
              width: 500
            },
            value: 1,
            end: 5,
            start: 0,
            onChange: function onChange(num) {
              _this2.state.count = num;
            },
            onComplete: function onComplete(num) {
              _this2.state.count = num;
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'checkbox'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          _defineProperty({ style: styles.container }, 'style', {
            flexDirection: 'row'
          }),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { marginTop: 0, marginBottom: 0, marginLeft: 40, marginRight: 40 } },
            (0, _rax.createElement)(_tileInput2.default, { type: 'checkbox' })
          ),
          (0, _rax.createElement)(_tileInput2.default, { type: 'checkbox', checked: this.state.checkBoxValue, onChange: function onChange() {
              _this2.setState({
                checkBoxValue: !_this2.state.checkBoxValue
              });
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'radio'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          _defineProperty({ style: styles.container }, 'style', {
            flexDirection: 'row'
          }),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { marginTop: 0, marginBottom: 0, marginLeft: 40, marginRight: 40 } },
            (0, _rax.createElement)(_tileInput2.default, {
              type: 'switch',
              onValueChange: function onValueChange(value) {
                return _this2.setState({ falseSwitchIsOn: value });
              },
              value: this.state.falseSwitchIsOn })
          ),
          (0, _rax.createElement)(_tileInput2.default, {
            type: 'switch',
            onValueChange: function onValueChange(value) {
              return _this2.setState({ trueSwitchIsOn: value });
            },
            value: this.state.trueSwitchIsOn })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'textarea'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileInput2.default, {
            type: 'textarea',
            style: {
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#CCC',
              width: 500,
              height: 150
            },
            placeholder: 'Textarea Demo'
          })
        )
      );
    }
  }]);

  return InputDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  inputTitle: {
    paddingLeft: 20,
    color: '#888',
    marginTop: 10,
    marginBottom: 10
  }
};

exports.default = InputDemo;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHECKBOX_ENABLED_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLRwScAAAAPdFJOUwDvEI8wz69QQL/fIHCAYDHs4yUAAACoSURBVCjPfdIBDoMgDAXQ31JE1K33v60UZSJ2NjEmvvgpUIAD6aMoMMBR3YqMoBpmDDXbV1B5nApKUB3/kU9ZR1QLDcKklACPJmvCpWSSPWLbJK0e1bgNDrW4J/3iLmLbSov7oqNyjtFsM5nQUzyOc61xfKPlOOpsr4QbSb0x6uKuNqTdZovrmm+W8KDTJjhUbeGB5LS8SDcChV4GwB0bqWPzMmz/R3QHJwAPwC8jHWQAAAAASUVORK5CYII=';
var CHECKBOX_DISABLED_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzM2vW5DoAAAAHdFJOUwCPEO9AzzBOX/xUAAAASklEQVQoz+2SMRKAQAwCIcmF///YaKl4tYU7Q8O2CwRTD5IBxJJlBSixcKPOFzkzUAmpnGppFCy/+qpqZ2rUJgCbTV/ZbGJ7T/QAwyIE71akwQMAAAAASUVORK5CYII=';

var CheckBox = function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox(props) {
    _classCallCheck(this, CheckBox);

    var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

    _this.state = {
      internalChecked: false
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(CheckBox, [{
    key: 'onChange',
    value: function onChange() {
      var _props = this.props,
          checked = _props.checked,
          onChange = _props.onChange;


      if (onChange && typeof checked === 'boolean') {
        onChange(checked);
      } else {
        var internalChecked = this.state.internalChecked;

        if (onChange) {
          onChange(!internalChecked);
        }
        this.setState({
          internalChecked: !internalChecked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var container = void 0,
          source = void 0;
      var _props2 = this.props,
          checked = _props2.checked,
          checkedImage = _props2.checkedImage,
          uncheckedImage = _props2.uncheckedImage,
          containerStyle = _props2.containerStyle,
          checkboxStyle = _props2.checkboxStyle;


      if (typeof checked === 'boolean') {
        source = checked ? checkedImage : uncheckedImage;
      } else {
        source = this.state.internalChecked ? checkedImage : uncheckedImage;
      }

      return (0, _rax.createElement)(
        _raxTouchable2.default,
        { onPress: this.onChange, style: styles.flexContainer },
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [styles.container, containerStyle] },
          (0, _rax.createElement)(_raxImage2.default, {
            style: [styles.checkbox, checkboxStyle],
            source: { uri: source } })
        )
      );
    }
  }]);

  return CheckBox;
}(_rax.Component);

CheckBox.defaultProps = {
  checked: null,
  checkedImage: CHECKBOX_ENABLED_ICON,
  uncheckedImage: CHECKBOX_DISABLED_ICON
};


var styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    width: 40,
    height: 40
  }
};

exports.default = CheckBox;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOTTOM_COLOR = '#666666';
var DISABLE_BOTTOM_COLOR = '#a1a1a1';

var Counter = function (_Component) {
  _inherits(Counter, _Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.increment = function () {
      var _this$props = _this.props,
          onComplete = _this$props.onComplete,
          onChange = _this$props.onChange,
          end = _this$props.end;

      if (_this.state.count < end) {
        _this.state.count++;
        onChange && onChange(_this.state.count);
        _this.state.count == end ? _this.state.decrementColor = DISABLE_BOTTOM_COLOR : _this.state.incrementColor = BOTTOM_COLOR;
        _this.setState(_this.state);
        onComplete && onComplete(_this.state.count);
      }
    };

    _this.decrement = function () {
      var _this$props2 = _this.props,
          onComplete = _this$props2.onComplete,
          start = _this$props2.start;

      if (_this.state.count > start) {
        _this.state.count--;
        _this.state.count == start ? _this.state.incrementColor = DISABLE_BOTTOM_COLOR : _this.state.decrementColor = BOTTOM_COLOR;
        onComplete && onComplete(_this.state.count);
        _this.setState(_this.state);
      }
    };

    _this.state = {
      count: props.value,
      incrementColor: BOTTOM_COLOR,
      decrementColor: BOTTOM_COLOR
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        _extends({}, this.props, { style: styles.container }),
        (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            style: styles.button,
            onPress: this.decrement
          },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _extends({}, styles.buttonText, { color: this.state.incrementColor }) },
            '-'
          )
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          null,
          (0, _rax.createElement)(
            _raxText2.default,
            { style: styles.countText },
            this.state.count
          )
        ),
        (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            style: styles.button,
            onPress: this.increment
          },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _extends({}, styles.buttonText, { color: this.state.decrementColor }) },
            '+'
          )
        )
      );
    }
  }]);

  return Counter;
}(_rax.Component);

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 200,
    height: 50
  },
  countText: {
    flex: 1,
    height: 50,
    lineHeight: 50,
    fontSize: 32,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    width: 57
  },
  buttonText: {
    flex: 1,
    height: 50,
    lineHeight: 50,
    fontSize: 32,
    textAlign: 'center'
  }
};

exports.default = Counter;
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_WIDTH = 100;
var DEFAULT_HEIGHT = 60;

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      if (_this.props.disabled) {
        return null;
      }
      var newVal = !_this.props.value;
      _this.props.onValueChange && _this.props.onValueChange.call(_this, newVal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Switch, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        span: {
          width: DEFAULT_WIDTH,
          height: DEFAULT_HEIGHT,
          minWidth: DEFAULT_WIDTH,
          minHeight: DEFAULT_HEIGHT,
          borderRadius: 40,
          position: 'relative',
          display: 'inline-block',
          margin: 4,
          padding: 0,
          cursor: 'default', // pointer will cause a grey background color on chrome
          verticalAlign: 'middle',
          borderColor: '#dfdfdf',
          borderWidth: '1px',
          borderStyle: 'solid',
          WebkitUserSelect: 'none',
          WebkitBoxSizing: 'content-box',
          WebkitBackfaceVisibility: 'hidden'
        },
        checkedSpan: {
          borderColor: this.props.onTintColor,
          backgroundColor: this.props.onTintColor,
          boxShadow: this.props.onTintColor + ' 0 0 0 16px inset',
          WebkitTransition: 'border 0.2s, box-shadow 0.2s, background-color 1s'
        },
        uncheckedSpan: {
          borderColor: '#dfdfdf',
          backgroundColor: this.props.tintColor,
          boxShadow: '#dfdfdf 0 0 0 0 inset',
          WebkitTransition: 'border 0.2s, box-shadow 0.2s'
        },
        disabledSpan: {
          opacity: 0.5,
          cursor: 'not-allowed',
          boxShadow: 'none'
        },
        small: {
          position: 'absolute',
          top: 0,
          width: 60,
          height: 60,
          backgroundColor: this.props.thumbTintColor,
          borderRadius: '100%',
          boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
          WebkitTransition: '-webkit-transform 0.2s ease-in'
        },
        checkedSmall: {
          WebkitTransform: 'translateX(40rem)' // should with rem unit that the value is string type
        },
        uncheckedSmall: {
          WebkitTransform: 'translateX(0)'
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          value = _props.value,
          disabled = _props.disabled,
          onValueChange = _props.onValueChange,
          others = _objectWithoutProperties(_props, ['style', 'value', 'disabled', 'onValueChange']);

      if (_universalEnv.isWeex) {
        var nativeProps = {
          style: _extends({}, styles.initial, style),
          checked: value,
          disabled: disabled,
          onChange: function onChange(_ref2) {
            var value = _ref2.value;
            return onValueChange(value);
          }
        };

        return (0, _rax.createElement)('switch', _extends({}, nativeProps, others));
      } else {
        var _styles = this.getStyles();
        var spancss = value ? _extends({}, _styles.span, _styles.checkedSpan) : _extends({}, _styles.span, _styles.uncheckedSpan);
        var smallcss = value ? _extends({}, _styles.small, _styles.checkedSmall) : _extends({}, _styles.small, _styles.uncheckedSmall);
        spancss = disabled ? _extends({}, spancss, _styles.disabledSpan) : spancss;
        spancss = _extends({}, style, spancss);

        return (0, _rax.createElement)(
          'span',
          _extends({ onClick: this.handleClick, style: spancss }, others),
          (0, _rax.createElement)('small', { style: smallcss })
        );
      }
    }
  }]);

  return Switch;
}(_rax.Component);

Switch.propTypes = {};
Switch.defaultProps = {
  onTintColor: '#00e158',
  thumbTintColor: '#ffffff',
  tintColor: '#ffffff'
};


var styles = {
  initial: {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  }
};

exports.default = Switch;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typeMap = {
  'default': 'text',
  'ascii-capable': 'text',
  'numbers-and-punctuation': 'number',
  'url': 'url',
  'number-pad': 'number',
  'phone-pad': 'tel',
  'name-phone-pad': 'text',
  'email-address': 'email',
  'decimal-pad': 'number',
  'twitter': 'text',
  'web-search': 'search',
  'numeric': 'number'
};

function getText(event) {
  var text = void 0;
  if (_universalEnv.isWeex) {
    text = event.value;
  } else {
    text = event.target.value;
  }
  return text;
}

function genEventObject(originalEvent) {
  var text = getText(originalEvent);
  return {
    nativeEvent: {
      text: text
    },
    originalEvent: originalEvent,
    value: text,
    target: originalEvent.target
  };
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleInput = function (event) {
      _this.props.onInput(genEventObject(event));
    }, _this.handleChange = function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(genEventObject(event));
      }

      if (_this.props.onChangeText) {
        var text = getText(event);
        _this.props.onChangeText(text);
      }
    }, _this.handleFocus = function (event) {
      _this.props.onFocus(genEventObject(event));
    }, _this.handleBlur = function (event) {
      _this.props.onBlur(genEventObject(event));
    }, _this.focus = function () {
      _this.refs.input.focus && _this.refs.input.focus();
    }, _this.blur = function () {
      _this.refs.input.blur && _this.refs.input.blur();
    }, _this.clear = function () {
      (0, _rax.setNativeProps)(_this.refs.input, { value: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      (0, _rax.setNativeProps)(this.refs.input, { value: newProps.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          autoComplete = _props.autoComplete,
          editable = _props.editable,
          keyboardType = _props.keyboardType,
          maxNumberOfLines = _props.maxNumberOfLines,
          multiline = _props.multiline,
          numberOfLines = _props.numberOfLines,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          onChangeText = _props.onChangeText,
          onInput = _props.onInput,
          password = _props.password,
          secureTextEntry = _props.secureTextEntry,
          style = _props.style,
          value = _props.value,
          defaultValue = _props.defaultValue;


      var propsCommon = _extends({}, this.props, {
        'aria-label': accessibilityLabel,
        autoComplete: autoComplete && 'on',
        onChange: (onChange || onChangeText) && this.handleChange,
        onInput: onInput && this.handleInput,
        onBlur: onBlur && this.handleBlur,
        onFocus: onFocus && this.handleFocus,
        style: _extends({}, styles.initial, style),
        ref: 'input'
      });

      if (value) {
        delete propsCommon.defaultValue;
      } else {
        propsCommon.value = defaultValue;
      }

      if (typeof editable !== 'undefined' && !editable) {
        propsCommon.readOnly = true;
      }

      var type = typeMap[keyboardType];
      if (password || secureTextEntry) {
        type = 'password';
      }

      if (_universalEnv.isWeex) {
        // Diff with web readonly attr, `disabled` must be boolean value
        var disabled = Boolean(propsCommon.readOnly);

        if (multiline) {
          return (0, _rax.createElement)('textarea', _extends({}, propsCommon, { rows: 20, disabled: disabled }));
        } else {
          // https://github.com/alibaba/weex/blob/dev/doc/components/input.md
          return (0, _rax.createElement)('input', _extends({}, propsCommon, { type: type, disabled: disabled }));
        }
      } else {
        var input = void 0;
        if (multiline) {
          var propsMultiline = {
            maxRows: maxNumberOfLines || numberOfLines,
            minRows: numberOfLines
          };

          input = (0, _rax.createElement)(
            'textarea',
            _extends({}, propsCommon, propsMultiline),
            propsCommon.value
          );
        } else {
          input = (0, _rax.createElement)('input', _extends({}, propsCommon, { type: type }));
        }

        return input;
      }
    }
  }]);

  return TextInput;
}(_rax.Component);

TextInput.propTypes = {};


var styles = {
  initial: {
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: '#000000',
    borderWidth: 0,
    boxSizing: 'border-box',
    color: '#000000',
    padding: 0,
    paddingLeft: 24,
    fontSize: 24,
    lineHeight: 60,
    height: 60 // default height
  }
};

exports.default = TextInput;
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tilePicker = __webpack_require__(78);

var _tilePicker2 = _interopRequireDefault(_tilePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PickerDemo = function (_Component) {
  _inherits(PickerDemo, _Component);

  function PickerDemo() {
    _classCallCheck(this, PickerDemo);

    return _possibleConstructorReturn(this, (PickerDemo.__proto__ || Object.getPrototypeOf(PickerDemo)).apply(this, arguments));
  }

  _createClass(PickerDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Date'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tilePicker2.default, { type: 'date',
            selectedValue: '2000-01-01',
            minimumDate: '2000-01-01',
            maximumDate: '2001-01-01',
            onDateChange: function onDateChange(date) {
              console.log('组件date', date);
            },
            style: {
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#CCC',
              width: 500,
              padding: 10
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Time'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tilePicker2.default, { type: 'time',
            selectedValue: '10:10',
            style: {
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#CCC',
              width: 500,
              padding: 10
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Select'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tilePicker2.default,
            {
              type: 'select',
              style: {
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: '#CCC',
                width: 500,
                padding: 10
              },
              selectedValue: '女',
              onValueChange: function onValueChange(index, item) {
                console.log('Picker', index, item);
              } },
            (0, _rax.createElement)(_tilePicker2.default.Item, { value: '男', label: '男' }),
            (0, _rax.createElement)(_tilePicker2.default.Item, { value: '女', label: '女' })
          )
        )
      );
    }
  }]);

  return PickerDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  }
};

exports.default = PickerDemo;
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxPicker = __webpack_require__(79);

var _raxPicker2 = _interopRequireDefault(_raxPicker);

var _raxDatepicker = __webpack_require__(80);

var _raxDatepicker2 = _interopRequireDefault(_raxDatepicker);

var _raxTimepicker = __webpack_require__(81);

var _raxTimepicker2 = _interopRequireDefault(_raxTimepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOBCPicker = function () {
  function TOBCPicker() {
    _classCallCheck(this, TOBCPicker);
  }

  _createClass(TOBCPicker, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var type = props.type;
      switch (type) {
        case 'date':
          return (0, _rax.createElement)(_raxDatepicker2.default, props);
        case 'time':
          return (0, _rax.createElement)(_raxTimepicker2.default, props);
        case 'select':
        default:
          return (0, _rax.createElement)(_raxPicker2.default, props);
      }
    }
  }]);

  return TOBCPicker;
}();

TOBCPicker.Item = _raxPicker2.default.Item;

exports.default = TOBCPicker;
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = function (_Component) {
  _inherits(Picker, _Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

    _initialiseProps.call(_this);

    var pickerData = _this.getPickerData();
    return _this;
  }

  _createClass(Picker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selectedValue = this.props.selectedValue;

      var pickerData = this.getPickerData();
      var selectedLabel = this.getPickerLableByValue(selectedValue, pickerData);

      var style = _extends({}, styles.initial, this.props.style);
      var textStyle = {
        color: style.color,
        fontSize: style.fontSize,
        fontStyle: style.fontStyle,
        fontWeight: style.fontWeight,
        textAlign: style.textAlign,
        textDecoration: style.textDecoration,
        textOverflow: style.textOverflow,
        lineHeight: style.lineHeight
      };

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          _extends({}, this.props, { onPress: this.handlePress, style: style }),
          (0, _rax.createElement)(
            _raxText2.default,
            { style: textStyle },
            selectedLabel
          )
        );
      } else {
        var _pickerData = this.getPickerData();
        return (0, _rax.createElement)(
          'select',
          { style: style, onChange: function onChange(e) {
              _this2.handlePress(e.target.options.selectedIndex);
            } },
          _pickerData.items.map(function (item, index) {
            if (index == _pickerData.selectIndex) {
              return (0, _rax.createElement)(
                'option',
                { selected: 'selected', value: item.value },
                item.label
              );
            } else {
              return (0, _rax.createElement)(
                'option',
                { value: item.value },
                item.label
              );
            }
          })
        );
      }
    }
  }]);

  return Picker;
}(_rax.Component);

Picker.propTypes = {};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.getPickerData = function () {
    var _props = _this4.props,
        children = _props.children,
        selectedValue = _props.selectedValue;

    var pickerItems = [],
        pickerLabelList = [],
        items = [],
        selectIndex = 0,
        selectedLabel = void 0;

    if (children.length) {
      pickerItems = children;
    } else {
      pickerItems = [children];
    }

    pickerLabelList = pickerItems.map(function (item, index) {
      var _item$props = item.props,
          value = _item$props.value,
          label = _item$props.label,
          color = _item$props.color;

      items.push({
        value: value,
        label: label || value
      });
      if (value == selectedValue) {
        selectIndex = index;
        selectedLabel = label;
      }
      return label;
    });

    return {
      selectIndex: selectIndex,
      selectedLabel: selectedLabel,
      pickerLabelList: pickerLabelList,
      items: items
    };
  };

  this.getPickerDataByIndex = function (index, pickerData) {
    return {
      value: pickerData.items[index].value,
      label: pickerData.items[index].label
    };
  };

  this.getPickerLableByValue = function (value, pickerData) {
    var label = '';
    for (var i = 0; i < pickerData.items.length; i++) {
      if (pickerData.items[i].value == value) {
        label = pickerData.items[i].label;
      }
    }
    return label;
  };

  this.handlePress = function (webIndex) {
    var _props2 = _this4.props,
        onValueChange = _props2.onValueChange,
        selectedValue = _props2.selectedValue;


    if (_universalEnv.isWeex) {
      var picker = __webpack_require__(26);
      var pickerData = _this4.getPickerData();
      picker.pick({
        index: pickerData.selectIndex,
        items: pickerData.pickerLabelList
      }, function (event) {
        if (event.result === 'success') {
          var _getPickerDataByIndex = _this4.getPickerDataByIndex(event.data, pickerData),
              value = _getPickerDataByIndex.value,
              label = _getPickerDataByIndex.label;

          onValueChange && onValueChange(value, pickerData.items);
        }
      });
    } else {
      var _pickerData2 = _this4.getPickerData();

      var _getPickerDataByIndex2 = _this4.getPickerDataByIndex(webIndex, _pickerData2),
          value = _getPickerDataByIndex2.value;

      onValueChange && onValueChange(value, _pickerData2.items);
    }
  };
};

var Item = function (_Component2) {
  _inherits(Item, _Component2);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Item;
}(_rax.Component);

;

Picker.Item = Item;

var styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

exports.default = Picker;
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.handlePress = function () {
      if (_universalEnv.isWeex) {
        var _this$props = _this.props,
            onDateChange = _this$props.onDateChange,
            selectedValue = _this$props.selectedValue,
            minimumDate = _this$props.minimumDate,
            maximumDate = _this$props.maximumDate;

        var picker = __webpack_require__(26);

        picker.pickDate({
          value: selectedValue,
          max: maximumDate,
          min: minimumDate
        }, function (event) {
          if (event.result === 'success') {
            onDateChange && onDateChange(event.data);
          }
        });
      }
    };

    return _this;
  }

  _createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedValue = _props.selectedValue,
          minimumDate = _props.minimumDate,
          maximumDate = _props.maximumDate,
          onDateChange = _props.onDateChange,
          style = _props.style;


      var touchableStyle = _extends({}, styles.initial, style);
      var textStyle = {
        color: touchableStyle.color,
        fontSize: touchableStyle.fontSize,
        fontStyle: touchableStyle.fontStyle,
        fontWeight: touchableStyle.fontWeight,
        textAlign: touchableStyle.textAlign,
        textDecoration: touchableStyle.textDecoration,
        textOverflow: touchableStyle.textOverflow,
        lineHeight: touchableStyle.lineHeight
      };

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          _extends({}, this.props, { onPress: this.handlePress, style: touchableStyle }),
          (0, _rax.createElement)(
            _raxText2.default,
            { style: textStyle },
            selectedValue
          )
        );
      } else {
        return (0, _rax.createElement)('input', {
          type: 'date',
          value: selectedValue,
          defaultValue: selectedValue,
          min: minimumDate,
          max: maximumDate,
          onChange: function onChange(e) {
            onDateChange && onDateChange(e.target.value);
          },
          style: style });
      }
    }
  }]);

  return DatePicker;
}(_rax.Component);

var styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

exports.default = DatePicker;
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePicker = function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    _this.handlePress = function () {
      if (_universalEnv.isWeex) {
        var _this$props = _this.props,
            onTimeChange = _this$props.onTimeChange,
            selectedValue = _this$props.selectedValue;

        var picker = __webpack_require__(26);

        picker.pickTime({
          value: selectedValue
        }, function (event) {
          if (event.result === 'success') {
            onTimeChange && onTimeChange(event.data);
          }
        });
      }
    };

    return _this;
  }

  _createClass(TimePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedValue = _props.selectedValue,
          onTimeChange = _props.onTimeChange,
          style = _props.style;


      var touchableStyle = _extends({}, styles.initial, style);
      var textStyle = {
        color: touchableStyle.color,
        fontSize: touchableStyle.fontSize,
        fontStyle: touchableStyle.fontStyle,
        fontWeight: touchableStyle.fontWeight,
        textAlign: touchableStyle.textAlign,
        textDecoration: touchableStyle.textDecoration,
        textOverflow: touchableStyle.textOverflow,
        lineHeight: touchableStyle.lineHeight
      };

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          _raxTouchable2.default,
          _extends({}, this.props, { onPress: this.handlePress, style: touchableStyle }),
          (0, _rax.createElement)(
            _raxText2.default,
            { style: textStyle },
            selectedValue
          )
        );
      } else {
        return (0, _rax.createElement)('input', {
          type: 'time',
          value: selectedValue,
          onChange: function onChange(e) {
            onTimeChange && onTimeChange(e.target.value);
          },
          style: style });
      }
    }
  }]);

  return TimePicker;
}(_rax.Component);

TimePicker.propTypes = {};


var styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

exports.default = TimePicker;
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextDemo = function (_Component) {
  _inherits(TextDemo, _Component);

  function TextDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextDemo.__proto__ || Object.getPrototypeOf(TextDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      timesPressed: 0
    }, _this.textOnPress = function () {
      _this.setState({
        timesPressed: _this.state.timesPressed + 1
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextDemo, [{
    key: 'render',
    value: function render() {
      var textLog = '';
      if (this.state.timesPressed >= 1) {
        textLog = this.state.timesPressed + 'x text onPress';
      } else if (this.state.timesPressed >= 0) {
        textLog = '0 text onPress';
      }

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6DF7\u6392\u6548\u679C'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: _extends({}, styles.container, {
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }) },
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            '\u6587\u5B57'
          ),
          (0, _rax.createElement)(
            _tileText2.default,
            { style: {
                color: '#3f51b5'
              } },
            '\u6DF7\u6392'
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u8FC7\u957F\u622A\u65AD'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            { numberOfLines: 1, style: {
                width: 400,
                textOverflow: 'ellipsis'
              } },
            'ellipsis: \u8D85\u51FA\u88AB\u622A\u65AD\u7684\u6587\u672C'
          )
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            { numberOfLines: 2, style: {
                width: 400,
                textOverflow: 'ellipsis'
              } },
            '2 \u884C\uFF0C\u8D85\u51FA\u88AB\u622A\u65AD\u7684\u6587\u672C\uFF0C\u8D85\u51FA\u88AB\u622A\u65AD\u7684\u6587\u672C\uFF0C\u8D85\u51FA\u88AB\u622A\u65AD\u7684\u6587\u672C\uFF0C\u8D85\u51FA\u88AB\u622A\u65AD\u7684\u6587\u672C'
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6309\u538B/\u70B9\u51FB'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            {
              style: styles.textBlock,
              onPress: this.textOnPress },
            '\u5185\u7F6E onPress \u4E8B\u4EF6\u5904\u7406 <---\u70B9\u51FB'
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { style: styles.logBox },
            (0, _rax.createElement)(
              _tileText2.default,
              null,
              textLog
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6587\u672C\u88C5\u9970'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            { style: { textDecoration: 'underline' } },
            'Solid underline'
          ),
          (0, _rax.createElement)(
            _tileText2.default,
            { style: { textDecorationLine: 'none' } },
            'None textDecoration'
          ),
          (0, _rax.createElement)(
            _tileText2.default,
            { style: { textDecoration: 'line-through' } },
            'Solid line-through'
          )
        )
      );
    }
  }]);

  return TextDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  textBlock: {
    fontWeight: '500',
    color: '#3f51b5'
  },
  title: {
    color: '#F60',
    padding: 20
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
};

exports.default = TextDemo;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileButton = __webpack_require__(17);

var _tileButton2 = _interopRequireDefault(_tileButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonDemo = function (_Component) {
  _inherits(ButtonDemo, _Component);

  function ButtonDemo() {
    _classCallCheck(this, ButtonDemo);

    return _possibleConstructorReturn(this, (ButtonDemo.__proto__ || Object.getPrototypeOf(ButtonDemo)).apply(this, arguments));
  }

  _createClass(ButtonDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6309\u94AE\u5F62\u6001'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileButton2.default,
            { style: { color: '#3F51B5' } },
            '\u6587\u672C\u6309\u94AE'
          )
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#3F51B5',
                  borderRadius: 10,
                  padding: 16
                } },
              (0, _rax.createElement)(_tileImage2.default, { style: { width: 40, height: 40, marginRight: 6 }, source: { uri: 'https://img.alicdn.com/tfs/TB1yfCXSVXXXXX6aXXXXXXXXXXX-50-48.png' } }),
              (0, _rax.createElement)(_tileImage2.default, { style: { width: 40, height: 40, marginRight: 6 }, source: { uri: 'https://img.alicdn.com/tfs/TB1yfCXSVXXXXX6aXXXXXXXXXXX-50-48.png' } }),
              (0, _rax.createElement)(_tileImage2.default, { style: { width: 40, height: 40, marginRight: 6 }, source: { uri: 'https://img.alicdn.com/tfs/TB1yfCXSVXXXXX6aXXXXXXXXXXX-50-48.png' } })
            )
          )
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#3F51B5',
                  borderRadius: 10,
                  padding: 16
                } },
              (0, _rax.createElement)(_tileImage2.default, { style: { width: 40, height: 40, marginRight: 6 }, source: { uri: 'https://img.alicdn.com/tfs/TB1yfCXSVXXXXX6aXXXXXXXXXXX-50-48.png' } }),
              (0, _rax.createElement)(
                _tileText2.default,
                { style: { color: '#3F51B5', marginLeft: 10 } },
                '\u56FE\u6587\u6309\u94AE'
              )
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6837\u5F0F\u63A7\u5236'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: [styles.container] },
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  width: 100,
                  height: 40,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#3F51B5',
                  borderRadius: 6,
                  marginBottom: 20,
                  padding: 12
                } },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: { color: '#3F51B5', fontSize: 24 } },
                '\u5C0F\u5C3A\u5BF8'
              )
            )
          ),
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  width: 300,
                  height: 70,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#3F51B5',
                  borderRadius: 10,
                  marginBottom: 20,
                  padding: 16
                } },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: { color: '#3F51B5', marginLeft: 10 } },
                '\u4E2D\u5C3A\u5BF8'
              )
            )
          ),
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  width: 670,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#3F51B5',
                  borderRadius: 10,
                  padding: 16
                } },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: { color: '#3F51B5', marginLeft: 10 } },
                '\u5927\u5C3A\u5BF8'
              )
            )
          ),
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  width: 670,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#6d7bc7',
                  borderRadius: 10,
                  marginTop: 20,
                  padding: 16
                } },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: { color: '#FFF', marginLeft: 10 } },
                '\u6709\u5E95\u8272'
              )
            )
          ),
          (0, _rax.createElement)(
            _tileButton2.default,
            null,
            (0, _rax.createElement)(
              _tileView2.default,
              { style: {
                  width: 670,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#F60',
                  backgroundColor: '#F60',
                  borderRadius: 10,
                  marginTop: 20,
                  padding: 16
                } },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: { color: '#FFF', marginLeft: 10 } },
                '\u6362\u989C\u8272'
              )
            )
          )
        )
      );
    }
  }]);

  return ButtonDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
};

exports.default = ButtonDemo;
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileInput = __webpack_require__(25);

var _tileInput2 = _interopRequireDefault(_tileInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchDemo = function (_Component) {
  _inherits(SwitchDemo, _Component);

  function SwitchDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SwitchDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwitchDemo.__proto__ || Object.getPrototypeOf(SwitchDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      eventSwitchIsOn: false,
      eventSwitchRegressionIsOn: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SwitchDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        { style: styles.container },
        (0, _rax.createElement)(_tileInput2.default, { type: 'switch', onValueChange: function onValueChange(value) {
            _this2.setState({ eventSwitchIsOn: value });
          },
          style: { marginBottom: 10 },
          value: this.state.eventSwitchIsOn }),
        (0, _rax.createElement)(
          _tileText2.default,
          null,
          this.state.eventSwitchIsOn ? 'On' : 'Off'
        ),
        (0, _rax.createElement)(_tileInput2.default, { type: 'switch',
          onValueChange: function onValueChange(value) {
            return _this2.setState({ eventSwitchRegressionIsOn: value });
          },
          style: { marginBottom: 10 },
          value: this.state.eventSwitchRegressionIsOn }),
        (0, _rax.createElement)(
          _tileText2.default,
          null,
          this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'
        )
      );
    }
  }]);

  return SwitchDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  }
};

exports.default = SwitchDemo;
module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileListview = __webpack_require__(86);

var _tileListview2 = _interopRequireDefault(_tileListview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listData = [{ name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }, { name1: 'Item' }];
// 将 item 定义成组件

var ListViewDemo = function (_Component) {
  _inherits(ListViewDemo, _Component);

  function ListViewDemo(props) {
    _classCallCheck(this, ListViewDemo);

    var _this = _possibleConstructorReturn(this, (ListViewDemo.__proto__ || Object.getPrototypeOf(ListViewDemo)).call(this, props));

    _this.listHeader = function () {
      return (0, _rax.createElement)(
        _tileView2.default,
        { style: [styles.header, { margin: 0, padding: '20px 0', marginBotItem: 10, alignItems: 'center' }] },
        (0, _rax.createElement)(
          _tileText2.default,
          { style: [styles.text, { color: '#333' }] },
          'Header'
        )
      );
    };

    _this.listLoading = function () {
      var text = _this.state.index < 2 ? 'loading...' : '- END -';
      return (0, _rax.createElement)(
        _tileView2.default,
        { style: styles.loading },
        (0, _rax.createElement)(
          _tileText2.default,
          { style: [styles.text, { color: '#333' }] },
          text
        )
      );
    };

    _this.listItem = function (item, index) {
      if (index % 2 == 0) {
        return (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.item1 },
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.text },
            item.name1
          )
        );
      } else {
        return (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.item2 },
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.text },
            item.name1
          )
        );
      }
    };

    _this.handleLoadMore = function () {
      setTimeout(function () {
        _this.state.index++;
        if (_this.state.index < 3) {
          _this.state.data.push({ name1: 'loadmore 2' }, { name1: 'loadmore 3' }, { name1: 'loadmore 4' }, { name1: 'loadmore 5' }, { name1: 'loadmore 2' }, { name1: 'loadmore 3' }, { name1: 'loadmore 4' }, { name1: 'loadmore 5' });
        }
        _this.setState(_this.state);
      }, 1000);
    };

    _this.state = {
      index: 0,
      data: listData
    };
    return _this;
  }

  _createClass(ListViewDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'ListView - Load more'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.sticky },
            'Sticky Element'
          ),
          (0, _rax.createElement)(_tileListview2.default, {
            style: {
              height: 500
            },
            renderHeader: this.listHeader,
            renderFooter: this.listLoading,
            renderRow: this.listItem,
            dataSource: this.state.data,
            onEndReached: this.handleLoadMore
          })
        )
      );
    }
  }]);

  return ListViewDemo;
}(_rax.Component);

;

var styles = {
  container: {
    marginLeft: 40,
    border: '1px solid #CCC',
    marginRight: 40,
    marginBotItem: 10
  },
  sticky: {
    color: '#FFF',
    padding: 20,
    backgroundColor: '#CCC'
  },
  title: {
    color: '#F60',
    padding: 20
  },
  header: {
    margin: 50
  },
  text: (_text = {
    fontSize: 28,
    color: '#000000'
  }, _defineProperty(_text, 'fontSize', 28), _defineProperty(_text, 'padding', 40), _defineProperty(_text, 'color', "#FFF"), _text),
  item1: {
    height: 110,
    backgroundColor: '#3F51B5',
    marginBotItem: 3,
    alignItems: 'center'
  },
  item2: {
    height: 110,
    backgroundColor: '#b9bfe4',
    marginBotItem: 3,
    alignItems: 'center'
  },
  loading: {
    padding: 50,
    textAlign: 'center'
  }
};

exports.default = ListViewDemo;
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxListview = __webpack_require__(87);

var _raxListview2 = _interopRequireDefault(_raxListview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxListview2.default;
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxRecyclerview = __webpack_require__(31);

var _raxRecyclerview2 = _interopRequireDefault(_raxRecyclerview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SCROLLVIEW_REF = 'scrollview';

var ListView = function (_Component) {
  _inherits(ListView, _Component);

  function ListView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this), _this.scrollTo = function (options) {
      if (_this.refs[SCROLLVIEW_REF]) {
        _this.refs[SCROLLVIEW_REF].scrollTo(options);
      }
    }, _this.resetScroll = function () {
      if (_this.refs[SCROLLVIEW_REF]) {
        _this.refs[SCROLLVIEW_REF].resetScroll();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          renderScrollComponent = _props.renderScrollComponent,
          renderHeader = _props.renderHeader,
          renderFooter = _props.renderFooter,
          renderRow = _props.renderRow,
          dataSource = _props.dataSource;


      var header = typeof renderHeader == 'function' ? renderHeader() : null;
      var footer = typeof renderFooter == 'function' ? renderFooter() : null;
      var body = dataSource.map(function (i, index) {
        return renderRow(i, index);
      });

      var props = _extends({}, this.props, {
        ref: SCROLLVIEW_REF,
        children: [].concat(header, body, footer),
        _autoWrapCell: true
      });

      return renderScrollComponent(props);
    }
  }]);

  return ListView;
}(_rax.Component);

ListView.propTypes = {};
ListView.defaultProps = {
  renderScrollComponent: function renderScrollComponent(props) {
    return (0, _rax.createElement)(_raxRecyclerview2.default, props);
  },
  dataSource: []
};
exports.default = ListView;
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileRecyclerview = __webpack_require__(30);

var _tileRecyclerview2 = _interopRequireDefault(_tileRecyclerview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumb = function (_Component) {
  _inherits(Thumb, _Component);

  function Thumb() {
    _classCallCheck(this, Thumb);

    return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
  }

  _createClass(Thumb, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileRecyclerview2.default.Cell,
        null,
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.button },
          (0, _rax.createElement)(_tileView2.default, { style: styles.box })
        )
      );
    }
  }]);

  return Thumb;
}(_rax.Component);

var Row = function (_Component2) {
  _inherits(Row, _Component2);

  function Row() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleClick = function (e) {
      _this2.props.onClick(_this2.props.data);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        { onClick: this.handleClick },
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.row },
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.text },
            this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'
          )
        )
      );
    }
  }]);

  return Row;
}(_rax.Component);

var THUMBS = [];
for (var i = 0; i < 20; i++) {
  THUMBS.push(i);
}var createThumbRow = function createThumbRow(val, i) {
  return (0, _rax.createElement)(Thumb, { key: i });
};

var RecyclerViewDemo = function (_Component3) {
  _inherits(RecyclerViewDemo, _Component3);

  function RecyclerViewDemo() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, RecyclerViewDemo);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = RecyclerViewDemo.__proto__ || Object.getPrototypeOf(RecyclerViewDemo)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      horizontalScrollViewEventLog: false,
      scrollViewEventLog: false
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(RecyclerViewDemo, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'RecyclerView'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileRecyclerview2.default,
            {
              ref: function ref(scrollView) {
                _this4.scrollView = scrollView;
              },
              style: {
                height: 500
              },
              onEndReached: function onEndReached() {
                return _this4.setState({ scrollViewEventLog: true });
              }
            },
            (0, _rax.createElement)(
              _tileRecyclerview2.default.Header,
              null,
              (0, _rax.createElement)(
                _tileView2.default,
                { style: styles.sticky },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: {
                      fontSize: 24
                    } },
                  'Sticky \u90E8\u5206\u9700\u8981\u653E\u5728 RecyclerView.Header \u4E2D'
                )
              )
            ),
            THUMBS.map(createThumbRow)
          ),
          (0, _rax.createElement)(
            _tileView2.default,
            { clickable: true,
              style: { justifyContent: 'center', alignItems: 'center' },
              onPress: function onPress() {
                return _this4.scrollView.scrollTo({ y: 0 });
              } },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: {
                  color: '#333',
                  backgroundColor: '#EBEBEB', borderRadius: 8, height: 60, lineHeight: 60,
                  paddingLeft: 40,
                  paddingRight: 40,
                  marginTop: 20
                } },
              ' \u2191 \u6EDA '
            )
          )
        )
      );
    }
  }]);

  return RecyclerViewDemo;
}(_rax.Component);

var styles = {
  sticky: {
    position: 'sticky',
    width: 750,
    padding: 20,
    backgroundColor: '#cccccc'
  },
  title: {
    color: '#F60',
    padding: 20
  },
  container: {
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 40,
    paddingBottom: 10
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3
  },
  box: {
    width: 64,
    height: 64
  },
  eventLogBox: {
    padding: 10,
    margin: 10,
    height: 80,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  },
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    margin: 5
  },
  text: {
    alignSelf: 'center',
    color: 'black'
  },
  refreshView: {
    height: 80,
    width: 750,
    justifyContent: 'center',
    alignItems: 'center'
  },
  refreshArrow: {
    fontSize: 30,
    color: '#45b5f0'
  }
};

exports.default = RecyclerViewDemo;
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileWaterfall = __webpack_require__(90);

var _tileWaterfall2 = _interopRequireDefault(_tileWaterfall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dataSource = [{
  height: 550,
  item: {}
}, {
  height: 624,
  item: {}
}, {
  height: 708,
  item: {}
}, {
  height: 600,
  item: {}
}, {
  height: 300,
  item: {}
}, {
  height: 100,
  item: {}
}, {
  height: 400,
  item: {}
}, {
  height: 550,
  item: {}
}, {
  height: 624,
  item: {}
}, {
  height: 708,
  item: {}
}, {
  height: 600,
  item: {}
}, {
  height: 300,
  item: {}
}, {
  height: 100,
  item: {}
}, {
  height: 400,
  item: {}
}];

var WaterfallDemo = function (_Component) {
  _inherits(WaterfallDemo, _Component);

  function WaterfallDemo(props) {
    _classCallCheck(this, WaterfallDemo);

    var _this = _possibleConstructorReturn(this, (WaterfallDemo.__proto__ || Object.getPrototypeOf(WaterfallDemo)).call(this, props));

    _this.loadMore = function () {
      setTimeout(function () {
        _this.setState({
          dataSource: _this.state.dataSource.concat(dataSource)
        });
      }, 400);
    };

    _this.state = {
      dataSource: dataSource
    };
    return _this;
  }

  _createClass(WaterfallDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.title },
          '\u7011\u5E03\u6D41'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileWaterfall2.default, {
            style: {
              height: 500,
              width: 660
            },
            columnWidth: 150,
            columnCount: 4,
            columnGap: 20,
            dataSource: this.state.dataSource,
            onEndReached: this.loadMore,
            renderHeader: function renderHeader() {
              return [(0, _rax.createElement)(
                _tileView2.default,
                { key: '1', style: [styles.view, { height: 200, backgroundColor: '#3F51B5', marginBottom: 20 }] },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: styles.text },
                  'Header'
                )
              )];
            },
            renderFooter: function renderFooter() {
              return (0, _rax.createElement)(
                _tileView2.default,
                null,
                (0, _rax.createElement)(
                  _tileView2.default,
                  { key: '3', style: [styles.view, { height: 100, backgroundColor: '#EEE', marginTop: 20 }] },
                  (0, _rax.createElement)(
                    _tileText2.default,
                    { style: [styles.text, { color: '#333' }] },
                    'Loading...'
                  )
                ),
                (0, _rax.createElement)(
                  _tileView2.default,
                  { key: '4', style: [styles.view, { height: 200, backgroundColor: '#3F51B5' }] },
                  (0, _rax.createElement)(
                    _tileText2.default,
                    { style: styles.text },
                    'Footer'
                  )
                )
              );
            },
            renderItem: function renderItem(item, index) {
              return (0, _rax.createElement)(
                _tileView2.default,
                { style: [styles.view, { height: item.height, backgroundColor: '#8691d0', marginBottom: 20 }] },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: styles.text },
                  index
                )
              );
            }
          })
        )
      );
    }
  }]);

  return WaterfallDemo;
}(_rax.Component);

var styles = {
  container: {
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 32
  }
};

exports.default = WaterfallDemo;
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxWaterfall = __webpack_require__(91);

var _raxWaterfall2 = _interopRequireDefault(_raxWaterfall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxWaterfall2.default;
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxScrollview = __webpack_require__(23);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _raxRefreshcontrol = __webpack_require__(13);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)('header', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Header;
}(_rax.PureComponent);

var WebFall = function (_PureComponent2) {
  _inherits(WebFall, _PureComponent2);

  function WebFall() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, WebFall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = WebFall.__proto__ || Object.getPrototypeOf(WebFall)).call.apply(_ref, [this].concat(args))), _this2), _this2.calcHeightSum = function (arr) {
      var sum = 0;
      arr && arr.forEach(function (item) {
        sum += item;
      });
      return sum;
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(WebFall, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$renderItem = _props.renderItem,
          renderItem = _props$renderItem === undefined ? function () {} : _props$renderItem,
          dataSource = _props.dataSource,
          _props$columnCount = _props.columnCount,
          columnCount = _props$columnCount === undefined ? 1 : _props$columnCount;

      var columns = [];
      var moduleHeights = [];

      for (var i = 0; i < columnCount; i++) {
        columns[i] = [];
        moduleHeights[i] = 0;
      }

      dataSource && dataSource.forEach(function (item, i) {
        var targetColumnIndex = 0;
        var minHeight = moduleHeights[0];

        for (var j = 0; j < columnCount; j++) {
          if (moduleHeights[j] < minHeight) {
            minHeight = moduleHeights[j];
            targetColumnIndex = j;
          }
        }

        moduleHeights[targetColumnIndex] += item.height;
        columns[targetColumnIndex].push(item);
      });

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.waterfallWrap },
        columns.map(function (column, index) {
          return (0, _rax.createElement)(
            _raxView2.default,
            { key: 'column' + index, style: styles.waterfallColumn },
            column.map(function (item, j) {
              return renderItem(item, 'c_' + index + j);
            })
          );
        })
      );
    }
  }]);

  return WebFall;
}(_rax.PureComponent);

var Waterfall = function (_Component) {
  _inherits(Waterfall, _Component);

  function Waterfall(props) {
    _classCallCheck(this, Waterfall);

    var _this3 = _possibleConstructorReturn(this, (Waterfall.__proto__ || Object.getPrototypeOf(Waterfall)).call(this, props));

    _this3.loadmoreretry = 1;

    _this3.resetScroll = function () {
      if (_universalEnv.isWeex) {
        _this3.setState({
          loadmoreretry: _this3.loadmoreretry++
        });
      } else {
        _this3.refs.scrollview.resetScroll();
      }
    };

    _this3.state = {
      loadmoreretry: 0
    };
    return _this3;
  }

  _createClass(Waterfall, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var renderHeader = props.renderHeader,
          renderFooter = props.renderFooter,
          _props$columnWidth = props.columnWidth,
          columnWidth = _props$columnWidth === undefined ? 750 : _props$columnWidth,
          _props$columnCount2 = props.columnCount,
          columnCount = _props$columnCount2 === undefined ? 1 : _props$columnCount2,
          _props$columnGap = props.columnGap,
          columnGap = _props$columnGap === undefined ? 0 : _props$columnGap,
          dataSource = props.dataSource,
          _props$renderItem2 = props.renderItem,
          renderItem = _props$renderItem2 === undefined ? function () {} : _props$renderItem2;


      var header = typeof renderHeader == 'function' ? renderHeader() : null;
      var footer = typeof renderFooter == 'function' ? renderFooter() : null;
      header = Array.isArray(header) ? header : [header];
      footer = Array.isArray(footer) ? footer : [footer];

      var cells = header.map(function (child, index) {
        if (child) {
          if (child.type != _raxRefreshcontrol2.default) {
            return (0, _rax.createElement)(
              Header,
              null,
              child
            );
          } else {
            return (0, _rax.cloneElement)(child, {});
          }
        }
      });

      if (_universalEnv.isWeex) {
        dataSource && dataSource.forEach(function (item, index) {
          cells.push((0, _rax.createElement)(
            'cell',
            null,
            renderItem(item, index)
          ));
        });
      } else {
        cells = cells.concat((0, _rax.createElement)(WebFall, props));
      }

      cells = cells.concat(footer.map(function (child, index) {
        if (child) {
          return (0, _rax.createElement)(
            Header,
            null,
            child
          );
        }
      }));

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)(
          'waterfall',
          _extends({
            style: { width: 750 }
          }, props, {
            onLoadmore: props.onEndReached,
            loadmoreoffset: props.onEndReachedThreshold,
            loadmoreretry: this.state.loadmoreretry
          }),
          cells
        );
      } else {
        styles.waterfallColumn.width = columnWidth;
        return (0, _rax.createElement)(
          _raxScrollview2.default,
          _extends({}, props, { ref: 'scrollview' }),
          cells
        );
      }
    }
  }]);

  return Waterfall;
}(_rax.Component);

var styles = {
  waterfallWrap: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  waterfallColumn: {}
};

exports.default = Waterfall;
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileLink = __webpack_require__(12);

var _tileLink2 = _interopRequireDefault(_tileLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkDemo = function (_Component) {
  _inherits(LinkDemo, _Component);

  function LinkDemo() {
    _classCallCheck(this, LinkDemo);

    return _possibleConstructorReturn(this, (LinkDemo.__proto__ || Object.getPrototypeOf(LinkDemo)).apply(this, arguments));
  }

  _createClass(LinkDemo, [{
    key: 'render',
    value: function render() {

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6587\u5B57\u94FE\u63A5'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileLink2.default,
            { onPress: this.handlePress1, href: 'https://github.com/' },
            '\u94FE\u63A5\u5230 Github'
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u56FE\u7247\u94FE\u63A5'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileLink2.default,
            { onPress: this.handlePress2, href: 'https://github.com/' },
            (0, _rax.createElement)(_tileImage2.default, { style: { width: 142, height: 135 }, source: { uri: 'https://img.alicdn.com/tfs/TB18TmKSVXXXXbLXXXXXXXXXXXX-142-135.png' } })
          )
        )
      );
    }
  }]);

  return LinkDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
};

exports.default = LinkDemo;
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileCalendar = __webpack_require__(94);

var _tileCalendar2 = _interopRequireDefault(_tileCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarDemo = function (_Component) {
  _inherits(CalendarDemo, _Component);

  function CalendarDemo(props) {
    _classCallCheck(this, CalendarDemo);

    var _this = _possibleConstructorReturn(this, (CalendarDemo.__proto__ || Object.getPrototypeOf(CalendarDemo)).call(this, props));

    _this.state = {
      selectedDate: '2017-03-15'
    };
    return _this;
  }

  _createClass(CalendarDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Calendar'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileCalendar2.default, {
            ref: 'calendar',
            eventDates: ['2017-02-06', '2017-02-07', '2017-03-09'],
            startDate: '2017-02-01',
            endDate: '2017-05-20',
            titleFormat: 'YYYY年MM月',
            prevButtonText: '上一月',
            nextButtonText: '下一月',
            weekStart: 0,
            onDateSelect: function onDateSelect(date) {
              return _this2.setState({ selectedDate: date });
            },
            onTouchPrev: function onTouchPrev() {
              return console.log('Back TOUCH');
            },
            onTouchNext: function onTouchNext() {
              return console.log('Forward TOUCH');
            }
          }),
          (0, _rax.createElement)(
            _tileText2.default,
            { style: styles.date },
            '\u9009\u4E2D\u65E5\u671F: ',
            this.state.selectedDate
          )
        )
      );
    }
  }]);

  return CalendarDemo;
}(_rax.Component);

var styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  date: {
    padding: 20
  }
};

exports.default = CalendarDemo;
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxCalendar = __webpack_require__(95);

var _raxCalendar2 = _interopRequireDefault(_raxCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxCalendar2.default;
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _Day = __webpack_require__(96);

var _Day2 = _interopRequireDefault(_Day);

var _moment = __webpack_require__(97);

var _moment2 = _interopRequireDefault(_moment);

var _styles = __webpack_require__(33);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEVICE_WIDTH = 750;
var VIEW_INDEX = 2;

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMonthMoment: (0, _moment2.default)(_this.props.selectedDate || _this.props.startDate || _this.props.endDate || _this.props.today),
      selectedMoment: (0, _moment2.default)(_this.props.selectedDate)
    }, _this.onPrev = function () {
      var newMoment = (0, _moment2.default)(_this.state.currentMonthMoment).addMonth(-1);
      _this.setState({ currentMonthMoment: newMoment });
      _this.props.onTouchPrev && _this.props.onTouchPrev(newMoment);
    }, _this.onNext = function () {
      var newMoment = (0, _moment2.default)(_this.state.currentMonthMoment).addMonth(1);
      _this.setState({ currentMonthMoment: newMoment });
      _this.props.onTouchNext && _this.props.onTouchNext(newMoment);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'getMonthStack',
    value: function getMonthStack(currentMonth) {
      return [(0, _moment2.default)(currentMonth)];
    }
  }, {
    key: 'prepareEventDates',
    value: function prepareEventDates(eventDates) {
      var parsedDates = {};

      eventDates.forEach(function (event) {
        var date = (0, _moment2.default)(event);
        var month = (0, _moment2.default)(date).startOfMonth().format();
        if (!parsedDates[month]) {
          parsedDates[month] = {};
        }
        parsedDates[month][date.date() - 1] = true;
      });
      return parsedDates;
    }
  }, {
    key: 'selectDate',
    value: function selectDate(date) {
      this.setState({ selectedMoment: date });
      this.props.onDateSelect && this.props.onDateSelect(date.format(this.props.dateFormat));
    }
  }, {
    key: 'renderMonthView',
    value: function renderMonthView(argMoment, eventDatesMap) {
      var _this2 = this;

      var renderIndex = 0,
          weekRows = [],
          days = [],
          startOfArgMonthMoment = argMoment.startOfMonth();

      var selectedMoment = (0, _moment2.default)(this.state.selectedMoment),
          weekStart = this.props.weekStart,
          todayMoment = (0, _moment2.default)(this.props.today),
          todayIndex = todayMoment.date() - 1,
          argMonthDaysCount = argMoment.daysInMonth(),
          offset = (startOfArgMonthMoment.isoWeekday() - weekStart + 7) % 7,
          argMonthIsToday = argMoment.isSameMonth(todayMoment),
          selectedIndex = (0, _moment2.default)(selectedMoment).date() - 1,
          selectedMonthIsArg = selectedMoment.isSameMonth(argMoment),
          startMoment = this.props.startDate && (0, _moment2.default)(this.props.startDate),
          endMoment = this.props.endDate && (0, _moment2.default)(this.props.endDate);

      var events = eventDatesMap !== null ? eventDatesMap[argMoment.startOfMonth().format()] : null;

      if (!argMoment.isValid()) {
        console.error('[currentMonthMoment] is not valid, make sure [selectedDate startDate endDate today] are valid date');
        return null;
      }

      var _loop = function _loop() {
        var dayIndex = renderIndex - offset;
        var isoWeekday = (renderIndex + weekStart) % 7;
        var date = (0, _moment2.default)(startOfArgMonthMoment).setDate(dayIndex + 1);
        var isDisabled = startMoment && date.getTime() < startMoment.getTime() || endMoment && date.getTime() > endMoment.getTime();

        if (dayIndex >= 0 && dayIndex < argMonthDaysCount) {
          days.push((0, _rax.createElement)(_Day2.default, {
            startOfMonth: startOfArgMonthMoment,
            isWeekend: isoWeekday === 0 || isoWeekday === 6,
            key: '' + renderIndex,
            onPress: function onPress() {
              _this2.selectDate(date);
            },
            caption: '' + (dayIndex + 1),
            isToday: argMonthIsToday && dayIndex === todayIndex,
            isSelected: selectedMonthIsArg && dayIndex === selectedIndex,
            hasEvent: events && events[dayIndex] === true,
            usingEvents: _this2.props.eventDates.length > 0,
            customStyle: _this2.props.customStyle,
            isDisabled: isDisabled
          }));
        } else {
          days.push((0, _rax.createElement)(_Day2.default, { key: '' + renderIndex, filler: true }));
        }
        if (renderIndex % 7 === 6) {
          weekRows.push((0, _rax.createElement)(
            _raxView2.default,
            {
              key: weekRows.length,
              style: [_styles2.default.weekRow, _this2.props.customStyle.weekRow]
            },
            days
          ));
          days = [];
          if (dayIndex + 1 >= argMonthDaysCount) {
            return 'break';
          }
        }
        renderIndex += 1;
      };

      do {
        var _ret2 = _loop();

        if (_ret2 === 'break') break;
      } while (true);

      return (0, _rax.createElement)(
        _raxView2.default,
        { key: argMoment.month(), style: _styles2.default.monthContainer },
        weekRows
      );
    }
  }, {
    key: 'renderHeading',
    value: function renderHeading() {
      var headings = [];
      for (var i = 0; i < 7; i++) {
        var j = (i + this.props.weekStart) % 7;
        headings.push((0, _rax.createElement)(
          _raxText2.default,
          {
            key: i,
            style: j === 0 || j === 6 ? [_styles2.default.weekendHeading, this.props.customStyle.weekendHeading] : [_styles2.default.dayHeading, this.props.customStyle.dayHeading]
          },
          this.props.dayHeadings[j]
        ));
      }

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [_styles2.default.calendarHeading, this.props.customStyle.calendarHeading] },
        headings
      );
    }
  }, {
    key: 'renderTopBar',
    value: function renderTopBar() {
      return this.props.showControls ? (0, _rax.createElement)(
        _raxView2.default,
        { style: [_styles2.default.calendarControls, this.props.customStyle.calendarControls] },
        (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            style: [_styles2.default.controlButton, this.props.customStyle.controlButton],
            onPress: this.onPrev
          },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: [_styles2.default.controlButtonText, this.props.customStyle.controlButtonText] },
            this.props.prevButtonText
          )
        ),
        (0, _rax.createElement)(
          _raxText2.default,
          { style: [_styles2.default.title, this.props.customStyle.title] },
          this.state.currentMonthMoment.format(this.props.titleFormat)
        ),
        (0, _rax.createElement)(
          _raxTouchable2.default,
          {
            style: [_styles2.default.controlButton, this.props.customStyle.controlButton],
            onPress: this.onNext
          },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: [_styles2.default.controlButtonText, this.props.customStyle.controlButtonText] },
            this.props.nextButtonText
          )
        )
      ) : (0, _rax.createElement)(
        _raxView2.default,
        { style: [_styles2.default.calendarControls, this.props.customStyle.calendarControls] },
        (0, _rax.createElement)(
          _raxText2.default,
          { style: [_styles2.default.title, this.props.customStyle.title] },
          this.state.currentMonthMoment.format(this.props.titleFormat)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var calendarDates = this.getMonthStack(this.state.currentMonthMoment);
      var eventDatesMap = this.prepareEventDates(this.props.eventDates);
      var calendarDatesNode = calendarDates.map(function (date) {
        return _this3.renderMonthView((0, _moment2.default)(date), eventDatesMap);
      });
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [_styles2.default.calendarContainer, this.props.customStyle.calendarContainer] },
        this.renderTopBar(),
        this.props.showDayHeadings && this.renderHeading(this.props.titleFormat),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: { height: calendarDatesNode[0].props.children.length * 92 } },
          calendarDatesNode
        )
      );
    }
  }]);

  return Calendar;
}(_rax.Component);

Calendar.propTypes = {
  customStyle: _rax.PropTypes.object,
  dayHeadings: _rax.PropTypes.array,
  eventDates: _rax.PropTypes.array,
  monthNames: _rax.PropTypes.array,
  nextButtonText: _rax.PropTypes.string,
  onDateSelect: _rax.PropTypes.func,
  onSwipeNext: _rax.PropTypes.func,
  onSwipePrev: _rax.PropTypes.func,
  onTouchNext: _rax.PropTypes.func,
  onTouchPrev: _rax.PropTypes.func,
  prevButtonText: _rax.PropTypes.string,
  selectedDate: _rax.PropTypes.any,
  showControls: _rax.PropTypes.bool,
  startDate: _rax.PropTypes.any,
  endDate: _rax.PropTypes.any,
  titleFormat: _rax.PropTypes.string,
  dateFormat: _rax.PropTypes.string,
  today: _rax.PropTypes.any,
  weekStart: _rax.PropTypes.number
};
Calendar.defaultProps = {
  customStyle: {},
  dayHeadings: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  eventDates: [],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  nextButtonText: 'Next',
  prevButtonText: 'Prev',
  showControls: true,
  titleFormat: 'MMMM YYYY',
  dateFormat: 'YYYY-MM-DD',
  today: (0, _moment2.default)(),
  weekStart: 1
};
exports.default = Calendar;
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _styles = __webpack_require__(33);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.dayCircleStyle = function (isWeekend, isSelected, isToday) {
      var customStyle = _this.props.customStyle;

      var dayCircleStyle = [_styles2.default.dayCircleFiller, customStyle.dayCircleFiller && customStyle.dayCircleFiller];

      if (isSelected && !isToday) {
        dayCircleStyle.push(_styles2.default.selectedDayCircle, customStyle.selectedDayCircle && customStyle.selectedDayCircle);
      } else if (isSelected && isToday) {
        dayCircleStyle.push(_styles2.default.currentDayCircle, customStyle.currentDayCircle && customStyle.currentDayCircle);
      }
      return dayCircleStyle;
    }, _this.dayTextStyle = function (isWeekend, isSelected, isToday, isDisabled) {
      var customStyle = _this.props.customStyle;

      var dayTextStyle = [_styles2.default.day, customStyle.day];
      if (isDisabled) {
        dayTextStyle.push(_styles2.default.disabledDayText, customStyle.disabledDayText && customStyle.disabledDayText);
      } else if (isToday && !isSelected) {
        dayTextStyle.push(_styles2.default.currentDayText, customStyle.currentDayText && customStyle.currentDayText);
      } else if (isToday || isSelected) {
        dayTextStyle.push(_styles2.default.selectedDayText, customStyle.selectedDayText && customStyle.selectedDayText);
      } else if (isWeekend) {
        dayTextStyle.push(_styles2.default.weekendDayText, customStyle.weekendDayText && customStyle.weekendDayText);
      }
      return dayTextStyle;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Day, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          customStyle = _props.customStyle;
      var _props2 = this.props,
          filler = _props2.filler,
          hasEvent = _props2.hasEvent,
          isWeekend = _props2.isWeekend,
          isSelected = _props2.isSelected,
          isToday = _props2.isToday,
          isDisabled = _props2.isDisabled,
          usingEvents = _props2.usingEvents;


      return filler ? (0, _rax.createElement)(
        _raxTouchable2.default,
        null,
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [_styles2.default.dayButtonFiller, customStyle.dayButtonFiller] },
          (0, _rax.createElement)(_raxText2.default, { style: [_styles2.default.day, customStyle.day] })
        )
      ) : (0, _rax.createElement)(
        _raxTouchable2.default,
        { onPress: !isDisabled && this.props.onPress },
        (0, _rax.createElement)(
          _raxView2.default,
          { style: [_styles2.default.dayButton, customStyle.dayButton] },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: this.dayCircleStyle(isWeekend, isSelected, isToday) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: this.dayTextStyle(isWeekend, isSelected, isToday, isDisabled) },
              caption
            )
          ),
          usingEvents && (0, _rax.createElement)(_raxView2.default, { style: [_styles2.default.eventIndicatorFiller, customStyle.eventIndicatorFiller, hasEvent && _styles2.default.eventIndicator, hasEvent && customStyle.eventIndicator]
          })
        )
      );
    }
  }]);

  return Day;
}(_rax.Component);

Day.defaultProps = {
  customStyle: {}
};
Day.propTypes = {
  caption: _rax.PropTypes.any,
  customStyle: _rax.PropTypes.object,
  filler: _rax.PropTypes.bool,
  hasEvent: _rax.PropTypes.bool,
  isSelected: _rax.PropTypes.bool,
  isToday: _rax.PropTypes.bool,
  isWeekend: _rax.PropTypes.bool,
  isDisabled: _rax.PropTypes.bool,
  onPress: _rax.PropTypes.func,
  usingEvents: _rax.PropTypes.bool
};
exports.default = Day;
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _format = __webpack_require__(98);

var hookCallback;

function hooks() {
  return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback) {
  hookCallback = callback;
}

function isUndefined(input) {
  return input === void 0;
}

function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}

function copyConfig(to, from) {
  if (!isUndefined(from._isAMomentObject)) {
    to._isAMomentObject = from._isAMomentObject;
  }
  if (!isUndefined(from._i)) {
    to._i = from._i;
  }

  return to;
}

function startOfMonth() {
  this._d.setDate(1);
  return this;
}

function format(key) {
  return (0, _format.formatMoment)(this, key);
}

function daysInMonth() {
  var year = this._d.getFullYear();
  var month = this._d.getMonth() + 1;
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
}

function year() {
  return this._d.getFullYear();
}

function month() {
  return this._d.getMonth();
}

function date() {
  return this._d.getDate();
}

function hour() {
  return this._d.getHours();
}

function minute() {
  return this._d.getMinutes();
}

function second() {
  return this._d.getSeconds();
}

function addMonth(value) {
  var currentMonth = this.month();
  this._d.setMonth(currentMonth + value);
  return this;
}

function isoWeekday() {
  return this._d.getUTCDay();
}

function isSameMonth(argMoment) {
  return this.year() === argMoment.year() && this.month() === argMoment.month();
}

function setDate(dayIndex) {
  this._d.setDate(dayIndex);
  return this;
}

function getTime() {
  return this._d.getTime();
}

function isValid() {
  return !isNaN(this._d.getTime());
}

var proto = Moment.prototype;

proto.isValid = isValid;

proto.year = year;
proto.month = month;
proto.date = date;
proto.hour = hour;
proto.second = second;
proto.minute = minute;

proto.format = format;
proto.daysInMonth = daysInMonth;
proto.startOfMonth = startOfMonth;
proto.addMonth = addMonth;
proto.isoWeekday = isoWeekday;
proto.isSameMonth = isSameMonth;
proto.setDate = setDate;
proto.getTime = getTime;

function createFromConfig(config) {
  var input = config._i;

  if (isMoment(input)) {
    return new Moment(input);
  } else if (isDate(input)) {
    config._d = input;
  } else if (input) {
    config._d = new Date(input);
  } else {
    config._d = new Date();
  }

  var res = new Moment(config);
  return res;
}

function createLocal(input) {
  var c = {};

  c._isAMomentObject = true;
  c._i = input;

  return createFromConfig(c);
}

setHookCallback(createLocal);

var moment = hooks;
moment.prototype = proto;

exports.default = moment;
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMoment = formatMoment;
var defaultFormat = 'YYYY-MM-DD hh:mm:ss';

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

function zeroFill(number, targetLength, forceSign) {
  var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
  return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
  var func = callback;
  if (typeof callback === 'string') {
    func = function func() {
      return this[callback]();
    };
  }
  if (token) {
    formatTokenFunctions[token] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function () {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal) {
    // Noop
  }
}

addFormatToken(0, ['YY', 2], 0, function () {
  return this.year() % 100;
});

addFormatToken(0, ['YYYY', 4], 0, 'year');

addFormatToken('M', ['MM', 2], 'Mo', function () {
  return this.month() + 1;
});

addFormatToken('D', ['DD', 2], 'Do', 'date');

addFormatToken('h', ['hh', 2], 0, 'hour');

addFormatToken('m', ['mm', 2], 0, 'minute');

addFormatToken('s', ['ss', 2], 0, 'second');

function removeFormattingTokens(input) {
  return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
  var array = format.match(formattingTokens),
      i,
      length;

  for (i = 0, length = array.length; i < length; i++) {
    if (formatTokenFunctions[array[i]]) {
      array[i] = formatTokenFunctions[array[i]];
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }

  return function (mom) {
    var output = '',
        i;
    for (i = 0; i < length; i++) {
      output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
    }
    return output;
  };
}

// format date using native date object
function formatMoment(m) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFormat;

  if (!m.isValid()) {
    return null;
  }

  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

  return formatFunctions[format](m);
}
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileCountdown = __webpack_require__(100);

var _tileCountdown2 = _interopRequireDefault(_tileCountdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountdownDemo = function (_Component) {
  _inherits(CountdownDemo, _Component);

  function CountdownDemo() {
    _classCallCheck(this, CountdownDemo);

    return _possibleConstructorReturn(this, (CountdownDemo.__proto__ || Object.getPrototypeOf(CountdownDemo)).apply(this, arguments));
  }

  _createClass(CountdownDemo, [{
    key: 'onComplete',
    value: function onComplete() {
      console.log('countdown complete');
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u5012\u8BA1\u65F6'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileCountdown2.default, {
            timeRemaining: 10000,
            tpl: '{d}天{h}时{m}分{s}秒',
            onComplete: this.onComplete
          })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u5012\u8BA1\u65F6 - \u6837\u5F0F\u8C03\u6574'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileCountdown2.default, {
            timeRemaining: 100000000,
            timeStyle: {
              'color': '#FFF',
              'backgroundColor': '#3F51B5',
              'marginLeft': 2,
              'marginRight': 2,
              'paddingLeft': 4,
              'paddingRight': 4
            },
            secondStyle: { 'backgroundColor': '#b9bfe4' },
            textStyle: { 'backgroundColor': '#EEE' },
            tpl: '{d}-{h}-{m}-{s}',
            onComplete: this.onComplete
          })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u5012\u8BA1\u65F6 - \u6837\u5F0F\u8C03\u65742'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileCountdown2.default, {
            timeRemaining: 500000,
            tpl: '{h}:{m}:{s}',
            timeStyle: {
              color: '#ffffff',
              fontSize: 40
            },
            secondStyle: {
              color: '#ffffff',
              fontSize: 40
            },
            timeWrapStyle: {
              borderRadius: 6,
              height: 60,
              paddingLeft: 8,
              paddingRight: 8,
              lineHeight: 60,
              backgroundColor: '#333333'
            }
          })
        )
      );
    }
  }]);

  return CountdownDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  }
};

exports.default = CountdownDemo;
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxCountdown = __webpack_require__(101);

var _raxCountdown2 = _interopRequireDefault(_raxCountdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxCountdown2.default;
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

function addZero(num, timeWrapStyle, timeBackground, timeBackgroundStyle, timeStyle, secondStyle) {
  var displayNum = num < 0 ? 0 : num;
  var displayFirstNum = displayNum < 10 ? 0 : displayNum.toString().slice(0, 1);
  var displaySecondNum = displayNum < 10 ? displayNum : displayNum.toString().slice(1);
  return (0, _rax.createElement)(
    _raxView2.default,
    { style: [timeWrapStyle, styles.item] },
    timeBackground ? (0, _rax.createElement)(_raxImage2.default, { source: timeBackground, style: timeBackgroundStyle }) : null,
    (0, _rax.createElement)(
      _raxText2.default,
      { style: timeStyle },
      '' + displayFirstNum
    ),
    (0, _rax.createElement)(
      _raxText2.default,
      { style: secondStyle },
      '' + displaySecondNum
    )
  );
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
      timeRemaining: 0
    }, _this.timeoutId = 0, _this.tick = function () {
      var _this$props = _this.props,
          onComplete = _this$props.onComplete,
          onTick = _this$props.onTick,
          interval = _this$props.interval;
      var timeRemaining = _this.state.timeRemaining;

      var countdownComplete = 1000 > timeRemaining;

      if (_this.timeoutId) {
        clearTimeout(_this.timeoutId);
      }

      if (countdownComplete && isFunction(onComplete)) {
        onComplete();
      } else {
        _this.timeoutId = !countdownComplete ? setTimeout(function () {
          return _this.setState({
            timeRemaining: timeRemaining - interval
          }, function () {
            return isFunction(onTick) && onTick(timeRemaining);
          });
        }, interval) : false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var timeRemaining = this.props.timeRemaining;

      this.setState({
        timeRemaining: timeRemaining
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.tick();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.timeRemaining !== this.props.timeRemaining) {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.setState({
          timeRemaining: newProps.timeRemaining
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.timeRemaining !== nextProps.timeRemaining || this.state.timeRemaining !== nextState.timeRemaining;
    }
  }, {
    key: 'render',
    value: function render() {
      var timeRemaining = this.state.timeRemaining;
      var _props = this.props,
          formatFunc = _props.formatFunc,
          timeStyle = _props.timeStyle,
          timeBackgroundStyle = _props.timeBackgroundStyle,
          timeWrapStyle = _props.timeWrapStyle,
          timeBackground = _props.timeBackground,
          secondStyle = _props.secondStyle,
          textStyle = _props.textStyle,
          tpl = _props.tpl;

      if (formatFunc) {
        return formatFunc(timeRemaining);
      }

      var totalSeconds = Math.floor(timeRemaining / 1000);
      var days = parseInt(totalSeconds / 3600 / 24);
      var hours = parseInt(totalSeconds / 3600) % 24;
      var minutes = parseInt(totalSeconds / 60) % 60;
      var seconds = parseInt(totalSeconds % 60);

      var _timeBackgroundStyle = [styles.background, timeBackgroundStyle];

      var isDay = new RegExp('{d}').test(tpl);
      var isHours = new RegExp('{h}').test(tpl);
      var isMinutes = new RegExp('{m}').test(tpl);
      var isSeconds = new RegExp('{s}').test(tpl);

      hours = !isDay && days ? hours + 24 * days : hours;
      minutes = !isHours && hours ? minutes + 60 * hours : minutes;
      seconds = !isMinutes && minutes ? seconds + 60 * minutes : seconds;

      var tplIndexOfDay = tpl.indexOf('d');
      var tplIndexOfHours = tpl.indexOf('h');
      var tplIndexOfMinutes = tpl.indexOf('m');
      var tplIndexOfSeconds = tpl.indexOf('s');

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.main },
        isDay ? addZero(days, timeWrapStyle, timeBackground, _timeBackgroundStyle, timeStyle, timeStyle) : null,
        isDay ? (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyle },
          tpl.slice(tplIndexOfDay + 2, tplIndexOfDay + 3)
        ) : null,
        isHours ? addZero(hours, timeWrapStyle, timeBackground, _timeBackgroundStyle, timeStyle, timeStyle) : null,
        isHours ? (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyle },
          tpl.slice(tplIndexOfHours + 2, tplIndexOfHours + 3)
        ) : null,
        isMinutes ? addZero(minutes, timeWrapStyle, timeBackground, _timeBackgroundStyle, timeStyle, timeStyle) : null,
        isMinutes ? (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyle },
          tpl.slice(tplIndexOfMinutes + 2, tplIndexOfMinutes + 3)
        ) : null,
        isSeconds ? addZero(seconds, timeWrapStyle, timeBackground, _timeBackgroundStyle, timeStyle, secondStyle) : null,
        isSeconds ? (0, _rax.createElement)(
          _raxText2.default,
          { style: textStyle },
          tpl.slice(tplIndexOfSeconds + 2, tplIndexOfSeconds + 3)
        ) : null
      );
    }
  }]);

  return Index;
}(_rax.Component);

Index.propTypes = {
  formatFunc: _rax.PropTypes.func,
  onTick: _rax.PropTypes.func,
  onComplete: _rax.PropTypes.func,
  tpl: _rax.PropTypes.string, // template (example {h}:{m}:{s})
  timeRemaining: _rax.PropTypes.number,
  secondStyle: _rax.PropTypes.object,
  timeStyle: _rax.PropTypes.object, // style for num
  textStyle: _rax.PropTypes.object, // style for text
  timeWrapStyle: _rax.PropTypes.object,
  timeBackground: _rax.PropTypes.string,
  timeBackgroundStyle: _rax.PropTypes.object,
  interval: _rax.PropTypes.number
};
Index.defaultProps = {
  tpl: '{d}天{h}时{m}分{s}秒',
  timeRemaining: 0,
  interval: 1000
};


var styles = {
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row'
  },
  background: {
    position: 'absolute'
  }
};

exports.default = Index;
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileGotop = __webpack_require__(103);

var _tileGotop2 = _interopRequireDefault(_tileGotop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GotopDemo = function (_Component) {
  _inherits(GotopDemo, _Component);

  function GotopDemo() {
    _classCallCheck(this, GotopDemo);

    return _possibleConstructorReturn(this, (GotopDemo.__proto__ || Object.getPrototypeOf(GotopDemo)).apply(this, arguments));
  }

  _createClass(GotopDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(_tileGotop2.default, { resident: true, bottom: 40, onTop: function onTop() {
            _this2.props.onTop && _this2.props.onTop();
          } }),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u56DE\u5230\u9876\u90E8'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            '\u5F80\u4E0B\u6EDA\u52A8\uFF0C\u7136\u540E\u70B9\u51FB\u53F3\u4E0B\u89D2\u6D6E\u52A8\u5143\u7D20\uFF0C\u56DE\u5230\u8FD9\u91CC\u3002'
          )
        )
      );
    }
  }]);

  return GotopDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    paddingBottom: 1400,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 16
  }
};

exports.default = GotopDemo;
module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxGotop = __webpack_require__(104);

var _raxGotop2 = _interopRequireDefault(_raxGotop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxGotop2.default;
module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(5);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _universalEnv = __webpack_require__(1);

var _raxAnimated = __webpack_require__(34);

var _raxAnimated2 = _interopRequireDefault(_raxAnimated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scroll = void 0;
if (_universalEnv.isWeb) {
  scroll = __webpack_require__(125);
}

var GoTop = function (_Component) {
  _inherits(GoTop, _Component);

  function GoTop(props) {
    _classCallCheck(this, GoTop);

    var _this = _possibleConstructorReturn(this, (GoTop.__proto__ || Object.getPrototypeOf(GoTop)).call(this, props));

    _this.click = function (event) {
      var _this$props = _this.props,
          onTop = _this$props.onTop,
          onPress = _this$props.onPress;


      onPress && onPress();
      if (_universalEnv.isWeex) {
        var dom = __webpack_require__(16);
        var top = (0, _rax.findDOMNode)('rx-top');

        dom.scrollToElement(top.ref, {
          offset: 0
        });
      } else {
        event.preventDefault();
        scroll.scrollToTop({
          duration: 300
        });
      }
      onTop && onTop();
    };

    var isShow = props.resident ? true : false,
        bottom = props.bottom || 125;

    if (!_universalEnv.isWeex && !props.resident) {
      isShow = true;
      bottom = new _raxAnimated2.default.Value(-100);
    }

    _this.state = {
      isShow: isShow,
      bottom: bottom
    };
    return _this;
  }

  _createClass(GoTop, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var topNode = '',
          props = this.props,
          Container = void 0;

      if (_universalEnv.isWeex) {
        topNode = (0, _rax.createElement)(_raxView2.default, { id: 'rx-top', style: styles.topNode });
        Container = _raxView2.default;
      } else {
        Container = _raxAnimated2.default.View;
      }
      return (0, _rax.createElement)(
        _raxView2.default,
        {
          style: styles.root,
          onAppear: function onAppear() {},
          onDisAppear: function onDisAppear() {}
        },
        topNode,
        (0, _rax.createElement)(
          _raxView2.default,
          null,
          (0, _rax.createElement)(_raxView2.default, { style: styles.hideNode, onAppear: function onAppear() {
              if (props.resident) {
                return;
              }
              if (_universalEnv.isWeex) {
                _this2.state.isShow && _this2.props.onHide();
                _this2.setState({
                  isShow: false
                });
              } else {
                _this2.hide();
              }
            }, onDisAppear: function onDisAppear() {
              if (props.resident) {
                return;
              }
              if (_universalEnv.isWeex) {
                !_this2.state.isShow && _this2.props.onShow();
                _this2.setState({
                  isShow: true
                });
              } else {
                _this2.show();
              }
            } })
        ),
        function () {
          if (_this2.state.isShow) {
            return (0, _rax.createElement)(
              Container,
              { style: [styles.container, {
                  bottom: _this2.state.bottom,
                  width: props.iconWidth,
                  height: props.iconHeight,
                  borderColor: props.borderColor
                }], onClick: _this2.click },
              (0, _rax.createElement)(_raxImage2.default, { style: { width: '30rem', height: '32.5rem', marginBottom: '4.5rem' }, source: { uri: props.icon } }),
              (0, _rax.createElement)(
                _raxView2.default,
                null,
                (0, _rax.createElement)(
                  _raxText2.default,
                  { style: styles.text },
                  props.name
                )
              )
            );
          }
        }()
      );
    }
  }, {
    key: 'show',
    value: function show() {
      this.startAnimation('show');
      !this.state.isShowFlag && this.props.onShow();
      this.setState({
        isShowFlag: true
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.startAnimation('hide');
      this.state.isShowFlag && this.props.onHide();
      this.setState({
        isShowFlag: false
      });
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation(type) {
      var bottom = this.props.bottom || 60;
      if (!_universalEnv.isWeex) {
        var initValue = void 0,
            toValue = void 0;
        if (type === 'show') {
          initValue = -100;
          toValue = bottom;

          if (this.state.isShowFlag) {
            return;
          }
        } else {
          initValue = bottom;
          toValue = -100;
          if (!this.state.isShowFlag) {
            return;
          }
        }
        this.state.bottom.setValue(initValue);
        _raxAnimated2.default.timing(this.state.bottom, {
          toValue: toValue,
          during: 300
        }).start(function () {
          if (type === 'hide') {}
        });
      }
    }
  }]);

  return GoTop;
}(_rax.Component);

exports.default = GoTop;


var styles = {
  root: {
    height: 1,
    marginBottom: -1
  },
  container: {
    position: 'fixed',
    right: 25,
    zIndex: 1001,
    borderRadius: 45,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderWidth: 2,
    borderStyle: 'solid',
    color: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1
  },

  text: {
    color: '#5f646e',
    fontSize: 20
  },
  icon: {
    width: 30,
    height: 32.5,
    marginBottom: 4.5
  },

  hideNode: {
    width: 1,
    height: 1,
    position: 'absolute',
    top: 0
  }
};

GoTop.defaultProps = {
  name: 'Top',
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABCCAYAAAAL1LXDAAAClElEQVR42u3YS4vTUBQH8PgWdK8rty5dCy79For3Jt5761R7z52xI7rLB3AhLoTRcXwMKlYUH/gAd25duXYp6AeYjYJOzR+EQO1JaKNtmpw/hLYntzS/np40beQcHVHWv1eGfijjh03cYIMR1gh3UGzDBivAWy0Cb7Wuw+2bYYlEIpEwGQ6HO5Tzl5T1X7Tx37QN13Sa7m8u1vi10a8Mbekd0G3A5mjj3/Z61/c1Bqst3Sy/CqI3QDcSy3eaXqdpureZWL7Tr4BexJm9VYrjZ/ol0M3E8p1+4dzankX4GK/zEPo8pvYxu/05ttPWPwd6IbHa0Kp2If2rjpoNp7SlX0ynnwG9cFis48DYF3foNNDM859mM727Rlh/uwxbBkYSQ2f4TvsnQNcaG9vQx7pycJ7YecWhs/pgbujshXcqQxtl2EnBSNzxcUGnHw8Gg121wipHF7FuWjCibUiy/dtMpx8BPTOstnSnDFsVjChDZzm0svQQ6LlitQ0rWFcNPNppsmynDT0AukbY6mAkW+fYThvaxLH9e6wJdzls7GgZ66qCizvtz/Ez7e/n6Fpgq4OR2IUl7jhwjDm6AlZZuleGnRUYUSacZ9HZyFVCa0eXC97RgDWzBOedpgsFP1A2cEE0FVgZ+lSEnRcYUY58QafXp0LjH8UxJwjCvnmDERwLO26GrkaTJumsHMP/x3+g33GmRL0uYATnEQa9rburh6NJ0+2mB5NOOG6IDuFx3cAIru7GoZMlOhpVSV3BCH6sjIzeB8xxY8FIYpdPKkM38O3S7/cPoNZAMB8BC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWcLvBsQ1XRsGoNRacODoxCkYtanK0DT1l6Ss23I8k/ze/AcSDH16N8PnHAAAAAElFTkSuQmCC',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  iconWidth: 90,
  iconHeight: 90,
  onShow: function onShow() {},
  onHide: function onHide() {}
};
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var invariant = __webpack_require__(106);

var Animated = __webpack_require__(6);
var AnimatedValue = __webpack_require__(11);
var AnimatedValueXY = __webpack_require__(109);
var AnimatedAddition = __webpack_require__(110);
var AnimatedMultiplication = __webpack_require__(111);
var AnimatedModulo = __webpack_require__(112);
var AnimatedTemplate = __webpack_require__(113);
var AnimatedTracking = __webpack_require__(114);
var isAnimated = __webpack_require__(115);

var Animation = __webpack_require__(15);
var TimingAnimation = __webpack_require__(116);
var DecayAnimation = __webpack_require__(119);
var SpringAnimation = __webpack_require__(120);

var maybeVectorAnim = function maybeVectorAnim(value, config, anim) {
  if (value instanceof AnimatedValueXY) {
    var configX = _extends({}, config);
    var configY = _extends({}, config);
    for (var key in config) {
      var _config$key = config[key],
          x = _config$key.x,
          y = _config$key.y;

      if (x !== undefined && y !== undefined) {
        configX[key] = x;
        configY[key] = y;
      }
    }
    var aX = anim(value, configX);
    var aY = anim(value, configY);
    // We use `stopTogether: false` here because otherwise tracking will break
    // because the second animation will get stopped before it can update.
    return parallel([aX, aY], { stopTogether: false });
  }
  return null;
};

var spring = function spring(value, config) {
  return maybeVectorAnim(value, config, spring) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      if (config.toValue instanceof Animated) {
        singleValue.track(new AnimatedTracking(singleValue, config.toValue, SpringAnimation, singleConfig, callback));
      } else {
        singleValue.animate(new SpringAnimation(singleConfig), callback);
      }
    },

    stop: function stop() {
      value.stopAnimation();
    }
  };
};

var timing = function timing(value, config) {
  return maybeVectorAnim(value, config, timing) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      if (config.toValue instanceof Animated) {
        singleValue.track(new AnimatedTracking(singleValue, config.toValue, TimingAnimation, singleConfig, callback));
      } else {
        singleValue.animate(new TimingAnimation(singleConfig), callback);
      }
    },

    stop: function stop() {
      value.stopAnimation();
    }
  };
};

var decay = function decay(value, config) {
  return maybeVectorAnim(value, config, decay) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      singleValue.animate(new DecayAnimation(singleConfig), callback);
    },

    stop: function stop() {
      value.stopAnimation();
    }
  };
};

var sequence = function sequence(animations) {
  var current = 0;
  return {
    start: function start(callback) {
      var onComplete = function onComplete(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }

        current++;

        if (current === animations.length) {
          callback && callback(result);
          return;
        }

        animations[current].start(onComplete);
      };

      if (animations.length === 0) {
        callback && callback({ finished: true });
      } else {
        animations[current].start(onComplete);
      }
    },

    stop: function stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    }
  };
};

var parallel = function parallel(animations, config) {
  var doneCount = 0;
  // Make sure we only call stop() at most once for each animation
  var hasEnded = {};
  var stopTogether = !(config && config.stopTogether === false);

  var result = {
    start: function start(callback) {
      if (doneCount === animations.length) {
        callback && callback({ finished: true });
        return;
      }

      animations.forEach(function (animation, idx) {
        var cb = function cb(endResult) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }

          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };

        if (!animation) {
          cb({ finished: true });
        } else {
          animation.start(cb);
        }
      });
    },

    stop: function stop() {
      animations.forEach(function (animation, idx) {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    }
  };

  return result;
};

var delay = function delay(time) {
  // Would be nice to make a specialized implementation
  return timing(new AnimatedValue(0), { toValue: 0, delay: time, duration: 0 });
};

var stagger = function stagger(time, animations) {
  return parallel(animations.map(function (animation, i) {
    return sequence([delay(time * i), animation]);
  }));
};

var event = function event(argMapping, config) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var traverse = function traverse(recMapping, recEvt, key) {
      if (typeof recEvt === 'number') {
        invariant(recMapping instanceof AnimatedValue, 'Bad mapping of type ' + (typeof recMapping === 'undefined' ? 'undefined' : _typeof(recMapping)) + ' for key ' + key + ', event value must map to AnimatedValue');
        recMapping.setValue(recEvt);
        return;
      }
      invariant((typeof recMapping === 'undefined' ? 'undefined' : _typeof(recMapping)) === 'object', 'Bad mapping of type ' + (typeof recMapping === 'undefined' ? 'undefined' : _typeof(recMapping)) + ' for key ' + key);
      invariant((typeof recEvt === 'undefined' ? 'undefined' : _typeof(recEvt)) === 'object', 'Bad event of type ' + (typeof recEvt === 'undefined' ? 'undefined' : _typeof(recEvt)) + ' for key ' + key);
      for (var key in recMapping) {
        traverse(recMapping[key], recEvt[key], key);
      }
    };
    argMapping.forEach(function (mapping, idx) {
      traverse(mapping, args[idx], 'arg' + idx);
    });
    if (config && config.listener) {
      config.listener.apply(null, args);
    }
  };
};

/**
 * Animations are an important part of modern UX, and the `Animated`
 * library is designed to make them fluid, powerful, and easy to build and
 * maintain.
 *
 * The simplest workflow is to create an `Animated.Value`, hook it up to one or
 * more style attributes of an animated component, and then drive updates either
 * via animations, such as `Animated.timing`, or by hooking into gestures like
 * panning or scrolling via `Animated.event`.  `Animated.Value` can also bind to
 * props other than style, and can be interpolated as well.  Here is a basic
 * example of a container view that will fade in when it's mounted:
 *
 *```javascript
 *  class FadeInView extends React.Component {
 *    constructor(props) {
 *      super(props);
 *      this.state = {
 *        fadeAnim: new Animated.Value(0), // init opacity 0
 *      };
 *    }
 *    componentDidMount() {
 *      Animated.timing(          // Uses easing functions
 *        this.state.fadeAnim,    // The value to drive
 *        {toValue: 1},           // Configuration
 *      ).start();                // Don't forget start!
 *    }
 *    render() {
 *      return (
 *        <Animated.View          // Special animatable View
 *          style={{opacity: this.state.fadeAnim}}> // Binds
 *          {this.props.children}
 *        </Animated.View>
 *      );
 *    }
 *  }
 *```
 *
 * Note that only animatable components can be animated.  `View`, `Text`, and
 * `Image` are already provided, and you can create custom ones with
 * `createAnimatedComponent`.  These special components do the magic of binding
 * the animated values to the properties, and do targeted native updates to
 * avoid the cost of the react render and reconciliation process on every frame.
 * They also handle cleanup on unmount so they are safe by default.
 *
 * Animations are heavily configurable.  Custom and pre-defined easing
 * functions, delays, durations, decay factors, spring constants, and more can
 * all be tweaked depending on the type of animation.
 *
 * A single `Animated.Value` can drive any number of properties, and each
 * property can be run through an interpolation first.  An interpolation maps
 * input ranges to output ranges, typically using a linear interpolation but
 * also supports easing functions.  By default, it will extrapolate the curve
 * beyond the ranges given, but you can also have it clamp the output value.
 *
 * For example, you may want to think about your `Animated.Value` as going from
 * 0 to 1, but animate the position from 150px to 0px and the opacity from 0 to
 * 1. This can easily be done by modifying `style` in the example above like so:
 *
 *```javascript
 *  style={{
 *    opacity: this.state.fadeAnim, // Binds directly
 *    transform: [{
 *      translateY: this.state.fadeAnim.interpolate({
 *        inputRange: [0, 1],
 *        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
 *      }),
 *    }],
 *  }}>
 *```
 *
 * Animations can also be combined in complex ways using composition functions
 * such as `sequence` and `parallel`, and can also be chained together simply
 * by setting the `toValue` of one animation to be another `Animated.Value`.
 *
 * `Animated.ValueXY` is handy for 2D animations, like panning, and there are
 * other helpful additions like `setOffset` and `getLayout` to aid with typical
 * interaction patterns, like drag-and-drop.
 *
 * You can see more example usage in `AnimationExample.js`, the Gratuitous
 * Animation App, and [Animations documentation guide](docs/animations.html).
 *
 * Note that `Animated` is designed to be fully serializable so that animations
 * can be run in a high performance way, independent of the normal JavaScript
 * event loop. This does influence the API, so keep that in mind when it seems a
 * little trickier to do something compared to a fully synchronous system.
 * Checkout `Animated.Value.addListener` as a way to work around some of these
 * limitations, but use it sparingly since it might have performance
 * implications in the future.
 */
module.exports = {
  /**
   * Standard value class for driving animations.  Typically initialized with
   * `new Animated.Value(0);`
   */
  Value: AnimatedValue,
  /**
   * 2D value class for driving 2D animations, such as pan gestures.
   */
  ValueXY: AnimatedValueXY,

  /**
   * Animates a value from an initial velocity to zero based on a decay
   * coefficient.
   */
  decay: decay,
  /**
   * Animates a value along a timed easing curve.  The `Easing` module has tons
   * of pre-defined curves, or you can use your own function.
   */
  timing: timing,
  /**
   * Spring animation based on Rebound and Origami.  Tracks velocity state to
   * create fluid motions as the `toValue` updates, and can be chained together.
   */
  spring: spring,

  /**
   * Creates a new Animated value composed from two Animated values added
   * together.
   */
  add: function add(a, b) {
    return new AnimatedAddition(a, b);
  },
  /**
   * Creates a new Animated value composed from two Animated values multiplied
   * together.
   */
  multiply: function multiply(a, b) {
    return new AnimatedMultiplication(a, b);
  },

  /**
   * Creates a new Animated value that is the (non-negative) modulo of the
   * provided Animated value
   */
  modulo: function modulo(a, modulus) {
    return new AnimatedModulo(a, modulus);
  },

  /**
   * Creates a new Animated value that is the specified string, with each
   * substitution expression being separately animated and interpolated.
   */
  template: function template(strings) {
    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new AnimatedTemplate(strings, values);
  },

  /**
   * Starts an animation after the given delay.
   */
  delay: delay,
  /**
   * Starts an array of animations in order, waiting for each to complete
   * before starting the next.  If the current running animation is stopped, no
   * following animations will be started.
   */
  sequence: sequence,
  /**
   * Starts an array of animations all at the same time.  By default, if one
   * of the animations is stopped, they will all be stopped.  You can override
   * this with the `stopTogether` flag.
   */
  parallel: parallel,
  /**
   * Array of animations may run in parallel (overlap), but are started in
   * sequence with successive delays.  Nice for doing trailing effects.
   */
  stagger: stagger,

  /**
   *  Takes an array of mappings and extracts values from each arg accordingly,
   *  then calls `setValue` on the mapped outputs.  e.g.
   *
   *```javascript
   *  onScroll={Animated.event(
   *    [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
   *    {listener},          // Optional async listener
   *  )
   *  ...
   *  onPanResponderMove: Animated.event([
   *    null,                // raw event arg ignored
   *    {dx: this._panX},    // gestureState arg
   *  ]),
   *```
   */
  event: event,

  /**
   * Existential test to figure out if an object is an instance of the Animated
   * class or not.
   */
  isAnimated: isAnimated,

  /**
   * Make any React component Animatable.  Used to create `Animated.View`, etc.
   */
  createAnimatedComponent: __webpack_require__(122),

  inject: {
    ApplyAnimatedValues: __webpack_require__(39).inject,
    InteractionManager: __webpack_require__(36).inject,
    FlattenStyle: __webpack_require__(38).inject,
    RequestAnimationFrame: __webpack_require__(20).inject,
    CancelAnimationFrame: __webpack_require__(21).inject
  },

  __PropsOnlyForTests: __webpack_require__(37)
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";











function SetPolyfill(){
this._cache=[];
}

SetPolyfill.prototype.add=function(e){
if(this._cache.indexOf(e)===-1){
this._cache.push(e);
}
};

SetPolyfill.prototype.forEach=function(cb){
this._cache.forEach(cb);
};

module.exports=SetPolyfill;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedValue=__webpack_require__(11);
var AnimatedWithChildren=__webpack_require__(9);
var invariant=__webpack_require__(19);
var guid=__webpack_require__(27);var









































AnimatedValueXY=function(_AnimatedWithChildren){_inherits(AnimatedValueXY,_AnimatedWithChildren);




function AnimatedValueXY(valueIn){_classCallCheck(this,AnimatedValueXY);var _this=_possibleConstructorReturn(this,(AnimatedValueXY.__proto__||Object.getPrototypeOf(AnimatedValueXY)).call(this));

var value=valueIn||{x:0,y:0};
if(typeof value.x==='number'&&typeof value.y==='number'){
_this.x=new AnimatedValue(value.x);
_this.y=new AnimatedValue(value.y);
}else{
invariant(
value.x instanceof AnimatedValue&&
value.y instanceof AnimatedValue,
'AnimatedValueXY must be initalized with an object of numbers or '+
'AnimatedValues.');

_this.x=value.x;
_this.y=value.y;
}
_this._listeners={};return _this;
}_createClass(AnimatedValueXY,[{key:'setValue',value:function setValue(

value){
this.x.setValue(value.x);
this.y.setValue(value.y);
}},{key:'setOffset',value:function setOffset(

offset){
this.x.setOffset(offset.x);
this.y.setOffset(offset.y);
}},{key:'flattenOffset',value:function flattenOffset()

{
this.x.flattenOffset();
this.y.flattenOffset();
}},{key:'__getValue',value:function __getValue()

{
return{
x:this.x.__getValue(),
y:this.y.__getValue()};

}},{key:'stopAnimation',value:function stopAnimation(

callback){
this.x.stopAnimation();
this.y.stopAnimation();
callback&&callback(this.__getValue());
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
var id=guid();
var jointCallback=function jointCallback(_ref){var number=_ref.value;
callback(_this2.__getValue());
};
this._listeners[id]={
x:this.x.addListener(jointCallback),
y:this.y.addListener(jointCallback)};

return id;
}},{key:'removeListener',value:function removeListener(

id){
this.x.removeListener(this._listeners[id].x);
this.y.removeListener(this._listeners[id].y);
delete this._listeners[id];
}},{key:'getLayout',value:function getLayout()








{
return{
left:this.x,
top:this.y};

}},{key:'getTranslateTransform',value:function getTranslateTransform()










{
return[
{translateX:this.x},
{translateY:this.y}];

}}]);return AnimatedValueXY;}(AnimatedWithChildren);


module.exports=AnimatedValueXY;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__(9);
var Animated=__webpack_require__(6);
var AnimatedValue=__webpack_require__(11);
var Interpolation=__webpack_require__(14);
var AnimatedInterpolation=__webpack_require__(18);var



AnimatedAddition=function(_AnimatedWithChildren){_inherits(AnimatedAddition,_AnimatedWithChildren);






function AnimatedAddition(a,b){_classCallCheck(this,AnimatedAddition);var _this=_possibleConstructorReturn(this,(AnimatedAddition.__proto__||Object.getPrototypeOf(AnimatedAddition)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;
_this._listeners={};return _this;
}_createClass(AnimatedAddition,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()+this._b.__getValue();
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener&&this._a.addListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
if(!this._bListener&&this._b.addListener){
this._bListener=this._b.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedAddition;}(AnimatedWithChildren);


module.exports=AnimatedAddition;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__(9);
var Animated=__webpack_require__(6);
var AnimatedValue=__webpack_require__(11);
var AnimatedInterpolation=__webpack_require__(18);
var Interpolation=__webpack_require__(14);var



AnimatedMultiplication=function(_AnimatedWithChildren){_inherits(AnimatedMultiplication,_AnimatedWithChildren);






function AnimatedMultiplication(a,b){_classCallCheck(this,AnimatedMultiplication);var _this=_possibleConstructorReturn(this,(AnimatedMultiplication.__proto__||Object.getPrototypeOf(AnimatedMultiplication)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;
_this._listeners={};return _this;
}_createClass(AnimatedMultiplication,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()*this._b.__getValue();
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener&&this._a.addListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
if(!this._bListener&&this._b.addListener){
this._bListener=this._b.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedMultiplication;}(AnimatedWithChildren);


module.exports=AnimatedMultiplication;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedWithChildren=__webpack_require__(9);
var AnimatedInterpolation=__webpack_require__(18);
var Interpolation=__webpack_require__(14);var



AnimatedModulo=function(_AnimatedWithChildren){_inherits(AnimatedModulo,_AnimatedWithChildren);





function AnimatedModulo(a,modulus){_classCallCheck(this,AnimatedModulo);var _this=_possibleConstructorReturn(this,(AnimatedModulo.__proto__||Object.getPrototypeOf(AnimatedModulo)).call(this));

_this._a=a;
_this._modulus=modulus;
_this._listeners={};return _this;
}_createClass(AnimatedModulo,[{key:'__getValue',value:function __getValue()

{
return(this._a.__getValue()%this._modulus+this._modulus)%this._modulus;
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
}}]);return AnimatedModulo;}(AnimatedWithChildren);


module.exports=AnimatedModulo;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedWithChildren=__webpack_require__(9);var

AnimatedTemplate=function(_AnimatedWithChildren){_inherits(AnimatedTemplate,_AnimatedWithChildren);



function AnimatedTemplate(strings,values){_classCallCheck(this,AnimatedTemplate);var _this=_possibleConstructorReturn(this,(AnimatedTemplate.__proto__||Object.getPrototypeOf(AnimatedTemplate)).call(this));

_this._strings=strings;
_this._values=values;return _this;
}_createClass(AnimatedTemplate,[{key:'__transformValue',value:function __transformValue(

value){
if(value instanceof Animated){
return value.__getValue();
}else{
return value;
}
}},{key:'__getValue',value:function __getValue()

{
var value=this._strings[0];
for(var i=0;i<this._values.length;++i){
value+=this.__transformValue(this._values[i])+this._strings[1+i];
}
return value;
}},{key:'__attach',value:function __attach()

{
for(var i=0;i<this._values.length;++i){
if(this._values[i]instanceof Animated){
this._values[i].__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var i=0;i<this._values.length;++i){
if(this._values[i]instanceof Animated){
this._values[i].__removeChild(this);
}
}
}}]);return AnimatedTemplate;}(AnimatedWithChildren);


module.exports=AnimatedTemplate;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedValue=__webpack_require__(11);var



AnimatedTracking=function(_Animated){_inherits(AnimatedTracking,_Animated);






function AnimatedTracking(
value,
parent,
animationClass,
animationConfig,
callback)
{_classCallCheck(this,AnimatedTracking);var _this=_possibleConstructorReturn(this,(AnimatedTracking.__proto__||Object.getPrototypeOf(AnimatedTracking)).call(this));

_this._value=value;
_this._parent=parent;
_this._animationClass=animationClass;
_this._animationConfig=animationConfig;
_this._callback=callback;
_this.__attach();return _this;
}_createClass(AnimatedTracking,[{key:'__getValue',value:function __getValue()

{
return this._parent.__getValue();
}},{key:'__attach',value:function __attach()

{
this._parent.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._parent.__removeChild(this);
}},{key:'update',value:function update()

{
this._value.animate(new this._animationClass(_extends({},
this._animationConfig,{
toValue:this._animationConfig.toValue.__getValue()})),
this._callback);
}}]);return AnimatedTracking;}(Animated);


module.exports=AnimatedTracking;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var Animated=__webpack_require__(6);

function isAnimated(obj){
return obj instanceof Animated;
}

module.exports=isAnimated;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__(15);
var AnimatedValue=__webpack_require__(11);
var Easing=__webpack_require__(117);
var RequestAnimationFrame=__webpack_require__(20);
var CancelAnimationFrame=__webpack_require__(21);



var easeInOut=Easing.inOut(Easing.ease);var








TimingAnimation=function(_Animation){_inherits(TimingAnimation,_Animation);










function TimingAnimation(
config)
{_classCallCheck(this,TimingAnimation);var _this=_possibleConstructorReturn(this,(TimingAnimation.__proto__||Object.getPrototypeOf(TimingAnimation)).call(this));

_this._toValue=config.toValue;
_this._easing=config.easing!==undefined?config.easing:easeInOut;
_this._duration=config.duration!==undefined?config.duration:500;
_this._delay=config.delay!==undefined?config.delay:0;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;
}_createClass(TimingAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd)
{var _this2=this;
this.__active=true;
this._fromValue=fromValue;
this._onUpdate=onUpdate;
this.__onEnd=onEnd;

var start=function start(){
if(_this2._duration===0){
_this2._onUpdate(_this2._toValue);
_this2.__debouncedOnEnd({finished:true});
}else{
_this2._startTime=Date.now();
_this2._animationFrame=RequestAnimationFrame.current(_this2.onUpdate.bind(_this2));
}
};
if(this._delay){
this._timeout=setTimeout(start,this._delay);
}else{
start();
}
}},{key:'onUpdate',value:function onUpdate()

{
var now=Date.now();
if(now>=this._startTime+this._duration){
if(this._duration===0){
this._onUpdate(this._toValue);
}else{
this._onUpdate(
this._fromValue+this._easing(1)*(this._toValue-this._fromValue));

}
this.__debouncedOnEnd({finished:true});
return;
}

this._onUpdate(
this._fromValue+
this._easing((now-this._startTime)/this._duration)*(
this._toValue-this._fromValue));

if(this.__active){
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}
}},{key:'stop',value:function stop()

{
this.__active=false;
clearTimeout(this._timeout);
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return TimingAnimation;}(Animation);


module.exports=TimingAnimation;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var _bezier=__webpack_require__(118);var






Easing=function(){function Easing(){_classCallCheck(this,Easing);}_createClass(Easing,null,[{key:'step0',value:function step0(
n){
return n>0?1:0;
}},{key:'step1',value:function step1(

n){
return n>=1?1:0;
}},{key:'linear',value:function linear(

t){
return t;
}},{key:'ease',value:function ease(

t){
return _ease(t);
}},{key:'quad',value:function quad(

t){
return t*t;
}},{key:'cubic',value:function cubic(

t){
return t*t*t;
}},{key:'poly',value:function poly(

n){
return function(t){return Math.pow(t,n);};
}},{key:'sin',value:function sin(

t){
return 1-Math.cos(t*Math.PI/2);
}},{key:'circle',value:function circle(

t){
return 1-Math.sqrt(1-t*t);
}},{key:'exp',value:function exp(

t){
return Math.pow(2,10*(t-1));
}},{key:'elastic',value:function elastic()











{var bounciness=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
var p=bounciness*Math.PI;
return function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};
}},{key:'back',value:function back(

s){
if(s===undefined){
s=1.70158;
}
return function(t){return t*t*((s+1)*t-s);};
}},{key:'bounce',value:function bounce(

t){
if(t<1/2.75){
return 7.5625*t*t;
}

if(t<2/2.75){
t-=1.5/2.75;
return 7.5625*t*t+0.75;
}

if(t<2.5/2.75){
t-=2.25/2.75;
return 7.5625*t*t+0.9375;
}

t-=2.625/2.75;
return 7.5625*t*t+0.984375;
}},{key:'bezier',value:function bezier(


x1,
y1,
x2,
y2)
{
return _bezier(x1,y1,x2,y2);
}},{key:'in',value:function _in(


easing)
{
return easing;
}},{key:'out',value:function out(





easing)
{
return function(t){return 1-easing(1-t);};
}},{key:'inOut',value:function inOut(





easing)
{
return function(t){
if(t<0.5){
return easing(t*2)/2;
}
return 1-easing((1-t)*2)/2;
};
}}]);return Easing;}();


var _ease=Easing.bezier(0.42,0,1,1);



module.exports=Easing;

/***/ }),
/* 118 */
/***/ (function(module, exports) {









var NEWTON_ITERATIONS=4;
var NEWTON_MIN_SLOPE=0.001;
var SUBDIVISION_PRECISION=0.0000001;
var SUBDIVISION_MAX_ITERATIONS=10;

var kSplineTableSize=11;
var kSampleStepSize=1.0/(kSplineTableSize-1.0);

var float32ArraySupported=typeof Float32Array==='function';

function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}
function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}
function C(aA1){return 3.0*aA1;}


function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}


function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}

function binarySubdivide(aX,aA,aB,mX1,mX2){
var currentX,currentT,i=0;
do{
currentT=aA+(aB-aA)/2.0;
currentX=calcBezier(currentT,mX1,mX2)-aX;
if(currentX>0.0){
aB=currentT;
}else{
aA=currentT;
}
}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);
return currentT;
}

function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){
for(var i=0;i<NEWTON_ITERATIONS;++i){
var currentSlope=getSlope(aGuessT,mX1,mX2);
if(currentSlope===0.0){
return aGuessT;
}
var currentX=calcBezier(aGuessT,mX1,mX2)-aX;
aGuessT-=currentX/currentSlope;
}
return aGuessT;
}

module.exports=function bezier(mX1,mY1,mX2,mY2){
if(!(0<=mX1&&mX1<=1&&0<=mX2&&mX2<=1)){
throw new Error('bezier x values must be in [0, 1] range');
}


var sampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);
if(mX1!==mY1||mX2!==mY2){
for(var i=0;i<kSplineTableSize;++i){
sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);
}
}

function getTForX(aX){
var intervalStart=0.0;
var currentSample=1;
var lastSample=kSplineTableSize-1;

for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){
intervalStart+=kSampleStepSize;
}
--currentSample;


var dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);
var guessForT=intervalStart+dist*kSampleStepSize;

var initialSlope=getSlope(guessForT,mX1,mX2);
if(initialSlope>=NEWTON_MIN_SLOPE){
return newtonRaphsonIterate(aX,guessForT,mX1,mX2);
}else if(initialSlope===0.0){
return guessForT;
}else{
return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);
}
}

return function BezierEasing(x){
if(mX1===mY1&&mX2===mY2){
return x;
}

if(x===0){
return 0;
}
if(x===1){
return 1;
}
return calcBezier(getTForX(x),mY1,mY2);
};
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__(15);
var RequestAnimationFrame=__webpack_require__(20);
var CancelAnimationFrame=__webpack_require__(21);var








DecayAnimation=function(_Animation){_inherits(DecayAnimation,_Animation);








function DecayAnimation(
config)
{_classCallCheck(this,DecayAnimation);var _this=_possibleConstructorReturn(this,(DecayAnimation.__proto__||Object.getPrototypeOf(DecayAnimation)).call(this));

_this._deceleration=config.deceleration!==undefined?config.deceleration:0.998;
_this._velocity=config.velocity;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;
}_createClass(DecayAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd)
{
this.__active=true;
this._lastValue=fromValue;
this._fromValue=fromValue;
this._onUpdate=onUpdate;
this.__onEnd=onEnd;
this._startTime=Date.now();
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}},{key:'onUpdate',value:function onUpdate()

{
var now=Date.now();

var value=this._fromValue+
this._velocity/(1-this._deceleration)*(
1-Math.exp(-(1-this._deceleration)*(now-this._startTime)));

this._onUpdate(value);

if(Math.abs(this._lastValue-value)<0.1){
this.__debouncedOnEnd({finished:true});
return;
}

this._lastValue=value;
if(this.__active){
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}
}},{key:'stop',value:function stop()

{
this.__active=false;
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return DecayAnimation;}(Animation);


module.exports=DecayAnimation;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__(15);
var AnimatedValue=__webpack_require__(11);
var RequestAnimationFrame=__webpack_require__(20);
var CancelAnimationFrame=__webpack_require__(21);
var invariant=__webpack_require__(19);
var SpringConfig=__webpack_require__(121);















function withDefault(value,defaultValue){
if(value===undefined||value===null){
return defaultValue;
}
return value;
}var

SpringAnimation=function(_Animation){_inherits(SpringAnimation,_Animation);















function SpringAnimation(
config)
{_classCallCheck(this,SpringAnimation);var _this=_possibleConstructorReturn(this,(SpringAnimation.__proto__||Object.getPrototypeOf(SpringAnimation)).call(this));


_this._overshootClamping=withDefault(config.overshootClamping,false);
_this._restDisplacementThreshold=withDefault(config.restDisplacementThreshold,0.001);
_this._restSpeedThreshold=withDefault(config.restSpeedThreshold,0.001);
_this._initialVelocity=config.velocity;
_this._lastVelocity=withDefault(config.velocity,0);
_this._toValue=config.toValue;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;

var springConfig;
if(config.bounciness!==undefined||config.speed!==undefined){
invariant(
config.tension===undefined&&config.friction===undefined,
'You can only define bounciness/speed or tension/friction but not both');

springConfig=SpringConfig.fromBouncinessAndSpeed(
withDefault(config.bounciness,8),
withDefault(config.speed,12));

}else{
springConfig=SpringConfig.fromOrigamiTensionAndFriction(
withDefault(config.tension,40),
withDefault(config.friction,7));

}
_this._tension=springConfig.tension;
_this._friction=springConfig.friction;return _this;
}_createClass(SpringAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd,
previousAnimation)
{
this.__active=true;
this._startPosition=fromValue;
this._lastPosition=this._startPosition;

this._onUpdate=onUpdate;
this.__onEnd=onEnd;
this._lastTime=Date.now();

if(previousAnimation instanceof SpringAnimation){
var internalState=previousAnimation.getInternalState();
this._lastPosition=internalState.lastPosition;
this._lastVelocity=internalState.lastVelocity;
this._lastTime=internalState.lastTime;
}
if(this._initialVelocity!==undefined&&
this._initialVelocity!==null){
this._lastVelocity=this._initialVelocity;
}
this.onUpdate();
}},{key:'getInternalState',value:function getInternalState()

{
return{
lastPosition:this._lastPosition,
lastVelocity:this._lastVelocity,
lastTime:this._lastTime};

}},{key:'onUpdate',value:function onUpdate()

{
var position=this._lastPosition;
var velocity=this._lastVelocity;

var tempPosition=this._lastPosition;
var tempVelocity=this._lastVelocity;





var MAX_STEPS=64;
var now=Date.now();
if(now>this._lastTime+MAX_STEPS){
now=this._lastTime+MAX_STEPS;
}




var TIMESTEP_MSEC=1;
var numSteps=Math.floor((now-this._lastTime)/TIMESTEP_MSEC);

for(var i=0;i<numSteps;++i){

var step=TIMESTEP_MSEC/1000;



var aVelocity=velocity;
var aAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
var tempPosition=position+aVelocity*step/2;
var tempVelocity=velocity+aAcceleration*step/2;

var bVelocity=tempVelocity;
var bAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+bVelocity*step/2;
tempVelocity=velocity+bAcceleration*step/2;

var cVelocity=tempVelocity;
var cAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+cVelocity*step/2;
tempVelocity=velocity+cAcceleration*step/2;

var dVelocity=tempVelocity;
var dAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+cVelocity*step/2;
tempVelocity=velocity+cAcceleration*step/2;

var dxdt=(aVelocity+2*(bVelocity+cVelocity)+dVelocity)/6;
var dvdt=(aAcceleration+2*(bAcceleration+cAcceleration)+dAcceleration)/6;

position+=dxdt*step;
velocity+=dvdt*step;
}

this._lastTime=now;
this._lastPosition=position;
this._lastVelocity=velocity;

this._onUpdate(position);
if(!this.__active){
return;
}


var isOvershooting=false;
if(this._overshootClamping&&this._tension!==0){
if(this._startPosition<this._toValue){
isOvershooting=position>this._toValue;
}else{
isOvershooting=position<this._toValue;
}
}
var isVelocity=Math.abs(velocity)<=this._restSpeedThreshold;
var isDisplacement=true;
if(this._tension!==0){
isDisplacement=Math.abs(this._toValue-position)<=this._restDisplacementThreshold;
}

if(isOvershooting||isVelocity&&isDisplacement){
if(this._tension!==0){

this._onUpdate(this._toValue);
}

this.__debouncedOnEnd({finished:true});
return;
}
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}},{key:'stop',value:function stop()

{
this.__active=false;
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return SpringAnimation;}(Animation);


module.exports=SpringAnimation;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


















function tensionFromOrigamiValue(oValue){
return(oValue-30)*3.62+194;
}

function frictionFromOrigamiValue(oValue){
return(oValue-8)*3+25;
}

function fromOrigamiTensionAndFriction(
tension,
friction)
{
return{
tension:tensionFromOrigamiValue(tension),
friction:frictionFromOrigamiValue(friction)};

}

function fromBouncinessAndSpeed(
bounciness,
speed)
{
function normalize(value,startValue,endValue){
return(value-startValue)/(endValue-startValue);
}

function projectNormal(n,start,end){
return start+n*(end-start);
}

function linearInterpolation(t,start,end){
return t*end+(1-t)*start;
}

function quadraticOutInterpolation(t,start,end){
return linearInterpolation(2*t-t*t,start,end);
}

function b3Friction1(x){
return 0.0007*Math.pow(x,3)-
0.031*Math.pow(x,2)+0.64*x+1.28;
}

function b3Friction2(x){
return 0.000044*Math.pow(x,3)-
0.006*Math.pow(x,2)+0.36*x+2;
}

function b3Friction3(x){
return 0.00000045*Math.pow(x,3)-
0.000332*Math.pow(x,2)+0.1078*x+5.84;
}

function b3Nobounce(tension){
if(tension<=18){
return b3Friction1(tension);
}else if(tension>18&&tension<=44){
return b3Friction2(tension);
}else{
return b3Friction3(tension);
}
}

var b=normalize(bounciness/1.7,0,20);
b=projectNormal(b,0,0.8);
var s=normalize(speed/1.7,0,20);
var bouncyTension=projectNormal(s,0.5,200);
var bouncyFriction=quadraticOutInterpolation(
b,
b3Nobounce(bouncyTension),
0.01);


return{
tension:tensionFromOrigamiValue(bouncyTension),
friction:frictionFromOrigamiValue(bouncyFriction)};

}

module.exports={
fromOrigamiTensionAndFriction:fromOrigamiTensionAndFriction,
fromBouncinessAndSpeed:fromBouncinessAndSpeed};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _mapStyle = __webpack_require__(35);

var _mapStyle2 = _interopRequireDefault(_mapStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AnimatedProps = __webpack_require__(37);
var ApplyAnimatedValues = __webpack_require__(39);

function createAnimatedComponent(OriginComponent) {
  var refName = 'node';

  var AnimatedComponent = function (_Component) {
    _inherits(AnimatedComponent, _Component);

    function AnimatedComponent() {
      _classCallCheck(this, AnimatedComponent);

      return _possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).apply(this, arguments));
    }

    _createClass(AnimatedComponent, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._propsAnimated && this._propsAnimated.__detach();
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(props) {
        var didUpdate = ApplyAnimatedValues.current(this.refs[refName], props);
        if (didUpdate === false) {
          this.forceUpdate();
        }
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.attachProps(this.props);
      }
    }, {
      key: 'attachProps',
      value: function attachProps(nextProps) {
        var _this2 = this;

        var oldPropsAnimated = this._propsAnimated;

        // The system is best designed when setNativeProps is implemented. It is
        // able to avoid re-rendering and directly set the attributes that
        // changed. However, setNativeProps can only be implemented on leaf
        // native components. If you want to animate a composite component, you
        // need to re-render it. In this case, we have a fallback that uses
        // forceUpdate.
        var callback = function callback() {
          var didUpdate = ApplyAnimatedValues.current(_this2.refs[refName], _this2._propsAnimated.__getAnimatedValue());
          if (didUpdate === false) {
            _this2.forceUpdate();
          }
        };

        this._propsAnimated = new AnimatedProps(nextProps, callback);

        // When you call detach, it removes the element from the parent list
        // of children. If it goes to 0, then the parent also detaches itself
        // and so on.
        // An optimization is to attach the new elements and THEN detach the old
        // ones instead of detaching and THEN attaching.
        // This way the intermediate state isn't to go to 0 and trigger
        // this expensive recursive detaching to then re-attach everything on
        // the very next operation.
        oldPropsAnimated && oldPropsAnimated.__detach();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.attachProps(nextProps);
      }
    }, {
      key: 'render',
      value: function render() {
        var props = this._propsAnimated.__getValue();
        var style = (0, _mapStyle2.default)(props.style);

        return (0, _rax.createElement)(OriginComponent, _extends({}, props, {
          style: style,
          ref: refName
        }));
      }
    }]);

    return AnimatedComponent;
  }(_rax.Component);

  AnimatedComponent.propTypes = {
    style: function style(props, propName, componentName) {
      if (!_rax.Component.propTypes) {
        return;
      }

      // TODO(lmr): We will probably bring this back in at some point, but maybe
      // just a subset of the proptypes... We should have a common set of props
      // that will be used for all platforms.
      //
      // for (var key in ViewStylePropTypes) {
      //   if (!Component.propTypes[key] && props[key] !== undefined) {
      //     console.error(
      //       'You are setting the style `{ ' + key + ': ... }` as a prop. You ' +
      //       'should nest it in a style object. ' +
      //       'E.g. `{ style: { ' + key + ': ... } }`'
      //     );
      //   }
      // }
    }
  };

  return AnimatedComponent;
}

module.exports = createAnimatedComponent;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedWithChildren=__webpack_require__(9);
var AnimatedTransform=__webpack_require__(124);
var FlattenStyle=__webpack_require__(38);var

AnimatedStyle=function(_AnimatedWithChildren){_inherits(AnimatedStyle,_AnimatedWithChildren);


function AnimatedStyle(style){_classCallCheck(this,AnimatedStyle);var _this=_possibleConstructorReturn(this,(AnimatedStyle.__proto__||Object.getPrototypeOf(AnimatedStyle)).call(this));

style=FlattenStyle.current(style)||{};
if(style.transform&&!(style.transform instanceof Animated)){
style=_extends({},
style,{
transform:new AnimatedTransform(style.transform)});

}
_this._style=style;return _this;
}_createClass(AnimatedStyle,[{key:'__getValue',value:function __getValue()

{
var style={};
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
style[key]=value.__getValue();
}else{
style[key]=value;
}
}
return style;
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
var style={};
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
style[key]=value.__getAnimatedValue();
}
}
return style;
}},{key:'__attach',value:function __attach()

{
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
value.__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
value.__removeChild(this);
}
}
}}]);return AnimatedStyle;}(AnimatedWithChildren);


module.exports=AnimatedStyle;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__(6);
var AnimatedWithChildren=__webpack_require__(9);var

AnimatedTransform=function(_AnimatedWithChildren){_inherits(AnimatedTransform,_AnimatedWithChildren);


function AnimatedTransform(transforms){_classCallCheck(this,AnimatedTransform);var _this=_possibleConstructorReturn(this,(AnimatedTransform.__proto__||Object.getPrototypeOf(AnimatedTransform)).call(this));

_this._transforms=transforms;return _this;
}_createClass(AnimatedTransform,[{key:'__getValue',value:function __getValue()

{
return this._transforms.map(function(transform){
var result={};
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
result[key]=value.__getValue();
}else{
result[key]=value;
}
}
return result;
});
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
return this._transforms.map(function(transform){
var result={};
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
result[key]=value.__getAnimatedValue();
}else{

result[key]=value;
}
}
return result;
});
}},{key:'__attach',value:function __attach()

{var _this2=this;
this._transforms.forEach(function(transform){
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
value.__addChild(_this2);
}
}
});
}},{key:'__detach',value:function __detach()

{var _this3=this;
this._transforms.forEach(function(transform){
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
value.__removeChild(_this3);
}
}
});
}}]);return AnimatedTransform;}(AnimatedWithChildren);


module.exports=AnimatedTransform;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _easing = __webpack_require__(126);

var _easing2 = _interopRequireDefault(_easing);

var _cancelEvents = __webpack_require__(127);

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(128);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollEasing = _easing2.default.scroll;
var __currentPositionY = 0;
var __startPositionY = 0;
var __targetPositionY = 0;
var __progress = 0;
var __duration = 0;
var __cancel = false;

var __target = void 0;
var __to = void 0;
var __start = void 0;
var __deltaTop = void 0;
var __percent = void 0;
var __delayTimeout = void 0;

/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};

/*
 * Sets the cancel trigger
 */

_cancelEvents2.default.register(function () {
  __cancel = true;
});

/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var currentPositionY = function currentPositionY() {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};

var pageHeight = function pageHeight() {
  var body = document.body;
  var html = document.documentElement;

  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};

var animateTopScroll = function animateTopScroll(timestamp) {
  // Cancel on specific events
  if (__cancel) {
    return;
  }

  __deltaTop = Math.round(__targetPositionY - __startPositionY);

  if (__start === null) {
    __start = timestamp;
  }

  __progress = timestamp - __start;

  __percent = __progress >= __duration ? 1 : scrollEasing(__progress / __duration);

  __currentPositionY = __startPositionY + Math.ceil(__deltaTop * __percent);

  window.scrollTo(0, __currentPositionY);

  if (__percent < 1) {
    requestAnimationFrameHelper.call(window, animateTopScroll);
    return;
  }

  if (_scrollEvents2.default.registered.end) {
    _scrollEvents2.default.registered.end(__to, __target, __currentPositionY);
  }
};

var startAnimateTopScroll = function startAnimateTopScroll(y, options, to, target) {
  window.clearTimeout(__delayTimeout);

  __start = null;
  __cancel = false;
  __startPositionY = currentPositionY();
  __targetPositionY = options.absolute ? y : y + __startPositionY;
  __deltaTop = Math.round(__targetPositionY - __startPositionY);

  __duration = functionWrapper(options.duration)(__deltaTop);
  __duration = isNaN(parseFloat(__duration)) ? 1000 : parseFloat(__duration);
  __to = to;
  __target = target;

  if (options && options.delay > 0) {
    __delayTimeout = window.setTimeout(function animate() {
      requestAnimationFrameHelper.call(window, animateTopScroll);
    }, options.delay);
    return;
  }

  requestAnimationFrameHelper.call(window, animateTopScroll);
};

var scrollToTop = function scrollToTop(options) {
  startAnimateTopScroll(0, Object.assign(options || {}, { absolute: true }));
};

var scrollTo = function scrollTo(toY, options) {
  startAnimateTopScroll(toY, Object.assign(options || {}, { absolute: true }));
};

var scrollToBottom = function scrollToBottom(options) {
  startAnimateTopScroll(pageHeight(), Object.assign(options || {}, { absolute: true }));
};

var scrollMore = function scrollMore(toY, options) {
  startAnimateTopScroll(currentPositionY() + toY, Object.assign(options || {}, { absolute: true }));
};

exports.default = {
  animateTopScroll: startAnimateTopScroll,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * Default easing function for scroll animation
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  scroll: function scroll(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  }
};
module.exports = exports["default"];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var EVENTS = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  register: function register(cancelEvent) {
    if (_universalEnv.isWeex || typeof document === 'undefined') {
      return;
    }

    for (var i = 0; i < EVENTS.length; i = i + 1) {
      document.addEventListener(EVENTS[i], cancelEvent);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Events = {
  registered: {},
  scrollEvent: {
    register: function register(evtName, callback) {
      Events.registered[evtName] = callback;
    },
    remove: function remove(evtName) {
      Events.registered[evtName] = null;
    }
  }
};

exports.default = Events;
module.exports = exports["default"];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileGrid = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridDemo = function (_Component) {
  _inherits(GridDemo, _Component);

  function GridDemo() {
    _classCallCheck(this, GridDemo);

    return _possibleConstructorReturn(this, (GridDemo.__proto__ || Object.getPrototypeOf(GridDemo)).apply(this, arguments));
  }

  _createClass(GridDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E09\u680F'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileGrid.Row,
            null,
            (0, _rax.createElement)(
              _tileGrid.Col,
              { style: styles.bg1 },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.text },
                'Col1'
              )
            ),
            (0, _rax.createElement)(
              _tileGrid.Col,
              { style: styles.bg2 },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.text },
                'Col2'
              )
            ),
            (0, _rax.createElement)(
              _tileGrid.Col,
              { style: styles.bg3 },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.text },
                'Col3'
              )
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E8C\u680F'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileGrid.Row,
            null,
            (0, _rax.createElement)(
              _tileGrid.Col,
              { style: styles.bg3 },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.text },
                'Col1'
              )
            ),
            (0, _rax.createElement)(
              _tileGrid.Col,
              { style: styles.bg1 },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.text },
                'Col2'
              )
            )
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E8C\u680F\uFF0C\u5C42\u53E0'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileGrid.Row,
            null,
            (0, _rax.createElement)(
              _tileGrid.Col,
              { style: styles.bg1 },
              (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.text },
                'Col1'
              )
            ),
            (0, _rax.createElement)(
              _tileGrid.Col,
              null,
              (0, _rax.createElement)(
                _tileGrid.Row,
                null,
                (0, _rax.createElement)(
                  _tileGrid.Col,
                  { style: styles.bg2 },
                  (0, _rax.createElement)(
                    _tileText2.default,
                    { style: styles.text },
                    'child Col1'
                  )
                ),
                (0, _rax.createElement)(
                  _tileGrid.Col,
                  { style: styles.bg3 },
                  (0, _rax.createElement)(
                    _tileText2.default,
                    { style: styles.text },
                    'child Col2'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return GridDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },

  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFF'
  },
  bg1: {
    justifyContent: 'center',
    alighItems: 'center',
    backgroundColor: '#3F51B5',
    height: 120,
    lineHeight: 120
  },
  bg2: {
    justifyContent: 'center',
    alighItems: 'center',
    backgroundColor: '#8691d0',
    height: 120,
    lineHeight: 120
  },
  bg3: {
    justifyContent: 'center',
    alighItems: 'center',
    backgroundColor: '#b9bfe4',
    height: 120,
    lineHeight: 120
  }
};

exports.default = GridDemo;
module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _rax = __webpack_require__(0);

var _raxGrid = __webpack_require__(40);

exports.Row = _raxGrid.Row;
exports.Col = _raxGrid.Col;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var moreStyle = {};
      var gridType = this.props.gridType;

      if (gridType == 'flex-start') {
        styles.initial.display = 'block';
      } else {
        moreStyle.justifyContent = gridType;
      }

      var style = _extends({}, styles.initial, this.props.style, moreStyle);

      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, { style: style }));
    }
  }]);

  return Row;
}(_rax.Component);

var styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

exports.default = Row;
module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;


      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, {
        style: _extends({
          flex: 1
        }, style, {
          width: '1%'
        })
      }));
    }
  }]);

  return Col;
}(_rax.Component);

exports.default = Col;
module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileButton = __webpack_require__(17);

var _tileButton2 = _interopRequireDefault(_tileButton);

var _tileIcon = __webpack_require__(28);

var _tileIcon2 = _interopRequireDefault(_tileIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAMAAABkKdmIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURf///55gG/yyOvy/Pv3XRNJ1KPCgNP/+/qZnHf///vy1O+eVMf/2c/3fRaFjHP3PQf3RQtyFLNZ7Kd+HLeKOLuSRMPaqN6NkHP/5rP/7vP/9yv/3f//5p/SmN+2cM/3HP/y4O/3EP/3cRf3NQf3KQP3aRP3UQvP09P/4j/rx5v79+//6uPy8PfymOJxgGoZME4lOE/v17uqYMv/4meybM/3LS/3CPv/+2fKjNv7tUJteGZdcGdh+KtmBK96KLf/5ovzdRf3UUv/3if/8wf/+3f/1Zv3YXvisOKVmHf3fT//znv7vaPqtOf/2eotUFf3WQ3tCEnhIIP/5oP369s99Ov/5nee8lu6OMv/vc/z38v3SS/3cWf/4lf/8xv/6sf7nYP/3hP2+Q+aTMP/+57J3I/3gbfeoN7h9Jf/uifbFjv/wk//zW/vq2P7jd/rPQcvKyN/g4ctuJvbq3taSWPDaxc53Me/XwOjCnueFLv/4jP7pb/3jR/3QV/3ZSfjTnP/90fqfNt6gMv3URf3rZvnhyf/nheqoNfijQ/7rX//0bOKyN8+tOZlmHNyeMbefiYJIEpFUFvf5+fjJQO/w8aqTfdGULsK2rOrs7vO+POPl57qsoNvd3dbX1/Xm19mYYMxxKdOMUd6TUu/StemOMt6kcfefNfmXNP3iXf3lR/3dZPSWPv/uff/90/SmWvjXrfXYQ/7pefzbTP7kVrmQLO7MQffRQdWzOPzjUebJQ4dQFP3KRMObMdzBQ+/VSfixOatuILellvb295ZzU41hNsjBu8/R0Y9pRt+whuzQtcKJKtOGRdWYL+mkZOuqN9ODPv/wfv3cUe23hfPJnv/6tf/0i//9zfTNpvq3QP/91v/+4vrlzve3ZfqvQfewWti2O9qfMZBbGZNeGYpUHs+RLYVOGpp+ZYBTMbOmmqKJc/Lgzd+pe/SfNdyhb91/LPeSM/e2VMWiM/edPfnbufe/eKNwIal4JeekNKOFaNXQy6aJbsOHKeqqN4hcNNPQzf/zYJVlKPfTQtoAAAUUSURBVEjHY2AYfICdmmYZ3lpXV1e3rkVTizj1mnW3rzMrKisryzNff595i6Au9pzPd5j5L1RleNl7ZW1Y3qTIdPcTfk2GmXd0ojbErbmZDAI3zWOzohWZbufg0ZFzl2lXrmT9mhvmLiBgfmNNvZSXo0L7Opwh1dLO5ejl7BwrdRWo6wZQ/VWpWGdn7Vxm3UwtnDrcZOIua0tKOsfGSklJxcY6S0pqX46LawXqwWpPTjuTm5e9jIyERFycNlCfpDZQuYSEjIy9V6tOwzUseiLX6ppmZMUYh4YGgfVJgFUHhYYax2RlpXJ9bMHQwZnZkJjbmnGlslIjJsYYqBEIjI1jYjQ0Kq9kZLTW6K6NxHDWKh+33A2rz0snJCQ4OTlpgEClkxOQJ31+9Ybc1MRll9C1XGxIXJmaWhURwcPj6+srDQFAFg9PRERVVWpqje4qQ1Qdmqt0Td3clsc3e3t3ejd38kAAiOnt3Ry/cqVbDdeya6haLr1jMnWMjl4e39Gxo2fn7g5XMNjzwK87viN+eXS0Y01iw1qUQGM/s4xrV5TjhQubNu3169cP6M4Ggb36QOa9TdsvXHCMMk1sCNdECeHFSxUUd0XVbvT03K3PJz7h4XZLINhsAGT2bPTcWBtluotZN3wRspa5FUu5zOSVm1hqVXusGRkZ9XcAdVQ/BDL1dm6pZWniV1HUSQu/iKxlUcVSJh1FFWU1/60PrLv3fNXftmLFivV+Pdv2fNHvYlETUJFnVkgLP8OJpKW84jWTjpm8Cr/AVr9uXt69ftuqq6vX77zHq7RFv0tNQFnejJlLNnwhsv/DhNl8FJiB1ghs3bxeVZX3ww5eXl6HzQ5Kqkq7twgoq8ib6TDJLkbTIueuwAy0RlmAhYVFVdVBCQR4VVWBPDV+FXlFZgUmC1Qt5W+NxLh0zIDW8Auo+fuDdKmC1furCYAtYVbwYROZh6ylTChJlkmhcX/vDKB31NSAesCgCaiDX2XG/f29OlxiJsJLkEOsiFWEzYfrV2BggHXK1K4ZkyblgcCkSTO6pqZYBwQGpiswyXLbhCFr0TonbJLGNPVp/rQph54FBvTrG/gZGBjo9wcEPjv2YtaRp4+53NlEWUtQcssSmyQLn7Y/+UdnFxTM/nFk2qwDBw7MmnYkfw6QezT/8G8mWRPhENSkvIjVziRtn/Xzo3Nmz5w+Wf3gwYlAcFB98vSZs+fkP9cDWSL0BjUlB5+zTWJzf/zk2JRpc4B6JqtDwPSZf2e9OPZkqo+skR1rGVoWK2e1M7LYx2FlNeHR4UPfp/QBwZSfhw4/MphgbbV/n6yciFAxesFkeEpIxMTim544h4eHOB8jGPDxiXtwcIgztsmyJdliWMLAcILVVtREtpdRnAMViOv1irFxC7IuwSz9tF6xCgL1NPLxIWvw4ONrBOqwEzqlyYlZKkUWg/RYtKVYgZwD0SBulXJWVg6oo/QlJ6YWBk7NBayCIkZyYo0penp84uLifHpWKffF2IxEgTrK2LHoYOBkN5zHamsnasQmdvb0yfSU9JOn28TYTLhFBIVCSrDqAOmJPF4qJCgiamTCZmEhK2vBZmLELWJnw1pcxM6JXQsDJ6dWyQJWIUE7EdEkbiBIEhURtGENKY/EqQOkhz34RPF8ViFbQRCwtWGdHxKmyc7Oia/m42Rn15obNi9kfiEQlC44XhLMjscKhE3s7MGGRXOLNIO1QOo5iWkzcIK1gZVz0qGZQTUAAHpbpNhORZJqAAAAAElFTkSuQmCC';
var iconfont = '//at.alicdn.com/t/font_383853_eoj22s8ewx6flxr.ttf';
var icons = {
  grid: '\uE644',
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
var NewImage = (0, _tileIcon.createIconSet)(icons, 'iconfont', iconfont);

var IconDemo = function (_Component) {
  _inherits(IconDemo, _Component);

  function IconDemo() {
    _classCallCheck(this, IconDemo);

    return _possibleConstructorReturn(this, (IconDemo.__proto__ || Object.getPrototypeOf(IconDemo)).apply(this, arguments));
  }

  _createClass(IconDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'Base64 \u56FE\u7247'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            null,
            (0, _rax.createElement)(_tileIcon2.default, { style: styles.icon, source: { uri: iconImage } })
          )
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'iconfont uri'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileIcon2.default, { style: { fontSize: 40 }, fontFamily: 'iconfont', source: { uri: iconfont, codePoint: '\uE618' } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          'iconfont \u65B0\u6807\u7B7E'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            { style: { flexDirection: 'row', flexWrap: 'wrap', width: 600 } },
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'grid' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'image' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'waterfall' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'video' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'refreshcontrol' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'gotop' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'button' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'icon' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'calendar' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'slider' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'input' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'countdown' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'recyclerview' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'text' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'multirow' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'view' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'listview' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'scrollview' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'link' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'picker' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'modal' }),
            (0, _rax.createElement)(NewImage, { style: styles.newImage, name: 'right' })
          )
        )
      );
    }
  }]);

  return IconDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  newImage: {
    fontSize: 40,
    marginRight: 20,
    marginBottom: 20
  },
  title: {
    color: '#F60',
    padding: 20
  },
  iconBox: {
    backgroundColor: '#dddddd'
  },
  icon: {
    width: 50,
    height: 48
  }
};

exports.default = IconDemo;
module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileModal = __webpack_require__(135);

var _tileModal2 = _interopRequireDefault(_tileModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalDemo = function (_Component) {
  _inherits(ModalDemo, _Component);

  function ModalDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalDemo.__proto__ || Object.getPrototypeOf(ModalDemo)).call.apply(_ref, [this].concat(args))), _this), _this.showModal = function () {
      _this.refs.modal.show();
    }, _this.hideModal = function () {
      _this.refs.modal.hide();
    }, _this.onShow = function (param) {
      console.log('modal show', param);
    }, _this.onHide = function (param) {
      console.log('modal hide', param);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u6A21\u6001\u6846'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileView2.default,
            { style: styles.wrapper },
            (0, _rax.createElement)(
              _tileView2.default,
              { clickable: true, style: styles.click, onPress: this.showModal },
              (0, _rax.createElement)(
                _tileText2.default,
                null,
                '\u6253\u5F00\u6A21\u6001\u6846'
              )
            ),
            (0, _rax.createElement)(
              _tileModal2.default,
              {
                ref: 'modal',
                contentStyle: styles.modalStyle,
                onShow: this.onShow,
                onHide: this.onHide
              },
              (0, _rax.createElement)(
                _tileView2.default,
                { style: styles.body },
                (0, _rax.createElement)(
                  _tileText2.default,
                  null,
                  'Content'
                )
              ),
              (0, _rax.createElement)(
                _tileView2.default,
                { style: styles.footer },
                (0, _rax.createElement)(
                  _tileView2.default,
                  { clickable: true, style: styles.button, onPress: this.hideModal },
                  (0, _rax.createElement)(
                    _tileText2.default,
                    null,
                    'OK'
                  )
                )
              ),
              (0, _rax.createElement)(
                _tileView2.default,
                { clickable: true, style: styles.close, onPress: this.hideModal },
                (0, _rax.createElement)(
                  _tileText2.default,
                  { style: styles.closeText },
                  'x'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ModalDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  wrapper: {
    paddingLeft: '24rem',
    paddingRight: '24rem',
    paddingTop: '24rem',
    flex: 1
  },
  click: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100rem',
    lineHeight: '100rem',
    textAlign: 'center',
    borderWidth: '2rem',
    borderStyle: 'solid',
    borderColor: '#000000'
  },
  modalStyle: {
    width: '640rem',
    height: '340rem'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    height: '220rem'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '120rem'
  },
  button: {
    width: '300rem',
    height: '60rem',
    borderWidth: '2rem',
    borderStyle: 'solid',
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    borderWidth: '2rem',
    borderStyle: 'solid',
    borderColor: '#000000',
    position: 'absolute',
    top: '-18rem',
    right: '-18rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40rem',
    height: '40rem',
    borderRadius: '20rem',
    backgroundColor: '#ffffff'
  },
  closeText: {
    fontSize: '28rem',
    color: '#000000'
  }
};

exports.default = ModalDemo;
module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxModal = __webpack_require__(136);

var _raxModal2 = _interopRequireDefault(_raxModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxModal2.default;
module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxAnimated = __webpack_require__(34);

var _raxAnimated2 = _interopRequireDefault(_raxAnimated);

var _raxTouchable = __webpack_require__(8);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedView = _raxAnimated2.default.View;

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      visible: false
    };

    _this.fadeAnim = new _raxAnimated2.default.Value(0);
    return _this;
  }

  _createClass(Modal, [{
    key: 'animated',
    value: function animated(state, callback) {
      var visible = state.visible;

      _raxAnimated2.default.timing(this.fadeAnim, { toValue: visible === true ? 1 : 0 }).start(callback);
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      var currentState = { visible: true };
      this.setState(currentState, function () {
        return _this2.animated(currentState, function () {
          return _this2.props.onShow && _this2.props.onShow(currentState);
        });
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this3 = this;

      var currentState = { visible: false };
      this.animated(currentState, function () {
        return _this3.setState(currentState, function () {
          return _this3.props.onHide && _this3.props.onHide(currentState);
        });
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(visible) {
      if (visible) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible != this.props.visible && nextProps.visible != this.state.visible) {
        this.toggle(nextProps.visible);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        visible: this.props.visible
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animated(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          contentStyle = _props.contentStyle,
          children = _props.children;
      var visible = this.state.visible;
      // HACK: register a empty click event to fix Android click penetration problem when in mask

      return visible && (0, _rax.createElement)(
        AnimatedView,
        {
          onClick: function onClick() {
            _this4.hide();
          },
          style: [styles.mask, { opacity: this.fadeAnim }]
        },
        (0, _rax.createElement)(
          _raxTouchable2.default,
          { onPress: function onPress(e) {
              if (_universalEnv.isWeb) {
                e.stopPropagation && e.stopPropagation();
              }
            }, style: [styles.main, contentStyle] },
          children
        )
      );
    }
  }]);

  return Modal;
}(_rax.Component);

Modal.propTypes = {
  onHide: _rax.PropTypes.func,
  onShow: _rax.PropTypes.func,
  visible: _rax.PropTypes.bool
};
Modal.defaultProps = {
  visible: false
};
exports.default = Modal;


var styles = {
  mask: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width: 640,
    height: 340,
    backgroundColor: '#ffffff'
  }
};
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileMultirow = __webpack_require__(138);

var _tileMultirow2 = _interopRequireDefault(_tileMultirow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiRowDemo = function (_Component) {
  _inherits(MultiRowDemo, _Component);

  function MultiRowDemo() {
    _classCallCheck(this, MultiRowDemo);

    return _possibleConstructorReturn(this, (MultiRowDemo.__proto__ || Object.getPrototypeOf(MultiRowDemo)).apply(this, arguments));
  }

  _createClass(MultiRowDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E00\u884C\u4E09\u4E2A'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileMultirow2.default, {
            dataSource: [1, 2, 3, 4, 5, 6],
            cells: 3,
            renderCell: function renderCell(item, index) {
              return (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.num },
                item
              );
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E00\u884C\u4E09\u4E2A\uFF0C\u591A\u4F59\u7B49\u5206'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileMultirow2.default, {
            dataSource: [1, 2, 3, 4, 5],
            cells: 3,
            renderCell: function renderCell(item, index) {
              return (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.num },
                item
              );
            } })
        ),
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u4E00\u884C\u4E09\u4E2A\uFF0C\u6DFB\u52A0\u5360\u4F4D\u5751'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileMultirow2.default, {
            dataSource: [1, 2, 3, 4, 5, ''],
            cells: 3,
            renderCell: function renderCell(item, index) {
              if (!item) return;
              return (0, _rax.createElement)(
                _tileText2.default,
                { style: styles.num },
                item
              );
            } })
        )
      );
    }
  }]);

  return MultiRowDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  title: {
    color: '#F60',
    padding: 20
  },
  num: {
    textAlign: 'center',
    border: "1px solid #CCC",
    backgroundColor: "#EEE",
    lineHeight: 60,
    marginBottom: 10,
    marginRight: 10,
    color: "#777"
  }
};

exports.default = MultiRowDemo;
module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxMultirow = __webpack_require__(139);

var _raxMultirow2 = _interopRequireDefault(_raxMultirow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxMultirow2.default;
module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxGrid = __webpack_require__(40);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        this.getContent()
      );
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var props = this.props,
          list = props.dataSource,
          count = props.cells,
          renderCell = props.renderCell;

      var grids = [];

      var gridDataArr = [];
      for (var i = 0; i < list.length; i++) {
        var index = Math.floor(i / count);
        if (i % count == 0) {
          gridDataArr[index] = [];
        }
        gridDataArr[index].push((0, _rax.createElement)(
          _raxGrid.Col,
          { style: props.colStyle },
          renderCell(list[i], i)
        ));
        if (i % count == 0 && i != 0) {
          grids.push((0, _rax.createElement)(
            _raxGrid.Row,
            { style: props.rowStyle },
            gridDataArr[index - 1]
          ));
        }
        if (i == list.length - 1) {
          grids.push((0, _rax.createElement)(
            _raxGrid.Row,
            { style: props.rowStyle },
            gridDataArr[index]
          ));
        }
      };

      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        grids
      );
    }
  }]);

  return List;
}(_rax.Component);

List.defaultProps = {
  colStyle: {},
  rowStyle: {},
  cells: 1,
  dataSource: [],
  renderCell: function renderCell() {}
};

exports.default = List;
module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileLink = __webpack_require__(12);

var _tileLink2 = _interopRequireDefault(_tileLink);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var image = '//camo.githubusercontent.com/27b9253de7b03a5e69a7c07b0bc1950c4976a5c2/68747470733a2f2f67772e616c6963646e2e636f6d2f4c312f3436312f312f343031333762363461623733613132336537386438323436636438316338333739333538633939395f343030783430302e6a7067';

var PictureDemo = function (_Component) {
  _inherits(PictureDemo, _Component);

  function PictureDemo() {
    _classCallCheck(this, PictureDemo);

    return _possibleConstructorReturn(this, (PictureDemo.__proto__ || Object.getPrototypeOf(PictureDemo)).apply(this, arguments));
  }

  _createClass(PictureDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileImage2.default, {
            source: { uri: image },
            style: {
              width: 600
            },
            lazyload: true
          }),
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            'resizeMode="cover"'
          ),
          (0, _rax.createElement)(_tileImage2.default, {
            source: { uri: image },
            style: {
              width: 400,
              height: 200
            },
            resizeMode: 'cover',
            lazyload: true,
            autoWebp: false,
            autoCompress: false,
            autoRemoveScheme: false,
            autoReplaceDomain: false,
            autoScaling: false,
            highQuality: false
          }),
          (0, _rax.createElement)(
            _tileText2.default,
            null,
            'text and image'
          ),
          (0, _rax.createElement)(
            _tileImage2.default,
            {
              source: { uri: image },
              style: {
                width: 300,
                height: 300
              },
              lazyload: true
            },
            (0, _rax.createElement)(
              _tileText2.default,
              { style: { color: 'blue', fontSize: 40 } },
              'hello rax'
            )
          )
        )
      );
    }
  }]);

  return PictureDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  }
};

exports.default = PictureDemo;
module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileLink = __webpack_require__(12);

var _tileLink2 = _interopRequireDefault(_tileLink);

var _tileVideo = __webpack_require__(32);

var _tileVideo2 = _interopRequireDefault(_tileVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = {
  log: function log(content) {
    console && console.log(content);
  }
};

var PlayerDemo = function (_Component) {
  _inherits(PlayerDemo, _Component);

  function PlayerDemo() {
    _classCallCheck(this, PlayerDemo);

    return _possibleConstructorReturn(this, (PlayerDemo.__proto__ || Object.getPrototypeOf(PlayerDemo)).apply(this, arguments));
  }

  _createClass(PlayerDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(_tileVideo2.default, {
            ref: 'video',
            style: {
              height: 400,
              width: 650
            },
            poster: '//gw.alicdn.com/tps/TB1m0.aKFXXXXbJXXXXXXXXXXXX-750-300.png' // 封面图片
            , src: 'http://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4' // 视频源地址
            , controls: true,
            startBtn: true
            // autoPlay
            , hasFullScreen: true,
            onVideoFail: logger.log,
            onVideoFinish: logger.log,
            onVideoPlay: logger.log,
            onVideoPause: logger.log
          })
        )
      );
    }
  }]);

  return PlayerDemo;
}(_rax.Component);

var styles = {
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  }
};

exports.default = PlayerDemo;
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _tileView = __webpack_require__(3);

var _tileView2 = _interopRequireDefault(_tileView);

var _tileText = __webpack_require__(4);

var _tileText2 = _interopRequireDefault(_tileText);

var _tileImage = __webpack_require__(10);

var _tileImage2 = _interopRequireDefault(_tileImage);

var _tileInput = __webpack_require__(25);

var _tileInput2 = _interopRequireDefault(_tileInput);

var _tileSlider = __webpack_require__(143);

var _tileSlider2 = _interopRequireDefault(_tileSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderDemo = function (_Component) {
  _inherits(SliderDemo, _Component);

  function SliderDemo(props) {
    _classCallCheck(this, SliderDemo);

    var _this = _possibleConstructorReturn(this, (SliderDemo.__proto__ || Object.getPrototypeOf(SliderDemo)).call(this, props));

    _this.state = {
      autoPlay: true,
      showsPagination: true,
      autoPlayInterval: 3000,
      loop: true
    };

    _this.onchange = function (index) {
      console.log('change', index);
    };

    return _this;
  }

  _createClass(SliderDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _tileView2.default,
        null,
        (0, _rax.createElement)(
          _tileText2.default,
          { style: styles.title },
          '\u8F6E\u64AD'
        ),
        (0, _rax.createElement)(
          _tileView2.default,
          { style: styles.container },
          (0, _rax.createElement)(
            _tileSlider2.default,
            { className: 'slider', width: '500rem', height: '480rem', style: styles.slider,
              autoPlay: this.state.autoPlay,
              loop: this.state.loop,
              showsPagination: this.state.showsPagination,
              paginationStyle: styles.paginationStyle,
              autoPlayInterval: this.state.autoPlayInterval,
              onChange: this.onchange },
            (0, _rax.createElement)(
              _tileView2.default,
              { style: styles.itemWrap },
              (0, _rax.createElement)(_tileImage2.default, { style: styles.image, source: { uri: 'https://img.alicdn.com/tfs/TB18TmKSVXXXXbLXXXXXXXXXXXX-142-135.png' } })
            ),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: styles.itemWrap },
              (0, _rax.createElement)(_tileImage2.default, { style: styles.image, source: { uri: 'https://img.alicdn.com/tfs/TB18TmKSVXXXXbLXXXXXXXXXXXX-142-135.png' } })
            ),
            (0, _rax.createElement)(
              _tileView2.default,
              { style: styles.itemWrap },
              (0, _rax.createElement)(_tileImage2.default, { style: styles.image, source: { uri: 'https://img.alicdn.com/tfs/TB18TmKSVXXXXbLXXXXXXXXXXXX-142-135.png' } })
            )
          )
        )
      );
    }
  }]);

  return SliderDemo;
}(_rax.Component);

var styles = {
  slider: {
    marginLeft: 40,
    width: 500,
    position: 'relative',
    overflow: 'hidden',
    height: 480,
    backgroundColor: '#cccccc',
    borderWidth: 2,
    borderColor: '#CCC',
    borderStyle: 'solid'
  },
  title: {
    color: '#F60',
    padding: 20
  },
  itemWrap: {
    width: 500,
    height: 480
  },
  image: {
    width: 500,
    height: 480
  },
  button: {
    marginTop: 20,
    width: 340,
    height: 80
  },
  paginationStyle: {
    position: 'absolute',
    width: 500,
    height: 40,
    bottom: 20,
    left: 0,
    itemColor: 'rgba(0, 0, 0, 0.5)',
    itemSelectedColor: 'rgb(255, 80, 0)',
    itemSize: 16
  }
};

exports.default = SliderDemo;
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _raxSlider = __webpack_require__(144);

var _raxSlider2 = _interopRequireDefault(_raxSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _raxSlider2.default;
module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderWeb = void 0;
if (!_universalEnv.isWeex) {
  SliderWeb = __webpack_require__(145);
}

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      index: _this.props.index || 0
    }, _this.onChange = function (e) {
      _this.props.onChange(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'handleNativeProps',
    value: function handleNativeProps() {
      var _props = this.props,
          defaultPaginationStyle = _props.defaultPaginationStyle,
          autoPlay = _props.autoPlay,
          showsPagination = _props.showsPagination,
          paginationStyle = _props.paginationStyle,
          autoPlayInterval = _props.autoPlayInterval,
          loop = _props.loop,
          width = _props.width,
          height = _props.height;
      var index = this.state.index;


      var nativeProps = _extends({
        onChange: this.onChange,
        autoPlay: autoPlay,
        showIndicators: showsPagination,
        paginationStyle: paginationStyle ? paginationStyle : defaultPaginationStyle,
        interval: autoPlayInterval,
        infinite: loop,
        index: index
      }, {
        style: _extends({
          width: width,
          height: height
        }, this.props.style)
      });

      return nativeProps;
    }
  }, {
    key: 'slideTo',
    value: function slideTo(index) {
      if (_universalEnv.isWeex) {
        this.setState({
          index: index
        });
      } else {
        this.refs.slider.slideTo(index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex) {
        var children = this.props.children;
        var nativeProps = this.handleNativeProps();
        return (0, _rax.createElement)(
          'slider',
          nativeProps,
          nativeProps.showIndicators ? (0, _rax.createElement)('indicator', { style: nativeProps.paginationStyle }) : null,
          children
        );
      } else {
        return (0, _rax.createElement)(SliderWeb, _extends({ ref: 'slider' }, this.props));
      }
    }
  }]);

  return Slider;
}(_rax.Component);

Slider.defaultProps = {
  onChange: function onChange() {},
  defaultPaginationStyle: defaultPaginationStyle
};


var defaultPaginationStyle = {
  position: 'absolute',
  width: 750,
  height: 40,
  bottom: 20,
  left: 0,
  itemColor: 'rgba(255, 255, 255, 0.5)',
  itemSelectedColor: 'rgb(255, 80, 0)',
  itemSize: 8
};

exports.default = Slider;
module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalPanresponder = __webpack_require__(24);

var _universalPanresponder2 = _interopRequireDefault(_universalPanresponder);

var _SwipeEvent = __webpack_require__(146);

var _SwipeEvent2 = _interopRequireDefault(_SwipeEvent);

var _style = __webpack_require__(148);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SWIPE_LEFT = 'SWIPE_LEFT';
var SWIPE_RIGHT = 'SWIPE_RIGHT';

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onSwipeBegin = function () {
      _this.isSwiping = true;
      clearInterval(_this.autoPlayTimer);
    };

    _this.onSwipe = function (_ref) {
      var direction = _ref.direction,
          distance = _ref.distance,
          velocity = _ref.velocity;

      if (_this.isLoopEnd()) return;
      var changeX = distance - _this.offsetX;
      var swipeView = (0, _rax.findDOMNode)(_this.refs.swipeView);
      var styleText = 'translate3d(' + changeX + 'px, 0px, 0px)';
      swipeView.style.transform = styleText;
      swipeView.style.webkitTransform = styleText;
    };

    _this.onSwipeEnd = function (_ref2) {
      var direction = _ref2.direction,
          distance = _ref2.distance,
          velocity = _ref2.velocity;

      _this.isSwiping = false;
      var num = _this.total;
      var realIndex = _this.loopedIndex();
      if (!(_this.isLoopEnd() && (realIndex === num - 1 && direction === SWIPE_LEFT || realIndex === 0 && direction === SWIPE_RIGHT))) {
        _this.slideTo(_this.index, direction);
      }
      if (_this.props.autoPlay) {
        _this.autoPlay();
      }
    };

    _this.getPages = function () {
      var children = _this.props.children;
      if (!children.length || children.length <= 1) {
        return (0, _rax.createElement)(
          _raxView2.default,
          { style: _style2.default.childrenStyle },
          children
        );
      }

      return children.map(function (child, index) {
        var refStr = 'child' + index;
        var translateStyle = {
          width: _this.width + 'px',
          height: _this.height,
          left: index * _this.width + 'px'
        };
        return (0, _rax.createElement)(
          _raxView2.default,
          { ref: refStr, className: 'childWrap' + index,
            style: [_style2.default.childrenStyle, translateStyle], key: index },
          child
        );
      });
    };

    _this.index = 0;
    _this.height = null;
    _this.width = null;
    _this.loopIdx = 0;
    _this.offsetX = null;
    _this.isSwiping = false;
    _this.total = 0;
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          height = _props.height,
          width = _props.width;

      if (children.length < 2) return;
      this.index = 0;
      this.height = height;
      // TODO: Avoid convert unit in component
      try {
        this.width = parseFloat(width) * document.documentElement.clientWidth / 750;
      } catch (err) {
        this.width = parseFloat(width);
      }
      this.loopIdx = 0;
      this.total = children.length;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoPlay && this.total > 1) {
        this.autoPlay();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }
  }, {
    key: 'autoPlay',
    value: function autoPlay() {
      var _this2 = this;

      var autoplayInterval = this.props.autoplayInterval;
      if (this.isSwiping) return;
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = setInterval(function () {
        if (_this2.isLoopEnd()) return;
        _this2.slideTo(_this2.index, SWIPE_LEFT);
      }, parseFloat(autoplayInterval));
    }
  }, {
    key: 'slideTo',
    value: function slideTo(index, direction) {
      if (this.isSwiping) return;

      if (direction) {
        this.index = direction === SWIPE_LEFT ? index + 1 : index - 1;
      } else {
        this.index = index;
      }
      this.offsetX = this.index * this.width;

      var realIndex = this.loopedIndex();

      // translate3d for performance optimization
      var swipeView = (0, _rax.findDOMNode)(this.refs.swipeView);
      var styleText = 'translate3d(' + -1 * this.offsetX + 'px, 0px, 0px)';
      swipeView.style.transform = styleText;
      swipeView.style.webkitTransform = styleText;

      this.loopIdx = this.index < 0 && realIndex !== 0 ? this.total - realIndex : realIndex;
      var childNum = 'child' + this.loopIdx;
      var childView = (0, _rax.findDOMNode)(this.refs[childNum]);
      childView.style.left = this.offsetX + 'px';

      this.props.onChange({ index: this.loopIdx });
      this.setState({
        offsetX: this.offsetX
      });
    }
  }, {
    key: 'isLoopEnd',
    value: function isLoopEnd() {
      var realIndex = this.loopedIndex();
      var num = this.total;
      if (!this.props.loop && (realIndex === num - 1 || realIndex === 0)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'loopedIndex',


    // index from 0 to length
    value: function loopedIndex(index, total) {
      index = index || this.index;
      total = total || this.total;
      return Math.abs(index) % total;
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var props = this.props;
      if (this.total <= 1) return;

      Object.assign(_style2.default.defaultPaginationStyle, props.paginationStyle);
      var _styles$defaultPagina = _style2.default.defaultPaginationStyle,
          itemSelectedColor = _styles$defaultPagina.itemSelectedColor,
          itemColor = _styles$defaultPagina.itemColor,
          itemSize = _styles$defaultPagina.itemSize;


      var activeStyle = [_style2.default.activeDot, {
        backgroundColor: itemSelectedColor,
        width: itemSize,
        height: itemSize
      }];

      var normalStyle = [_style2.default.normalDot, {
        backgroundColor: itemColor,
        width: itemSize,
        height: itemSize
      }];

      var dots = [];
      var ActiveDot = this.props.activeDot || (0, _rax.createElement)(_raxView2.default, { style: activeStyle });
      var NormalDot = this.props.normalDot || (0, _rax.createElement)(_raxView2.default, { style: normalStyle });
      var realIndex = this.loopIdx;

      for (var i = 0; i < this.total; i++) {
        dots.push(i === realIndex ? (0, _rax.cloneElement)(ActiveDot, { key: i }) : (0, _rax.cloneElement)(NormalDot, { key: i }));
      }

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [_style2.default.defaultPaginationStyle, props.paginationStyle] },
        dots
      );
    }
  }, {
    key: 'renderSwipeView',
    value: function renderSwipeView(pages) {
      var _props2 = this.props,
          initialVelocityThreshold = _props2.initialVelocityThreshold,
          verticalThreshold = _props2.verticalThreshold,
          vertical = _props2.vertical,
          horizontalThreshold = _props2.horizontalThreshold,
          children = _props2.children;

      var style = {
        width: this.width + 'px',
        height: this.height
      };

      return children.length && children.length > 1 ? (0, _rax.createElement)(
        _SwipeEvent2.default,
        { style: [_style2.default.swipeWrapper, style],
          onSwipeBegin: this.onSwipeBegin,
          onSwipeEnd: this.onSwipeEnd,
          onSwipe: this.onSwipe,
          initialVelocityThreshold: initialVelocityThreshold,
          verticalThreshold: verticalThreshold,
          vertical: vertical,
          horizontalThreshold: horizontalThreshold },
        (0, _rax.createElement)(
          _raxView2.default,
          { ref: 'swipeView', style: [_style2.default.swipeStyle, style] },
          pages
        )
      ) : (0, _rax.createElement)(
        _raxView2.default,
        { ref: 'swipeView', style: [_style2.default.swipeStyle, style] },
        pages
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var that = this;
      var _props3 = this.props,
          style = _props3.style,
          showsPagination = _props3.showsPagination;

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [_style2.default.slideWrapper, style] },
        this.renderSwipeView(this.getPages()),
        showsPagination ? this.renderPagination() : ''
      );
    }
  }]);

  return Slider;
}(_rax.Component);

;

Slider.defaultProps = {
  horizontal: true,
  showsPagination: true,
  loop: true,
  autoPlay: false,
  autoplayInterval: 3000,
  index: 0,
  paginationStyle: null,
  initialVelocityThreshold: 0.7,
  verticalThreshold: 10,
  horizontalThreshold: 10,
  vertical: false
};

Slider.propTypes = {
  onChange: _rax.PropTypes.func,
  paginationStyle: _rax.PropTypes.object
};

exports.default = Slider;
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalPanresponder = __webpack_require__(24);

var _universalPanresponder2 = _interopRequireDefault(_universalPanresponder);

var _isValidSwipe = __webpack_require__(147);

var _isValidSwipe2 = _interopRequireDefault(_isValidSwipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var directions = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT'
};

var SwipeEvent = function (_Component) {
  _inherits(SwipeEvent, _Component);

  function SwipeEvent(props) {
    _classCallCheck(this, SwipeEvent);

    var _this = _possibleConstructorReturn(this, (SwipeEvent.__proto__ || Object.getPrototypeOf(SwipeEvent)).call(this, props));

    _this.state = {
      swipe: {
        direction: null,
        distance: 0,
        velocity: 0
      }
    };
    // swipe is happen
    _this.swipeDetected = false;
    // swipe speed
    _this.velocityProp = null;
    // swipe distance
    _this.distanceProp = null;
    // swipe direction
    _this.swipeDirection = null;
    return _this;
  }

  _createClass(SwipeEvent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var that = this;
      this.panResponder = _universalPanresponder2.default.create({
        onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt) {
          return true;
        },
        onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt) {
          return true;
        },
        onPanResponderMove: function onPanResponderMove(evt, gestureState) {
          var dx = gestureState.dx,
              dy = gestureState.dy,
              vx = gestureState.vx,
              vy = gestureState.vy;
          var _props = _this2.props,
              onSwipeBegin = _props.onSwipeBegin,
              onSwipe = _props.onSwipe,
              onSwipeEnd = _props.onSwipeEnd;
          // when no swipe

          if (!_this2.props.continuous && _this2.swipeDetected) {
            return;
          }
          var initialDetection = false;
          var validHorizontal = false;
          var validVertical = false;

          if (!_this2.swipeDetected) {
            initialDetection = true;
            // horizontal
            validHorizontal = that.props.horizontal ? (0, _isValidSwipe2.default)(vx, dy, that.props.initialVelocityThreshold, that.props.verticalThreshold) : '';

            // vertical
            validVertical = that.props.vertical ? (0, _isValidSwipe2.default)(vy, dx, that.props.initialVelocityThreshold, that.props.horizontalThreshold) : '';

            if (validHorizontal) {
              evt.preventDefault && evt.preventDefault();
              _this2.velocityProp = 'vx';
              _this2.distanceProp = 'dx';
              // left
              if ((_this2.props.horizontal || _this2.props.left) && dx < 0) {
                _this2.swipeDirection = directions.SWIPE_LEFT;
                // right
              } else if ((_this2.props.horizontal || _this2.props.right) && dx > 0) {
                _this2.swipeDirection = directions.SWIPE_RIGHT;
              }
            } else if (validVertical) {
              _this2.velocityProp = 'vy';
              _this2.distanceProp = 'dy';
              // up
              if ((_this2.props.vertical || _this2.props.up) && dy < 0) {
                _this2.swipeDirection = directions.SWIPE_UP;
                // down
              } else if ((_this2.props.vertical || _this2.props.down) && dy > 0) {
                _this2.swipeDirection = directions.SWIPE_DOWN;
              }
            }

            if (_this2.swipeDirection) {
              _this2.swipeDetected = true;
            }
          }

          if (_this2.swipeDetected) {
            // gestureState.dx || gestureState.dy
            var distance = gestureState[_this2.distanceProp];
            // gestureState.vx || gestureState.vx
            var velocity = gestureState[_this2.velocityProp];

            var swipeState = {
              direction: _this2.swipeDirection,
              distance: distance,
              velocity: velocity
            };

            if (initialDetection) {
              onSwipeBegin && onSwipeBegin(swipeState);
            } else {
              onSwipe && onSwipe(swipeState);
            }

            if (_this2.props.setGestureState) {
              _this2.setState({
                swipe: swipeState
              });
            }
          }
        },
        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
          return true;
        },
        onPanResponderTerminate: this.handleTerminationAndRelease.bind(this),
        onPanResponderRelease: this.handleTerminationAndRelease.bind(this)
      });
    }
  }, {
    key: 'handleTerminationAndRelease',
    value: function handleTerminationAndRelease() {
      var that = this;
      if (this.swipeDetected) {
        var onSwipeEnd = this.props.onSwipeEnd;

        onSwipeEnd && onSwipeEnd({
          direction: this.swipeDirection,
          distance: that.state.swipe.distance,
          velocity: that.state.swipe.velocity
        });
      }
      this.swipeDetected = false;
      this.velocityProp = null;
      this.distanceProp = null;
      this.swipeDirection = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onSwipeBegin = _props2.onSwipeBegin,
          onSwipe = _props2.onSwipe,
          onSwipeEnd = _props2.onSwipeEnd,
          props = _objectWithoutProperties(_props2, ['onSwipeBegin', 'onSwipe', 'onSwipeEnd']);

      var style = {
        alignSelf: 'flex-start'
      };
      var state = this.props.setGestureState ? this.state : null;
      return (0, _rax.createElement)(
        _raxView2.default,
        _extends({}, this.panResponder.panHandlers, { style: _extends({ style: style }, props.handlerStyle) }),
        (0, _rax.createElement)(
          _raxView2.default,
          _extends({}, props, state),
          this.props.children
        )
      );
    }
  }]);

  return SwipeEvent;
}(_rax.Component);

SwipeEvent.defaultProps = {
  horizontal: true,
  vertical: true,
  left: false,
  right: false,
  up: false,
  down: false,
  continuous: true,
  initialVelocityThreshold: 0.2,
  verticalThreshold: 1,
  horizontalThreshold: 5,
  setGestureState: true,
  handlerStyle: {}
};

SwipeEvent.propTypes = {
  onSwipeBegin: _rax.PropTypes.func,
  onSwipe: _rax.PropTypes.func,
  onSwipeEnd: _rax.PropTypes.func,
  swipeDecoratorStyle: _rax.PropTypes.object
};

exports.default = SwipeEvent;
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (velocity, directionalChange, velocityThreshold, changeThreshold) {
  return Math.abs(velocity) > velocityThreshold && Math.abs(directionalChange) < changeThreshold;
};

module.exports = exports["default"];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  slideWrapper: {
    position: 'relative'
  },
  swipeWrapper: {
    overflow: 'hidden',
    position: 'relative'
  },
  swipeStyle: {
    position: 'relative',
    transform: 'translate3d(0,0,0)',
    transition: 'all .5s ease'
  },
  childrenStyle: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  activeDot: {
    borderRadius: '50%',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    display: 'inline-block'
  },
  normalDot: {
    borderRadius: '50%',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    display: 'inline-block'
  },
  defaultPaginationStyle: {
    position: 'absolute',
    bottom: 0.2,
    width: '100%',
    display: 'flex',
    margin: '0 auto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    itemColor: 'rgba(255, 255, 255, 0.5)',
    itemSelectedColor: 'rgb(255, 80, 0)',
    itemSize: 8
  }
};
module.exports = exports['default'];

/***/ })
/******/ ])}); require("index.bundle");;