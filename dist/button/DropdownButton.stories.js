"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Active = exports.Disabled = exports.Small = exports.Large = exports.Secondary = exports.WithText = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropdownButton = _interopRequireDefault(require("./DropdownButton"));

var _MuncherSvg = _interopRequireDefault(require("../icon/assets/MuncherSvg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Buttons/Dropdown Button',
  component: _DropdownButton.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_DropdownButton.default, args, /*#__PURE__*/_react.default.createElement("p", null, "Drop down content"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Default Dropdown',
  icon: /*#__PURE__*/_react.default.createElement(_MuncherSvg.default, null),
  showContent: false,
  setShowContent: function setShowContent() {}
};
var WithText = Template.bind({});
exports.WithText = WithText;
WithText.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  title: 'DropDown with text',
  icon: /*#__PURE__*/_react.default.createElement("p", null, "Text drop down")
});
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  title: 'Secondary DropDown',
  variant: 'secondary'
});
var Large = Template.bind({});
exports.Large = Large;
Large.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 'large',
  title: 'Large DropDown'
});
var Small = Template.bind({});
exports.Small = Small;
Small.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 'small',
  title: 'Small DropDown'
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  disabled: true,
  title: 'Disabled DropDown'
});
var Active = Template.bind({});
exports.Active = Active;
Active.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  active: true,
  title: 'Active DropDown'
});