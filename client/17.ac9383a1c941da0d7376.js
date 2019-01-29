(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./components/password_reset_form/password_reset_form.jsx":
/*!****************************************************************!*\
  !*** ./components/password_reset_form/password_reset_form.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/* harmony import */ var actions_user_actions_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/user_actions.jsx */ \"./actions/user_actions.jsx\");\n/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants.jsx */ \"./utils/constants.jsx\");\n/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils.jsx */ \"./utils/utils.jsx\");\n\n\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.\n// See LICENSE.txt for license information.\n\n\n\n\n\n\n\n\nvar PasswordResetForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PasswordResetForm, _React$Component);\n\n  function PasswordResetForm(props) {\n    var _this;\n\n    _classCallCheck(this, PasswordResetForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordResetForm).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handlePasswordReset\", function (e) {\n      e.preventDefault();\n      var password = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_this.refs.password).value;\n\n      if (!password || password.length < utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"].MIN_PASSWORD_LENGTH) {\n        _this.setState({\n          error: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__[\"FormattedMessage\"], {\n            id: \"password_form.error\",\n            defaultMessage: \"Please enter at least {chars} characters.\",\n            values: {\n              chars: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"].MIN_PASSWORD_LENGTH\n            }\n          })\n        });\n\n        return;\n      }\n\n      _this.setState({\n        error: null\n      });\n\n      Object(actions_user_actions_jsx__WEBPACK_IMPORTED_MODULE_7__[\"resetPassword\"])(new URLSearchParams(_this.props.location.search).get('token'), password, function () {\n        _this.setState({\n          error: null\n        });\n      }, function (err) {\n        _this.setState({\n          error: err.message\n        });\n      });\n    });\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(PasswordResetForm, [{\n    key: \"render\",\n    value: function render() {\n      var error = null;\n\n      if (this.state.error) {\n        error = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n          className: \"form-group has-error\"\n        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"label\", {\n          className: \"control-label\"\n        }, this.state.error));\n      }\n\n      var formClass = 'form-group';\n\n      if (error) {\n        formClass += ' has-error';\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        className: \"col-sm-12\"\n      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        className: \"signup-team__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__[\"FormattedMessage\"], {\n        id: \"password_form.title\",\n        defaultMessage: \"Password Reset\"\n      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"form\", {\n        onSubmit: this.handlePasswordReset\n      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__[\"FormattedMessage\"], {\n        id: \"password_form.enter\",\n        defaultMessage: \"Enter a new password for your {siteName} account.\",\n        values: {\n          siteName: this.props.siteName\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        className: formClass\n      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n        type: \"password\",\n        className: \"form-control\",\n        name: \"password\",\n        ref: \"password\",\n        placeholder: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__[\"localizeMessage\"]('password_form.pwd', 'Password'),\n        spellCheck: \"false\"\n      })), error, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"button\", {\n        type: \"submit\",\n        className: \"btn btn-primary\"\n      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__[\"FormattedMessage\"], {\n        id: \"password_form.change\",\n        defaultMessage: \"Change my password\"\n      })))));\n    }\n  }]);\n\n  return PasswordResetForm;\n}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);\n\nPasswordResetForm.propTypes = {\n  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,\n  siteName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PasswordResetForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bhc3N3b3JkX3Jlc2V0X2Zvcm0vcGFzc3dvcmRfcmVzZXRfZm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bhc3N3b3JkX3Jlc2V0X2Zvcm0vcGFzc3dvcmRfcmVzZXRfZm9ybS5qc3g/OWY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCBNYXR0ZXJtb3N0LCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTZWUgTElDRU5TRS50eHQgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQge3Jlc2V0UGFzc3dvcmR9IGZyb20gJ2FjdGlvbnMvdXNlcl9hY3Rpb25zLmpzeCc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ3V0aWxzL2NvbnN0YW50cy5qc3gnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAndXRpbHMvdXRpbHMuanN4JztcblxuY2xhc3MgUGFzc3dvcmRSZXNldEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaGFuZGxlUGFzc3dvcmRSZXNldCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWU7XG4gICAgICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgQ29uc3RhbnRzLk1JTl9QQVNTV09SRF9MRU5HVEgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFzc3dvcmRfZm9ybS5lcnJvcidcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdQbGVhc2UgZW50ZXIgYXQgbGVhc3Qge2NoYXJzfSBjaGFyYWN0ZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJzOiBDb25zdGFudHMuTUlOX1BBU1NXT1JEX0xFTkdUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzZXRQYXNzd29yZChcbiAgICAgICAgICAgIChuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKSkuZ2V0KCd0b2tlbicpLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGVyci5tZXNzYWdlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAgaGFzLWVycm9yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY29udHJvbC1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybUNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGZvcm1DbGFzcyArPSAnIGhhcy1lcnJvcic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZ251cC10ZWFtX19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXNzd29yZF9mb3JtLnRpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdQYXNzd29yZCBSZXNldCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVBhc3N3b3JkUmVzZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkX2Zvcm0uZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdFbnRlciBhIG5ldyBwYXNzd29yZCBmb3IgeW91ciB7c2l0ZU5hbWV9IGFjY291bnQuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVOYW1lOiB0aGlzLnByb3BzLnNpdGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1V0aWxzLmxvY2FsaXplTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXNzd29yZF9mb3JtLnB3ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkX2Zvcm0uY2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nQ2hhbmdlIG15IHBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QYXNzd29yZFJlc2V0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzaXRlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkUmVzZXRGb3JtO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFyQ0E7QUFIQTtBQUlBO0FBQ0E7OztBQW9DQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVEE7QUFjQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFTQTs7OztBQXpHQTtBQUNBO0FBMkdBO0FBQ0E7QUFDQTtBQUZBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/password_reset_form/password_reset_form.jsx\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./components/password_reset_form/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./components/password_reset_form/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ \"./node_modules/mattermost-redux/selectors/entities/general.js\");\n/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _password_reset_form_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password_reset_form.jsx */ \"./components/password_reset_form/password_reset_form.jsx\");\n// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.\n// See LICENSE.txt for license information.\n\n\n\n\nfunction mapStateToProps(state) {\n  var config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__[\"getConfig\"])(state);\n  var siteName = config.SiteName;\n  return {\n    siteName: siteName\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(_password_reset_form_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9jb21wb25lbnRzL3Bhc3N3b3JkX3Jlc2V0X2Zvcm0vaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bhc3N3b3JkX3Jlc2V0X2Zvcm0vaW5kZXguanM/MDhlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCBNYXR0ZXJtb3N0LCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTZWUgTElDRU5TRS50eHQgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRDb25maWd9IGZyb20gJ21hdHRlcm1vc3QtcmVkdXgvc2VsZWN0b3JzL2VudGl0aWVzL2dlbmVyYWwnO1xuXG5pbXBvcnQgUGFzc3dvcmRSZXNldEZvcm0gZnJvbSAnLi9wYXNzd29yZF9yZXNldF9mb3JtLmpzeCc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZyhzdGF0ZSk7XG4gICAgY29uc3Qgc2l0ZU5hbWUgPSBjb25maWcuU2l0ZU5hbWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaXRlTmFtZSxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFzc3dvcmRSZXNldEZvcm0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./components/password_reset_form/index.js\n");

/***/ })

}]);