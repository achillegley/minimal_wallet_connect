"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/define-data-property";
exports.ids = ["vendor-chunks/define-data-property"];
exports.modules = {

/***/ "(ssr)/./node_modules/define-data-property/index.js":
/*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $defineProperty = __webpack_require__(/*! es-define-property */ \"(ssr)/./node_modules/es-define-property/index.js\");\nvar $SyntaxError = __webpack_require__(/*! es-errors/syntax */ \"(ssr)/./node_modules/es-errors/syntax.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\nvar gopd = __webpack_require__(/*! gopd */ \"(ssr)/./node_modules/gopd/index.js\");\n/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {\n    if (!obj || typeof obj !== \"object\" && typeof obj !== \"function\") {\n        throw new $TypeError(\"`obj` must be an object or a function`\");\n    }\n    if (typeof property !== \"string\" && typeof property !== \"symbol\") {\n        throw new $TypeError(\"`property` must be a string or a symbol`\");\n    }\n    if (arguments.length > 3 && typeof arguments[3] !== \"boolean\" && arguments[3] !== null) {\n        throw new $TypeError(\"`nonEnumerable`, if provided, must be a boolean or null\");\n    }\n    if (arguments.length > 4 && typeof arguments[4] !== \"boolean\" && arguments[4] !== null) {\n        throw new $TypeError(\"`nonWritable`, if provided, must be a boolean or null\");\n    }\n    if (arguments.length > 5 && typeof arguments[5] !== \"boolean\" && arguments[5] !== null) {\n        throw new $TypeError(\"`nonConfigurable`, if provided, must be a boolean or null\");\n    }\n    if (arguments.length > 6 && typeof arguments[6] !== \"boolean\") {\n        throw new $TypeError(\"`loose`, if provided, must be a boolean\");\n    }\n    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;\n    var nonWritable = arguments.length > 4 ? arguments[4] : null;\n    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;\n    var loose = arguments.length > 6 ? arguments[6] : false;\n    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);\n    if ($defineProperty) {\n        $defineProperty(obj, property, {\n            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,\n            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,\n            value: value,\n            writable: nonWritable === null && desc ? desc.writable : !nonWritable\n        });\n    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {\n        // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable\n        obj[property] = value; // eslint-disable-line no-param-reassign\n    } else {\n        throw new $SyntaxError(\"This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVmaW5lLWRhdGEtcHJvcGVydHkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxrQkFBa0JDLG1CQUFPQSxDQUFDO0FBRTlCLElBQUlDLGVBQWVELG1CQUFPQSxDQUFDO0FBQzNCLElBQUlFLGFBQWFGLG1CQUFPQSxDQUFDO0FBRXpCLElBQUlHLE9BQU9ILG1CQUFPQSxDQUFDO0FBRW5CLHdCQUF3QixHQUN4QkksT0FBT0MsT0FBTyxHQUFHLFNBQVNDLG1CQUN6QkMsR0FBRyxFQUNIQyxRQUFRLEVBQ1JDLEtBQUs7SUFFTCxJQUFJLENBQUNGLE9BQVEsT0FBT0EsUUFBUSxZQUFZLE9BQU9BLFFBQVEsWUFBYTtRQUNuRSxNQUFNLElBQUlMLFdBQVc7SUFDdEI7SUFDQSxJQUFJLE9BQU9NLGFBQWEsWUFBWSxPQUFPQSxhQUFhLFVBQVU7UUFDakUsTUFBTSxJQUFJTixXQUFXO0lBQ3RCO0lBQ0EsSUFBSVEsVUFBVUMsTUFBTSxHQUFHLEtBQUssT0FBT0QsU0FBUyxDQUFDLEVBQUUsS0FBSyxhQUFhQSxTQUFTLENBQUMsRUFBRSxLQUFLLE1BQU07UUFDdkYsTUFBTSxJQUFJUixXQUFXO0lBQ3RCO0lBQ0EsSUFBSVEsVUFBVUMsTUFBTSxHQUFHLEtBQUssT0FBT0QsU0FBUyxDQUFDLEVBQUUsS0FBSyxhQUFhQSxTQUFTLENBQUMsRUFBRSxLQUFLLE1BQU07UUFDdkYsTUFBTSxJQUFJUixXQUFXO0lBQ3RCO0lBQ0EsSUFBSVEsVUFBVUMsTUFBTSxHQUFHLEtBQUssT0FBT0QsU0FBUyxDQUFDLEVBQUUsS0FBSyxhQUFhQSxTQUFTLENBQUMsRUFBRSxLQUFLLE1BQU07UUFDdkYsTUFBTSxJQUFJUixXQUFXO0lBQ3RCO0lBQ0EsSUFBSVEsVUFBVUMsTUFBTSxHQUFHLEtBQUssT0FBT0QsU0FBUyxDQUFDLEVBQUUsS0FBSyxXQUFXO1FBQzlELE1BQU0sSUFBSVIsV0FBVztJQUN0QjtJQUVBLElBQUlVLGdCQUFnQkYsVUFBVUMsTUFBTSxHQUFHLElBQUlELFNBQVMsQ0FBQyxFQUFFLEdBQUc7SUFDMUQsSUFBSUcsY0FBY0gsVUFBVUMsTUFBTSxHQUFHLElBQUlELFNBQVMsQ0FBQyxFQUFFLEdBQUc7SUFDeEQsSUFBSUksa0JBQWtCSixVQUFVQyxNQUFNLEdBQUcsSUFBSUQsU0FBUyxDQUFDLEVBQUUsR0FBRztJQUM1RCxJQUFJSyxRQUFRTCxVQUFVQyxNQUFNLEdBQUcsSUFBSUQsU0FBUyxDQUFDLEVBQUUsR0FBRztJQUVsRCxvREFBb0QsR0FDcEQsSUFBSU0sT0FBTyxDQUFDLENBQUNiLFFBQVFBLEtBQUtJLEtBQUtDO0lBRS9CLElBQUlULGlCQUFpQjtRQUNwQkEsZ0JBQWdCUSxLQUFLQyxVQUFVO1lBQzlCUyxjQUFjSCxvQkFBb0IsUUFBUUUsT0FBT0EsS0FBS0MsWUFBWSxHQUFHLENBQUNIO1lBQ3RFSSxZQUFZTixrQkFBa0IsUUFBUUksT0FBT0EsS0FBS0UsVUFBVSxHQUFHLENBQUNOO1lBQ2hFSCxPQUFPQTtZQUNQVSxVQUFVTixnQkFBZ0IsUUFBUUcsT0FBT0EsS0FBS0csUUFBUSxHQUFHLENBQUNOO1FBQzNEO0lBQ0QsT0FBTyxJQUFJRSxTQUFVLENBQUNILGlCQUFpQixDQUFDQyxlQUFlLENBQUNDLGlCQUFrQjtRQUN6RSxvSEFBb0g7UUFDcEhQLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHQyxPQUFPLHdDQUF3QztJQUNoRSxPQUFPO1FBQ04sTUFBTSxJQUFJUixhQUFhO0lBQ3hCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVmcm9udC8uL25vZGVfbW9kdWxlcy9kZWZpbmUtZGF0YS1wcm9wZXJ0eS9pbmRleC5qcz8xNDk3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJ2VzLWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgJFN5bnRheEVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3N5bnRheCcpO1xudmFyICRUeXBlRXJyb3IgPSByZXF1aXJlKCdlcy1lcnJvcnMvdHlwZScpO1xuXG52YXIgZ29wZCA9IHJlcXVpcmUoJ2dvcGQnKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lRGF0YVByb3BlcnR5KFxuXHRvYmosXG5cdHByb3BlcnR5LFxuXHR2YWx1ZVxuKSB7XG5cdGlmICghb2JqIHx8ICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgb2JqYCBtdXN0IGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uYCcpO1xuXHR9XG5cdGlmICh0eXBlb2YgcHJvcGVydHkgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wZXJ0eSAhPT0gJ3N5bWJvbCcpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYHByb3BlcnR5YCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgc3ltYm9sYCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdICE9PSAnYm9vbGVhbicgJiYgYXJndW1lbnRzWzNdICE9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Bub25FbnVtZXJhYmxlYCwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYSBib29sZWFuIG9yIG51bGwnKTtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgdHlwZW9mIGFyZ3VtZW50c1s0XSAhPT0gJ2Jvb2xlYW4nICYmIGFyZ3VtZW50c1s0XSAhPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgbm9uV3JpdGFibGVgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4gb3IgbnVsbCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNSAmJiB0eXBlb2YgYXJndW1lbnRzWzVdICE9PSAnYm9vbGVhbicgJiYgYXJndW1lbnRzWzVdICE9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Bub25Db25maWd1cmFibGVgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4gb3IgbnVsbCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNiAmJiB0eXBlb2YgYXJndW1lbnRzWzZdICE9PSAnYm9vbGVhbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxvb3NlYCwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHR2YXIgbm9uRW51bWVyYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblx0dmFyIG5vbldyaXRhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiBudWxsO1xuXHR2YXIgbm9uQ29uZmlndXJhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiBudWxsO1xuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gNiA/IGFyZ3VtZW50c1s2XSA6IGZhbHNlO1xuXG5cdC8qIEB0eXBlIHtmYWxzZSB8IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPHVua25vd24+fSAqL1xuXHR2YXIgZGVzYyA9ICEhZ29wZCAmJiBnb3BkKG9iaiwgcHJvcGVydHkpO1xuXG5cdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHQkZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wZXJ0eSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiBub25Db25maWd1cmFibGUgPT09IG51bGwgJiYgZGVzYyA/IGRlc2MuY29uZmlndXJhYmxlIDogIW5vbkNvbmZpZ3VyYWJsZSxcblx0XHRcdGVudW1lcmFibGU6IG5vbkVudW1lcmFibGUgPT09IG51bGwgJiYgZGVzYyA/IGRlc2MuZW51bWVyYWJsZSA6ICFub25FbnVtZXJhYmxlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IG5vbldyaXRhYmxlID09PSBudWxsICYmIGRlc2MgPyBkZXNjLndyaXRhYmxlIDogIW5vbldyaXRhYmxlXG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAobG9vc2UgfHwgKCFub25FbnVtZXJhYmxlICYmICFub25Xcml0YWJsZSAmJiAhbm9uQ29uZmlndXJhYmxlKSkge1xuXHRcdC8vIG11c3QgZmFsbCBiYWNrIHRvIFtbU2V0XV0sIGFuZCB3YXMgbm90IGV4cGxpY2l0bHkgYXNrZWQgdG8gbWFrZSBub24tZW51bWVyYWJsZSwgbm9uLXdyaXRhYmxlLCBvciBub24tY29uZmlndXJhYmxlXG5cdFx0b2JqW3Byb3BlcnR5XSA9IHZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IGRlZmluaW5nIGEgcHJvcGVydHkgYXMgbm9uLWNvbmZpZ3VyYWJsZSwgbm9uLXdyaXRhYmxlLCBvciBub24tZW51bWVyYWJsZS4nKTtcblx0fVxufTtcbiJdLCJuYW1lcyI6WyIkZGVmaW5lUHJvcGVydHkiLCJyZXF1aXJlIiwiJFN5bnRheEVycm9yIiwiJFR5cGVFcnJvciIsImdvcGQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmaW5lRGF0YVByb3BlcnR5Iiwib2JqIiwicHJvcGVydHkiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm5vbkVudW1lcmFibGUiLCJub25Xcml0YWJsZSIsIm5vbkNvbmZpZ3VyYWJsZSIsImxvb3NlIiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/define-data-property/index.js\n");

/***/ })

};
;