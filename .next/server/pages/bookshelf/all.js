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
exports.id = "pages/bookshelf/all";
exports.ids = ["pages/bookshelf/all"];
exports.modules = {

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"./lib/prisma.ts\");\n\n\nconst validateRoute = handler => {\n  return async (req, res) => {\n    const {\n      LIBRARY_TOKEN: token\n    } = req.cookies; // check for token\n\n    if (token) {\n      let user; // Get the ID from the token with our encryption secret.\n      // Then find a user in the DB with that ID.\n      // If its not there, not a real user.\n\n      try {\n        const {\n          id\n        } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"hello\");\n        user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n          where: {\n            id\n          }\n        });\n\n        if (!user) {\n          throw new Error(\"Not a real user\");\n        }\n      } catch (err) {\n        res.status(401);\n        res.json({\n          error: \"Not Authorized\"\n        });\n      } // Pass the user to the next handler\n\n\n      return handler(req, res, user);\n    }\n\n    res.status(401);\n    res.json({\n      error: \"Not Authorized\"\n    });\n  };\n};\nconst validateToken = token => {\n  // token may not always be passed, so we handle that in getServerSideProps\n  // with a catch, redirecting back to signin\n  const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"hello\");\n  return user;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFTyxNQUFNRSxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUN4QyxTQUFPLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQzFELFVBQU07QUFBRUMsTUFBQUEsYUFBYSxFQUFFQztBQUFqQixRQUEyQkgsR0FBRyxDQUFDSSxPQUFyQyxDQUQwRCxDQUNaOztBQUU5QyxRQUFJRCxLQUFKLEVBQVc7QUFDVCxVQUFJRSxJQUFKLENBRFMsQ0FHVDtBQUNBO0FBQ0E7O0FBQ0EsVUFBSTtBQUNGLGNBQU07QUFBRUMsVUFBQUE7QUFBRixZQUFTViwwREFBQSxDQUFXTyxLQUFYLEVBQWtCLE9BQWxCLENBQWY7QUFFQUUsUUFBQUEsSUFBSSxHQUFHLE1BQU1SLCtEQUFBLENBQXVCO0FBQ2xDWSxVQUFBQSxLQUFLLEVBQUU7QUFBRUgsWUFBQUE7QUFBRjtBQUQyQixTQUF2QixDQUFiOztBQUlBLFlBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1QsZ0JBQU0sSUFBSUssS0FBSixDQUFVLGlCQUFWLENBQU47QUFDRDtBQUNGLE9BVkQsQ0FVRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlYsUUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxRQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFUO0FBQ0QsT0FuQlEsQ0FxQlQ7OztBQUNBLGFBQU9mLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdJLElBQVgsQ0FBZDtBQUNEOztBQUVESixJQUFBQSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ1ksSUFBSixDQUFTO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQVQ7QUFDRCxHQTlCRDtBQStCRCxDQWhDTTtBQWtDQSxNQUFNQyxhQUFhLEdBQUlaLEtBQUQsSUFBVztBQUN0QztBQUNBO0FBRUEsUUFBTUUsSUFBSSxHQUFHVCwwREFBQSxDQUFXTyxLQUFYLEVBQWtCLE9BQWxCLENBQWI7QUFDQSxTQUFPRSxJQUFQO0FBQ0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaGVsZi8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4vcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVJvdXRlID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHsgTElCUkFSWV9UT0tFTjogdG9rZW4gfSA9IHJlcS5jb29raWVzOyAvLyBjaGVjayBmb3IgdG9rZW5cblxuICAgIGlmICh0b2tlbikge1xuICAgICAgbGV0IHVzZXI7XG5cbiAgICAgIC8vIEdldCB0aGUgSUQgZnJvbSB0aGUgdG9rZW4gd2l0aCBvdXIgZW5jcnlwdGlvbiBzZWNyZXQuXG4gICAgICAvLyBUaGVuIGZpbmQgYSB1c2VyIGluIHRoZSBEQiB3aXRoIHRoYXQgSUQuXG4gICAgICAvLyBJZiBpdHMgbm90IHRoZXJlLCBub3QgYSByZWFsIHVzZXIuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBcImhlbGxvXCIpO1xuXG4gICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSByZWFsIHVzZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSk7XG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiTm90IEF1dGhvcml6ZWRcIiB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFzcyB0aGUgdXNlciB0byB0aGUgbmV4dCBoYW5kbGVyXG4gICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcywgdXNlcik7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cyg0MDEpO1xuICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiTm90IEF1dGhvcml6ZWRcIiB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVRva2VuID0gKHRva2VuKSA9PiB7XG4gIC8vIHRva2VuIG1heSBub3QgYWx3YXlzIGJlIHBhc3NlZCwgc28gd2UgaGFuZGxlIHRoYXQgaW4gZ2V0U2VydmVyU2lkZVByb3BzXG4gIC8vIHdpdGggYSBjYXRjaCwgcmVkaXJlY3RpbmcgYmFjayB0byBzaWduaW5cblxuICBjb25zdCB1c2VyID0gand0LnZlcmlmeSh0b2tlbiwgXCJoZWxsb1wiKTtcbiAgcmV0dXJuIHVzZXI7XG59O1xuIl0sIm5hbWVzIjpbImp3dCIsInByaXNtYSIsInZhbGlkYXRlUm91dGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiTElCUkFSWV9UT0tFTiIsInRva2VuIiwiY29va2llcyIsInVzZXIiLCJpZCIsInZlcmlmeSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIkVycm9yIiwiZXJyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidmFsaWRhdGVUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./lib/helpers.ts":
/*!************************!*\
  !*** ./lib/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatDate\": () => (/* binding */ formatDate)\n/* harmony export */ });\nconst formatDate = date => {\n  return date.toLocaleDateString(\"en-US\", {\n    year: \"numeric\",\n    month: \"numeric\",\n    day: \"numeric\"\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVSxHQUFJQyxJQUFELElBQWdCO0FBQ3hDLFNBQU9BLElBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsT0FBeEIsRUFBaUM7QUFDdENDLElBQUFBLElBQUksRUFBRSxTQURnQztBQUV0Q0MsSUFBQUEsS0FBSyxFQUFFLFNBRitCO0FBR3RDQyxJQUFBQSxHQUFHLEVBQUU7QUFIaUMsR0FBakMsQ0FBUDtBQUtELENBTk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rc2hlbGYvLi9saWIvaGVscGVycy50cz9jNjdjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcIm51bWVyaWNcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiZm9ybWF0RGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/helpers.ts\n");

/***/ }),

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsSUFBSUEsd0RBQUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaGVsZi8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/bookshelf/all.tsx":
/*!*********************************!*\
  !*** ./pages/bookshelf/all.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"babel-plugin-superjson-next/tools\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/auth */ \"./lib/auth.ts\");\n/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/helpers */ \"./lib/helpers.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/ricardo/Documents/MyProjects/bookshelf/pages/bookshelf/all.tsx\";\n\n\n\n\n\n\n\nconst AllBooks = ({\n  shelves\n}) => {\n  console.log(shelves);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      mb: \"6\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n        as: \"h1\",\n        children: \"Your shelves\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      children: shelves.map(shelf => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n          mb: \"10\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            as: \"h2\",\n            fontSize: \"24\",\n            fontWeight: \"bold\",\n            pb: \"6\",\n            children: shelf.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {\n            maxWidth: \"40em\",\n            spacing: 2,\n            children: shelf.books.map(book => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                fontSize: \"2xl\",\n                children: book.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 21\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                justifyContent: \"space-between\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                  fontStyle: \"italic\",\n                  children: [\"by \", book.author.name]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 23\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                  fontStyle: \"italic\",\n                  children: [\"on \", (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_5__.formatDate)(book.createdAt)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 27,\n                  columnNumber: 23\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 21\n              }, undefined)]\n            }, book.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 19\n            }, undefined))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, undefined)]\n        }, shelf.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async ({\n  query,\n  req\n}) => {\n  let user;\n\n  try {\n    user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_4__.validateToken)(req.cookies.LIBRARY_TOKEN);\n  } catch (err) {\n    return {\n      redirect: {\n        permanent: false,\n        destination: \"/signin\"\n      }\n    };\n  }\n\n  const shelves = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].shelf.findMany({\n    where: {\n      userId: user.id\n    },\n    include: {\n      books: {\n        select: {\n          title: true,\n          author: true,\n          createdAt: true,\n          id: true\n        }\n      }\n    }\n  });\n  return {\n    props: {\n      shelves\n    }\n  };\n}, []);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(AllBooks));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSjtBQURSLEtBRG1DO0FBSTFDYyxJQUFBQSxPQUFPLEVBQUU7QUFDUG5CLE1BQUFBLEtBQUssRUFBRTtBQUNMb0IsUUFBQUEsTUFBTSxFQUFFO0FBQ05sQixVQUFBQSxLQUFLLEVBQUUsSUFERDtBQUVOQyxVQUFBQSxNQUFNLEVBQUUsSUFGRjtBQUdOQyxVQUFBQSxTQUFTLEVBQUUsSUFITDtBQUlOQyxVQUFBQSxFQUFFLEVBQUU7QUFKRTtBQURIO0FBREE7QUFKaUMsR0FBdEIsQ0FBdEI7QUFnQkEsU0FBTztBQUNMZ0IsSUFBQUEsS0FBSyxFQUFFO0FBQ0wzQixNQUFBQTtBQURLO0FBREYsR0FBUDtBQUtELENBbkM4QixLQUF4QjtBQXFDUCxpRUFBZSxxRkFBQUQsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaGVsZi8uL3BhZ2VzL2Jvb2tzaGVsZi9hbGwudHN4PzZjZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxleCwgVGV4dCwgTGlzdCwgTGlzdEl0ZW0sIEJveCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRva2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XG5cbmNvbnN0IEFsbEJvb2tzID0gKHsgc2hlbHZlcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHNoZWx2ZXMpO1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94IG1iPVwiNlwiPlxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCI+WW91ciBzaGVsdmVzPC9IZWFkaW5nPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICB7c2hlbHZlcy5tYXAoKHNoZWxmKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3ggbWI9XCIxMFwiIGtleT17c2hlbGYuaWR9PlxuICAgICAgICAgICAgICA8VGV4dCBhcz1cImgyXCIgZm9udFNpemU9XCIyNFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgcGI9XCI2XCI+XG4gICAgICAgICAgICAgICAge3NoZWxmLm5hbWV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPExpc3QgbWF4V2lkdGg9XCI0MGVtXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAge3NoZWxmLmJvb2tzLm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17Ym9vay5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCI+e2Jvb2sudGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U3R5bGU9XCJpdGFsaWNcIj5ieSB7Ym9vay5hdXRob3IubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFN0eWxlPVwiaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBvbiB7Zm9ybWF0RGF0ZShib29rLmNyZWF0ZWRBdCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5LCByZXEgfSkgPT4ge1xuICBsZXQgdXNlcjtcblxuICB0cnkge1xuICAgIHVzZXIgPSB2YWxpZGF0ZVRva2VuKHJlcS5jb29raWVzLkxJQlJBUllfVE9LRU4pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2hlbHZlcyA9IGF3YWl0IHByaXNtYS5zaGVsZi5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGJvb2tzOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHRpdGxlOiB0cnVlLFxuICAgICAgICAgIGF1dGhvcjogdHJ1ZSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNoZWx2ZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbEJvb2tzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmxleCIsIlRleHQiLCJMaXN0IiwiTGlzdEl0ZW0iLCJCb3giLCJIZWFkaW5nIiwicHJpc21hIiwidmFsaWRhdGVUb2tlbiIsImZvcm1hdERhdGUiLCJBbGxCb29rcyIsInNoZWx2ZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic2hlbGYiLCJuYW1lIiwiYm9va3MiLCJib29rIiwidGl0bGUiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwicmVxIiwidXNlciIsImNvb2tpZXMiLCJMSUJSQVJZX1RPS0VOIiwiZXJyIiwicmVkaXJlY3QiLCJwZXJtYW5lbnQiLCJkZXN0aW5hdGlvbiIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VySWQiLCJpbmNsdWRlIiwic2VsZWN0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/bookshelf/all.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/bookshelf/all.tsx"));
module.exports = __webpack_exports__;

})();