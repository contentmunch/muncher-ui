"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = exports.Large = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MuncherIcon = _interopRequireDefault(require("./MuncherIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Icons/Muncher Icon',
  component: _MuncherIcon.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_MuncherIcon.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  variant: "large"
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  variant: "small"
};