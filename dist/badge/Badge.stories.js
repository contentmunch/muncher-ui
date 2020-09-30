"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("./Badge"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Badge',
  component: _Badge.default,
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '2rem',
        maxWidth: '7rem'
      }
    }, story());
  }]
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Badge.default, args, "Muncher\xA0\xA0", /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "muncher"
  }));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {};