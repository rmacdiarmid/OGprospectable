webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default, ALL_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_ITEMS_QUERY\", function() { return ALL_ITEMS_QUERY; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.browser.umd.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Item */ \"./components/Item.js\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pagination */ \"./components/Pagination.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/Items.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"\\n    query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = \", \") {\\n        items(first: $first, skip: $skip, orderBy: id_DESC) {\\n            id\\n            title\\n            price\\n            description\\n            image\\n            largeImage\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_12__[\"perPage\"]);\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Items__Center\",\n  componentId: \"lrb38d-0\"\n})([\"text-align:center;\"]);\n_c = Center;\nvar ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Items__ItemsList\",\n  componentId: \"lrb38d-1\"\n})([\"display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:\", \";margin:0 auto;\"], function (props) {\n  return props.theme.maxWidth;\n});\n_c2 = ItemsList;\n\nvar Items = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Items, _Component);\n\n  var _super = _createSuper(Items);\n\n  function Items() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Items);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Items, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return __jsx(Center, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }\n      }, __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        page: this.props.page,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }\n      }), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__[\"Query\"], {\n        query: ALL_ITEMS_QUERY,\n        variables: {\n          skip: 2,\n          first: 4\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }\n      }, function (_ref) {\n        var data = _ref.data,\n            error = _ref.error,\n            loading = _ref.loading;\n        if (loading) return __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 45\n          }\n        }, \"Loading...\");\n        if (error) return __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 43\n          }\n        }, \"Error: \", error.message);\n        return __jsx(ItemsList, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 29\n          }\n        }, data.items.map(function (item) {\n          return __jsx(_Item__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            item: item,\n            key: item.id,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 64\n            }\n          });\n        }));\n      }), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        page: this.props.page,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }\n      }));\n    }\n  }]);\n\n  return Items;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Items);\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Center\");\n$RefreshReg$(_c2, \"ItemsList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1zLmpzP2ZhOGIiXSwibmFtZXMiOlsiQUxMX0lURU1TX1FVRVJZIiwiZ3FsIiwicGVyUGFnZSIsIkNlbnRlciIsInN0eWxlZCIsImRpdiIsIkl0ZW1zTGlzdCIsInByb3BzIiwidGhlbWUiLCJtYXhXaWR0aCIsIkl0ZW1zIiwicGFnZSIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLGtEQUFILG9CQUNxQ0MsZ0RBRHJDLENBQXJCO0FBYUEsSUFBTUMsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFaO0tBQU1GLE07QUFJTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0ZBSUEsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFoQjtBQUFBLENBSkwsQ0FBZjtNQUFNSCxTOztJQVFBSSxLOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQUE7O0FBQ0wsYUFDSSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0RBQUQ7QUFBWSxZQUFJLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSSxNQUFDLGtEQUFEO0FBQ0UsYUFBSyxFQUFFWCxlQURUO0FBRUUsaUJBQVMsRUFBRTtBQUNUWSxjQUFJLEVBQUUsQ0FERztBQUVUQyxlQUFLLEVBQUU7QUFGRSxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPSyxnQkFBOEI7QUFBQSxZQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsWUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLFlBQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzQixZQUFJQSxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFQO0FBQ2IsWUFBSUQsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBV0EsS0FBSyxDQUFDRSxPQUFqQixDQUFQO0FBQ1gsZUFDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFZSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSxpQkFBSSxNQUFDLDhDQUFEO0FBQU0sZ0JBQUksRUFBRUEsSUFBWjtBQUFrQixlQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFKO0FBQUEsU0FBbkIsQ0FBWixDQURKO0FBR0gsT0FiTCxDQUZKLEVBaUJJLE1BQUMsb0RBQUQ7QUFBWSxZQUFJLEVBQUUsS0FBS2QsS0FBTCxDQUFXSSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBakJKLENBREo7QUFxQkg7Ozs7RUF2QmVXLCtDOztBQXlCTFosb0VBQWY7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0ICBncWwgIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgQUxMX0lURU1TX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IEFMTF9JVEVNU19RVUVSWSgkc2tpcDogSW50ID0gMCwgJGZpcnN0OiBJbnQgPSAke3BlclBhZ2V9KSB7XG4gICAgICAgIGl0ZW1zKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwLCBvcmRlckJ5OiBpZF9ERVNDKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IENlbnRlciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEl0ZW1zTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogNjBweDtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1heFdpZHRofTtcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5jbGFzcyBJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBwYWdlPXt0aGlzLnByb3BzLnBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPFF1ZXJ5IFxuICAgICAgICAgICAgICAgICAgcXVlcnk9e0FMTF9JVEVNU19RVUVSWX0gXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZXM9e3sgXG4gICAgICAgICAgICAgICAgICAgIHNraXA6IDIsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0OiA0LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtc0xpc3Q+e2RhdGEuaXRlbXMubWFwKGl0ZW0gPT4gPEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPil9PC9JdGVtc0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA8L1F1ZXJ5PlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHBhZ2U9e3RoaXMucHJvcHMucGFnZX0gLz5cbiAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEl0ZW1zO1xuZXhwb3J0IHsgQUxMX0lURU1TX1FVRVJZIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Items.js\n");

/***/ })

})