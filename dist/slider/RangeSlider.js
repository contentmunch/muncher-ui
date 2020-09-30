"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RangeSlider;

var _react = _interopRequireDefault(require("react"));

require("rc-slider/assets/index.css");

var _rcSlider = _interopRequireDefault(require("rc-slider"));

require("./RangeSlider.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RangeSlider(_ref) {
  var from = _ref.from,
      to = _ref.to,
      min = _ref.min,
      max = _ref.max,
      sign = _ref.sign,
      sliderChangeHandler = _ref.onSliderChange,
      children = _ref.children;
  var createSliderWithTooltip = _rcSlider.default.createSliderWithTooltip;
  var Range = createSliderWithTooltip(_rcSlider.default.Range);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-slider"
  }, /*#__PURE__*/_react.default.createElement(Range, {
    min: min,
    max: max,
    defaultValue: [from, to],
    tipFormatter: function tipFormatter(value) {
      return "".concat(sign ? sign + value : '$' + value);
    },
    onAfterChange: sliderChangeHandler
  }), children);
}

;
RangeSlider.propTypes = {
  from: _propTypes.default.number.isRequired,
  to: _propTypes.default.number.isRequired,
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  sign: _propTypes.default.string,
  onSliderChange: _propTypes.default.func,
  children: _propTypes.default.any
};