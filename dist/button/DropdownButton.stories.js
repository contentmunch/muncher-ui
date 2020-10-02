"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Active = exports.Disabled = exports.Small = exports.Large = exports.Secondary = exports.NavDropDown = exports.WithText = exports.RoundedDropdown = exports.IconDropdown = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropdownButton = _interopRequireDefault(require("./DropdownButton"));

var _Icon = _interopRequireDefault(require("../icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Buttons/Dropdown Button',
  component: _DropdownButton.default,
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
  return /*#__PURE__*/_react.default.createElement(_DropdownButton.default, args, /*#__PURE__*/_react.default.createElement("p", null, "Drop down content"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Default Dropdown',
  element: /*#__PURE__*/_react.default.createElement("p", null, "drop down"),
  showContent: false,
  setShowContent: function setShowContent() {}
};
var IconDropdown = Template.bind({});
exports.IconDropdown = IconDropdown;
IconDropdown.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 'small',
  title: 'Icon dropdown text',
  element: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "muncher"
  })
});
var RoundedDropdown = Template.bind({});
exports.RoundedDropdown = RoundedDropdown;
RoundedDropdown.args = _objectSpread(_objectSpread({}, IconDropdown.args), {}, {
  title: 'Rounded dropdown',
  size: 'large',
  rounded: true,
  variant: 'secondary',
  element: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "muncher",
    size: "large",
    weight: 1
  })
});
var WithText = Template.bind({});
exports.WithText = WithText;
WithText.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  title: 'DropDown with text',
  element: /*#__PURE__*/_react.default.createElement("p", null, "Text drop down")
});
var NavDropDown = Template.bind({});
exports.NavDropDown = NavDropDown;
NavDropDown.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  title: 'Nav drop down',
  drop: 'nav',
  element: /*#__PURE__*/_react.default.createElement("h4", null, "Nav Item")
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