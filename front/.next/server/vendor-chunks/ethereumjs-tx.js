"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ethereumjs-tx";
exports.ids = ["vendor-chunks/ethereumjs-tx"];
exports.modules = {

/***/ "(ssr)/./node_modules/ethereumjs-tx/es5/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ethereumjs-tx/es5/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nvar ethUtil = __webpack_require__(/*! ethereumjs-util */ \"(ssr)/./node_modules/ethereumjs-util/dist/index.js\");\nvar fees = __webpack_require__(/*! ethereum-common/params.json */ \"(ssr)/./node_modules/ethereumjs-tx/node_modules/ethereum-common/params.json\");\nvar BN = ethUtil.BN;\n// secp256k1n/2\nvar N_DIV_2 = new BN(\"7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0\", 16);\n/**\n * Creates a new transaction object.\n *\n * @example\n * var rawTx = {\n *   nonce: '00',\n *   gasPrice: '09184e72a000',\n *   gasLimit: '2710',\n *   to: '0000000000000000000000000000000000000000',\n *   value: '00',\n *   data: '7f7465737432000000000000000000000000000000000000000000000000000000600057',\n *   v: '1c',\n *   r: '5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',\n *   s: '5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'\n * };\n * var tx = new Transaction(rawTx);\n *\n * @class\n * @param {Buffer | Array | Object} data a transaction can be initiailized with either a buffer containing the RLP serialized transaction or an array of buffers relating to each of the tx Properties, listed in order below in the exmple.\n *\n * Or lastly an Object containing the Properties of the transaction like in the Usage example.\n *\n * For Object and Arrays each of the elements can either be a Buffer, a hex-prefixed (0x) String , Number, or an object with a toBuffer method such as Bignum\n *\n * @property {Buffer} raw The raw rlp encoded transaction\n * @param {Buffer} data.nonce nonce number\n * @param {Buffer} data.gasLimit transaction gas limit\n * @param {Buffer} data.gasPrice transaction gas price\n * @param {Buffer} data.to to the to address\n * @param {Buffer} data.value the amount of ether sent\n * @param {Buffer} data.data this will contain the data of the message or the init of a contract\n * @param {Buffer} data.v EC signature parameter\n * @param {Buffer} data.r EC signature parameter\n * @param {Buffer} data.s EC recovery ID\n * @param {Number} data.chainId EIP 155 chainId - mainnet: 1, ropsten: 3\n * */ var Transaction = function() {\n    function Transaction(data) {\n        _classCallCheck(this, Transaction);\n        data = data || {};\n        // Define Properties\n        var fields = [\n            {\n                name: \"nonce\",\n                length: 32,\n                allowLess: true,\n                default: new Buffer([])\n            },\n            {\n                name: \"gasPrice\",\n                length: 32,\n                allowLess: true,\n                default: new Buffer([])\n            },\n            {\n                name: \"gasLimit\",\n                alias: \"gas\",\n                length: 32,\n                allowLess: true,\n                default: new Buffer([])\n            },\n            {\n                name: \"to\",\n                allowZero: true,\n                length: 20,\n                default: new Buffer([])\n            },\n            {\n                name: \"value\",\n                length: 32,\n                allowLess: true,\n                default: new Buffer([])\n            },\n            {\n                name: \"data\",\n                alias: \"input\",\n                allowZero: true,\n                default: new Buffer([])\n            },\n            {\n                name: \"v\",\n                allowZero: true,\n                default: new Buffer([\n                    0x1c\n                ])\n            },\n            {\n                name: \"r\",\n                length: 32,\n                allowZero: true,\n                allowLess: true,\n                default: new Buffer([])\n            },\n            {\n                name: \"s\",\n                length: 32,\n                allowZero: true,\n                allowLess: true,\n                default: new Buffer([])\n            }\n        ];\n        /**\n     * Returns the rlp encoding of the transaction\n     * @method serialize\n     * @return {Buffer}\n     * @memberof Transaction\n     * @name serialize\n     */ // attached serialize\n        ethUtil.defineProperties(this, fields, data);\n        /**\n     * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.\n     * @name from\n     * @memberof Transaction\n     */ Object.defineProperty(this, \"from\", {\n            enumerable: true,\n            configurable: true,\n            get: this.getSenderAddress.bind(this)\n        });\n        // calculate chainId from signature\n        var sigV = ethUtil.bufferToInt(this.v);\n        var chainId = Math.floor((sigV - 35) / 2);\n        if (chainId < 0) chainId = 0;\n        // set chainId\n        this._chainId = chainId || data.chainId || 0;\n        this._homestead = true;\n    }\n    /**\n   * If the tx's `to` is to the creation address\n   * @return {Boolean}\n   */ Transaction.prototype.toCreationAddress = function toCreationAddress() {\n        return this.to.toString(\"hex\") === \"\";\n    };\n    /**\n   * Computes a sha3-256 hash of the serialized tx\n   * @param {Boolean} [includeSignature=true] whether or not to inculde the signature\n   * @return {Buffer}\n   */ Transaction.prototype.hash = function hash(includeSignature) {\n        if (includeSignature === undefined) includeSignature = true;\n        // EIP155 spec:\n        // when computing the hash of a transaction for purposes of signing or recovering,\n        // instead of hashing only the first six elements (ie. nonce, gasprice, startgas, to, value, data),\n        // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0\n        var items = void 0;\n        if (includeSignature) {\n            items = this.raw;\n        } else {\n            if (this._chainId > 0) {\n                var raw = this.raw.slice();\n                this.v = this._chainId;\n                this.r = 0;\n                this.s = 0;\n                items = this.raw;\n                this.raw = raw;\n            } else {\n                items = this.raw.slice(0, 6);\n            }\n        }\n        // create hash\n        return ethUtil.rlphash(items);\n    };\n    /**\n   * returns the public key of the sender\n   * @return {Buffer}\n   */ Transaction.prototype.getChainId = function getChainId() {\n        return this._chainId;\n    };\n    /**\n   * returns the sender's address\n   * @return {Buffer}\n   */ Transaction.prototype.getSenderAddress = function getSenderAddress() {\n        if (this._from) {\n            return this._from;\n        }\n        var pubkey = this.getSenderPublicKey();\n        this._from = ethUtil.publicToAddress(pubkey);\n        return this._from;\n    };\n    /**\n   * returns the public key of the sender\n   * @return {Buffer}\n   */ Transaction.prototype.getSenderPublicKey = function getSenderPublicKey() {\n        if (!this._senderPubKey || !this._senderPubKey.length) {\n            if (!this.verifySignature()) throw new Error(\"Invalid Signature\");\n        }\n        return this._senderPubKey;\n    };\n    /**\n   * Determines if the signature is valid\n   * @return {Boolean}\n   */ Transaction.prototype.verifySignature = function verifySignature() {\n        var msgHash = this.hash(false);\n        // All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.\n        if (this._homestead && new BN(this.s).cmp(N_DIV_2) === 1) {\n            return false;\n        }\n        try {\n            var v = ethUtil.bufferToInt(this.v);\n            if (this._chainId > 0) {\n                v -= this._chainId * 2 + 8;\n            }\n            this._senderPubKey = ethUtil.ecrecover(msgHash, v, this.r, this.s);\n        } catch (e) {\n            return false;\n        }\n        return !!this._senderPubKey;\n    };\n    /**\n   * sign a transaction with a given a private key\n   * @param {Buffer} privateKey\n   */ Transaction.prototype.sign = function sign(privateKey) {\n        var msgHash = this.hash(false);\n        var sig = ethUtil.ecsign(msgHash, privateKey);\n        if (this._chainId > 0) {\n            sig.v += this._chainId * 2 + 8;\n        }\n        Object.assign(this, sig);\n    };\n    /**\n   * The amount of gas paid for the data in this tx\n   * @return {BN}\n   */ Transaction.prototype.getDataFee = function getDataFee() {\n        var data = this.raw[5];\n        var cost = new BN(0);\n        for(var i = 0; i < data.length; i++){\n            data[i] === 0 ? cost.iaddn(fees.txDataZeroGas.v) : cost.iaddn(fees.txDataNonZeroGas.v);\n        }\n        return cost;\n    };\n    /**\n   * the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)\n   * @return {BN}\n   */ Transaction.prototype.getBaseFee = function getBaseFee() {\n        var fee = this.getDataFee().iaddn(fees.txGas.v);\n        if (this._homestead && this.toCreationAddress()) {\n            fee.iaddn(fees.txCreation.v);\n        }\n        return fee;\n    };\n    /**\n   * the up front amount that an account must have for this transaction to be valid\n   * @return {BN}\n   */ Transaction.prototype.getUpfrontCost = function getUpfrontCost() {\n        return new BN(this.gasLimit).imul(new BN(this.gasPrice)).iadd(new BN(this.value));\n    };\n    /**\n   * validates the signature and checks to see if it has enough gas\n   * @param {Boolean} [stringError=false] whether to return a string with a dscription of why the validation failed or return a Bloolean\n   * @return {Boolean|String}\n   */ Transaction.prototype.validate = function validate(stringError) {\n        var errors = [];\n        if (!this.verifySignature()) {\n            errors.push(\"Invalid Signature\");\n        }\n        if (this.getBaseFee().cmp(new BN(this.gasLimit)) > 0) {\n            errors.push([\n                \"gas limit is too low. Need at least \" + this.getBaseFee()\n            ]);\n        }\n        if (stringError === undefined || stringError === false) {\n            return errors.length === 0;\n        } else {\n            return errors.join(\" \");\n        }\n    };\n    return Transaction;\n}();\nmodule.exports = Transaction;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXRoZXJldW1qcy10eC9lczUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxTQUFTQSxnQkFBZ0JDLFFBQVEsRUFBRUMsV0FBVztJQUFJLElBQUksQ0FBRUQsQ0FBQUEsb0JBQW9CQyxXQUFVLEdBQUk7UUFBRSxNQUFNLElBQUlDLFVBQVU7SUFBc0M7QUFBRTtBQUV4SixJQUFJQyxVQUFVQyxtQkFBT0EsQ0FBQztBQUN0QixJQUFJQyxPQUFPRCxtQkFBT0EsQ0FBQztBQUNuQixJQUFJRSxLQUFLSCxRQUFRRyxFQUFFO0FBRW5CLGVBQWU7QUFDZixJQUFJQyxVQUFVLElBQUlELEdBQUcsb0VBQW9FO0FBRXpGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRyxHQUVILElBQUlFLGNBQWM7SUFDaEIsU0FBU0EsWUFBWUMsSUFBSTtRQUN2QlYsZ0JBQWdCLElBQUksRUFBRVM7UUFFdEJDLE9BQU9BLFFBQVEsQ0FBQztRQUNoQixvQkFBb0I7UUFDcEIsSUFBSUMsU0FBUztZQUFDO2dCQUNaQyxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxXQUFXO2dCQUNYQyxTQUFTLElBQUlDLE9BQU8sRUFBRTtZQUN4QjtZQUFHO2dCQUNESixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxXQUFXO2dCQUNYQyxTQUFTLElBQUlDLE9BQU8sRUFBRTtZQUN4QjtZQUFHO2dCQUNESixNQUFNO2dCQUNOSyxPQUFPO2dCQUNQSixRQUFRO2dCQUNSQyxXQUFXO2dCQUNYQyxTQUFTLElBQUlDLE9BQU8sRUFBRTtZQUN4QjtZQUFHO2dCQUNESixNQUFNO2dCQUNOTSxXQUFXO2dCQUNYTCxRQUFRO2dCQUNSRSxTQUFTLElBQUlDLE9BQU8sRUFBRTtZQUN4QjtZQUFHO2dCQUNESixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxXQUFXO2dCQUNYQyxTQUFTLElBQUlDLE9BQU8sRUFBRTtZQUN4QjtZQUFHO2dCQUNESixNQUFNO2dCQUNO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QVkwQixTQUFTLENBQUM4QyxRQUFRLEdBQUcsU0FBU0EsU0FBU0MsV0FBVztRQUM1RCxJQUFJQyxTQUFTLEVBQUU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDN0IsZUFBZSxJQUFJO1lBQzNCNkIsT0FBT0MsSUFBSSxDQUFDO1FBQ2Q7UUFFQSxJQUFJLElBQUksQ0FBQ2IsVUFBVSxHQUFHZCxHQUFHLENBQUMsSUFBSWxELEdBQUcsSUFBSSxDQUFDcUUsUUFBUSxLQUFLLEdBQUc7WUFDcERPLE9BQU9DLElBQUksQ0FBQztnQkFBQyx5Q0FBeUMsSUFBSSxDQUFDYixVQUFVO2FBQUc7UUFDMUU7UUFFQSxJQUFJVyxnQkFBZ0J6QyxhQUFheUMsZ0JBQWdCLE9BQU87WUFDdEQsT0FBT0MsT0FBT3RFLE1BQU0sS0FBSztRQUMzQixPQUFPO1lBQ0wsT0FBT3NFLE9BQU9FLElBQUksQ0FBQztRQUNyQjtJQUNGO0lBRUEsT0FBTzVFO0FBQ1Q7QUFFQTZFLE9BQU9DLE9BQU8sR0FBRzlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlZnJvbnQvLi9ub2RlX21vZHVsZXMvZXRoZXJldW1qcy10eC9lczUvaW5kZXguanM/OTAyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBldGhVdGlsID0gcmVxdWlyZSgnZXRoZXJldW1qcy11dGlsJyk7XG52YXIgZmVlcyA9IHJlcXVpcmUoJ2V0aGVyZXVtLWNvbW1vbi9wYXJhbXMuanNvbicpO1xudmFyIEJOID0gZXRoVXRpbC5CTjtcblxuLy8gc2VjcDI1Nmsxbi8yXG52YXIgTl9ESVZfMiA9IG5ldyBCTignN2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY1ZDU3NmU3MzU3YTQ1MDFkZGZlOTJmNDY2ODFiMjBhMCcsIDE2KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRyYW5zYWN0aW9uIG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHJhd1R4ID0ge1xuICogICBub25jZTogJzAwJyxcbiAqICAgZ2FzUHJpY2U6ICcwOTE4NGU3MmEwMDAnLFxuICogICBnYXNMaW1pdDogJzI3MTAnLFxuICogICB0bzogJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICogICB2YWx1ZTogJzAwJyxcbiAqICAgZGF0YTogJzdmNzQ2NTczNzQzMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDA1NycsXG4gKiAgIHY6ICcxYycsXG4gKiAgIHI6ICc1ZTFkM2E3NmZiZjgyNDIyMGVhZmM4Yzc5YWQ1NzhhZDJiNjdkMDFiMGMyNDI1ZWIxZjEzNDdlOGY1MDg4MmFiJyxcbiAqICAgczogJzViZDQyODUzN2YwNWY5ODMwZTkzNzkyZjkwZWE2YTNlMmQxZWU4NDk1MmRkOTZlZGJhZTlmNjU4ZjgzMWFiMTMnXG4gKiB9O1xuICogdmFyIHR4ID0gbmV3IFRyYW5zYWN0aW9uKHJhd1R4KTtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXkgfCBPYmplY3R9IGRhdGEgYSB0cmFuc2FjdGlvbiBjYW4gYmUgaW5pdGlhaWxpemVkIHdpdGggZWl0aGVyIGEgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIFJMUCBzZXJpYWxpemVkIHRyYW5zYWN0aW9uIG9yIGFuIGFycmF5IG9mIGJ1ZmZlcnMgcmVsYXRpbmcgdG8gZWFjaCBvZiB0aGUgdHggUHJvcGVydGllcywgbGlzdGVkIGluIG9yZGVyIGJlbG93IGluIHRoZSBleG1wbGUuXG4gKlxuICogT3IgbGFzdGx5IGFuIE9iamVjdCBjb250YWluaW5nIHRoZSBQcm9wZXJ0aWVzIG9mIHRoZSB0cmFuc2FjdGlvbiBsaWtlIGluIHRoZSBVc2FnZSBleGFtcGxlLlxuICpcbiAqIEZvciBPYmplY3QgYW5kIEFycmF5cyBlYWNoIG9mIHRoZSBlbGVtZW50cyBjYW4gZWl0aGVyIGJlIGEgQnVmZmVyLCBhIGhleC1wcmVmaXhlZCAoMHgpIFN0cmluZyAsIE51bWJlciwgb3IgYW4gb2JqZWN0IHdpdGggYSB0b0J1ZmZlciBtZXRob2Qgc3VjaCBhcyBCaWdudW1cbiAqXG4gKiBAcHJvcGVydHkge0J1ZmZlcn0gcmF3IFRoZSByYXcgcmxwIGVuY29kZWQgdHJhbnNhY3Rpb25cbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhLm5vbmNlIG5vbmNlIG51bWJlclxuICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEuZ2FzTGltaXQgdHJhbnNhY3Rpb24gZ2FzIGxpbWl0XG4gKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YS5nYXNQcmljZSB0cmFuc2FjdGlvbiBnYXMgcHJpY2VcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhLnRvIHRvIHRoZSB0byBhZGRyZXNzXG4gKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YS52YWx1ZSB0aGUgYW1vdW50IG9mIGV0aGVyIHNlbnRcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhLmRhdGEgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIGRhdGEgb2YgdGhlIG1lc3NhZ2Ugb3IgdGhlIGluaXQgb2YgYSBjb250cmFjdFxuICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEudiBFQyBzaWduYXR1cmUgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YS5yIEVDIHNpZ25hdHVyZSBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhLnMgRUMgcmVjb3ZlcnkgSURcbiAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmNoYWluSWQgRUlQIDE1NSBjaGFpbklkIC0gbWFpbm5ldDogMSwgcm9wc3RlbjogM1xuICogKi9cblxudmFyIFRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihkYXRhKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zYWN0aW9uKTtcblxuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIC8vIERlZmluZSBQcm9wZXJ0aWVzXG4gICAgdmFyIGZpZWxkcyA9IFt7XG4gICAgICBuYW1lOiAnbm9uY2UnLFxuICAgICAgbGVuZ3RoOiAzMixcbiAgICAgIGFsbG93TGVzczogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IG5ldyBCdWZmZXIoW10pXG4gICAgfSwge1xuICAgICAgbmFtZTogJ2dhc1ByaWNlJyxcbiAgICAgIGxlbmd0aDogMzIsXG4gICAgICBhbGxvd0xlc3M6IHRydWUsXG4gICAgICBkZWZhdWx0OiBuZXcgQnVmZmVyKFtdKVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdnYXNMaW1pdCcsXG4gICAgICBhbGlhczogJ2dhcycsXG4gICAgICBsZW5ndGg6IDMyLFxuICAgICAgYWxsb3dMZXNzOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbmV3IEJ1ZmZlcihbXSlcbiAgICB9LCB7XG4gICAgICBuYW1lOiAndG8nLFxuICAgICAgYWxsb3daZXJvOiB0cnVlLFxuICAgICAgbGVuZ3RoOiAyMCxcbiAgICAgIGRlZmF1bHQ6IG5ldyBCdWZmZXIoW10pXG4gICAgfSwge1xuICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAgIGxlbmd0aDogMzIsXG4gICAgICBhbGxvd0xlc3M6IHRydWUsXG4gICAgICBkZWZhdWx0OiBuZXcgQnVmZmVyKFtdKVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdkYXRhJyxcbiAgICAgIGFsaWFzOiAnaW5wdXQnLFxuICAgICAgYWxsb3daZXJvOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbmV3IEJ1ZmZlcihbXSlcbiAgICB9LCB7XG4gICAgICBuYW1lOiAndicsXG4gICAgICBhbGxvd1plcm86IHRydWUsXG4gICAgICBkZWZhdWx0OiBuZXcgQnVmZmVyKFsweDFjXSlcbiAgICB9LCB7XG4gICAgICBuYW1lOiAncicsXG4gICAgICBsZW5ndGg6IDMyLFxuICAgICAgYWxsb3daZXJvOiB0cnVlLFxuICAgICAgYWxsb3dMZXNzOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbmV3IEJ1ZmZlcihbXSlcbiAgICB9LCB7XG4gICAgICBuYW1lOiAncycsXG4gICAgICBsZW5ndGg6IDMyLFxuICAgICAgYWxsb3daZXJvOiB0cnVlLFxuICAgICAgYWxsb3dMZXNzOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbmV3IEJ1ZmZlcihbXSlcbiAgICB9XTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJscCBlbmNvZGluZyBvZiB0aGUgdHJhbnNhY3Rpb25cbiAgICAgKiBAbWV0aG9kIHNlcmlhbGl6ZVxuICAgICAqIEByZXR1cm4ge0J1ZmZlcn1cbiAgICAgKiBAbWVtYmVyb2YgVHJhbnNhY3Rpb25cbiAgICAgKiBAbmFtZSBzZXJpYWxpemVcbiAgICAgKi9cbiAgICAvLyBhdHRhY2hlZCBzZXJpYWxpemVcbiAgICBldGhVdGlsLmRlZmluZVByb3BlcnRpZXModGhpcywgZmllbGRzLCBkYXRhKTtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7QnVmZmVyfSBmcm9tIChyZWFkIG9ubHkpIHNlbmRlciBhZGRyZXNzIG9mIHRoaXMgdHJhbnNhY3Rpb24sIG1hdGhlbWF0aWNhbGx5IGRlcml2ZWQgZnJvbSBvdGhlciBwYXJhbWV0ZXJzLlxuICAgICAqIEBuYW1lIGZyb21cbiAgICAgKiBAbWVtYmVyb2YgVHJhbnNhY3Rpb25cbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2Zyb20nLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiB0aGlzLmdldFNlbmRlckFkZHJlc3MuYmluZCh0aGlzKVxuICAgIH0pO1xuXG4gICAgLy8gY2FsY3VsYXRlIGNoYWluSWQgZnJvbSBzaWduYXR1cmVcbiAgICB2YXIgc2lnViA9IGV0aFV0aWwuYnVmZmVyVG9JbnQodGhpcy52KTtcbiAgICB2YXIgY2hhaW5JZCA9IE1hdGguZmxvb3IoKHNpZ1YgLSAzNSkgLyAyKTtcbiAgICBpZiAoY2hhaW5JZCA8IDApIGNoYWluSWQgPSAwO1xuXG4gICAgLy8gc2V0IGNoYWluSWRcbiAgICB0aGlzLl9jaGFpbklkID0gY2hhaW5JZCB8fCBkYXRhLmNoYWluSWQgfHwgMDtcbiAgICB0aGlzLl9ob21lc3RlYWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoZSB0eCdzIGB0b2AgaXMgdG8gdGhlIGNyZWF0aW9uIGFkZHJlc3NcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG5cblxuICBUcmFuc2FjdGlvbi5wcm90b3R5cGUudG9DcmVhdGlvbkFkZHJlc3MgPSBmdW5jdGlvbiB0b0NyZWF0aW9uQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy50by50b1N0cmluZygnaGV4JykgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIHNoYTMtMjU2IGhhc2ggb2YgdGhlIHNlcmlhbGl6ZWQgdHhcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5jbHVkZVNpZ25hdHVyZT10cnVlXSB3aGV0aGVyIG9yIG5vdCB0byBpbmN1bGRlIHRoZSBzaWduYXR1cmVcbiAgICogQHJldHVybiB7QnVmZmVyfVxuICAgKi9cblxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24gaGFzaChpbmNsdWRlU2lnbmF0dXJlKSB7XG4gICAgaWYgKGluY2x1ZGVTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkgaW5jbHVkZVNpZ25hdHVyZSA9IHRydWU7XG5cbiAgICAvLyBFSVAxNTUgc3BlYzpcbiAgICAvLyB3aGVuIGNvbXB1dGluZyB0aGUgaGFzaCBvZiBhIHRyYW5zYWN0aW9uIGZvciBwdXJwb3NlcyBvZiBzaWduaW5nIG9yIHJlY292ZXJpbmcsXG4gICAgLy8gaW5zdGVhZCBvZiBoYXNoaW5nIG9ubHkgdGhlIGZpcnN0IHNpeCBlbGVtZW50cyAoaWUuIG5vbmNlLCBnYXNwcmljZSwgc3RhcnRnYXMsIHRvLCB2YWx1ZSwgZGF0YSksXG4gICAgLy8gaGFzaCBuaW5lIGVsZW1lbnRzLCB3aXRoIHYgcmVwbGFjZWQgYnkgQ0hBSU5fSUQsIHIgPSAwIGFuZCBzID0gMFxuXG4gICAgdmFyIGl0ZW1zID0gdm9pZCAwO1xuICAgIGlmIChpbmNsdWRlU2lnbmF0dXJlKSB7XG4gICAgICBpdGVtcyA9IHRoaXMucmF3O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fY2hhaW5JZCA+IDApIHtcbiAgICAgICAgdmFyIHJhdyA9IHRoaXMucmF3LnNsaWNlKCk7XG4gICAgICAgIHRoaXMudiA9IHRoaXMuX2NoYWluSWQ7XG4gICAgICAgIHRoaXMuciA9IDA7XG4gICAgICAgIHRoaXMucyA9IDA7XG4gICAgICAgIGl0ZW1zID0gdGhpcy5yYXc7XG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbXMgPSB0aGlzLnJhdy5zbGljZSgwLCA2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgaGFzaFxuICAgIHJldHVybiBldGhVdGlsLnJscGhhc2goaXRlbXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBwdWJsaWMga2V5IG9mIHRoZSBzZW5kZXJcbiAgICogQHJldHVybiB7QnVmZmVyfVxuICAgKi9cblxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5nZXRDaGFpbklkID0gZnVuY3Rpb24gZ2V0Q2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW5JZDtcbiAgfTtcblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgc2VuZGVyJ3MgYWRkcmVzc1xuICAgKiBAcmV0dXJuIHtCdWZmZXJ9XG4gICAqL1xuXG5cbiAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlckFkZHJlc3MgPSBmdW5jdGlvbiBnZXRTZW5kZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLl9mcm9tKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgICB9XG4gICAgdmFyIHB1YmtleSA9IHRoaXMuZ2V0U2VuZGVyUHVibGljS2V5KCk7XG4gICAgdGhpcy5fZnJvbSA9IGV0aFV0aWwucHVibGljVG9BZGRyZXNzKHB1YmtleSk7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH07XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHB1YmxpYyBrZXkgb2YgdGhlIHNlbmRlclxuICAgKiBAcmV0dXJuIHtCdWZmZXJ9XG4gICAqL1xuXG5cbiAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlclB1YmxpY0tleSA9IGZ1bmN0aW9uIGdldFNlbmRlclB1YmxpY0tleSgpIHtcbiAgICBpZiAoIXRoaXMuX3NlbmRlclB1YktleSB8fCAhdGhpcy5fc2VuZGVyUHViS2V5Lmxlbmd0aCkge1xuICAgICAgaWYgKCF0aGlzLnZlcmlmeVNpZ25hdHVyZSgpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgU2lnbmF0dXJlJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZW5kZXJQdWJLZXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIHNpZ25hdHVyZSBpcyB2YWxpZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cblxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS52ZXJpZnlTaWduYXR1cmUgPSBmdW5jdGlvbiB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgdmFyIG1zZ0hhc2ggPSB0aGlzLmhhc2goZmFsc2UpO1xuICAgIC8vIEFsbCB0cmFuc2FjdGlvbiBzaWduYXR1cmVzIHdob3NlIHMtdmFsdWUgaXMgZ3JlYXRlciB0aGFuIHNlY3AyNTZrMW4vMiBhcmUgY29uc2lkZXJlZCBpbnZhbGlkLlxuICAgIGlmICh0aGlzLl9ob21lc3RlYWQgJiYgbmV3IEJOKHRoaXMucykuY21wKE5fRElWXzIpID09PSAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB2ID0gZXRoVXRpbC5idWZmZXJUb0ludCh0aGlzLnYpO1xuICAgICAgaWYgKHRoaXMuX2NoYWluSWQgPiAwKSB7XG4gICAgICAgIHYgLT0gdGhpcy5fY2hhaW5JZCAqIDIgKyA4O1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VuZGVyUHViS2V5ID0gZXRoVXRpbC5lY3JlY292ZXIobXNnSGFzaCwgdiwgdGhpcy5yLCB0aGlzLnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLl9zZW5kZXJQdWJLZXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNpZ24gYSB0cmFuc2FjdGlvbiB3aXRoIGEgZ2l2ZW4gYSBwcml2YXRlIGtleVxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gcHJpdmF0ZUtleVxuICAgKi9cblxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5zaWduID0gZnVuY3Rpb24gc2lnbihwcml2YXRlS2V5KSB7XG4gICAgdmFyIG1zZ0hhc2ggPSB0aGlzLmhhc2goZmFsc2UpO1xuICAgIHZhciBzaWcgPSBldGhVdGlsLmVjc2lnbihtc2dIYXNoLCBwcml2YXRlS2V5KTtcbiAgICBpZiAodGhpcy5fY2hhaW5JZCA+IDApIHtcbiAgICAgIHNpZy52ICs9IHRoaXMuX2NoYWluSWQgKiAyICsgODtcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzaWcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIGdhcyBwYWlkIGZvciB0aGUgZGF0YSBpbiB0aGlzIHR4XG4gICAqIEByZXR1cm4ge0JOfVxuICAgKi9cblxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5nZXREYXRhRmVlID0gZnVuY3Rpb24gZ2V0RGF0YUZlZSgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmF3WzVdO1xuICAgIHZhciBjb3N0ID0gbmV3IEJOKDApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXSA9PT0gMCA/IGNvc3QuaWFkZG4oZmVlcy50eERhdGFaZXJvR2FzLnYpIDogY29zdC5pYWRkbihmZWVzLnR4RGF0YU5vblplcm9HYXMudik7XG4gICAgfVxuICAgIHJldHVybiBjb3N0O1xuICB9O1xuXG4gIC8qKlxuICAgKiB0aGUgbWluaW11bSBhbW91bnQgb2YgZ2FzIHRoZSB0eCBtdXN0IGhhdmUgKERhdGFGZWUgKyBUeEZlZSArIENyZWF0aW9uIEZlZSlcbiAgICogQHJldHVybiB7Qk59XG4gICAqL1xuXG5cbiAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmdldEJhc2VGZWUgPSBmdW5jdGlvbiBnZXRCYXNlRmVlKCkge1xuICAgIHZhciBmZWUgPSB0aGlzLmdldERhdGFGZWUoKS5pYWRkbihmZWVzLnR4R2FzLnYpO1xuICAgIGlmICh0aGlzLl9ob21lc3RlYWQgJiYgdGhpcy50b0NyZWF0aW9uQWRkcmVzcygpKSB7XG4gICAgICBmZWUuaWFkZG4oZmVlcy50eENyZWF0aW9uLnYpO1xuICAgIH1cbiAgICByZXR1cm4gZmVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiB0aGUgdXAgZnJvbnQgYW1vdW50IHRoYXQgYW4gYWNjb3VudCBtdXN0IGhhdmUgZm9yIHRoaXMgdHJhbnNhY3Rpb24gdG8gYmUgdmFsaWRcbiAgICogQHJldHVybiB7Qk59XG4gICAqL1xuXG5cbiAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmdldFVwZnJvbnRDb3N0ID0gZnVuY3Rpb24gZ2V0VXBmcm9udENvc3QoKSB7XG4gICAgcmV0dXJuIG5ldyBCTih0aGlzLmdhc0xpbWl0KS5pbXVsKG5ldyBCTih0aGlzLmdhc1ByaWNlKSkuaWFkZChuZXcgQk4odGhpcy52YWx1ZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiB2YWxpZGF0ZXMgdGhlIHNpZ25hdHVyZSBhbmQgY2hlY2tzIHRvIHNlZSBpZiBpdCBoYXMgZW5vdWdoIGdhc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdHJpbmdFcnJvcj1mYWxzZV0gd2hldGhlciB0byByZXR1cm4gYSBzdHJpbmcgd2l0aCBhIGRzY3JpcHRpb24gb2Ygd2h5IHRoZSB2YWxpZGF0aW9uIGZhaWxlZCBvciByZXR1cm4gYSBCbG9vbGVhblxuICAgKiBAcmV0dXJuIHtCb29sZWFufFN0cmluZ31cbiAgICovXG5cblxuICBUcmFuc2FjdGlvbi5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZShzdHJpbmdFcnJvcikge1xuICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICBpZiAoIXRoaXMudmVyaWZ5U2lnbmF0dXJlKCkpIHtcbiAgICAgIGVycm9ycy5wdXNoKCdJbnZhbGlkIFNpZ25hdHVyZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldEJhc2VGZWUoKS5jbXAobmV3IEJOKHRoaXMuZ2FzTGltaXQpKSA+IDApIHtcbiAgICAgIGVycm9ycy5wdXNoKFsnZ2FzIGxpbWl0IGlzIHRvbyBsb3cuIE5lZWQgYXQgbGVhc3QgJyArIHRoaXMuZ2V0QmFzZUZlZSgpXSk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZ0Vycm9yID09PSB1bmRlZmluZWQgfHwgc3RyaW5nRXJyb3IgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVycm9ycy5qb2luKCcgJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUcmFuc2FjdGlvbjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2FjdGlvbjsiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsImV0aFV0aWwiLCJyZXF1aXJlIiwiZmVlcyIsIkJOIiwiTl9ESVZfMiIsIlRyYW5zYWN0aW9uIiwiZGF0YSIsImZpZWxkcyIsIm5hbWUiLCJsZW5ndGgiLCJhbGxvd0xlc3MiLCJkZWZhdWx0IiwiQnVmZmVyIiwiYWxpYXMiLCJhbGxvd1plcm8iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiZ2V0U2VuZGVyQWRkcmVzcyIsImJpbmQiLCJzaWdWIiwiYnVmZmVyVG9JbnQiLCJ2IiwiY2hhaW5JZCIsIk1hdGgiLCJmbG9vciIsIl9jaGFpbklkIiwiX2hvbWVzdGVhZCIsInByb3RvdHlwZSIsInRvQ3JlYXRpb25BZGRyZXNzIiwidG8iLCJ0b1N0cmluZyIsImhhc2giLCJpbmNsdWRlU2lnbmF0dXJlIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJyYXciLCJzbGljZSIsInIiLCJzIiwicmxwaGFzaCIsImdldENoYWluSWQiLCJfZnJvbSIsInB1YmtleSIsImdldFNlbmRlclB1YmxpY0tleSIsInB1YmxpY1RvQWRkcmVzcyIsIl9zZW5kZXJQdWJLZXkiLCJ2ZXJpZnlTaWduYXR1cmUiLCJFcnJvciIsIm1zZ0hhc2giLCJjbXAiLCJlY3JlY292ZXIiLCJlIiwic2lnbiIsInByaXZhdGVLZXkiLCJzaWciLCJlY3NpZ24iLCJhc3NpZ24iLCJnZXREYXRhRmVlIiwiY29zdCIsImkiLCJpYWRkbiIsInR4RGF0YVplcm9HYXMiLCJ0eERhdGFOb25aZXJvR2FzIiwiZ2V0QmFzZUZlZSIsImZlZSIsInR4R2FzIiwidHhDcmVhdGlvbiIsImdldFVwZnJvbnRDb3N0IiwiZ2FzTGltaXQiLCJpbXVsIiwiZ2FzUHJpY2UiLCJpYWRkIiwidmFsdWUiLCJ2YWxpZGF0ZSIsInN0cmluZ0Vycm9yIiwiZXJyb3JzIiwicHVzaCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ethereumjs-tx/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ethereumjs-tx/node_modules/ethereum-common/params.json":
/*!*****************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereum-common/params.json ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}');

/***/ })

};
;