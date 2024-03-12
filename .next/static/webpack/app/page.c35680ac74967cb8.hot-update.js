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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/assets/logo.svg */ \"(app-pages-browser)/./public/assets/logo.svg\");\n/* harmony import */ var _public_assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/assets/plus.svg */ \"(app-pages-browser)/./public/assets/plus.svg\");\n/* harmony import */ var _public_assets_clipboard_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/assets/clipboard.svg */ \"(app-pages-browser)/./public/assets/clipboard.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_card_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card-task */ \"(app-pages-browser)/./app/components/card-task.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Arquivos \n\n\n\n// Extensions\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    function handleDeleteTask(id) {\n        setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== id));\n    }\n    function handSwitchTask(id) {\n        setTasks((prevTasks)=>prevTasks.map((task)=>task.id === id ? {\n                    ...task,\n                    check: !task.check\n                } : task));\n    }\n    function handleAddTask(event) {\n        event.preventDefault();\n        if (inputValue.trim() === \"\") {\n            alert(\"Por favor, insira uma tarefa v\\xe1lida\");\n            return;\n        }\n        const newId = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].id.toString()) + 1 : 1;\n        setTasks((prevTasks)=>[\n                ...prevTasks,\n                {\n                    id: newId,\n                    check: false,\n                    task: inputValue\n                }\n            ]);\n        setInputValue(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \" bg-background h-screen overflow-x-hidden sm:px-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" h-[12.5rem] bg-gray-700 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \" w-[7.875rem]\",\n                    src: _public_assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    alt: \"Logo ToDo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-1 mt-[-1.5rem] justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex max-w-[50rem] flex-1 max-h-[4rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleAddTask,\n                        className: \" flex gap-[.5rem] flex-1 justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Adicione uma nova tarefa\",\n                                className: \"   bg-gray-500    border-gray-700    border-[1px]    py-[1rem]    px-[1rem]   text-gray-300   placeholder:text-gray-300   font-regular   outline-none   rounded-[8px]   flex-1   \",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-dark flex justify-center items-center px-[1rem] gap-[.5rem] rounded-[8px] cursor-pointer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \" text-gray-100 font-bold text-[.875rem]\",\n                                        children: \"Criar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        src: _public_assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                        className: \"w-[1rem]\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center pt-[4rem]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex max-w-[50rem] flex-col flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            className: \"flex flex-1 justify-between min-h-[2.68rem] items-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-[.5rem]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-blue font-bold text-[0,75rem]\",\n                                            children: \"Tarefas criadas\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" bg-gray-400 text-gray-200 rounded-full py-[0.2rem] px-[0.8rem] font-bold text-[0.75rem]\",\n                                            children: tasks.length\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-[.5rem]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-purple font-bold text-[0,75rem]\",\n                                            children: \"Conclu\\xeddas\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this),\n                                        tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" bg-gray-400 text-gray-200 rounded-full py-[0.2rem] px-[0.8rem] font-bold text-[0.75rem]\",\n                                            children: \"\".concat(tasks.filter((i)=>i.check === true).length, \" de \").concat(tasks.length)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" bg-gray-400 text-gray-200 rounded-full py-[0.2rem] px-[0.8rem] font-bold text-[0.75rem]\",\n                                            children: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: tasks.map((items)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_task__WEBPACK_IMPORTED_MODULE_6__.CardTask, {\n                                    task: items.task,\n                                    check: items.check,\n                                    id: items.id,\n                                    onDelete: handleDeleteTask,\n                                    onSwitch: handSwitchTask\n                                }, items.id, false, {\n                                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex flex-col w-full justify-center items-center py-[4rem] border-t-[1px] border-[#333333] gap-[1rem]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \" w-[3.5rem]\",\n                                    src: _public_assets_clipboard_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"Nem uma tarefa\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" font-bold text-gray-300 text-[1rem]\",\n                                            children: \"Voc\\xea ainda n\\xe3o tem tarefas cadastradas\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" font-regular text-gray-300 text-[1rem]\",\n                                            children: \"Crie tarefas e organize seus itens a fazer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Cria\\xe7\\xe3o 02 - Sali\\\\Desktop\\\\Solutti\\\\desafio\\\\app\\\\page.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jp+5pYLTDVQVkjvz2TRJjW4Tp5I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFJN0dwQixNQUFNZ0IsTUFBTSxHQUFHLGtCQUNkLDhEQUFDSzs0QkFBSUQsV0FBVTtzQ0FDWnBCLE1BQU1RLEdBQUcsQ0FBQzhCLENBQUFBO2dDQUNULHFCQUNFLDhEQUFDMUMsMkRBQVFBO29DQUFnQlUsTUFBTWdDLE1BQU1oQyxJQUFJO29DQUFFRyxPQUFPNkIsTUFBTTdCLEtBQUs7b0NBQUVOLElBQUltQyxNQUFNbkMsRUFBRTtvQ0FBRW9DLFVBQVVyQztvQ0FBa0JzQyxVQUFVakM7bUNBQXBHK0IsTUFBTW5DLEVBQUU7Ozs7OzRCQUUzQjs7Ozs7aURBS0YsOERBQUNrQjs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUMxQixrREFBS0E7b0NBQUMwQixXQUFVO29DQUFjRSxLQUFLN0Isb0VBQVNBO29DQUFFOEIsS0FBSTs7Ozs7OzhDQUNuRCw4REFBQ0Y7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDQzs0Q0FBSUQsV0FBVTtzREFBdUM7Ozs7OztzREFDdEQsOERBQUNDOzRDQUFJRCxXQUFVO3NEQUEwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekU7R0F0SHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG4vLyBBcnF1aXZvcyBcclxuaW1wb3J0IExvZ28gZnJvbSAnQC9wdWJsaWMvYXNzZXRzL2xvZ28uc3ZnJztcclxuaW1wb3J0IFBsdXMgZnJvbSAnQC9wdWJsaWMvYXNzZXRzL3BsdXMuc3ZnJztcclxuaW1wb3J0IENsaXBib2FyZCBmcm9tICdAL3B1YmxpYy9hc3NldHMvY2xpcGJvYXJkLnN2Zyc7XHJcblxyXG4vLyBFeHRlbnNpb25zXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmRUYXNrIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQtdGFzayc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgaW50ZXJmYWNlIFRhc2tzUHJvcHMge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcixcclxuICAgIGNoZWNrOiBib29sZWFuLFxyXG4gICAgdGFzazogc3RyaW5nLFxyXG4gIH1cclxuICBcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tzUHJvcHNbXT4oW10pXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRhc2soaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xyXG4gICAgc2V0VGFza3MocHJldlRhc2tzID0+IHByZXZUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSBpZCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZFN3aXRjaFRhc2soaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQgIHtcclxuICAgIHNldFRhc2tzKHByZXZUYXNrcyA9PlxyXG4gICAgICBwcmV2VGFza3MubWFwKHRhc2sgPT5cclxuICAgICAgICB0YXNrLmlkID09PSBpZCA/IHsgLi4udGFzaywgY2hlY2s6ICF0YXNrLmNoZWNrIH0gOiB0YXNrXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYXNrKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pil7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChpbnB1dFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgaW5zaXJhIHVtYSB0YXJlZmEgdsOhbGlkYScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3SWQgPSB0YXNrcy5sZW5ndGggPiAwID8gcGFyc2VJbnQodGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaWQudG9TdHJpbmcoKSkgKyAxIDogMTtcclxuXHJcbiAgICBzZXRUYXNrcyhwcmV2VGFza3MgPT4gW1xyXG4gICAgICAuLi5wcmV2VGFza3MsXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogbmV3SWQsXHJcbiAgICAgICAgY2hlY2s6IGZhbHNlLFxyXG4gICAgICAgIHRhc2s6IGlucHV0VmFsdWVcclxuICAgICAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIiBiZy1iYWNrZ3JvdW5kIGgtc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIHNtOnB4LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMTIuNXJlbV0gYmctZ3JheS03MDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPScgdy1bNy44NzVyZW1dJyBzcmM9e0xvZ299IGFsdD0nTG9nbyBUb0RvJy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXggZmxleC0xIG10LVstMS41cmVtXSBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IG1heC13LVs1MHJlbV0gZmxleC0xIG1heC1oLVs0cmVtXSc+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkVGFza30gY2xhc3NOYW1lPScgZmxleCBnYXAtWy41cmVtXSBmbGV4LTEganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FkaWNpb25lIHVtYSBub3ZhIHRhcmVmYScgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdcclxuICAgICAgICAgICAgICAgIGJnLWdyYXktNTAwIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWdyYXktNzAwIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLVsxcHhdIFxyXG4gICAgICAgICAgICAgICAgcHktWzFyZW1dIFxyXG4gICAgICAgICAgICAgICAgcHgtWzFyZW1dXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWdyYXktMzAwXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktMzAwXHJcbiAgICAgICAgICAgICAgICBmb250LXJlZ3VsYXJcclxuICAgICAgICAgICAgICAgIG91dGxpbmUtbm9uZVxyXG4gICAgICAgICAgICAgICAgcm91bmRlZC1bOHB4XVxyXG4gICAgICAgICAgICAgICAgZmxleC0xXHJcbiAgICAgICAgICAgICAgJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2JnLWJsdWUtZGFyayBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC1bMXJlbV0gZ2FwLVsuNXJlbV0gcm91bmRlZC1bOHB4XSBjdXJzb3ItcG9pbnRlcicgPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHRleHQtWy44NzVyZW1dJz5DcmlhcjwvYT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQbHVzfSBjbGFzc05hbWU9J3ctWzFyZW1dJyBhbHQ9JycvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB0LVs0cmVtXSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IG1heC13LVs1MHJlbV0gZmxleC1jb2wgZmxleC0xJz5cclxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBqdXN0aWZ5LWJldHdlZW4gbWluLWgtWzIuNjhyZW1dIGl0ZW1zLXN0YXJ0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLVsuNXJlbV0nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQtYmx1ZSBmb250LWJvbGQgdGV4dC1bMCw3NXJlbV0nPlRhcmVmYXMgY3JpYWRhczwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktNDAwIHRleHQtZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB5LVswLjJyZW1dIHB4LVswLjhyZW1dIGZvbnQtYm9sZCB0ZXh0LVswLjc1cmVtXSc+e3Rhc2tzLmxlbmd0aH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC1bLjVyZW1dJz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXB1cnBsZSBmb250LWJvbGQgdGV4dC1bMCw3NXJlbV0nPkNvbmNsdcOtZGFzPC9wPlxyXG4gICAgICAgICAgICAgIHt0YXNrcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktNDAwIHRleHQtZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB5LVswLjJyZW1dIHB4LVswLjhyZW1dIGZvbnQtYm9sZCB0ZXh0LVswLjc1cmVtXSc+e2Ake3Rhc2tzLmZpbHRlciggaSA9PiBpLmNoZWNrID09PSB0cnVlKS5sZW5ndGggfSBkZSAke3Rhc2tzLmxlbmd0aH1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktNDAwIHRleHQtZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB5LVswLjJyZW1dIHB4LVswLjhyZW1dIGZvbnQtYm9sZCB0ZXh0LVswLjc1cmVtXSc+MDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgIHt0YXNrcy5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgIHt0YXNrcy5tYXAoaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRhc2sga2V5PXtpdGVtcy5pZH0gdGFzaz17aXRlbXMudGFza30gY2hlY2s9e2l0ZW1zLmNoZWNrfSBpZD17aXRlbXMuaWR9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGVUYXNrfSBvblN3aXRjaD17aGFuZFN3aXRjaFRhc2t9Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXggZmxleC1jb2wgdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS1bNHJlbV0gYm9yZGVyLXQtWzFweF0gYm9yZGVyLVsjMzMzMzMzXSBnYXAtWzFyZW1dJz5cclxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPScgdy1bMy41cmVtXScgc3JjPXtDbGlwYm9hcmR9IGFsdD0nTmVtIHVtYSB0YXJlZmEnIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZm9udC1ib2xkIHRleHQtZ3JheS0zMDAgdGV4dC1bMXJlbV0nPlZvY8OqIGFpbmRhIG7Do28gdGVtIHRhcmVmYXMgY2FkYXN0cmFkYXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZm9udC1yZWd1bGFyIHRleHQtZ3JheS0zMDAgdGV4dC1bMXJlbV0nPkNyaWUgdGFyZWZhcyBlIG9yZ2FuaXplIHNldXMgaXRlbnMgYSBmYXplcjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTG9nbyIsIlBsdXMiLCJDbGlwYm9hcmQiLCJJbWFnZSIsInVzZVN0YXRlIiwiQ2FyZFRhc2siLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ0YXNrcyIsInNldFRhc2tzIiwiaGFuZGxlRGVsZXRlVGFzayIsImlkIiwicHJldlRhc2tzIiwiZmlsdGVyIiwidGFzayIsImhhbmRTd2l0Y2hUYXNrIiwibWFwIiwiY2hlY2siLCJoYW5kbGVBZGRUYXNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsIm5ld0lkIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJ0eXBlIiwiYSIsImhlYWRlciIsInAiLCJpIiwiaXRlbXMiLCJvbkRlbGV0ZSIsIm9uU3dpdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});