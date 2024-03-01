"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/semaphore";
exports.ids = ["vendor-chunks/semaphore"];
exports.modules = {

/***/ "(ssr)/./node_modules/semaphore/lib/semaphore.js":
/*!*************************************************!*\
  !*** ./node_modules/semaphore/lib/semaphore.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n(function(global) {\n    \"use strict\";\n    var nextTick = function(fn) {\n        setTimeout(fn, 0);\n    };\n    if (typeof process != \"undefined\" && process && typeof process.nextTick == \"function\") {\n        // node.js and the like\n        nextTick = process.nextTick;\n    }\n    function semaphore(capacity) {\n        var semaphore = {\n            capacity: capacity || 1,\n            current: 0,\n            queue: [],\n            firstHere: false,\n            take: function() {\n                if (semaphore.firstHere === false) {\n                    semaphore.current++;\n                    semaphore.firstHere = true;\n                    var isFirst = 1;\n                } else {\n                    var isFirst = 0;\n                }\n                var item = {\n                    n: 1\n                };\n                if (typeof arguments[0] == \"function\") {\n                    item.task = arguments[0];\n                } else {\n                    item.n = arguments[0];\n                }\n                if (arguments.length >= 2) {\n                    if (typeof arguments[1] == \"function\") item.task = arguments[1];\n                    else item.n = arguments[1];\n                }\n                var task = item.task;\n                item.task = function() {\n                    task(semaphore.leave);\n                };\n                if (semaphore.current + item.n - isFirst > semaphore.capacity) {\n                    if (isFirst === 1) {\n                        semaphore.current--;\n                        semaphore.firstHere = false;\n                    }\n                    return semaphore.queue.push(item);\n                }\n                semaphore.current += item.n - isFirst;\n                item.task(semaphore.leave);\n                if (isFirst === 1) semaphore.firstHere = false;\n            },\n            leave: function(n) {\n                n = n || 1;\n                semaphore.current -= n;\n                if (!semaphore.queue.length) {\n                    if (semaphore.current < 0) {\n                        throw new Error(\"leave called too many times.\");\n                    }\n                    return;\n                }\n                var item = semaphore.queue[0];\n                if (item.n + semaphore.current > semaphore.capacity) {\n                    return;\n                }\n                semaphore.queue.shift();\n                semaphore.current += item.n;\n                nextTick(item.task);\n            },\n            available: function(n) {\n                n = n || 1;\n                return semaphore.current + n <= semaphore.capacity;\n            }\n        };\n        return semaphore;\n    }\n    ;\n    if (true) {\n        // node export\n        module.exports = semaphore;\n    } else {}\n})(void 0);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VtYXBob3JlL2xpYi9zZW1hcGhvcmUuanMiLCJtYXBwaW5ncyI6IjtBQUFFLFVBQVNBLE1BQU07SUFFakI7SUFFQSxJQUFJQyxXQUFXLFNBQVVDLEVBQUU7UUFBSUMsV0FBV0QsSUFBSTtJQUFJO0lBQ2xELElBQUksT0FBT0UsV0FBVyxlQUFlQSxXQUFXLE9BQU9BLFFBQVFILFFBQVEsSUFBSSxZQUFZO1FBQ3RGLHVCQUF1QjtRQUN2QkEsV0FBV0csUUFBUUgsUUFBUTtJQUM1QjtJQUVBLFNBQVNJLFVBQVVDLFFBQVE7UUFDMUIsSUFBSUQsWUFBWTtZQUNmQyxVQUFVQSxZQUFZO1lBQ3RCQyxTQUFTO1lBQ1RDLE9BQU8sRUFBRTtZQUNUQyxXQUFXO1lBRVhDLE1BQU07Z0JBQ0wsSUFBSUwsVUFBVUksU0FBUyxLQUFLLE9BQU87b0JBQzNCSixVQUFVRSxPQUFPO29CQUNqQkYsVUFBVUksU0FBUyxHQUFHO29CQUN0QixJQUFJRSxVQUFVO2dCQUNoQixPQUFPO29CQUNMLElBQUlBLFVBQVU7Z0JBQ2hCO2dCQUNOLElBQUlDLE9BQU87b0JBQUVDLEdBQUc7Z0JBQUU7Z0JBRWxCLElBQUksT0FBT0MsU0FBUyxDQUFDLEVBQUUsSUFBSSxZQUFZO29CQUN0Q0YsS0FBS0csSUFBSSxHQUFHRCxTQUFTLENBQUMsRUFBRTtnQkFDekIsT0FBTztvQkFDTkYsS0FBS0MsQ0FBQyxHQUFHQyxTQUFTLENBQUMsRUFBRTtnQkFDdEI7Z0JBRUEsSUFBSUEsVUFBVUUsTUFBTSxJQUFJLEdBQUk7b0JBQzNCLElBQUksT0FBT0YsU0FBUyxDQUFDLEVBQUUsSUFBSSxZQUFZRixLQUFLRyxJQUFJLEdBQUdELFNBQVMsQ0FBQyxFQUFFO3lCQUMxREYsS0FBS0MsQ0FBQyxHQUFHQyxTQUFTLENBQUMsRUFBRTtnQkFDM0I7Z0JBRUEsSUFBSUMsT0FBT0gsS0FBS0csSUFBSTtnQkFDcEJILEtBQUtHLElBQUksR0FBRztvQkFBYUEsS0FBS1YsVUFBVVksS0FBSztnQkFBRztnQkFFaEQsSUFBSVosVUFBVUUsT0FBTyxHQUFHSyxLQUFLQyxDQUFDLEdBQUdGLFVBQVVOLFVBQVVDLFFBQVEsRUFBRTtvQkFDdkQsSUFBSUssWUFBWSxHQUFHO3dCQUNsQk4sVUFBVUUsT0FBTzt3QkFDakJGLFVBQVVJLFNBQVMsR0FBRztvQkFDdkI7b0JBQ1AsT0FBT0osVUFBVUcsS0FBSyxDQUFDVSxJQUFJLENBQUNOO2dCQUM3QjtnQkFFQVAsVUFBVUUsT0FBTyxJQUFJSyxLQUFLQyxDQUFDLEdBQUdGO2dCQUM5QkMsS0FBS0csSUFBSSxDQUFDVixVQUFVWSxLQUFLO2dCQUNuQixJQUFJTixZQUFZLEdBQUdOLFVBQVVJLFNBQVMsR0FBRztZQUNoRDtZQUVBUSxPQUFPLFNBQVNKLENBQUM7Z0JBQ2hCQSxJQUFJQSxLQUFLO2dCQUVUUixVQUFVRSxPQUFPLElBQUlNO2dCQUVyQixJQUFJLENBQUNSLFVBQVVHLEtBQUssQ0FBQ1EsTUFBTSxFQUFFO29CQUM1QixJQUFJWCxVQUFVRSxPQUFPLEdBQUcsR0FBRzt3QkFDMUIsTUFBTSxJQUFJWSxNQUFNO29CQUNqQjtvQkFFQTtnQkFDRDtnQkFFQSxJQUFJUCxPQUFPUCxVQUFVRyxLQUFLLENBQUMsRUFBRTtnQkFFN0IsSUFBSUksS0FBS0MsQ0FBQyxHQUFHUixVQUFVRSxPQUFPLEdBQUdGLFVBQVVDLFFBQVEsRUFBRTtvQkFDcEQ7Z0JBQ0Q7Z0JBRUFELFVBQVVHLEtBQUssQ0FBQ1ksS0FBSztnQkFDckJmLFVBQVVFLE9BQU8sSUFBSUssS0FBS0MsQ0FBQztnQkFFM0JaLFNBQVNXLEtBQUtHLElBQUk7WUFDbkI7WUFFQU0sV0FBVyxTQUFTUixDQUFDO2dCQUNwQkEsSUFBSUEsS0FBSztnQkFDVCxPQUFPUixVQUFVRSxPQUFPLEdBQUdNLEtBQUtSLFVBQVVDLFFBQVE7WUFDbkQ7UUFDRDtRQUVBLE9BQU9EO0lBQ1I7O0lBRUEsSUFBSSxJQUFtQixFQUFVO1FBQzdCLGNBQWM7UUFDZGtCLE9BQU9ELE9BQU8sR0FBR2pCO0lBQ3JCLE9BQU8sRUFRTjtBQUNELEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVmcm9udC8uL25vZGVfbW9kdWxlcy9zZW1hcGhvcmUvbGliL3NlbWFwaG9yZS5qcz8wMDI3Il0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oZ2xvYmFsKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7IHNldFRpbWVvdXQoZm4sIDApOyB9XG5pZiAodHlwZW9mIHByb2Nlc3MgIT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2VzcyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PSAnZnVuY3Rpb24nKSB7XG5cdC8vIG5vZGUuanMgYW5kIHRoZSBsaWtlXG5cdG5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbn1cblxuZnVuY3Rpb24gc2VtYXBob3JlKGNhcGFjaXR5KSB7XG5cdHZhciBzZW1hcGhvcmUgPSB7XG5cdFx0Y2FwYWNpdHk6IGNhcGFjaXR5IHx8IDEsXG5cdFx0Y3VycmVudDogMCxcblx0XHRxdWV1ZTogW10sXG5cdFx0Zmlyc3RIZXJlOiBmYWxzZSxcblxuXHRcdHRha2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNlbWFwaG9yZS5maXJzdEhlcmUgPT09IGZhbHNlKSB7XG4gICAgICAgIFx0XHRcdHNlbWFwaG9yZS5jdXJyZW50Kys7XG4gICAgICAgIFx0XHRcdHNlbWFwaG9yZS5maXJzdEhlcmUgPSB0cnVlO1xuICAgICAgICBcdFx0XHR2YXIgaXNGaXJzdCA9IDE7XG4gICAgICBcdFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHR2YXIgaXNGaXJzdCA9IDA7XG4gICAgICBcdFx0XHR9XG5cdFx0XHR2YXIgaXRlbSA9IHsgbjogMSB9O1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGl0ZW0udGFzayA9IGFyZ3VtZW50c1swXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0ubiA9IGFyZ3VtZW50c1swXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikgIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT0gJ2Z1bmN0aW9uJykgaXRlbS50YXNrID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0XHRlbHNlIGl0ZW0ubiA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRhc2sgPSBpdGVtLnRhc2s7XG5cdFx0XHRpdGVtLnRhc2sgPSBmdW5jdGlvbigpIHsgdGFzayhzZW1hcGhvcmUubGVhdmUpOyB9O1xuXG5cdFx0XHRpZiAoc2VtYXBob3JlLmN1cnJlbnQgKyBpdGVtLm4gLSBpc0ZpcnN0ID4gc2VtYXBob3JlLmNhcGFjaXR5KSB7XG4gICAgICAgIFx0XHRcdGlmIChpc0ZpcnN0ID09PSAxKSB7XG4gICAgICAgIFx0XHRcdFx0c2VtYXBob3JlLmN1cnJlbnQtLTtcbiAgICAgICAgXHRcdFx0XHRzZW1hcGhvcmUuZmlyc3RIZXJlID0gZmFsc2U7XG4gICAgICAgIFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNlbWFwaG9yZS5xdWV1ZS5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRzZW1hcGhvcmUuY3VycmVudCArPSBpdGVtLm4gLSBpc0ZpcnN0O1xuXHRcdFx0aXRlbS50YXNrKHNlbWFwaG9yZS5sZWF2ZSk7XG4gICAgICBcdFx0XHRpZiAoaXNGaXJzdCA9PT0gMSkgc2VtYXBob3JlLmZpcnN0SGVyZSA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRsZWF2ZTogZnVuY3Rpb24obikge1xuXHRcdFx0biA9IG4gfHwgMTtcblxuXHRcdFx0c2VtYXBob3JlLmN1cnJlbnQgLT0gbjtcblxuXHRcdFx0aWYgKCFzZW1hcGhvcmUucXVldWUubGVuZ3RoKSB7XG5cdFx0XHRcdGlmIChzZW1hcGhvcmUuY3VycmVudCA8IDApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2xlYXZlIGNhbGxlZCB0b28gbWFueSB0aW1lcy4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBzZW1hcGhvcmUucXVldWVbMF07XG5cblx0XHRcdGlmIChpdGVtLm4gKyBzZW1hcGhvcmUuY3VycmVudCA+IHNlbWFwaG9yZS5jYXBhY2l0eSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHNlbWFwaG9yZS5xdWV1ZS5zaGlmdCgpO1xuXHRcdFx0c2VtYXBob3JlLmN1cnJlbnQgKz0gaXRlbS5uO1xuXG5cdFx0XHRuZXh0VGljayhpdGVtLnRhc2spO1xuXHRcdH0sXG5cblx0XHRhdmFpbGFibGU6IGZ1bmN0aW9uKG4pIHtcblx0XHRcdG4gPSBuIHx8IDE7XG5cdFx0XHRyZXR1cm4oc2VtYXBob3JlLmN1cnJlbnQgKyBuIDw9IHNlbWFwaG9yZS5jYXBhY2l0eSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBzZW1hcGhvcmU7XG59O1xuXG5pZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gbm9kZSBleHBvcnRcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNlbWFwaG9yZTtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gYW1kIGV4cG9ydFxuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZW1hcGhvcmU7XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZ2xvYmFsLnNlbWFwaG9yZSA9IHNlbWFwaG9yZTtcbn1cbn0odGhpcykpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsIm5leHRUaWNrIiwiZm4iLCJzZXRUaW1lb3V0IiwicHJvY2VzcyIsInNlbWFwaG9yZSIsImNhcGFjaXR5IiwiY3VycmVudCIsInF1ZXVlIiwiZmlyc3RIZXJlIiwidGFrZSIsImlzRmlyc3QiLCJpdGVtIiwibiIsImFyZ3VtZW50cyIsInRhc2siLCJsZW5ndGgiLCJsZWF2ZSIsInB1c2giLCJFcnJvciIsInNoaWZ0IiwiYXZhaWxhYmxlIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/semaphore/lib/semaphore.js\n");

/***/ })

};
;