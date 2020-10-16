"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Week = exports.Url = exports.Time = exports.Tel = exports.Search = exports.Range = exports.Password = exports.Number = exports.Month = exports.Email = exports.DateTime = exports.Date = exports.Color = exports.TextWithIcon = exports.TextWithLabel = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Input/Input',
  component: _Input.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Input.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: "query",
  type: "text",
  placeHolder: "Type your query"
};
var TextWithLabel = Template.bind({});
exports.TextWithLabel = TextWithLabel;
TextWithLabel.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  label: 'Search',
  required: true
});
var TextWithIcon = Template.bind({});
exports.TextWithIcon = TextWithIcon;
TextWithIcon.args = _objectSpread(_objectSpread({}, TextWithLabel.args), {}, {
  withIcon: true
});
var Color = Template.bind({});
exports.Color = Color;
Color.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'color'
});
var Date = Template.bind({});
exports.Date = Date;
Date.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'date'
});
var DateTime = Template.bind({});
exports.DateTime = DateTime;
DateTime.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'datetime-local'
});
var Email = Template.bind({});
exports.Email = Email;
Email.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'email',
  placeHolder: "Email",
  icon: "mail"
});
var Month = Template.bind({});
exports.Month = Month;
Month.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'month'
});
var Number = Template.bind({});
exports.Number = Number;
Number.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'number',
  placeHolder: "Phone number",
  icon: "phone"
});
var Password = Template.bind({});
exports.Password = Password;
Password.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'password',
  placeHolder: "Type password"
});
var Range = Template.bind({});
exports.Range = Range;
Range.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'range'
});
var Search = Template.bind({});
exports.Search = Search;
Search.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'search'
});
var Tel = Template.bind({});
exports.Tel = Tel;
Tel.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'tel'
});
var Time = Template.bind({});
exports.Time = Time;
Time.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'time'
});
var Url = Template.bind({});
exports.Url = Url;
Url.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'url',
  placeHolder: 'type url'
});
var Week = Template.bind({});
exports.Week = Week;
Week.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  type: 'week'
});