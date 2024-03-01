"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ethjs-util";
exports.ids = ["vendor-chunks/ethjs-util"];
exports.modules = {

/***/ "(ssr)/./node_modules/ethjs-util/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ethjs-util/lib/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isHexPrefixed = __webpack_require__(/*! is-hex-prefixed */ \"(ssr)/./node_modules/is-hex-prefixed/src/index.js\");\nvar stripHexPrefix = __webpack_require__(/*! strip-hex-prefix */ \"(ssr)/./node_modules/strip-hex-prefix/src/index.js\");\n/**\n * Pads a `String` to have an even length\n * @param {String} value\n * @return {String} output\n */ function padToEven(value) {\n    var a = value; // eslint-disable-line\n    if (typeof a !== \"string\") {\n        throw new Error(\"[ethjs-util] while padding to even, value must be string, is currently \" + typeof a + \", while padToEven.\");\n    }\n    if (a.length % 2) {\n        a = \"0\" + a;\n    }\n    return a;\n}\n/**\n * Converts a `Number` into a hex `String`\n * @param {Number} i\n * @return {String}\n */ function intToHex(i) {\n    var hex = i.toString(16); // eslint-disable-line\n    return \"0x\" + hex;\n}\n/**\n * Converts an `Number` to a `Buffer`\n * @param {Number} i\n * @return {Buffer}\n */ function intToBuffer(i) {\n    var hex = intToHex(i);\n    return new Buffer(padToEven(hex.slice(2)), \"hex\");\n}\n/**\n * Get the binary size of a string\n * @param {String} str\n * @return {Number}\n */ function getBinarySize(str) {\n    if (typeof str !== \"string\") {\n        throw new Error(\"[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '\" + typeof str + \"'.\");\n    }\n    return Buffer.byteLength(str, \"utf8\");\n}\n/**\n * Returns TRUE if the first specified array contains all elements\n * from the second one. FALSE otherwise.\n *\n * @param {array} superset\n * @param {array} subset\n *\n * @returns {boolean}\n */ function arrayContainsArray(superset, subset, some) {\n    if (Array.isArray(superset) !== true) {\n        throw new Error(\"[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '\" + typeof superset + \"'\");\n    }\n    if (Array.isArray(subset) !== true) {\n        throw new Error(\"[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '\" + typeof subset + \"'\");\n    }\n    return subset[Boolean(some) && \"some\" || \"every\"](function(value) {\n        return superset.indexOf(value) >= 0;\n    });\n}\n/**\n * Should be called to get utf8 from it's hex representation\n *\n * @method toUtf8\n * @param {String} string in hex\n * @returns {String} ascii string representation of hex value\n */ function toUtf8(hex) {\n    var bufferValue = new Buffer(padToEven(stripHexPrefix(hex).replace(/^0+|0+$/g, \"\")), \"hex\");\n    return bufferValue.toString(\"utf8\");\n}\n/**\n * Should be called to get ascii from it's hex representation\n *\n * @method toAscii\n * @param {String} string in hex\n * @returns {String} ascii string representation of hex value\n */ function toAscii(hex) {\n    var str = \"\"; // eslint-disable-line\n    var i = 0, l = hex.length; // eslint-disable-line\n    if (hex.substring(0, 2) === \"0x\") {\n        i = 2;\n    }\n    for(; i < l; i += 2){\n        var code = parseInt(hex.substr(i, 2), 16);\n        str += String.fromCharCode(code);\n    }\n    return str;\n}\n/**\n * Should be called to get hex representation (prefixed by 0x) of utf8 string\n *\n * @method fromUtf8\n * @param {String} string\n * @param {Number} optional padding\n * @returns {String} hex representation of input string\n */ function fromUtf8(stringValue) {\n    var str = new Buffer(stringValue, \"utf8\");\n    return \"0x\" + padToEven(str.toString(\"hex\")).replace(/^0+|0+$/g, \"\");\n}\n/**\n * Should be called to get hex representation (prefixed by 0x) of ascii string\n *\n * @method fromAscii\n * @param {String} string\n * @param {Number} optional padding\n * @returns {String} hex representation of input string\n */ function fromAscii(stringValue) {\n    var hex = \"\"; // eslint-disable-line\n    for(var i = 0; i < stringValue.length; i++){\n        // eslint-disable-line\n        var code = stringValue.charCodeAt(i);\n        var n = code.toString(16);\n        hex += n.length < 2 ? \"0\" + n : n;\n    }\n    return \"0x\" + hex;\n}\n/**\n * getKeys([{a: 1, b: 2}, {a: 3, b: 4}], 'a') => [1, 3]\n *\n * @method getKeys get specific key from inner object array of objects\n * @param {String} params\n * @param {String} key\n * @param {Boolean} allowEmpty\n * @returns {Array} output just a simple array of output keys\n */ function getKeys(params, key, allowEmpty) {\n    if (!Array.isArray(params)) {\n        throw new Error(\"[ethjs-util] method getKeys expecting type Array as 'params' input, got '\" + typeof params + \"'\");\n    }\n    if (typeof key !== \"string\") {\n        throw new Error(\"[ethjs-util] method getKeys expecting type String for input 'key' got '\" + typeof key + \"'.\");\n    }\n    var result = []; // eslint-disable-line\n    for(var i = 0; i < params.length; i++){\n        // eslint-disable-line\n        var value = params[i][key]; // eslint-disable-line\n        if (allowEmpty && !value) {\n            value = \"\";\n        } else if (typeof value !== \"string\") {\n            throw new Error(\"invalid abi\");\n        }\n        result.push(value);\n    }\n    return result;\n}\n/**\n * Is the string a hex string.\n *\n * @method check if string is hex string of specific length\n * @param {String} value\n * @param {Number} length\n * @returns {Boolean} output the string is a hex string\n */ function isHexString(value, length) {\n    if (typeof value !== \"string\" || !value.match(/^0x[0-9A-Fa-f]*$/)) {\n        return false;\n    }\n    if (length && value.length !== 2 + 2 * length) {\n        return false;\n    }\n    return true;\n}\nmodule.exports = {\n    arrayContainsArray: arrayContainsArray,\n    intToBuffer: intToBuffer,\n    getBinarySize: getBinarySize,\n    isHexPrefixed: isHexPrefixed,\n    stripHexPrefix: stripHexPrefix,\n    padToEven: padToEven,\n    intToHex: intToHex,\n    fromAscii: fromAscii,\n    fromUtf8: fromUtf8,\n    toAscii: toAscii,\n    toUtf8: toUtf8,\n    getKeys: getKeys,\n    isHexString: isHexString\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoanMtdXRpbC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxnQkFBZ0JDLG1CQUFPQSxDQUFDO0FBQzVCLElBQUlDLGlCQUFpQkQsbUJBQU9BLENBQUM7QUFFN0I7Ozs7Q0FJQyxHQUNELFNBQVNFLFVBQVVDLEtBQUs7SUFDdEIsSUFBSUMsSUFBSUQsT0FBTyxzQkFBc0I7SUFFckMsSUFBSSxPQUFPQyxNQUFNLFVBQVU7UUFDekIsTUFBTSxJQUFJQyxNQUFNLDRFQUE0RSxPQUFPRCxJQUFJO0lBQ3pHO0lBRUEsSUFBSUEsRUFBRUUsTUFBTSxHQUFHLEdBQUc7UUFDaEJGLElBQUksTUFBTUE7SUFDWjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQTs7OztDQUlDLEdBQ0QsU0FBU0csU0FBU0MsQ0FBQztJQUNqQixJQUFJQyxNQUFNRCxFQUFFRSxRQUFRLENBQUMsS0FBSyxzQkFBc0I7SUFFaEQsT0FBTyxPQUFPRDtBQUNoQjtBQUVBOzs7O0NBSUMsR0FDRCxTQUFTRSxZQUFZSCxDQUFDO0lBQ3BCLElBQUlDLE1BQU1GLFNBQVNDO0lBRW5CLE9BQU8sSUFBSUksT0FBT1YsVUFBVU8sSUFBSUksS0FBSyxDQUFDLEtBQUs7QUFDN0M7QUFFQTs7OztDQUlDLEdBQ0QsU0FBU0MsY0FBY0MsR0FBRztJQUN4QixJQUFJLE9BQU9BLFFBQVEsVUFBVTtRQUMzQixNQUFNLElBQUlWLE1BQU0sK0dBQWtILE9BQU9VLE1BQU07SUFDako7SUFFQSxPQUFPSCxPQUFPSSxVQUFVLENBQUNELEtBQUs7QUFDaEM7QUFFQTs7Ozs7Ozs7Q0FRQyxHQUNELFNBQVNFLG1CQUFtQkMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUk7SUFDaEQsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSixjQUFjLE1BQU07UUFDcEMsTUFBTSxJQUFJYixNQUFNLCtGQUFrRyxPQUFPYSxXQUFXO0lBQ3RJO0lBQ0EsSUFBSUcsTUFBTUMsT0FBTyxDQUFDSCxZ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O0FBQ1Q7QUFFQTJDLE9BQU9DLE9BQU8sR0FBRztJQUNmakMsb0JBQW9CQTtJQUNwQk4sYUFBYUE7SUFDYkcsZUFBZUE7SUFDZmYsZUFBZUE7SUFDZkUsZ0JBQWdCQTtJQUNoQkMsV0FBV0E7SUFDWEssVUFBVUE7SUFDVitCLFdBQVdBO0lBQ1hGLFVBQVVBO0lBQ1ZSLFNBQVNBO0lBQ1RILFFBQVFBO0lBQ1JnQixTQUFTQTtJQUNUTSxhQUFhQTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlZnJvbnQvLi9ub2RlX21vZHVsZXMvZXRoanMtdXRpbC9saWIvaW5kZXguanM/ZTM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc0hleFByZWZpeGVkID0gcmVxdWlyZSgnaXMtaGV4LXByZWZpeGVkJyk7XG52YXIgc3RyaXBIZXhQcmVmaXggPSByZXF1aXJlKCdzdHJpcC1oZXgtcHJlZml4Jyk7XG5cbi8qKlxuICogUGFkcyBhIGBTdHJpbmdgIHRvIGhhdmUgYW4gZXZlbiBsZW5ndGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gcGFkVG9FdmVuKHZhbHVlKSB7XG4gIHZhciBhID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAodHlwZW9mIGEgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbZXRoanMtdXRpbF0gd2hpbGUgcGFkZGluZyB0byBldmVuLCB2YWx1ZSBtdXN0IGJlIHN0cmluZywgaXMgY3VycmVudGx5ICcgKyB0eXBlb2YgYSArICcsIHdoaWxlIHBhZFRvRXZlbi4nKTtcbiAgfVxuXG4gIGlmIChhLmxlbmd0aCAlIDIpIHtcbiAgICBhID0gJzAnICsgYTtcbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgYE51bWJlcmAgaW50byBhIGhleCBgU3RyaW5nYFxuICogQHBhcmFtIHtOdW1iZXJ9IGlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaW50VG9IZXgoaSkge1xuICB2YXIgaGV4ID0gaS50b1N0cmluZygxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICByZXR1cm4gJzB4JyArIGhleDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBgTnVtYmVyYCB0byBhIGBCdWZmZXJgXG4gKiBAcGFyYW0ge051bWJlcn0gaVxuICogQHJldHVybiB7QnVmZmVyfVxuICovXG5mdW5jdGlvbiBpbnRUb0J1ZmZlcihpKSB7XG4gIHZhciBoZXggPSBpbnRUb0hleChpKTtcblxuICByZXR1cm4gbmV3IEJ1ZmZlcihwYWRUb0V2ZW4oaGV4LnNsaWNlKDIpKSwgJ2hleCcpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYmluYXJ5IHNpemUgb2YgYSBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0QmluYXJ5U2l6ZShzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbZXRoanMtdXRpbF0gd2hpbGUgZ2V0dGluZyBiaW5hcnkgc2l6ZSwgbWV0aG9kIGdldEJpbmFyeVNpemUgcmVxdWlyZXMgaW5wdXQgXFwnc3RyXFwnIHRvIGJlIHR5cGUgU3RyaW5nLCBnb3QgXFwnJyArIHR5cGVvZiBzdHIgKyAnXFwnLicpO1xuICB9XG5cbiAgcmV0dXJuIEJ1ZmZlci5ieXRlTGVuZ3RoKHN0ciwgJ3V0ZjgnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIFRSVUUgaWYgdGhlIGZpcnN0IHNwZWNpZmllZCBhcnJheSBjb250YWlucyBhbGwgZWxlbWVudHNcbiAqIGZyb20gdGhlIHNlY29uZCBvbmUuIEZBTFNFIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBzdXBlcnNldFxuICogQHBhcmFtIHthcnJheX0gc3Vic2V0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnNBcnJheShzdXBlcnNldCwgc3Vic2V0LCBzb21lKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHN1cGVyc2V0KSAhPT0gdHJ1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignW2V0aGpzLXV0aWxdIG1ldGhvZCBhcnJheUNvbnRhaW5zQXJyYXkgcmVxdWlyZXMgaW5wdXQgXFwnc3VwZXJzZXRcXCcgdG8gYmUgYW4gYXJyYXkgZ290IHR5cGUgXFwnJyArIHR5cGVvZiBzdXBlcnNldCArICdcXCcnKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShzdWJzZXQpICE9PSB0cnVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbZXRoanMtdXRpbF0gbWV0aG9kIGFycmF5Q29udGFpbnNBcnJheSByZXF1aXJlcyBpbnB1dCBcXCdzdWJzZXRcXCcgdG8gYmUgYW4gYXJyYXkgZ290IHR5cGUgXFwnJyArIHR5cGVvZiBzdWJzZXQgKyAnXFwnJyk7XG4gIH1cblxuICByZXR1cm4gc3Vic2V0W0Jvb2xlYW4oc29tZSkgJiYgJ3NvbWUnIHx8ICdldmVyeSddKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlcnNldC5pbmRleE9mKHZhbHVlKSA+PSAwO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIGdldCB1dGY4IGZyb20gaXQncyBoZXggcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAbWV0aG9kIHRvVXRmOFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBpbiBoZXhcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGFzY2lpIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBoZXggdmFsdWVcbiAqL1xuZnVuY3Rpb24gdG9VdGY4KGhleCkge1xuICB2YXIgYnVmZmVyVmFsdWUgPSBuZXcgQnVmZmVyKHBhZFRvRXZlbihzdHJpcEhleFByZWZpeChoZXgpLnJlcGxhY2UoL14wK3wwKyQvZywgJycpKSwgJ2hleCcpO1xuXG4gIHJldHVybiBidWZmZXJWYWx1ZS50b1N0cmluZygndXRmOCcpO1xufVxuXG4vKipcbiAqIFNob3VsZCBiZSBjYWxsZWQgdG8gZ2V0IGFzY2lpIGZyb20gaXQncyBoZXggcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAbWV0aG9kIHRvQXNjaWlcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgaW4gaGV4XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhc2NpaSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgaGV4IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRvQXNjaWkoaGV4KSB7XG4gIHZhciBzdHIgPSAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB2YXIgaSA9IDAsXG4gICAgICBsID0gaGV4Lmxlbmd0aDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmIChoZXguc3Vic3RyaW5nKDAsIDIpID09PSAnMHgnKSB7XG4gICAgaSA9IDI7XG4gIH1cblxuICBmb3IgKDsgaSA8IGw7IGkgKz0gMikge1xuICAgIHZhciBjb2RlID0gcGFyc2VJbnQoaGV4LnN1YnN0cihpLCAyKSwgMTYpO1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIGdldCBoZXggcmVwcmVzZW50YXRpb24gKHByZWZpeGVkIGJ5IDB4KSBvZiB1dGY4IHN0cmluZ1xuICpcbiAqIEBtZXRob2QgZnJvbVV0ZjhcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25hbCBwYWRkaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBoZXggcmVwcmVzZW50YXRpb24gb2YgaW5wdXQgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGZyb21VdGY4KHN0cmluZ1ZhbHVlKSB7XG4gIHZhciBzdHIgPSBuZXcgQnVmZmVyKHN0cmluZ1ZhbHVlLCAndXRmOCcpO1xuXG4gIHJldHVybiAnMHgnICsgcGFkVG9FdmVuKHN0ci50b1N0cmluZygnaGV4JykpLnJlcGxhY2UoL14wK3wwKyQvZywgJycpO1xufVxuXG4vKipcbiAqIFNob3VsZCBiZSBjYWxsZWQgdG8gZ2V0IGhleCByZXByZXNlbnRhdGlvbiAocHJlZml4ZWQgYnkgMHgpIG9mIGFzY2lpIHN0cmluZ1xuICpcbiAqIEBtZXRob2QgZnJvbUFzY2lpXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9uYWwgcGFkZGluZ1xuICogQHJldHVybnMge1N0cmluZ30gaGV4IHJlcHJlc2VudGF0aW9uIG9mIGlucHV0IHN0cmluZ1xuICovXG5mdW5jdGlvbiBmcm9tQXNjaWkoc3RyaW5nVmFsdWUpIHtcbiAgdmFyIGhleCA9ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgdmFyIGNvZGUgPSBzdHJpbmdWYWx1ZS5jaGFyQ29kZUF0KGkpO1xuICAgIHZhciBuID0gY29kZS50b1N0cmluZygxNik7XG4gICAgaGV4ICs9IG4ubGVuZ3RoIDwgMiA/ICcwJyArIG4gOiBuO1xuICB9XG5cbiAgcmV0dXJuICcweCcgKyBoZXg7XG59XG5cbi8qKlxuICogZ2V0S2V5cyhbe2E6IDEsIGI6IDJ9LCB7YTogMywgYjogNH1dLCAnYScpID0+IFsxLCAzXVxuICpcbiAqIEBtZXRob2QgZ2V0S2V5cyBnZXQgc3BlY2lmaWMga2V5IGZyb20gaW5uZXIgb2JqZWN0IGFycmF5IG9mIG9iamVjdHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxsb3dFbXB0eVxuICogQHJldHVybnMge0FycmF5fSBvdXRwdXQganVzdCBhIHNpbXBsZSBhcnJheSBvZiBvdXRwdXQga2V5c1xuICovXG5mdW5jdGlvbiBnZXRLZXlzKHBhcmFtcywga2V5LCBhbGxvd0VtcHR5KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbZXRoanMtdXRpbF0gbWV0aG9kIGdldEtleXMgZXhwZWN0aW5nIHR5cGUgQXJyYXkgYXMgXFwncGFyYW1zXFwnIGlucHV0LCBnb3QgXFwnJyArIHR5cGVvZiBwYXJhbXMgKyAnXFwnJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbZXRoanMtdXRpbF0gbWV0aG9kIGdldEtleXMgZXhwZWN0aW5nIHR5cGUgU3RyaW5nIGZvciBpbnB1dCBcXCdrZXlcXCcgZ290IFxcJycgKyB0eXBlb2Yga2V5ICsgJ1xcJy4nKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHZhciB2YWx1ZSA9IHBhcmFtc1tpXVtrZXldOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKGFsbG93RW1wdHkgJiYgIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFiaScpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIElzIHRoZSBzdHJpbmcgYSBoZXggc3RyaW5nLlxuICpcbiAqIEBtZXRob2QgY2hlY2sgaWYgc3RyaW5nIGlzIGhleCBzdHJpbmcgb2Ygc3BlY2lmaWMgbGVuZ3RoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSBvdXRwdXQgdGhlIHN0cmluZyBpcyBhIGhleCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gaXNIZXhTdHJpbmcodmFsdWUsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCAhdmFsdWUubWF0Y2goL14weFswLTlBLUZhLWZdKiQvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChsZW5ndGggJiYgdmFsdWUubGVuZ3RoICE9PSAyICsgMiAqIGxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXJyYXlDb250YWluc0FycmF5OiBhcnJheUNvbnRhaW5zQXJyYXksXG4gIGludFRvQnVmZmVyOiBpbnRUb0J1ZmZlcixcbiAgZ2V0QmluYXJ5U2l6ZTogZ2V0QmluYXJ5U2l6ZSxcbiAgaXNIZXhQcmVmaXhlZDogaXNIZXhQcmVmaXhlZCxcbiAgc3RyaXBIZXhQcmVmaXg6IHN0cmlwSGV4UHJlZml4LFxuICBwYWRUb0V2ZW46IHBhZFRvRXZlbixcbiAgaW50VG9IZXg6IGludFRvSGV4LFxuICBmcm9tQXNjaWk6IGZyb21Bc2NpaSxcbiAgZnJvbVV0Zjg6IGZyb21VdGY4LFxuICB0b0FzY2lpOiB0b0FzY2lpLFxuICB0b1V0Zjg6IHRvVXRmOCxcbiAgZ2V0S2V5czogZ2V0S2V5cyxcbiAgaXNIZXhTdHJpbmc6IGlzSGV4U3RyaW5nXG59OyJdLCJuYW1lcyI6WyJpc0hleFByZWZpeGVkIiwicmVxdWlyZSIsInN0cmlwSGV4UHJlZml4IiwicGFkVG9FdmVuIiwidmFsdWUiLCJhIiwiRXJyb3IiLCJsZW5ndGgiLCJpbnRUb0hleCIsImkiLCJoZXgiLCJ0b1N0cmluZyIsImludFRvQnVmZmVyIiwiQnVmZmVyIiwic2xpY2UiLCJnZXRCaW5hcnlTaXplIiwic3RyIiwiYnl0ZUxlbmd0aCIsImFycmF5Q29udGFpbnNBcnJheSIsInN1cGVyc2V0Iiwic3Vic2V0Iiwic29tZSIsIkFycmF5IiwiaXNBcnJheSIsIkJvb2xlYW4iLCJpbmRleE9mIiwidG9VdGY4IiwiYnVmZmVyVmFsdWUiLCJyZXBsYWNlIiwidG9Bc2NpaSIsImwiLCJzdWJzdHJpbmciLCJjb2RlIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJmcm9tVXRmOCIsInN0cmluZ1ZhbHVlIiwiZnJvbUFzY2lpIiwiY2hhckNvZGVBdCIsIm4iLCJnZXRLZXlzIiwicGFyYW1zIiwia2V5IiwiYWxsb3dFbXB0eSIsInJlc3VsdCIsInB1c2giLCJpc0hleFN0cmluZyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ethjs-util/lib/index.js\n");

/***/ })

};
;