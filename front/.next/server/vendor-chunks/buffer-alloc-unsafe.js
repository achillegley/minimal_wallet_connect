"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-alloc-unsafe";
exports.ids = ["vendor-chunks/buffer-alloc-unsafe"];
exports.modules = {

/***/ "(ssr)/./node_modules/buffer-alloc-unsafe/index.js":
/*!***************************************************!*\
  !*** ./node_modules/buffer-alloc-unsafe/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nfunction allocUnsafe(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError('\"size\" argument must be a number');\n    }\n    if (size < 0) {\n        throw new RangeError('\"size\" argument must not be negative');\n    }\n    if (Buffer.allocUnsafe) {\n        return Buffer.allocUnsafe(size);\n    } else {\n        return new Buffer(size);\n    }\n}\nmodule.exports = allocUnsafe;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWFsbG9jLXVuc2FmZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsU0FBU0EsWUFBYUMsSUFBSTtJQUN4QixJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlDLFVBQVU7SUFDdEI7SUFFQSxJQUFJRCxPQUFPLEdBQUc7UUFDWixNQUFNLElBQUlFLFdBQVc7SUFDdkI7SUFFQSxJQUFJQyxPQUFPSixXQUFXLEVBQUU7UUFDdEIsT0FBT0ksT0FBT0osV0FBVyxDQUFDQztJQUM1QixPQUFPO1FBQ0wsT0FBTyxJQUFJRyxPQUFPSDtJQUNwQjtBQUNGO0FBRUFJLE9BQU9DLE9BQU8sR0FBR04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVmcm9udC8uL25vZGVfbW9kdWxlcy9idWZmZXItYWxsb2MtdW5zYWZlL2luZGV4LmpzPzhmZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxuXG4gIGlmIChCdWZmZXIuYWxsb2NVbnNhZmUpIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jVW5zYWZlKHNpemUpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc2l6ZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFsbG9jVW5zYWZlXG4iXSwibmFtZXMiOlsiYWxsb2NVbnNhZmUiLCJzaXplIiwiVHlwZUVycm9yIiwiUmFuZ2VFcnJvciIsIkJ1ZmZlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-alloc-unsafe/index.js\n");

/***/ })

};
;