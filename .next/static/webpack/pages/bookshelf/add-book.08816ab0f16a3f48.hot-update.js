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

/***/ "./components/addBook.tsx":
/*!********************************!*\
  !*** ./components/addBook.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ricardo/Documents/MyProjects/bookshelf/components/addBook.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddBookForm = function AddBookForm(_ref) {\n  _s();\n\n  var onSave = _ref.onSave,\n      onCancel = _ref.onCancel,\n      authors = _ref.authors,\n      shelves = _ref.shelves;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"),\n      _React$useState2 = (0,_Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      title = _React$useState2[0],\n      setTitle = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"),\n      _React$useState4 = (0,_Users_ricardo_Documents_MyProjects_bookshelf_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      author = _React$useState4[0],\n      setAuthor = _React$useState4[1];\n\n  var initialValues = {\n    title: \"\",\n    author: \"\",\n    genre: \"\",\n    year: \"\",\n    read: false,\n    rating: \"\",\n    shelf: \"\"\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n\n    if (!title || !author) {\n      return false;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n    initialValues: initialValues,\n    onSubmit: onSave,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"author\",\n          children: \"Bookshelf:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n          as: \"select\",\n          name: \"shelf\",\n          children: shelves.map(function (shelf) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"option\", {\n              value: shelf.id,\n              children: shelf.name\n            }, shelf.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"title\",\n          children: \"Title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n          type: \"text\",\n          name: \"title\",\n          id: \"title\",\n          placeholder: \"Book name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"title\",\n          children: \"Genre\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n          type: \"text\",\n          name: \"genre\",\n          id: \"genre\",\n          placeholder: \"Fiction\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"title\",\n          children: \"Year\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n          type: \"text\",\n          name: \"year\",\n          id: \"year\",\n          placeholder: \"2022\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"title\",\n          children: \"Read?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n          type: \"checkbox\",\n          name: \"checked\",\n          value: \"read\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"author\",\n          children: \"Author\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n          as: \"select\",\n          name: \"author\",\n          children: authors.map(function (author) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"option\", {\n              value: author.id,\n              children: author.name\n            }, author.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Save book\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddBookForm, \"WSRe0QmWMsPdsOpNT61SELE6Xeo=\");\n\n_c = AddBookForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddBookForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddBookForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztHQUFNcEI7O0tBQUFBO0FBOEVOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkQm9vay50c3g/OGRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgVGV4dCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgRm9ybUxhYmVsLFxuICBMaXN0LFxuICBTdGFjayxcbiAgQm94LFxuICBGb3JtQ29udHJvbCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEF1dGhvciwgU2hlbGYgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IEZpZWxkLCBGb3JtLCBGb3JtaWssIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcblxudHlwZSBBZGRCb29rUHJvcHMgPSB7XG4gIG9uU2F2ZSgpOiB2b2lkO1xuICBvbkNhbmNlbCgpOiB2b2lkO1xuICBhdXRob3JzOiBBdXRob3JbXTtcbiAgc2hlbHZlczogU2hlbGZbXTtcbn07XG5cbmNvbnN0IEFkZEJvb2tGb3JtOiBSZWFjdC5GQzxBZGRCb29rUHJvcHM+ID0gKHtcbiAgb25TYXZlLFxuICBvbkNhbmNlbCxcbiAgYXV0aG9ycyxcbiAgc2hlbHZlcyxcbn0pID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgYXV0aG9yOiBcIlwiLFxuICAgIGdlbnJlOiBcIlwiLFxuICAgIHllYXI6IFwiXCIsXG4gICAgcmVhZDogZmFsc2UsXG4gICAgcmF0aW5nOiBcIlwiLFxuICAgIHNoZWxmOiBcIlwiLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0aXRsZSB8fCAhYXV0aG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TYXZlfT5cbiAgICAgIDxGb3JtPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImF1dGhvclwiPkJvb2tzaGVsZjo8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJzaGVsZlwiPlxuICAgICAgICAgICAge3NoZWx2ZXMubWFwKChzaGVsZikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzaGVsZi5pZH0gdmFsdWU9e3NoZWxmLmlkfT5cbiAgICAgICAgICAgICAgICAgIHtzaGVsZi5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIkJvb2sgbmFtZVwiIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPkdlbnJlPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2VucmVcIiBpZD1cImdlbnJlXCIgcGxhY2Vob2xkZXI9XCJGaWN0aW9uXCIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+WWVhcjwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInllYXJcIiBpZD1cInllYXJcIiBwbGFjZWhvbGRlcj1cIjIwMjJcIiAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5SZWFkPzwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2VkXCIgdmFsdWU9XCJyZWFkXCIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImF1dGhvclwiPkF1dGhvcjwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImF1dGhvclwiPlxuICAgICAgICAgICAge2F1dGhvcnMubWFwKChhdXRob3IpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YXV0aG9yLmlkfSB2YWx1ZT17YXV0aG9yLmlkfT5cbiAgICAgICAgICAgICAgICAgIHthdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBib29rPC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEJvb2tGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmllbGQiLCJGb3JtIiwiRm9ybWlrIiwiQWRkQm9va0Zvcm0iLCJvblNhdmUiLCJvbkNhbmNlbCIsImF1dGhvcnMiLCJzaGVsdmVzIiwidXNlU3RhdGUiLCJ0aXRsZSIsInNldFRpdGxlIiwiYXV0aG9yIiwic2V0QXV0aG9yIiwiaW5pdGlhbFZhbHVlcyIsImdlbnJlIiwieWVhciIsInJlYWQiLCJyYXRpbmciLCJzaGVsZiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/addBook.tsx\n");

/***/ })

});