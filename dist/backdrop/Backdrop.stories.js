"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Backdrop = _interopRequireDefault(require("./Backdrop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Feedback/Backdrop",
  component: _Backdrop.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Backdrop.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  show: true,
  backdropClickHandler: function backdropClickHandler() {}
};