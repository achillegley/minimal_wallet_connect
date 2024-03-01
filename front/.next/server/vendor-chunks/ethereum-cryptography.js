"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ethereum-cryptography";
exports.ids = ["vendor-chunks/ethereum-cryptography"];
exports.modules = {

/***/ "(ssr)/./node_modules/ethereum-cryptography/hash-utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/ethereum-cryptography/hash-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nfunction createHashFunction(hashConstructor) {\n    return function(msg) {\n        var hash = hashConstructor();\n        hash.update(msg);\n        return Buffer.from(hash.digest());\n    };\n}\nexports.createHashFunction = createHashFunction; //# sourceMappingURL=hash-utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoZXJldW0tY3J5cHRvZ3JhcGh5L2hhc2gtdXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0QsU0FBU0MsbUJBQW1CQyxlQUFlO0lBQ3ZDLE9BQU8sU0FBVUMsR0FBRztRQUNoQixJQUFJQyxPQUFPRjtRQUNYRSxLQUFLQyxNQUFNLENBQUNGO1FBQ1osT0FBT0csT0FBT0MsSUFBSSxDQUFDSCxLQUFLSSxNQUFNO0lBQ2xDO0FBQ0o7QUFDQVQsMEJBQTBCLEdBQUdFLG9CQUM3QixzQ0FBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVmcm9udC8uL25vZGVfbW9kdWxlcy9ldGhlcmV1bS1jcnlwdG9ncmFwaHkvaGFzaC11dGlscy5qcz9mNzM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlSGFzaEZ1bmN0aW9uKGhhc2hDb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHZhciBoYXNoID0gaGFzaENvbnN0cnVjdG9yKCk7XG4gICAgICAgIGhhc2gudXBkYXRlKG1zZyk7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShoYXNoLmRpZ2VzdCgpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5jcmVhdGVIYXNoRnVuY3Rpb24gPSBjcmVhdGVIYXNoRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oYXNoLXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNyZWF0ZUhhc2hGdW5jdGlvbiIsImhhc2hDb25zdHJ1Y3RvciIsIm1zZyIsImhhc2giLCJ1cGRhdGUiLCJCdWZmZXIiLCJmcm9tIiwiZGlnZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ethereum-cryptography/hash-utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ethereum-cryptography/keccak.js":
/*!******************************************************!*\
  !*** ./node_modules/ethereum-cryptography/keccak.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar hash_utils_1 = __webpack_require__(/*! ./hash-utils */ \"(ssr)/./node_modules/ethereum-cryptography/hash-utils.js\");\nvar createKeccakHash = __webpack_require__(/*! keccak */ \"(ssr)/./node_modules/keccak/index.js\");\nexports.keccak224 = hash_utils_1.createHashFunction(function() {\n    return createKeccakHash(\"keccak224\");\n});\nexports.keccak256 = hash_utils_1.createHashFunction(function() {\n    return createKeccakHash(\"keccak256\");\n});\nexports.keccak384 = hash_utils_1.createHashFunction(function() {\n    return createKeccakHash(\"keccak384\");\n});\nexports.keccak512 = hash_utils_1.createHashFunction(function() {\n    return createKeccakHash(\"keccak512\");\n}); //# sourceMappingURL=keccak.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoZXJldW0tY3J5cHRvZ3JhcGh5L2tlY2Nhay5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxJQUFJQyxlQUFlQyxtQkFBT0EsQ0FBQyw4RUFBYztBQUN6QyxJQUFJQyxtQkFBbUJELG1CQUFPQSxDQUFDLG9EQUFRO0FBQ3ZDSCxpQkFBaUIsR0FBR0UsYUFBYUksa0JBQWtCLENBQUM7SUFDaEQsT0FBT0YsaUJBQWlCO0FBQzVCO0FBQ0FKLGlCQUFpQixHQUFHRSxhQUFhSSxrQkFBa0IsQ0FBQztJQUNoRCxPQUFPRixpQkFBaUI7QUFDNUI7QUFDQUosaUJBQWlCLEdBQUdFLGFBQWFJLGtCQUFrQixDQUFDO0lBQ2hELE9BQU9GLGlCQUFpQjtBQUM1QjtBQUNBSixpQkFBaUIsR0FBR0UsYUFBYUksa0JBQWtCLENBQUM7SUFDaEQsT0FBT0YsaUJBQWlCO0FBQzVCLElBQ0Esa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlZnJvbnQvLi9ub2RlX21vZHVsZXMvZXRoZXJldW0tY3J5cHRvZ3JhcGh5L2tlY2Nhay5qcz85YjAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhhc2hfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2hhc2gtdXRpbHNcIik7XG52YXIgY3JlYXRlS2VjY2FrSGFzaCA9IHJlcXVpcmUoXCJrZWNjYWtcIik7XG5leHBvcnRzLmtlY2NhazIyNCA9IGhhc2hfdXRpbHNfMS5jcmVhdGVIYXNoRnVuY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVLZWNjYWtIYXNoKFwia2VjY2FrMjI0XCIpO1xufSk7XG5leHBvcnRzLmtlY2NhazI1NiA9IGhhc2hfdXRpbHNfMS5jcmVhdGVIYXNoRnVuY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVLZWNjYWtIYXNoKFwia2VjY2FrMjU2XCIpO1xufSk7XG5leHBvcnRzLmtlY2NhazM4NCA9IGhhc2hfdXRpbHNfMS5jcmVhdGVIYXNoRnVuY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVLZWNjYWtIYXNoKFwia2VjY2FrMzg0XCIpO1xufSk7XG5leHBvcnRzLmtlY2NhazUxMiA9IGhhc2hfdXRpbHNfMS5jcmVhdGVIYXNoRnVuY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVLZWNjYWtIYXNoKFwia2VjY2FrNTEyXCIpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZWNjYWsuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaGFzaF91dGlsc18xIiwicmVxdWlyZSIsImNyZWF0ZUtlY2Nha0hhc2giLCJrZWNjYWsyMjQiLCJjcmVhdGVIYXNoRnVuY3Rpb24iLCJrZWNjYWsyNTYiLCJrZWNjYWszODQiLCJrZWNjYWs1MTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ethereum-cryptography/keccak.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ethereum-cryptography/random.js":
/*!******************************************************!*\
  !*** ./node_modules/ethereum-cryptography/random.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar randombytes = __webpack_require__(/*! randombytes */ \"(ssr)/./node_modules/randombytes/index.js\");\nfunction getRandomBytes(bytes) {\n    return new Promise(function(resolve, reject) {\n        randombytes(bytes, function(err, resp) {\n            if (err) {\n                reject(err);\n                return;\n            }\n            resolve(resp);\n        });\n    });\n}\nexports.getRandomBytes = getRandomBytes;\nfunction getRandomBytesSync(bytes) {\n    return randombytes(bytes);\n}\nexports.getRandomBytesSync = getRandomBytesSync; //# sourceMappingURL=random.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoZXJldW0tY3J5cHRvZ3JhcGh5L3JhbmRvbS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxJQUFJQyxjQUFjQyxtQkFBT0EsQ0FBQyw4REFBYTtBQUN2QyxTQUFTQyxlQUFlQyxLQUFLO0lBQ3pCLE9BQU8sSUFBSUMsUUFBUSxTQUFVQyxPQUFPLEVBQUVDLE1BQU07UUFDeENOLFlBQVlHLE9BQU8sU0FBVUksR0FBRyxFQUFFQyxJQUFJO1lBQ2xDLElBQUlELEtBQUs7Z0JBQ0xELE9BQU9DO2dCQUNQO1lBQ0o7WUFDQUYsUUFBUUc7UUFDWjtJQUNKO0FBQ0o7QUFDQVYsc0JBQXNCLEdBQUdJO0FBQ3pCLFNBQVNPLG1CQUFtQk4sS0FBSztJQUM3QixPQUFPSCxZQUFZRztBQUN2QjtBQUNBTCwwQkFBMEIsR0FBR1csb0JBQzdCLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZWZyb250Ly4vbm9kZV9tb2R1bGVzL2V0aGVyZXVtLWNyeXB0b2dyYXBoeS9yYW5kb20uanM/NTk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByYW5kb21ieXRlcyA9IHJlcXVpcmUoXCJyYW5kb21ieXRlc1wiKTtcbmZ1bmN0aW9uIGdldFJhbmRvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmFuZG9tYnl0ZXMoYnl0ZXMsIGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlc3ApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0UmFuZG9tQnl0ZXMgPSBnZXRSYW5kb21CeXRlcztcbmZ1bmN0aW9uIGdldFJhbmRvbUJ5dGVzU3luYyhieXRlcykge1xuICAgIHJldHVybiByYW5kb21ieXRlcyhieXRlcyk7XG59XG5leHBvcnRzLmdldFJhbmRvbUJ5dGVzU3luYyA9IGdldFJhbmRvbUJ5dGVzU3luYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbS5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyYW5kb21ieXRlcyIsInJlcXVpcmUiLCJnZXRSYW5kb21CeXRlcyIsImJ5dGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZXNwIiwiZ2V0UmFuZG9tQnl0ZXNTeW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ethereum-cryptography/random.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ethereum-cryptography/secp256k1.js":
/*!*********************************************************!*\
  !*** ./node_modules/ethereum-cryptography/secp256k1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {\n    function adopt(value) {\n        return value instanceof P ? value : new P(function(resolve) {\n            resolve(value);\n        });\n    }\n    return new (P || (P = Promise))(function(resolve, reject) {\n        function fulfilled(value) {\n            try {\n                step(generator.next(value));\n            } catch (e) {\n                reject(e);\n            }\n        }\n        function rejected(value) {\n            try {\n                step(generator[\"throw\"](value));\n            } catch (e) {\n                reject(e);\n            }\n        }\n        function step(result) {\n            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n        }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (void 0) && (void 0).__generator || function(thisArg, body) {\n    var _ = {\n        label: 0,\n        sent: function() {\n            if (t[0] & 1) throw t[1];\n            return t[1];\n        },\n        trys: [],\n        ops: []\n    }, f, y, t, g;\n    return g = {\n        next: verb(0),\n        \"throw\": verb(1),\n        \"return\": verb(2)\n    }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() {\n        return this;\n    }), g;\n    function verb(n) {\n        return function(v) {\n            return step([\n                n,\n                v\n            ]);\n        };\n    }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while(_)try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [\n                op[0] & 2,\n                t.value\n            ];\n            switch(op[0]){\n                case 0:\n                case 1:\n                    t = op;\n                    break;\n                case 4:\n                    _.label++;\n                    return {\n                        value: op[1],\n                        done: false\n                    };\n                case 5:\n                    _.label++;\n                    y = op[1];\n                    op = [\n                        0\n                    ];\n                    continue;\n                case 7:\n                    op = _.ops.pop();\n                    _.trys.pop();\n                    continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n                        _ = 0;\n                        continue;\n                    }\n                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n                        _.label = op[1];\n                        break;\n                    }\n                    if (op[0] === 6 && _.label < t[1]) {\n                        _.label = t[1];\n                        t = op;\n                        break;\n                    }\n                    if (t && _.label < t[2]) {\n                        _.label = t[2];\n                        _.ops.push(op);\n                        break;\n                    }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop();\n                    continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) {\n            op = [\n                6,\n                e\n            ];\n            y = 0;\n        } finally{\n            f = t = 0;\n        }\n        if (op[0] & 5) throw op[1];\n        return {\n            value: op[0] ? op[1] : void 0,\n            done: true\n        };\n    }\n};\nfunction __export(m) {\n    for(var p in m)if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar secp256k1_1 = __webpack_require__(/*! secp256k1 */ \"(ssr)/./node_modules/secp256k1/index.js\");\nvar random_1 = __webpack_require__(/*! ./random */ \"(ssr)/./node_modules/ethereum-cryptography/random.js\");\nvar SECP256K1_PRIVATE_KEY_SIZE = 32;\nfunction createPrivateKey() {\n    return __awaiter(this, void 0, void 0, function() {\n        var pk;\n        return __generator(this, function(_a) {\n            switch(_a.label){\n                case 0:\n                    if (false) {}\n                    return [\n                        4 /*yield*/ ,\n                        random_1.getRandomBytes(SECP256K1_PRIVATE_KEY_SIZE)\n                    ];\n                case 1:\n                    pk = _a.sent();\n                    if (secp256k1_1.privateKeyVerify(pk)) {\n                        return [\n                            2 /*return*/ ,\n                            pk\n                        ];\n                    }\n                    return [\n                        3 /*break*/ ,\n                        0\n                    ];\n                case 2:\n                    return [\n                        2 /*return*/ \n                    ];\n            }\n        });\n    });\n}\nexports.createPrivateKey = createPrivateKey;\nfunction createPrivateKeySync() {\n    while(true){\n        var pk = random_1.getRandomBytesSync(SECP256K1_PRIVATE_KEY_SIZE);\n        if (secp256k1_1.privateKeyVerify(pk)) {\n            return pk;\n        }\n    }\n}\nexports.createPrivateKeySync = createPrivateKeySync;\n__export(__webpack_require__(/*! secp256k1 */ \"(ssr)/./node_modules/secp256k1/index.js\")); //# sourceMappingURL=secp256k1.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoZXJldW0tY3J5cHRvZ3JhcGh5L3NlY3AyNTZrMS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLElBQUlBLFlBQVksQ0FBQyxNQUFHLEtBQUssT0FBRyxFQUFFQSxTQUFTLElBQUssU0FBVUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLENBQUMsRUFBRUMsU0FBUztJQUNuRixTQUFTQyxNQUFNQyxLQUFLO1FBQUksT0FBT0EsaUJBQWlCSCxJQUFJRyxRQUFRLElBQUlILEVBQUUsU0FBVUksT0FBTztZQUFJQSxRQUFRRDtRQUFRO0lBQUk7SUFDM0csT0FBTyxJQUFLSCxDQUFBQSxLQUFNQSxDQUFBQSxJQUFJSyxPQUFNLENBQUMsRUFBRyxTQUFVRCxPQUFPLEVBQUVFLE1BQU07UUFDckQsU0FBU0MsVUFBVUosS0FBSztZQUFJLElBQUk7Z0JBQUVLLEtBQUtQLFVBQVVRLElBQUksQ0FBQ047WUFBUyxFQUFFLE9BQU9PLEdBQUc7Z0JBQUVKLE9BQU9JO1lBQUk7UUFBRTtRQUMxRixTQUFTQyxTQUFTUixLQUFLO1lBQUksSUFBSTtnQkFBRUssS0FBS1AsU0FBUyxDQUFDLFFBQVEsQ0FBQ0U7WUFBUyxFQUFFLE9BQU9PLEdBQUc7Z0JBQUVKLE9BQU9JO1lBQUk7UUFBRTtRQUM3RixTQUFTRixLQUFLSSxNQUFNO1lBQUlBLE9BQU9DLElBQUksR0FBR1QsUUFBUVEsT0FBT1QsS0FBSyxJQUFJRCxNQUFNVSxPQUFPVCxLQUFLLEVBQUVXLElBQUksQ0FBQ1AsV0FBV0k7UUFBVztRQUM3R0gsS0FBSyxDQUFDUCxZQUFZQSxVQUFVYyxLQUFLLENBQUNqQixTQUFTQyxjQUFjLEVBQUUsR0FBR1UsSUFBSTtJQUN0RTtBQUNKO0FBQ0EsSUFBSU8sY0FBYyxDQUFDLE1BQUcsS0FBSyxPQUFHLEVBQUVBLFdBQVcsSUFBSyxTQUFVbEIsT0FBTyxFQUFFbUIsSUFBSTtJQUNuRSxJQUFJQyxJQUFJO1FBQUVDLE9BQU87UUFBR0MsTUFBTTtZQUFhLElB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Y0FBYyxDQUFDSjtxQkFBNEI7Z0JBQzdFLEtBQUs7b0JBQ0RFLEtBQUtDLEdBQUcvQixJQUFJO29CQUNaLElBQUl5QixZQUFZUSxnQkFBZ0IsQ0FBQ0gsS0FBSzt3QkFDbEMsT0FBTzs0QkFBQyxFQUFFLFFBQVE7NEJBQUlBO3lCQUFHO29CQUM3QjtvQkFDQSxPQUFPO3dCQUFDLEVBQUUsT0FBTzt3QkFBSTtxQkFBRTtnQkFDM0IsS0FBSztvQkFBRyxPQUFPO3dCQUFDLEVBQUUsUUFBUTtxQkFBRztZQUNqQztRQUNKO0lBQ0o7QUFDSjtBQUNBVCx3QkFBd0IsR0FBR1E7QUFDM0IsU0FBU0s7SUFDTCxNQUFPLEtBQU07UUFDVCxJQUFJSixLQUFLSCxTQUFTUSxrQkFBa0IsQ0FBQ1A7UUFDckMsSUFBSUgsWUFBWVEsZ0JBQWdCLENBQUNILEtBQUs7WUFDbEMsT0FBT0E7UUFDWDtJQUNKO0FBQ0o7QUFDQVQsNEJBQTRCLEdBQUdhO0FBQy9CaEIsU0FBU1EsbUJBQU9BLENBQUMsMERBQVcsSUFDNUIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlZnJvbnQvLi9ub2RlX21vZHVsZXMvZXRoZXJldW0tY3J5cHRvZ3JhcGh5L3NlY3AyNTZrMS5qcz8yN2NlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc2VjcDI1NmsxXzEgPSByZXF1aXJlKFwic2VjcDI1NmsxXCIpO1xudmFyIHJhbmRvbV8xID0gcmVxdWlyZShcIi4vcmFuZG9tXCIpO1xudmFyIFNFQ1AyNTZLMV9QUklWQVRFX0tFWV9TSVpFID0gMzI7XG5mdW5jdGlvbiBjcmVhdGVQcml2YXRlS2V5KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBrO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRydWUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByYW5kb21fMS5nZXRSYW5kb21CeXRlcyhTRUNQMjU2SzFfUFJJVkFURV9LRVlfU0laRSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcGsgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWNwMjU2azFfMS5wcml2YXRlS2V5VmVyaWZ5KHBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHBrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAwXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZVByaXZhdGVLZXkgPSBjcmVhdGVQcml2YXRlS2V5O1xuZnVuY3Rpb24gY3JlYXRlUHJpdmF0ZUtleVN5bmMoKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHBrID0gcmFuZG9tXzEuZ2V0UmFuZG9tQnl0ZXNTeW5jKFNFQ1AyNTZLMV9QUklWQVRFX0tFWV9TSVpFKTtcbiAgICAgICAgaWYgKHNlY3AyNTZrMV8xLnByaXZhdGVLZXlWZXJpZnkocGspKSB7XG4gICAgICAgICAgICByZXR1cm4gcGs7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmNyZWF0ZVByaXZhdGVLZXlTeW5jID0gY3JlYXRlUHJpdmF0ZUtleVN5bmM7XG5fX2V4cG9ydChyZXF1aXJlKFwic2VjcDI1NmsxXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlY3AyNTZrMS5qcy5tYXAiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiX19leHBvcnQiLCJtIiwicCIsImV4cG9ydHMiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwic2VjcDI1NmsxXzEiLCJyZXF1aXJlIiwicmFuZG9tXzEiLCJTRUNQMjU2SzFfUFJJVkFURV9LRVlfU0laRSIsImNyZWF0ZVByaXZhdGVLZXkiLCJwayIsIl9hIiwiZ2V0UmFuZG9tQnl0ZXMiLCJwcml2YXRlS2V5VmVyaWZ5IiwiY3JlYXRlUHJpdmF0ZUtleVN5bmMiLCJnZXRSYW5kb21CeXRlc1N5bmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ethereum-cryptography/secp256k1.js\n");

/***/ })

};
;