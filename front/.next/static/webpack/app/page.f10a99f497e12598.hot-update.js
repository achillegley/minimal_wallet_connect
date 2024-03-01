"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/wallet.jsx":
/*!****************************!*\
  !*** ./src/app/wallet.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"(app-pages-browser)/./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"(app-pages-browser)/./node_modules/@walletconnect/web3-provider/dist/esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/process/browser.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst backend_url = \"http://localhost:5000\";\nconst WalletConnectComponent = ()=>{\n    _s();\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [signer, setSigner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [signedMessage, setSignedMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const verifySignatureEndpoint = \"\".concat(backend_url, \"/verify-signature\");\n    const providerOptions = {\n        walletconnect: {\n            package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            options: {\n                infuraId: process.env.REACT_APP_INFURA_ID // Ensure this is set in your .env file\n            }\n        }\n    };\n    const connectWallet = async ()=>{\n        console.log(\"Attempting to connect wallet...\");\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({\n            network: \"mainnet\",\n            cacheProvider: true,\n            providerOptions\n        });\n        try {\n            const instance = await web3Modal.connect();\n            const tempProvider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(instance);\n            //const tempProvider =new ethers.BrowserProvider(window.ethereum);\n            const tempSigner = tempProvider.getSigner();\n            const tempNetwork = await tempProvider.getNetwork();\n            setProvider(tempProvider);\n            setSigner(tempSigner);\n            setNetwork(tempNetwork.name); // Sets the current network\n        } catch (error) {\n            console.error(\"Error connecting to wallet:\", error);\n        }\n    };\n    const signMessage = async ()=>{\n        if (!signer) return;\n        const message = \"Please sign this message to verify your identity.\";\n        try {\n            const signature = await signer.signMessage(message);\n            setSignedMessage(signature);\n            // Send the data to your backend for verification\n            const verificationData = {\n                signature,\n                message,\n                address: signer,\n                network: network\n            };\n            const response = await fetch(verifySignatureEndpoint, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(verificationData)\n            });\n            const responseData = await response.json();\n            if (response.ok) {\n                // Handle successful verification\n                console.log(\"Signature verified successfully\", responseData);\n            // Optionally, update state or UI based on successful verification\n            } else {\n                // Handle failed verification\n                console.error(\"Signature verification failed\", responseData);\n            // Optionally, update state or UI to reflect the failure\n            }\n        // Here, you can also include code to send the signature and message to your backend for verification\n        } catch (error) {\n            console.error(\"Error signing message:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                style: {\n                    padding: \"10px 20px\",\n                    fontSize: \"16px\",\n                    margin: \"5px\"\n                },\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/home/achille/Documents/project/upwork/test_dmytro/thefront/src/app/wallet.jsx\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, undefined),\n            signedMessage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Message Signed: \",\n                        signedMessage\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/achille/Documents/project/upwork/test_dmytro/thefront/src/app/wallet.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/achille/Documents/project/upwork/test_dmytro/thefront/src/app/wallet.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signMessage,\n                disabled: !signer,\n                style: {\n                    padding: \"10px 20px\",\n                    fontSize: \"16px\",\n                    margin: \"5px\"\n                },\n                children: \"Sign Message\"\n            }, void 0, false, {\n                fileName: \"/home/achille/Documents/project/upwork/test_dmytro/thefront/src/app/wallet.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/achille/Documents/project/upwork/test_dmytro/thefront/src/app/wallet.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WalletConnectComponent, \"FMooVuvTDitjsJsXOMFCz51IWqU=\");\n_c = WalletConnectComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletConnectComponent);\nvar _c;\n$RefreshReg$(_c, \"WalletConnectComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQU1QO0dBckdNckQ7S0FBQUE7QUF1R04sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3dhbGxldC5qc3g/ODMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnO1xuaW1wb3J0IFdhbGxldENvbm5lY3RQcm92aWRlciBmcm9tICdAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5jb25zdCAgYmFja2VuZF91cmw9cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkxcblxuXG5jb25zdCBXYWxsZXRDb25uZWN0Q29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbcHJvdmlkZXIsIHNldFByb3ZpZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2lnbmVyLCBzZXRTaWduZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaWduZWRNZXNzYWdlLCBzZXRTaWduZWRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmV0d29yaywgc2V0TmV0d29ya10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgdmVyaWZ5U2lnbmF0dXJlRW5kcG9pbnQgPSBgJHtiYWNrZW5kX3VybH0vdmVyaWZ5LXNpZ25hdHVyZWA7XG5cbiAgY29uc3QgcHJvdmlkZXJPcHRpb25zID0ge1xuICAgIHdhbGxldGNvbm5lY3Q6IHtcbiAgICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlcixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaW5mdXJhSWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9JTkZVUkFfSUQgLy8gRW5zdXJlIHRoaXMgaXMgc2V0IGluIHlvdXIgLmVudiBmaWxlXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNvbm5lY3Qgd2FsbGV0Li4uXCIpO1xuICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgbmV0d29yazogXCJtYWlubmV0XCIsIC8vIFRoaXMgY2FuIGJlIGR5bmFtaWMgYmFzZWQgb24gdGhlIGFwcGxpY2F0aW9uJ3MgbmVlZHNcbiAgICAgIGNhY2hlUHJvdmlkZXI6IHRydWUsXG4gICAgICBwcm92aWRlck9wdGlvbnNcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG4gICAgICBjb25zdCB0ZW1wUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoaW5zdGFuY2UpO1xuICAgICAgLy9jb25zdCB0ZW1wUHJvdmlkZXIgPW5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBjb25zdCB0ZW1wU2lnbmVyID0gdGVtcFByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgY29uc3QgdGVtcE5ldHdvcmsgPSBhd2FpdCB0ZW1wUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuXG4gICAgICBzZXRQcm92aWRlcih0ZW1wUHJvdmlkZXIpO1xuICAgICAgc2V0U2lnbmVyKHRlbXBTaWduZXIpO1xuICAgICAgc2V0TmV0d29yayh0ZW1wTmV0d29yay5uYW1lKTsgLy8gU2V0cyB0aGUgY3VycmVudCBuZXR3b3JrXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gd2FsbGV0OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpZ25NZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2lnbmVyKSByZXR1cm47XG4gICAgY29uc3QgbWVzc2FnZSA9IFwiUGxlYXNlIHNpZ24gdGhpcyBtZXNzYWdlIHRvIHZlcmlmeSB5b3VyIGlkZW50aXR5LlwiO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICBzZXRTaWduZWRNZXNzYWdlKHNpZ25hdHVyZSk7XG4gICAgICAvLyBTZW5kIHRoZSBkYXRhIHRvIHlvdXIgYmFja2VuZCBmb3IgdmVyaWZpY2F0aW9uXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb25EYXRhID0ge1xuICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGFkZHJlc3M6c2lnbmVyLFxuICAgICAgICBuZXR3b3JrOiBuZXR3b3JrXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHZlcmlmeVNpZ25hdHVyZUVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmVyaWZpY2F0aW9uRGF0YSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIHZlcmlmaWNhdGlvblxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25hdHVyZSB2ZXJpZmllZCBzdWNjZXNzZnVsbHlcIiwgcmVzcG9uc2VEYXRhKTtcbiAgICAgICAgLy8gT3B0aW9uYWxseSwgdXBkYXRlIHN0YXRlIG9yIFVJIGJhc2VkIG9uIHN1Y2Nlc3NmdWwgdmVyaWZpY2F0aW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgZmFpbGVkIHZlcmlmaWNhdGlvblxuICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBmYWlsZWRcIiwgcmVzcG9uc2VEYXRhKTtcbiAgICAgICAgLy8gT3B0aW9uYWxseSwgdXBkYXRlIHN0YXRlIG9yIFVJIHRvIHJlZmxlY3QgdGhlIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIC8vIEhlcmUsIHlvdSBjYW4gYWxzbyBpbmNsdWRlIGNvZGUgdG8gc2VuZCB0aGUgc2lnbmF0dXJlIGFuZCBtZXNzYWdlIHRvIHlvdXIgYmFja2VuZCBmb3IgdmVyaWZpY2F0aW9uXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzaWduaW5nIG1lc3NhZ2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxidXR0b24gXG4gICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBcbiAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4IDIwcHgnLCBmb250U2l6ZTogJzE2cHgnLCBtYXJnaW46ICc1cHgnIH19XG4gICAgPlxuICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICA8L2J1dHRvbj5cbiAgICB7c2lnbmVkTWVzc2FnZSA/IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPk1lc3NhZ2UgU2lnbmVkOiB7c2lnbmVkTWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgb25DbGljaz17c2lnbk1lc3NhZ2V9IFxuICAgICAgICBkaXNhYmxlZD17IXNpZ25lcn0gXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4IDIwcHgnLCBmb250U2l6ZTogJzE2cHgnLCBtYXJnaW46ICc1cHgnIH19XG4gICAgICA+XG4gICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgPC9idXR0b24+XG4gICAgKX1cbiAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRDb25uZWN0Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJXZWIzTW9kYWwiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJldGhlcnMiLCJiYWNrZW5kX3VybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsIldhbGxldENvbm5lY3RDb21wb25lbnQiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwic2lnbmVyIiwic2V0U2lnbmVyIiwic2lnbmVkTWVzc2FnZSIsInNldFNpZ25lZE1lc3NhZ2UiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsInZlcmlmeVNpZ25hdHVyZUVuZHBvaW50IiwicHJvdmlkZXJPcHRpb25zIiwid2FsbGV0Y29ubmVjdCIsInBhY2thZ2UiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJSRUFDVF9BUFBfSU5GVVJBX0lEIiwiY29ubmVjdFdhbGxldCIsImNvbnNvbGUiLCJsb2ciLCJ3ZWIzTW9kYWwiLCJjYWNoZVByb3ZpZGVyIiwiaW5zdGFuY2UiLCJjb25uZWN0IiwidGVtcFByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwidGVtcFNpZ25lciIsImdldFNpZ25lciIsInRlbXBOZXR3b3JrIiwiZ2V0TmV0d29yayIsIm5hbWUiLCJlcnJvciIsInNpZ25NZXNzYWdlIiwibWVzc2FnZSIsInNpZ25hdHVyZSIsInZlcmlmaWNhdGlvbkRhdGEiLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJvayIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcmdpbiIsInAiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/wallet.jsx\n"));

/***/ })

});