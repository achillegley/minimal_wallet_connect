"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-alloc";
exports.ids = ["vendor-chunks/buffer-alloc"];
exports.modules = {

/***/ "(ssr)/./node_modules/buffer-alloc/index.js":
/*!********************************************!*\
  !*** ./node_modules/buffer-alloc/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar bufferFill = __webpack_require__(/*! buffer-fill */ \"(ssr)/./node_modules/buffer-fill/index.js\");\nvar allocUnsafe = __webpack_require__(/*! buffer-alloc-unsafe */ \"(ssr)/./node_modules/buffer-alloc-unsafe/index.js\");\nmodule.exports = function alloc(size, fill, encoding) {\n    if (typeof size !== \"number\") {\n        throw new TypeError('\"size\" argument must be a number');\n    }\n    if (size < 0) {\n        throw new RangeError('\"size\" argument must not be negative');\n    }\n    if (Buffer.alloc) {\n        return Buffer.alloc(size, fill, encoding);\n    }\n    var buffer = allocUnsafe(size);\n    if (size === 0) {\n        return buffer;\n    }\n    if (fill === undefined) {\n        return bufferFill(buffer, 0);\n    }\n    if (typeof encoding !== \"string\") {\n        encoding = undefined;\n    }\n    return bufferFill(buffer, fill, encoding);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWFsbG9jL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUN6QixJQUFJQyxjQUFjRCxtQkFBT0EsQ0FBQztBQUUxQkUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLE1BQU9DLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ25ELElBQUksT0FBT0YsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUcsVUFBVTtJQUN0QjtJQUVBLElBQUlILE9BQU8sR0FBRztRQUNaLE1BQU0sSUFBSUksV0FBVztJQUN2QjtJQUVBLElBQUlDLE9BQU9OLEtBQUssRUFBRTtRQUNoQixPQUFPTSxPQUFPTixLQUFLLENBQUNDLE1BQU1DLE1BQU1DO0lBQ2xDO0lBRUEsSUFBSUksU0FBU1YsWUFBWUk7SUFFekIsSUFBSUEsU0FBUyxHQUFHO1FBQ2QsT0FBT007SUFDVDtJQUVBLElBQUlMLFNBQVNNLFdBQVc7UUFDdEIsT0FBT2IsV0FBV1ksUUFBUTtJQUM1QjtJQUVBLElBQUksT0FBT0osYUFBYSxVQUFVO1FBQ2hDQSxXQUFXSztJQUNiO0lBRUEsT0FBT2IsV0FBV1ksUUFBUUwsTUFBTUM7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVmcm9udC8uL25vZGVfbW9kdWxlcy9idWZmZXItYWxsb2MvaW5kZXguanM/ODYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYnVmZmVyRmlsbCA9IHJlcXVpcmUoJ2J1ZmZlci1maWxsJylcbnZhciBhbGxvY1Vuc2FmZSA9IHJlcXVpcmUoJ2J1ZmZlci1hbGxvYy11bnNhZmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFsbG9jIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5hbGxvYykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG4gIH1cblxuICB2YXIgYnVmZmVyID0gYWxsb2NVbnNhZmUoc2l6ZSlcblxuICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiBidWZmZXJcbiAgfVxuXG4gIGlmIChmaWxsID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYnVmZmVyRmlsbChidWZmZXIsIDApXG4gIH1cblxuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gYnVmZmVyRmlsbChidWZmZXIsIGZpbGwsIGVuY29kaW5nKVxufVxuIl0sIm5hbWVzIjpbImJ1ZmZlckZpbGwiLCJyZXF1aXJlIiwiYWxsb2NVbnNhZmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxsb2MiLCJzaXplIiwiZmlsbCIsImVuY29kaW5nIiwiVHlwZUVycm9yIiwiUmFuZ2VFcnJvciIsIkJ1ZmZlciIsImJ1ZmZlciIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-alloc/index.js\n");

/***/ })

};
;