"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'Utils/DataTitle'
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: "#"
  }, args), "Hover here");
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  'data-title': 'This will show up on hover'
};