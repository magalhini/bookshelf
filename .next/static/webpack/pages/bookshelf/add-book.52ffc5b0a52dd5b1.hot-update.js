"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bookshelf/add-book",{

/***/ "./pages/bookshelf/add-book.tsx":
/*!**************************************!*\
  !*** ./pages/bookshelf/add-book.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/fetcher */ \"./lib/fetcher.ts\");\n/* harmony import */ var _components_addBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/addBook */ \"./components/addBook.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/ricardo/Documents/MyProjects/bookshelf/pages/bookshelf/add-book.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar AddBook = function AddBook(_ref) {\n  var shelves = _ref.shelves,\n      authors = _ref.authors;\n\n  var onBookSave = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(bookData) {\n      var data;\n      return _Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_lib_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/book/create\", {\n                title: bookData.title,\n                author: bookData.author\n              });\n\n            case 2:\n              data = _context.sent;\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onBookSave(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  console.log(shelves, authors);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n      as: \"h2\",\n      children: \"Add new\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_addBook__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      authors: authors,\n      shelves: shelves\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AddBook;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__.withSuperJSONPage)(AddBook));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AddBook\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rc2hlbGYvYWRkLWJvb2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTBCO0FBQUEsTUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDeEMsTUFBTUMsVUFBVTtBQUFBLHVWQUFHLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0VOLHdEQUFPLENBQUMsY0FBRCxFQUFpQjtBQUN6Q08sZ0JBQUFBLEtBQUssRUFBRUQsUUFBUSxDQUFDQyxLQUR5QjtBQUV6Q0MsZ0JBQUFBLE1BQU0sRUFBRUYsUUFBUSxDQUFDRTtBQUZ3QixlQUFqQixDQURUOztBQUFBO0FBQ1hDLGNBQUFBLElBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFPQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVosRUFBcUJDLE9BQXJCO0FBRUEsc0JBQ0UsOERBQUMsaURBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUUsRUFBQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQywyREFBRDtBQUFhLGFBQU8sRUFBRUEsT0FBdEI7QUFBK0IsYUFBTyxFQUFFRDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWhCRDs7S0FBTUQ7O0FBa0JOLCtEQUFlLDJGQUFBQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jvb2tzaGVsZi9hZGQtYm9vay50c3g/ZGZmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbGV4LCBUZXh0LCBCb3gsIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uLy4uL2xpYi9mZXRjaGVyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRva2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9hdXRoXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgQWRkQm9va0Zvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRkQm9va1wiO1xuXG5jb25zdCBBZGRCb29rID0gKHsgc2hlbHZlcywgYXV0aG9ycyB9KSA9PiB7XG4gIGNvbnN0IG9uQm9va1NhdmUgPSBhc3luYyAoYm9va0RhdGEpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hlcihcIi9ib29rL2NyZWF0ZVwiLCB7XG4gICAgICB0aXRsZTogYm9va0RhdGEudGl0bGUsXG4gICAgICBhdXRob3I6IGJvb2tEYXRhLmF1dGhvcixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhzaGVsdmVzLCBhdXRob3JzKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8VGV4dCBhcz1cImgyXCI+QWRkIG5ldzwvVGV4dD5cbiAgICAgIDxBZGRCb29rRm9ybSBhdXRob3JzPXthdXRob3JzfSBzaGVsdmVzPXtzaGVsdmVzfSAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQm9vaztcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5LCByZXEgfSkgPT4ge1xuICBsZXQgdXNlcjtcblxuICB0cnkge1xuICAgIHVzZXIgPSB2YWxpZGF0ZVRva2VuKHJlcS5jb29raWVzLkxJQlJBUllfVE9LRU4pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYXV0aG9ycyA9IGF3YWl0IHByaXNtYS5hdXRob3IuZmluZE1hbnkoKTtcbiAgY29uc3Qgc2hlbHZlcyA9IGF3YWl0IHByaXNtYS5zaGVsZi5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzaGVsdmVzLFxuICAgICAgYXV0aG9ycyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHQiLCJCb3giLCJmZXRjaGVyIiwiQWRkQm9va0Zvcm0iLCJBZGRCb29rIiwic2hlbHZlcyIsImF1dGhvcnMiLCJvbkJvb2tTYXZlIiwiYm9va0RhdGEiLCJ0aXRsZSIsImF1dGhvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bookshelf/add-book.tsx\n");

/***/ })

});