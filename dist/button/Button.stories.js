"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Submit = exports.Active = exports.Disabled = exports.Small = exports.Large = exports.Secondary = exports.NavButton = exports.RoundedButton = exports.IconButton = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Buttons/Button',
  component: _Button.default,
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '2rem',
        background: '#f5f5f5'
      }
    }, story());
  }]
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args, "Button");
};

var IconTemplate = function IconTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "muncher"
  }));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Default Button'
};
var IconButton = IconTemplate.bind({});
exports.IconButton = IconButton;
IconButton.args = {
  title: 'Icon Button',
  size: 'small'
};
var RoundedButton = IconTemplate.bind({});
exports.RoundedButton = RoundedButton;
RoundedButton.args = _objectSpread(_objectSpread({}, IconButton.args), {}, {
  title: 'Rounded Button',
  variant: 'secondary',
  rounded: true
});
var NavButton = Template.bind({});
exports.NavButton = NavButton;
NavButton.args = {
  title: 'Nav Button',
  type: 'nav'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  title: 'Secondary Button',
  variant: 'secondary'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  title: 'Large Button'
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  title: 'Small Button'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  title: 'Disabled Button'
};
var Active = Template.bind({});
exports.Active = Active;
Active.args = {
  active: true,
  title: 'Active Button'
};
var Submit = Template.bind({});
exports.Submit = Submit;
Submit.args = {
  type: 'submit',
  title: 'Submit Button'
};