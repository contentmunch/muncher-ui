"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("./Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Input/Radio",
  component: _Radio.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Radio.default, args, " Item 1");
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'muncher-radio'
};