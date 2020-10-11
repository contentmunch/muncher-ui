"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Input/Text area',
  component: _Textarea.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Textarea.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: "question",
  placeHolder: "Type your question"
};