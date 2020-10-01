"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Large = exports.Medium = exports.Dark = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Visual/Icons',
  component: _Icon.default,
  argTypes: {
    color: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'muncher',
  size: 'small'
};
var Dark = Template.bind({});
exports.Dark = Dark;
Dark.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 'medium',
  weight: 2
});
var Medium = Template.bind({});
exports.Medium = Medium;
Medium.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 'medium'
});
var Large = Template.bind({});
exports.Large = Large;
Large.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 'large'
});