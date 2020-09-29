"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Input/Text Input',
  component: _TextInput.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextInput.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: "query",
  placeHolder: "Type your query"
};