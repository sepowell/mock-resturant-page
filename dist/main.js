/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/cursive.rtf */ "./src/fonts/cursive.rtf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/cursive.ttf */ "./src/fonts/cursive.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/berlin.ttf */ "./src/fonts/berlin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\n\n@font-face {\n  font-family: Cursive;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('rtf'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n}\n\n@font-face {\n  font-family: Berlin;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('ttf');\n}\n\nhtml, body {\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family: Berlin, Arial, Helvetica, sans-serif;\n\n}\n\nbutton:hover {\n  cursor: pointer;\n  scale: 1.09;\n  background-color: black;\n  color: white;\n  box-shadow: 5px 10px 14px #9a9a9a;\n}\n\nbutton:active {\n  background-color: rgb(206, 206, 206);\n}\n\na {\n  color: rgb(25, 119, 25);\n  text-decoration: none;\n}\n\nimg {\n  height: auto;\n}\n\nhr {\n  width: 700px;\n  margin: 60px 0px 40px;\n}\n\n.wrapper {\n  position: relative;\n  min-height: calc(100%-130px);\n  padding-bottom: 130px;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100px;\n  width: 100%;\n  background-color: white;\n  border-bottom: 2px solid #9a9a9a;\n  box-shadow: 0px 1px 15px #9a9a9a;\n \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 169px;\n}\n\nheader > button {\n  padding: 20px 30px;\n\n  border: none;\n  font-size: 20px;\n  \n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 101px;\n  min-height: 100vh;\n}\n\n.main > p {\n  width: 777px;\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  width: 333px;\n}\n\nfooter {\n  position: absolute;\n  width: 100%;\n  height: 130;\n  bottom: 0;\n  background-color: black;\n  color: white;\n  text-align: center;\n}\n\n.sources {\n  word-spacing: 20px;\n  line-height: 20px;\n}\n\n\n\n/* Home Page */\n\n.pizza {\n  margin:70px 0px 30px;\n  width: 777px;\n}\n\n.blurb {\n  font-family: Cursive, Arial, Helvetica, sans-serif;\n  font-size: 27px;\n  color: rgb(99, 98, 98);\n  margin-bottom: -5px;\n}\n\n.description {\n  margin-top: 60px;\n  font-size: 20px;\n  color: #474747;\n  font-style: italic;\n}\n\n.hours {\n width: 300px;\n margin: 50px 0px 115px;\n}\n\n/* Menu Page */\n.menu-image {\n  width: 1333px;\n  margin: 100px 0px 150px;\n}\n\n/* Contact Page */\n\n.customer-support {\n  width: 444px;\n}\n\n.contact-sub-titles {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.phone-number {\n  color: rgb(25, 119, 25);\n  text-decoration: underline;\n}\n\n.phone-number:hover {\n  cursor: pointer;\n}\n\n.staff-image {\n  width: 800px;\n  margin: 115px 0px 175px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;;AAEZ;EACE,oBAAoB;EACpB;yDACwC;AAC1C;;AAEA;EACE,mBAAmB;EACnB,0DAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,iDAAiD;;AAEnD;;AAEA;EACE,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,gCAAgC;EAChC,gCAAgC;;EAEhC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,kBAAkB;;EAElB,YAAY;EACZ,eAAe;;AAEjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;;;AAIA,cAAc;;AAEd;EACE,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,kDAAkD;EAClD,eAAe;EACf,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;CACC,YAAY;CACZ,sBAAsB;AACvB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA,iBAAiB;;AAEjB;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB","sourcesContent":["/* General */\n\n@font-face {\n  font-family: Cursive;\n  src: url(./fonts/cursive.rtf) format('rtf'),\n    url(./fonts/cursive.ttf) format('ttf');\n}\n\n@font-face {\n  font-family: Berlin;\n  src: url(./fonts/berlin.ttf) format('ttf');\n}\n\nhtml, body {\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family: Berlin, Arial, Helvetica, sans-serif;\n\n}\n\nbutton:hover {\n  cursor: pointer;\n  scale: 1.09;\n  background-color: black;\n  color: white;\n  box-shadow: 5px 10px 14px #9a9a9a;\n}\n\nbutton:active {\n  background-color: rgb(206, 206, 206);\n}\n\na {\n  color: rgb(25, 119, 25);\n  text-decoration: none;\n}\n\nimg {\n  height: auto;\n}\n\nhr {\n  width: 700px;\n  margin: 60px 0px 40px;\n}\n\n.wrapper {\n  position: relative;\n  min-height: calc(100%-130px);\n  padding-bottom: 130px;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100px;\n  width: 100%;\n  background-color: white;\n  border-bottom: 2px solid #9a9a9a;\n  box-shadow: 0px 1px 15px #9a9a9a;\n \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 169px;\n}\n\nheader > button {\n  padding: 20px 30px;\n\n  border: none;\n  font-size: 20px;\n  \n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 101px;\n  min-height: 100vh;\n}\n\n.main > p {\n  width: 777px;\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  width: 333px;\n}\n\nfooter {\n  position: absolute;\n  width: 100%;\n  height: 130;\n  bottom: 0;\n  background-color: black;\n  color: white;\n  text-align: center;\n}\n\n.sources {\n  word-spacing: 20px;\n  line-height: 20px;\n}\n\n\n\n/* Home Page */\n\n.pizza {\n  margin:70px 0px 30px;\n  width: 777px;\n}\n\n.blurb {\n  font-family: Cursive, Arial, Helvetica, sans-serif;\n  font-size: 27px;\n  color: rgb(99, 98, 98);\n  margin-bottom: -5px;\n}\n\n.description {\n  margin-top: 60px;\n  font-size: 20px;\n  color: #474747;\n  font-style: italic;\n}\n\n.hours {\n width: 300px;\n margin: 50px 0px 115px;\n}\n\n/* Menu Page */\n.menu-image {\n  width: 1333px;\n  margin: 100px 0px 150px;\n}\n\n/* Contact Page */\n\n.customer-support {\n  width: 444px;\n}\n\n.contact-sub-titles {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.phone-number {\n  color: rgb(25, 119, 25);\n  text-decoration: underline;\n}\n\n.phone-number:hover {\n  cursor: pointer;\n}\n\n.staff-image {\n  width: 800px;\n  margin: 115px 0px 175px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.jpg */ "./src/images/logo.jpg");
/* harmony import */ var _images_customer_support_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/customer-support.jpg */ "./src/images/customer-support.jpg");
/* harmony import */ var _images_resturant_staff_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/resturant-staff.jpg */ "./src/images/resturant-staff.jpg");




function loadContact() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');

  const contactTitle = document.createElement('h2');
  contactTitle.innerText = 'Contact Us!';

  const customerSupport = document.createElement('img');
  customerSupport.src = _images_customer_support_jpg__WEBPACK_IMPORTED_MODULE_1__;
  customerSupport.alt = "Drawing of employee provinding customer support";
  customerSupport.classList.add('customer-support');

  const breakTwo = document.createElement('hr');

  const addressTitle = document.createElement('p');
  addressTitle.innerText = 'Address: ';
  addressTitle.classList.add('contact-sub-titles');

  const address = document.createElement('p');
  address.innerHTML = "5001 Mewport Ave <br> San Diego, CA 92107";

  const phoneTitle = document.createElement('p');
  phoneTitle.innerText = 'Phone Number:';
  phoneTitle.classList.add('contact-sub-titles');

  const phone = document.createElement('p');
  phone.innerText = '+1 (800) 115 - 1153';
  phone.classList.add('phone-number');

  const emailTitle = document.createElement('p');
  emailTitle.innerText = 'Email:';
  emailTitle.classList.add('contact-sub-titles');

  const email = document.createElement('p');
  email.innerText = 'pizzeracompany@pizza.com';

  const breakThree = document.createElement('hr');

  const staffVector = document.createElement('img');
  staffVector.src = _images_resturant_staff_jpg__WEBPACK_IMPORTED_MODULE_2__;
  staffVector.alt = "drawing of resturant staff";
  staffVector.classList.add('staff-image');

  main.appendChild(logo);
  main.appendChild(breakOne);
  main.appendChild(contactTitle);
  main.appendChild(customerSupport);
  main.appendChild(breakTwo);
  main.appendChild(addressTitle);
  main.appendChild(address);
  main.appendChild(phoneTitle);
  main.appendChild(phone);
  main.appendChild(emailTitle);
  main.appendChild(email);
  main.appendChild(breakThree);
  main.appendChild(staffVector);

  console.log('contact page loaded!');
  
  
  return main;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.jpg */ "./src/images/logo.jpg");
/* harmony import */ var _images_pizza_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza.jpeg */ "./src/images/pizza.jpeg");
/* harmony import */ var _images_hours_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hours.jpg */ "./src/images/hours.jpg");




function loadHome() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');

  const pizza = document.createElement('img');
  pizza.src = _images_pizza_jpeg__WEBPACK_IMPORTED_MODULE_1__;
  pizza.alt = "a picture of one of our amazing pizzas!";
  pizza.classList.add('pizza');

  const blurb = document.createElement('p');
  blurb.textContent = '"Quality you can taste!';
  blurb.classList.add('blurb');

  const breakTwo = document.createElement('hr');

  const descriptionText = "Welcome to your one-stop shop for delicious and authentic pizzas! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const description = document.createElement('p');
  description.textContent = descriptionText;
  description.classList.add('description');

  const breakThree = document.createElement('hr');

  const hours = document.createElement('img');
  hours.src = _images_hours_jpg__WEBPACK_IMPORTED_MODULE_2__;
  hours.alt = "We're open 24/7!";
  hours.classList.add('hours');


  main.appendChild(logo);
  main.appendChild(breakOne);
  main.appendChild(pizza);
  main.appendChild(blurb);
  main.appendChild(breakTwo);
  main.appendChild(description);
  main.appendChild(breakThree);
  main.appendChild(hours);

  console.log('main page loaded!');
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.jpg */ "./src/images/logo.jpg");
/* harmony import */ var _images_menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu.jpg */ "./src/images/menu.jpg");



function loadMenu() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');

  const menu = document.createElement('img');
  menu.src = _images_menu_jpg__WEBPACK_IMPORTED_MODULE_1__;
  menu.classList.add('menu-image');

  main.appendChild(logo);
  main.appendChild(breakOne);
  main.appendChild(menu);

  console.log('menu page loaded!');
  
  return main;
}



/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeWebsite": () => (/* binding */ initializeWebsite)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function loadHeader() {
  const header = document.createElement('header');
  
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener ('click', (e) => {
    changePage('home');
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener ('click', (e) => {
    changePage('menu');
  })

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    changePage('contact');
  })

  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contactButton);

  return header;

}

function loadMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
}

function loadFooter() {
  const footer = document.createElement('footer');

  const createdBy = document.createElement('p');
  createdBy.textContent = 'Created by ';

  const gitProfileLink = document.createElement('a');
  gitProfileLink.textContent = ' sepowell';
  gitProfileLink.href = "https://github.com/sepowell/mock-resturant-page";

  const imagesFrom = document.createElement('p');
  imagesFrom.textContent = 'Images From:';

  const sources = document.createElement('p');
  sources.classList.add('sources');

  const linkOne = document.createElement('a');
  linkOne.textContent = 'azerbaijan_stockers ';
  linkOne.href = "https://www.freepik.com/free-photo/classic-pepperoni-pizza-with-finely-melted-cheese-greenery-top_5448672.htm?query=picture%20of%20pizza%20resturant#from_view=detail_alsolike";

  const linkTwo = document.createElement('a');
  linkTwo.textContent = 'eightonesix ';
  linkTwo.href = "https://www.freepik.com/free-vector/pizzeria-logo_1090856.htm#query=pizza&position=0&from_view=author";

  const linkThree = document.createElement('a');
  linkThree.textContent = 'starline';
  linkThree.href = "https://www.freepik.com/free-vector/24-hour-service-3d-text-background_25694907.htm#query=24%20hours%20sign%20white%20background&position=10&from_view=search&track=ais";

  const breakOne = document.createElement('br');

  const linkFour = document.createElement('a');
  linkFour.textContent = 'freepik ';
  linkFour.href = "https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#query=customer%20support&position=0&from_view=search&track=ais";  

  const linkFive = document.createElement('a');
  linkFive.textContent = 'macrovector';
  linkFive.href = "https://www.freepik.com/free-vector/menu-template-restaurant-pizzeria_3795039.htm#query=fake%20pizza%20menu&position=5&from_view=search&track=ais";

  footer.appendChild(createdBy);
  createdBy.appendChild(gitProfileLink);
  footer.appendChild(imagesFrom);
  footer.appendChild(sources);
  sources.appendChild(linkOne);
  sources.appendChild(linkTwo);
  sources.appendChild(linkThree);
  sources.appendChild(breakOne);
  sources.appendChild(linkFour);
  sources.appendChild(linkFive);

  return footer;
}

function changePage(page) {
  switch (page) {
    case 'home':
      (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
      break;
    case 'menu':
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
      break;
    case 'contact':
      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();
      break;
  }
}

function initializeWebsite() {
  const wrapper = document.getElementById('wrapper');
  
  wrapper.appendChild(loadHeader());
  wrapper.appendChild(loadMain());
  wrapper.appendChild(loadFooter());

  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();

}



/***/ }),

/***/ "./src/fonts/berlin.ttf":
/*!******************************!*\
  !*** ./src/fonts/berlin.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00d059ca3a372e40d59f.ttf";

/***/ }),

/***/ "./src/fonts/cursive.rtf":
/*!*******************************!*\
  !*** ./src/fonts/cursive.rtf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f094f838ace3ae571db3.rtf";

/***/ }),

/***/ "./src/fonts/cursive.ttf":
/*!*******************************!*\
  !*** ./src/fonts/cursive.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cdd8164b4419e73ce7d.ttf";

/***/ }),

/***/ "./src/images/customer-support.jpg":
/*!*****************************************!*\
  !*** ./src/images/customer-support.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13b798d6ec4d62e3e4d2.jpg";

/***/ }),

/***/ "./src/images/hours.jpg":
/*!******************************!*\
  !*** ./src/images/hours.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8ffcd28b9c9fec7e5e3.jpg";

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c133a411fd5ce0ea37c.jpg";

/***/ }),

/***/ "./src/images/menu.jpg":
/*!*****************************!*\
  !*** ./src/images/menu.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5be9799e314fe1cbefcf.jpg";

/***/ }),

/***/ "./src/images/pizza.jpeg":
/*!*******************************!*\
  !*** ./src/images/pizza.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e99c75c387b56c8ed92.jpeg";

/***/ }),

/***/ "./src/images/resturant-staff.jpg":
/*!****************************************!*\
  !*** ./src/images/resturant-staff.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b08fddf3c46e28940a69.jpg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");



(0,_website__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBLEVBQUUsK0NBQVE7O0FBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7O0FBRTlDLDJEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb2NrLXJlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21vY2stcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0dXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9jdXJzaXZlLnJ0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvY3Vyc2l2ZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2Jlcmxpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdlbmVyYWwgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDdXJzaXZlO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgncnRmJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogQmVybGluO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEJlcmxpbiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiAxLjA5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxNHB4ICM5YTlhOWE7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiByZ2IoMjUsIDExOSwgMjUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5ociB7XFxuICB3aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDYwcHggMHB4IDQwcHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJS0xMzBweCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzlhOWE5YTtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAjOWE5YTlhO1xcbiBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE2OXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgXFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMDFweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbiA+IHAge1xcbiAgd2lkdGg6IDc3N3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDMzM3B4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEzMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc291cmNlcyB7XFxuICB3b3JkLXNwYWNpbmc6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuXFxuLyogSG9tZSBQYWdlICovXFxuXFxuLnBpenphIHtcXG4gIG1hcmdpbjo3MHB4IDBweCAzMHB4O1xcbiAgd2lkdGg6IDc3N3B4O1xcbn1cXG5cXG4uYmx1cmIge1xcbiAgZm9udC1mYW1pbHk6IEN1cnNpdmUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjb2xvcjogcmdiKDk5LCA5OCwgOTgpO1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzQ3NDc0NztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhvdXJzIHtcXG4gd2lkdGg6IDMwMHB4O1xcbiBtYXJnaW46IDUwcHggMHB4IDExNXB4O1xcbn1cXG5cXG4vKiBNZW51IFBhZ2UgKi9cXG4ubWVudS1pbWFnZSB7XFxuICB3aWR0aDogMTMzM3B4O1xcbiAgbWFyZ2luOiAxMDBweCAwcHggMTUwcHg7XFxufVxcblxcbi8qIENvbnRhY3QgUGFnZSAqL1xcblxcbi5jdXN0b21lci1zdXBwb3J0IHtcXG4gIHdpZHRoOiA0NDRweDtcXG59XFxuXFxuLmNvbnRhY3Qtc3ViLXRpdGxlcyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucGhvbmUtbnVtYmVyIHtcXG4gIGNvbG9yOiByZ2IoMjUsIDExOSwgMjUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5waG9uZS1udW1iZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhZmYtaW1hZ2Uge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAxMTVweCAwcHggMTc1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTs7QUFFWjtFQUNFLG9CQUFvQjtFQUNwQjt5REFDd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMERBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlEQUFpRDs7QUFFbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7O0VBRWhDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7OztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtBQUN2Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdlbmVyYWwgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDdXJzaXZlO1xcbiAgc3JjOiB1cmwoLi9mb250cy9jdXJzaXZlLnJ0ZikgZm9ybWF0KCdydGYnKSxcXG4gICAgdXJsKC4vZm9udHMvY3Vyc2l2ZS50dGYpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEJlcmxpbjtcXG4gIHNyYzogdXJsKC4vZm9udHMvYmVybGluLnR0ZikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQmVybGluLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgc2NhbGU6IDEuMDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE0cHggIzlhOWE5YTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHJnYigyNSwgMTE5LCAyNSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmhyIHtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogNjBweCAwcHggNDBweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDAlLTEzMHB4KTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMzBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOWE5YTlhO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxNXB4ICM5YTlhOWE7XFxuIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTY5cHg7XFxufVxcblxcbmhlYWRlciA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEwMXB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tYWluID4gcCB7XFxuICB3aWR0aDogNzc3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMzMzcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTMwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zb3VyY2VzIHtcXG4gIHdvcmQtc3BhY2luZzogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG5cXG4vKiBIb21lIFBhZ2UgKi9cXG5cXG4ucGl6emEge1xcbiAgbWFyZ2luOjcwcHggMHB4IDMwcHg7XFxuICB3aWR0aDogNzc3cHg7XFxufVxcblxcbi5ibHVyYiB7XFxuICBmb250LWZhbWlseTogQ3Vyc2l2ZSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjdweDtcXG4gIGNvbG9yOiByZ2IoOTksIDk4LCA5OCk7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaG91cnMge1xcbiB3aWR0aDogMzAwcHg7XFxuIG1hcmdpbjogNTBweCAwcHggMTE1cHg7XFxufVxcblxcbi8qIE1lbnUgUGFnZSAqL1xcbi5tZW51LWltYWdlIHtcXG4gIHdpZHRoOiAxMzMzcHg7XFxuICBtYXJnaW46IDEwMHB4IDBweCAxNTBweDtcXG59XFxuXFxuLyogQ29udGFjdCBQYWdlICovXFxuXFxuLmN1c3RvbWVyLXN1cHBvcnQge1xcbiAgd2lkdGg6IDQ0NHB4O1xcbn1cXG5cXG4uY29udGFjdC1zdWItdGl0bGVzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5waG9uZS1udW1iZXIge1xcbiAgY29sb3I6IHJnYigyNSwgMTE5LCAyNSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnBob25lLW51bWJlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFmZi1pbWFnZSB7XFxuICB3aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDExNXB4IDBweCAxNzVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vaW1hZ2VzL2xvZ28uanBnJztcbmltcG9ydCBjdXN0b21lclN1cHBvcnRJbWFnZSBmcm9tICcuL2ltYWdlcy9jdXN0b21lci1zdXBwb3J0LmpwZyc7XG5pbXBvcnQgc3RhZmZJbWFnZSBmcm9tICcuL2ltYWdlcy9yZXN0dXJhbnQtc3RhZmYuanBnJztcblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvZ28uc3JjID0gbG9nb0ltYWdlO1xuICBsb2dvLmFsdCA9IFwibG9nb1wiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICBjb25zdCBicmVha09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGFjdFRpdGxlLmlubmVyVGV4dCA9ICdDb250YWN0IFVzISc7XG5cbiAgY29uc3QgY3VzdG9tZXJTdXBwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGN1c3RvbWVyU3VwcG9ydC5zcmMgPSBjdXN0b21lclN1cHBvcnRJbWFnZTtcbiAgY3VzdG9tZXJTdXBwb3J0LmFsdCA9IFwiRHJhd2luZyBvZiBlbXBsb3llZSBwcm92aW5kaW5nIGN1c3RvbWVyIHN1cHBvcnRcIjtcbiAgY3VzdG9tZXJTdXBwb3J0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbWVyLXN1cHBvcnQnKTtcblxuICBjb25zdCBicmVha1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgY29uc3QgYWRkcmVzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzVGl0bGUuaW5uZXJUZXh0ID0gJ0FkZHJlc3M6ICc7XG4gIGFkZHJlc3NUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXN1Yi10aXRsZXMnKTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzLmlubmVySFRNTCA9IFwiNTAwMSBNZXdwb3J0IEF2ZSA8YnI+IFNhbiBEaWVnbywgQ0EgOTIxMDdcIjtcblxuICBjb25zdCBwaG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZVRpdGxlLmlubmVyVGV4dCA9ICdQaG9uZSBOdW1iZXI6JztcbiAgcGhvbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXN1Yi10aXRsZXMnKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmUuaW5uZXJUZXh0ID0gJysxICg4MDApIDExNSAtIDExNTMnO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW1iZXInKTtcblxuICBjb25zdCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbWFpbFRpdGxlLmlubmVyVGV4dCA9ICdFbWFpbDonO1xuICBlbWFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc3ViLXRpdGxlcycpO1xuXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbWFpbC5pbm5lclRleHQgPSAncGl6emVyYWNvbXBhbnlAcGl6emEuY29tJztcblxuICBjb25zdCBicmVha1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICBjb25zdCBzdGFmZlZlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzdGFmZlZlY3Rvci5zcmMgPSBzdGFmZkltYWdlO1xuICBzdGFmZlZlY3Rvci5hbHQgPSBcImRyYXdpbmcgb2YgcmVzdHVyYW50IHN0YWZmXCI7XG4gIHN0YWZmVmVjdG9yLmNsYXNzTGlzdC5hZGQoJ3N0YWZmLWltYWdlJyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChicmVha09uZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjdXN0b21lclN1cHBvcnQpO1xuICBtYWluLmFwcGVuZENoaWxkKGJyZWFrVHdvKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChhZGRyZXNzVGl0bGUpO1xuICBtYWluLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBtYWluLmFwcGVuZENoaWxkKHBob25lVGl0bGUpO1xuICBtYWluLmFwcGVuZENoaWxkKHBob25lKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChlbWFpbFRpdGxlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnJlYWtUaHJlZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc3RhZmZWZWN0b3IpO1xuXG4gIGNvbnNvbGUubG9nKCdjb250YWN0IHBhZ2UgbG9hZGVkIScpO1xuICBcbiAgXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9OyIsImltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi9pbWFnZXMvbG9nby5qcGcnO1xuaW1wb3J0IHBpenphSW1hZ2UgZnJvbSAnLi9pbWFnZXMvcGl6emEuanBlZyc7XG5pbXBvcnQgaG91cnNJbWFnZSBmcm9tICcuL2ltYWdlcy9ob3Vycy5qcGcnO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9nby5zcmMgPSBsb2dvSW1hZ2U7XG4gIGxvZ28uYWx0ID0gXCJsb2dvXCI7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuXG4gIGNvbnN0IGJyZWFrT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICBjb25zdCBwaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBwaXp6YS5zcmMgPSBwaXp6YUltYWdlO1xuICBwaXp6YS5hbHQgPSBcImEgcGljdHVyZSBvZiBvbmUgb2Ygb3VyIGFtYXppbmcgcGl6emFzIVwiO1xuICBwaXp6YS5jbGFzc0xpc3QuYWRkKCdwaXp6YScpO1xuXG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBibHVyYi50ZXh0Q29udGVudCA9ICdcIlF1YWxpdHkgeW91IGNhbiB0YXN0ZSEnO1xuICBibHVyYi5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuXG4gIGNvbnN0IGJyZWFrVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBcIldlbGNvbWUgdG8geW91ciBvbmUtc3RvcCBzaG9wIGZvciBkZWxpY2lvdXMgYW5kIGF1dGhlbnRpYyBwaXp6YXMhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVGV4dDtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBicmVha1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBob3Vycy5zcmMgPSBob3Vyc0ltYWdlO1xuICBob3Vycy5hbHQgPSBcIldlJ3JlIG9wZW4gMjQvNyFcIjtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcblxuXG4gIG1haW4uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnJlYWtPbmUpO1xuICBtYWluLmFwcGVuZENoaWxkKHBpenphKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnJlYWtUd28pO1xuICBtYWluLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChicmVha1RocmVlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgY29uc29sZS5sb2coJ21haW4gcGFnZSBsb2FkZWQhJyk7XG59XG5cbmV4cG9ydCB7IGxvYWRIb21lIH07IiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2ltYWdlcy9sb2dvLmpwZyc7XG5pbXBvcnQgbWVudUltYWdlIGZyb20gJy4vaW1hZ2VzL21lbnUuanBnJztcblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvZ28uc3JjID0gbG9nb0ltYWdlO1xuICBsb2dvLmFsdCA9IFwibG9nb1wiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICBjb25zdCBicmVha09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51LnNyYyA9IG1lbnVJbWFnZTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChicmVha09uZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgY29uc29sZS5sb2coJ21lbnUgcGFnZSBsb2FkZWQhJyk7XG4gIFxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IHsgbG9hZE1lbnUgfTsiLCJpbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIFxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjaGFuZ2VQYWdlKCdob21lJyk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoZSkgPT4ge1xuICAgIGNoYW5nZVBhZ2UoJ21lbnUnKTtcbiAgfSlcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNoYW5nZVBhZ2UoJ2NvbnRhY3QnKTtcbiAgfSlcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBoZWFkZXI7XG5cbn1cblxuZnVuY3Rpb24gbG9hZE1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNyZWF0ZWRCeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY3JlYXRlZEJ5LnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgJztcblxuICBjb25zdCBnaXRQcm9maWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0UHJvZmlsZUxpbmsudGV4dENvbnRlbnQgPSAnIHNlcG93ZWxsJztcbiAgZ2l0UHJvZmlsZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3NlcG93ZWxsL21vY2stcmVzdHVyYW50LXBhZ2VcIjtcblxuICBjb25zdCBpbWFnZXNGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbWFnZXNGcm9tLnRleHRDb250ZW50ID0gJ0ltYWdlcyBGcm9tOic7XG5cbiAgY29uc3Qgc291cmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc291cmNlcy5jbGFzc0xpc3QuYWRkKCdzb3VyY2VzJyk7XG5cbiAgY29uc3QgbGlua09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGlua09uZS50ZXh0Q29udGVudCA9ICdhemVyYmFpamFuX3N0b2NrZXJzICc7XG4gIGxpbmtPbmUuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90by9jbGFzc2ljLXBlcHBlcm9uaS1waXp6YS13aXRoLWZpbmVseS1tZWx0ZWQtY2hlZXNlLWdyZWVuZXJ5LXRvcF81NDQ4NjcyLmh0bT9xdWVyeT1waWN0dXJlJTIwb2YlMjBwaXp6YSUyMHJlc3R1cmFudCNmcm9tX3ZpZXc9ZGV0YWlsX2Fsc29saWtlXCI7XG5cbiAgY29uc3QgbGlua1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGlua1R3by50ZXh0Q29udGVudCA9ICdlaWdodG9uZXNpeCAnO1xuICBsaW5rVHdvLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL3BpenplcmlhLWxvZ29fMTA5MDg1Ni5odG0jcXVlcnk9cGl6emEmcG9zaXRpb249MCZmcm9tX3ZpZXc9YXV0aG9yXCI7XG5cbiAgY29uc3QgbGlua1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rVGhyZWUudGV4dENvbnRlbnQgPSAnc3RhcmxpbmUnO1xuICBsaW5rVGhyZWUuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvMjQtaG91ci1zZXJ2aWNlLTNkLXRleHQtYmFja2dyb3VuZF8yNTY5NDkwNy5odG0jcXVlcnk9MjQlMjBob3VycyUyMHNpZ24lMjB3aGl0ZSUyMGJhY2tncm91bmQmcG9zaXRpb249MTAmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1haXNcIjtcblxuICBjb25zdCBicmVha09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgY29uc3QgbGlua0ZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmtGb3VyLnRleHRDb250ZW50ID0gJ2ZyZWVwaWsgJztcbiAgbGlua0ZvdXIuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZmxhdC1kZXNpZ24taWxsdXN0cmF0aW9uLWN1c3RvbWVyLXN1cHBvcnRfMTI5ODI5MTAuaHRtI3F1ZXJ5PWN1c3RvbWVyJTIwc3VwcG9ydCZwb3NpdGlvbj0wJmZyb21fdmlldz1zZWFyY2gmdHJhY2s9YWlzXCI7ICBcblxuICBjb25zdCBsaW5rRml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGlua0ZpdmUudGV4dENvbnRlbnQgPSAnbWFjcm92ZWN0b3InO1xuICBsaW5rRml2ZS5ocmVmID0gXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9tZW51LXRlbXBsYXRlLXJlc3RhdXJhbnQtcGl6emVyaWFfMzc5NTAzOS5odG0jcXVlcnk9ZmFrZSUyMHBpenphJTIwbWVudSZwb3NpdGlvbj01JmZyb21fdmlldz1zZWFyY2gmdHJhY2s9YWlzXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZWRCeSk7XG4gIGNyZWF0ZWRCeS5hcHBlbmRDaGlsZChnaXRQcm9maWxlTGluayk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChpbWFnZXNGcm9tKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHNvdXJjZXMpO1xuICBzb3VyY2VzLmFwcGVuZENoaWxkKGxpbmtPbmUpO1xuICBzb3VyY2VzLmFwcGVuZENoaWxkKGxpbmtUd28pO1xuICBzb3VyY2VzLmFwcGVuZENoaWxkKGxpbmtUaHJlZSk7XG4gIHNvdXJjZXMuYXBwZW5kQ2hpbGQoYnJlYWtPbmUpO1xuICBzb3VyY2VzLmFwcGVuZENoaWxkKGxpbmtGb3VyKTtcbiAgc291cmNlcy5hcHBlbmRDaGlsZChsaW5rRml2ZSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGFnZShwYWdlKSB7XG4gIHN3aXRjaCAocGFnZSkge1xuICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgbG9hZEhvbWUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lbnUnOlxuICAgICAgbG9hZE1lbnUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcbiAgXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobG9hZEhlYWRlcigpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChsb2FkTWFpbigpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChsb2FkRm9vdGVyKCkpO1xuXG4gIGxvYWRIb21lKCk7XG5cbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUnO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=