"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RangeSlider = _interopRequireDefault(require("./RangeSlider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Range Slider',
  component: _RangeSlider.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_RangeSlider.default, args, "This is a range slider");
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  from: 100,
  to: 1000,
  min: 10,
  max: 1100,
  sign: '$',
  onSliderChange: function onSliderChange(values) {
    console.log("lowerValue : " + values[0] + " upperValue : " + values[1]);
  }
};