"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-hex-prefixed";
exports.ids = ["vendor-chunks/is-hex-prefixed"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-hex-prefixed/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/is-hex-prefixed/src/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("/**\n * Returns a `Boolean` on whether or not the a `String` starts with '0x'\n * @param {String} str the string input value\n * @return {Boolean} a boolean if it is or is not hex prefixed\n * @throws if the str input is not a string\n */ \nmodule.exports = function isHexPrefixed(str) {\n    if (typeof str !== \"string\") {\n        throw new Error(\"[is-hex-prefixed] value must be type 'string', is currently type \" + typeof str + \", while checking isHexPrefixed.\");\n    }\n    return str.slice(0, 2) === \"0x\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtaGV4LXByZWZpeGVkL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQztBQUNEQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsY0FBY0MsR0FBRztJQUN6QyxJQUFJLE9BQU9BLFFBQVEsVUFBVTtRQUMzQixNQUFNLElBQUlDLE1BQU0sc0VBQXVFLE9BQU9ELE1BQU87SUFDdkc7SUFFQSxPQUFPQSxJQUFJRSxLQUFLLENBQUMsR0FBRyxPQUFPO0FBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlZnJvbnQvLi9ub2RlX21vZHVsZXMvaXMtaGV4LXByZWZpeGVkL3NyYy9pbmRleC5qcz83NzViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyBhIGBCb29sZWFuYCBvbiB3aGV0aGVyIG9yIG5vdCB0aGUgYSBgU3RyaW5nYCBzdGFydHMgd2l0aCAnMHgnXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIHRoZSBzdHJpbmcgaW5wdXQgdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGEgYm9vbGVhbiBpZiBpdCBpcyBvciBpcyBub3QgaGV4IHByZWZpeGVkXG4gKiBAdGhyb3dzIGlmIHRoZSBzdHIgaW5wdXQgaXMgbm90IGEgc3RyaW5nXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNIZXhQcmVmaXhlZChzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW2lzLWhleC1wcmVmaXhlZF0gdmFsdWUgbXVzdCBiZSB0eXBlICdzdHJpbmcnLCBpcyBjdXJyZW50bHkgdHlwZSBcIiArICh0eXBlb2Ygc3RyKSArIFwiLCB3aGlsZSBjaGVja2luZyBpc0hleFByZWZpeGVkLlwiKTtcbiAgfVxuXG4gIHJldHVybiBzdHIuc2xpY2UoMCwgMikgPT09ICcweCc7XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImlzSGV4UHJlZml4ZWQiLCJzdHIiLCJFcnJvciIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-hex-prefixed/src/index.js\n");

/***/ })

};
;