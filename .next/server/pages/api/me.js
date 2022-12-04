"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/me";
exports.ids = ["pages/api/me"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(api)/./lib/prisma.ts\");\n\n\nconst validateRoute = handler => {\n  return async (req, res) => {\n    const {\n      LIBRARY_TOKEN: token\n    } = req.cookies; // check for token\n\n    if (token) {\n      let user; // Get the ID from the token with our encryption secret.\n      // Then find a user in the DB with that ID.\n      // If its not there, not a real user.\n\n      try {\n        const {\n          id\n        } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"hello\");\n        user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n          where: {\n            id\n          }\n        });\n\n        if (!user) {\n          throw new Error(\"Not a real user\");\n        }\n      } catch (err) {\n        res.status(401);\n        res.json({\n          error: \"Not Authorized\"\n        });\n      } // Pass the user to the next handler\n\n\n      return handler(req, res, user);\n    }\n\n    res.status(401);\n    res.json({\n      error: \"Not Authorized\"\n    });\n  };\n};\nconst validateToken = token => {\n  // token may not always be passed, so we handle that in getServerSideProps\n  // with a catch, redirecting back to signin\n  const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"hello\");\n  return user;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFTyxNQUFNRSxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUN4QyxTQUFPLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQzFELFVBQU07QUFBRUMsTUFBQUEsYUFBYSxFQUFFQztBQUFqQixRQUEyQkgsR0FBRyxDQUFDSSxPQUFyQyxDQUQwRCxDQUNaOztBQUU5QyxRQUFJRCxLQUFKLEVBQVc7QUFDVCxVQUFJRSxJQUFKLENBRFMsQ0FHVDtBQUNBO0FBQ0E7O0FBQ0EsVUFBSTtBQUNGLGNBQU07QUFBRUMsVUFBQUE7QUFBRixZQUFTViwwREFBQSxDQUFXTyxLQUFYLEVBQWtCLE9BQWxCLENBQWY7QUFFQUUsUUFBQUEsSUFBSSxHQUFHLE1BQU1SLCtEQUFBLENBQXVCO0FBQ2xDWSxVQUFBQSxLQUFLLEVBQUU7QUFBRUgsWUFBQUE7QUFBRjtBQUQyQixTQUF2QixDQUFiOztBQUlBLFlBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1QsZ0JBQU0sSUFBSUssS0FBSixDQUFVLGlCQUFWLENBQU47QUFDRDtBQUNGLE9BVkQsQ0FVRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlYsUUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxRQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFUO0FBQ0QsT0FuQlEsQ0FxQlQ7OztBQUNBLGFBQU9mLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdJLElBQVgsQ0FBZDtBQUNEOztBQUVESixJQUFBQSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ1ksSUFBSixDQUFTO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQVQ7QUFDRCxHQTlCRDtBQStCRCxDQWhDTTtBQWtDQSxNQUFNQyxhQUFhLEdBQUlaLEtBQUQsSUFBVztBQUN0QztBQUNBO0FBRUEsUUFBTUUsSUFBSSxHQUFHVCwwREFBQSxDQUFXTyxLQUFYLEVBQWtCLE9BQWxCLENBQWI7QUFDQSxTQUFPRSxJQUFQO0FBQ0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaGVsZi8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4vcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVJvdXRlID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHsgTElCUkFSWV9UT0tFTjogdG9rZW4gfSA9IHJlcS5jb29raWVzOyAvLyBjaGVjayBmb3IgdG9rZW5cblxuICAgIGlmICh0b2tlbikge1xuICAgICAgbGV0IHVzZXI7XG5cbiAgICAgIC8vIEdldCB0aGUgSUQgZnJvbSB0aGUgdG9rZW4gd2l0aCBvdXIgZW5jcnlwdGlvbiBzZWNyZXQuXG4gICAgICAvLyBUaGVuIGZpbmQgYSB1c2VyIGluIHRoZSBEQiB3aXRoIHRoYXQgSUQuXG4gICAgICAvLyBJZiBpdHMgbm90IHRoZXJlLCBub3QgYSByZWFsIHVzZXIuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBcImhlbGxvXCIpO1xuXG4gICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSByZWFsIHVzZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSk7XG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiTm90IEF1dGhvcml6ZWRcIiB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFzcyB0aGUgdXNlciB0byB0aGUgbmV4dCBoYW5kbGVyXG4gICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcywgdXNlcik7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cyg0MDEpO1xuICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiTm90IEF1dGhvcml6ZWRcIiB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVRva2VuID0gKHRva2VuKSA9PiB7XG4gIC8vIHRva2VuIG1heSBub3QgYWx3YXlzIGJlIHBhc3NlZCwgc28gd2UgaGFuZGxlIHRoYXQgaW4gZ2V0U2VydmVyU2lkZVByb3BzXG4gIC8vIHdpdGggYSBjYXRjaCwgcmVkaXJlY3RpbmcgYmFjayB0byBzaWduaW5cblxuICBjb25zdCB1c2VyID0gand0LnZlcmlmeSh0b2tlbiwgXCJoZWxsb1wiKTtcbiAgcmV0dXJuIHVzZXI7XG59O1xuIl0sIm5hbWVzIjpbImp3dCIsInByaXNtYSIsInZhbGlkYXRlUm91dGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiTElCUkFSWV9UT0tFTiIsInRva2VuIiwiY29va2llcyIsInVzZXIiLCJpZCIsInZlcmlmeSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIkVycm9yIiwiZXJyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidmFsaWRhdGVUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsSUFBSUEsd0RBQUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaGVsZi8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./lib/auth.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.validateRoute)(async (req, res, user) => {\n  console.log(user);\n  res.json(_objectSpread({}, user));\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLGlFQUFlQSx3REFBYSxDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDckRDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0ksSUFBSixtQkFDS0gsSUFETDtBQUdELENBTDJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9va3NoZWxmLy4vcGFnZXMvYXBpL21lLnRzPzdjMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVSb3V0ZSB9IGZyb20gXCIuLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZVJvdXRlKGFzeW5jIChyZXEsIHJlcywgdXNlcikgPT4ge1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgcmVzLmpzb24oe1xuICAgIC4uLnVzZXIsXG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsidmFsaWRhdGVSb3V0ZSIsInJlcSIsInJlcyIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/me.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/me.ts"));
module.exports = __webpack_exports__;

})();