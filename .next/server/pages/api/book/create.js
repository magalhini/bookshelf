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
exports.id = "pages/api/book/create";
exports.ids = ["pages/api/book/create"];
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

/***/ "(api)/./pages/api/book/create.ts":
/*!**********************************!*\
  !*** ./pages/api/book/create.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.validateRoute)(async (req, res, user) => {\n  if (req.method !== \"POST\") {\n    res.status(405).send({\n      ok: false\n    });\n  }\n\n  const values = JSON.parse(req.body);\n  console.log(values); // todo: error handling\n\n  if (!values.title || !values.author) {\n    res.status(422).send(\"Error\");\n    return;\n  }\n\n  const book = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].book.create({\n    data: {\n      title: values.title,\n      genre: values.genre,\n      shelf: {\n        connect: {\n          id: parseInt(values.shelf)\n        }\n      },\n      rating: values.rating,\n      year: parseInt(values.year, 10),\n      cover: \"\",\n      read: values.read,\n      author: {\n        connect: {\n          id: parseInt(values.author)\n        }\n      }\n    }\n  });\n  res.send({\n    bookId: book.id\n  });\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9vay9jcmVhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSx3REFBYSxDQUFDLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDckQsTUFBSUYsR0FBRyxDQUFDRyxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekJGLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLEVBQUUsRUFBRTtBQUFOLEtBQXJCO0FBQ0Q7O0FBRUQsUUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBRyxDQUFDVSxJQUFmLENBQWY7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVosRUFOcUQsQ0FRckQ7O0FBQ0EsTUFBSSxDQUFDQSxNQUFNLENBQUNNLEtBQVIsSUFBaUIsQ0FBQ04sTUFBTSxDQUFDTyxNQUE3QixFQUFxQztBQUNuQ2IsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsT0FBckI7QUFDQTtBQUNEOztBQUVELFFBQU1VLElBQUksR0FBRyxNQUFNaEIsK0RBQUEsQ0FBbUI7QUFDcENrQixJQUFBQSxJQUFJLEVBQUU7QUFDSkosTUFBQUEsS0FBSyxFQUFFTixNQUFNLENBQUNNLEtBRFY7QUFFSkssTUFBQUEsS0FBSyxFQUFFWCxNQUFNLENBQUNXLEtBRlY7QUFHSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLE9BQU8sRUFBRTtBQUNQQyxVQUFBQSxFQUFFLEVBQUVDLFFBQVEsQ0FBQ2YsTUFBTSxDQUFDWSxLQUFSO0FBREw7QUFESixPQUhIO0FBUUpJLE1BQUFBLE1BQU0sRUFBRWhCLE1BQU0sQ0FBQ2dCLE1BUlg7QUFTSkMsTUFBQUEsSUFBSSxFQUFFRixRQUFRLENBQUNmLE1BQU0sQ0FBQ2lCLElBQVIsRUFBYyxFQUFkLENBVFY7QUFVSkMsTUFBQUEsS0FBSyxFQUFFLEVBVkg7QUFXSkMsTUFBQUEsSUFBSSxFQUFFbkIsTUFBTSxDQUFDbUIsSUFYVDtBQVlKWixNQUFBQSxNQUFNLEVBQUU7QUFDTk0sUUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFVBQUFBLEVBQUUsRUFBRUMsUUFBUSxDQUFDZixNQUFNLENBQUNPLE1BQVI7QUFETDtBQURIO0FBWko7QUFEOEIsR0FBbkIsQ0FBbkI7QUFxQkFiLEVBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQUVzQixJQUFBQSxNQUFNLEVBQUVaLElBQUksQ0FBQ007QUFBZixHQUFUO0FBQ0QsQ0FwQzJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9va3NoZWxmLy4vcGFnZXMvYXBpL2Jvb2svY3JlYXRlLnRzPzcwODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZVJvdXRlKGFzeW5jIChyZXEsIHJlcywgdXNlcikgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuc2VuZCh7IG9rOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG4gIC8vIHRvZG86IGVycm9yIGhhbmRsaW5nXG4gIGlmICghdmFsdWVzLnRpdGxlIHx8ICF2YWx1ZXMuYXV0aG9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MjIpLnNlbmQoXCJFcnJvclwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBib29rID0gYXdhaXQgcHJpc21hLmJvb2suY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZTogdmFsdWVzLnRpdGxlLFxuICAgICAgZ2VucmU6IHZhbHVlcy5nZW5yZSxcbiAgICAgIHNoZWxmOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogcGFyc2VJbnQodmFsdWVzLnNoZWxmKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByYXRpbmc6IHZhbHVlcy5yYXRpbmcsXG4gICAgICB5ZWFyOiBwYXJzZUludCh2YWx1ZXMueWVhciwgMTApLFxuICAgICAgY292ZXI6IFwiXCIsXG4gICAgICByZWFkOiB2YWx1ZXMucmVhZCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHBhcnNlSW50KHZhbHVlcy5hdXRob3IpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXMuc2VuZCh7IGJvb2tJZDogYm9vay5pZCB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbInZhbGlkYXRlUm91dGUiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJ1c2VyIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm9rIiwidmFsdWVzIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImF1dGhvciIsImJvb2siLCJjcmVhdGUiLCJkYXRhIiwiZ2VucmUiLCJzaGVsZiIsImNvbm5lY3QiLCJpZCIsInBhcnNlSW50IiwicmF0aW5nIiwieWVhciIsImNvdmVyIiwicmVhZCIsImJvb2tJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/book/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/book/create.ts"));
module.exports = __webpack_exports__;

})();