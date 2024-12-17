/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/forestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyA5HkoXk8Ak8uwn2d-7y75g9sldQs5kFIs\",\r\n    authDomain: \"real-time-chatroom-78101.firebaseapp.com\",\r\n    projectId: \"real-time-chatroom-78101\",\r\n    storageBucket: \"real-time-chatroom-78101.firebasestorage.app\",\r\n    messagingSenderId: \"1058210452892\",\r\n    appId: \"1:1058210452892:web:b0f24d273e6d80b6c46459\"\r\n  };\r\n\r\n//   initialize database app\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig)\r\n\r\n//   init services\r\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/forestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\r\n\r\n// collection ref\r\nconst colRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/forestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"real-time-chatroom\")\n\n//# sourceURL=webpack://real-time-chatroom/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;