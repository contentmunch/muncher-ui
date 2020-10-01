"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pill = _interopRequireDefault(require("./Pill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Data Display/Pill',
  component: _Pill.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Pill.default, args, " Item 1");
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  pillCloseHandler: function pillCloseHandler() {}
};