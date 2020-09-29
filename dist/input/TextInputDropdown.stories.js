"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextInputDropdown = _interopRequireDefault(require("./TextInputDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Input/Text Input Dropdown',
  component: _TextInputDropdown.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextInputDropdown.default, args, /*#__PURE__*/_react.default.createElement("p", null, "Drop down content"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  focus: true,
  inputPlaceHolder: "Start typing..",
  handleInputChange: function handleInputChange(input) {
    console.log(input);
  },
  showContent: false,
  setShowContent: function setShowContent() {}
};