/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ityped/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ityped/dist/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("/**\n    * @name ityped\n    * @description Dead simple Animated Typing with no dependencies\n    * @author Luis Vinícius\n    * @email luisviniciusbarreto@gmail.com\n    */\n(function (global, factory) {\n\t true ? factory(exports) :\n\t0;\n}(this, (function (exports) { 'use strict';\n\n/**\n * @name setProps\n * @description Set the ityped properties configuration\n * @param {Object} config The configuration properties\n * @return {Promise}\n */\nvar setProps = function setProps(_ref) {\n  var _ref$strings = _ref.strings,\n      strings = _ref$strings === undefined ? ['Put your strings here...', 'and Enjoy!'] : _ref$strings,\n      _ref$typeSpeed = _ref.typeSpeed,\n      typeSpeed = _ref$typeSpeed === undefined ? 100 : _ref$typeSpeed,\n      _ref$backSpeed = _ref.backSpeed,\n      backSpeed = _ref$backSpeed === undefined ? 50 : _ref$backSpeed,\n      _ref$backDelay = _ref.backDelay,\n      backDelay = _ref$backDelay === undefined ? 500 : _ref$backDelay,\n      _ref$startDelay = _ref.startDelay,\n      startDelay = _ref$startDelay === undefined ? 500 : _ref$startDelay,\n      _ref$cursorChar = _ref.cursorChar,\n      cursorChar = _ref$cursorChar === undefined ? '|' : _ref$cursorChar,\n      _ref$placeholder = _ref.placeholder,\n      placeholder = _ref$placeholder === undefined ? false : _ref$placeholder,\n      _ref$showCursor = _ref.showCursor,\n      showCursor = _ref$showCursor === undefined ? true : _ref$showCursor,\n      _ref$disableBackTypin = _ref.disableBackTyping,\n      disableBackTyping = _ref$disableBackTypin === undefined ? false : _ref$disableBackTypin,\n      _ref$onFinished = _ref.onFinished,\n      onFinished = _ref$onFinished === undefined ? function () {} : _ref$onFinished,\n      _ref$loop = _ref.loop,\n      loop = _ref$loop === undefined ? true : _ref$loop;\n  return {\n    strings: strings,\n    typeSpeed: typeSpeed,\n    backSpeed: backSpeed,\n    cursorChar: cursorChar,\n    backDelay: backDelay,\n    placeholder: placeholder,\n    startDelay: startDelay,\n    showCursor: showCursor,\n    loop: loop,\n    disableBackTyping: disableBackTyping,\n    onFinished: onFinished\n  };\n};\n\nvar init = function init(element, properties) {\n  var i = 0,\n      l = void 0,\n      STRINGS_TO_ITERATE = void 0;\n\n  var typewrite = function typewrite(strings, props) {\n    if (i === l) if (props.loop) i = 0;\n    setTimeout(function () {\n      typeString(strings[i], props);\n    }, props.startDelay);\n  };\n\n  var typeString = function typeString(str, props) {\n    var index = 0,\n        strLen = str.length;\n    var intervalID = setInterval(function () {\n      props.placeholder ? element.placeholder += str[index] : element.textContent += str[index];\n      if (++index === strLen) return onStringTyped(intervalID, props);\n    }, props.typeSpeed);\n  };\n\n  var onStringTyped = function onStringTyped(id, props) {\n    clearInterval(id);\n    if (props.disableBackTyping && i === l - 1) {\n      return props.onFinished();\n    }\n    if (!props.loop && i === l - 1) {\n      return props.onFinished();\n    }\n    setTimeout(function () {\n      return eraseString(props);\n    }, props.backDelay);\n  };\n\n  var eraseString = function eraseString(props) {\n    var str = props.placeholder ? element.placeholder : element.textContent,\n        strLen = str.length;\n    var intervalID = setInterval(function () {\n      props.placeholder ? element.placeholder = element.placeholder.substr(0, --strLen) : element.textContent = str.substr(0, --strLen);\n      if (strLen === 0) return onStringErased(intervalID, props);\n    }, props.backSpeed);\n  };\n\n  var onStringErased = function onStringErased(id, props) {\n    clearInterval(id);\n    ++i;\n    typewrite(STRINGS_TO_ITERATE, props);\n  };\n\n  var setCursor = function setCursor(element, props) {\n    var cursorSpan = document.createElement('span');\n    cursorSpan.classList.add('ityped-cursor');\n    cursorSpan.textContent = '|';\n    cursorSpan.textContent = props.cursorChar;\n    element.insertAdjacentElement('afterend', cursorSpan);\n  };\n\n  var startTyping = function startTyping(prop) {\n    var props = setProps(prop || {});\n    var strings = props.strings;\n    STRINGS_TO_ITERATE = strings;\n    l = strings.length;\n    if (typeof element === \"string\") element = document.querySelector(element);\n    if (props.showCursor) setCursor(element, props);\n    typewrite(strings, props);\n  };\n\n  return startTyping(properties);\n};\n\nexports.init = init;\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\n})));\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://nullct.github.io/./node_modules/ityped/dist/index.js?");

/***/ }),

/***/ "./src/js/itypedsetting.js":
/*!*********************************!*\
  !*** ./src/js/itypedsetting.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// iTyped\r\n__webpack_require__(/*! ../../node_modules/ityped/dist/index */ \"./node_modules/ityped/dist/index.js\")\r\nityped.init(document.querySelector(\"#ityped\"), {\r\n  strings: [\"Hi there\", \"NULLCT\", \"Vim\"], //表示させたい文字の設定 区切りはカンマ\r\n  startDelay: 650, //アニメーション開始までの遅延、大きいほど遅れる\r\n  typeSpeed: 150, //表示させるスピード、大きいほどゆっくり\r\n  loop: true, //ループ\r\n  backSpeed: 50, //戻るスピード\r\n  backDelay: 500, //戻る時間指定\r\n  showCursor: true, //カーソル表示\r\n  cursorChar: \"|\", //カーソルとして表示するテキスト\r\n  RandomSource: true,\r\n});\n\n//# sourceURL=webpack://nullct.github.io/./src/js/itypedsetting.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./itypedsetting */ \"./src/js/itypedsetting.js\")\n\n//# sourceURL=webpack://nullct.github.io/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;