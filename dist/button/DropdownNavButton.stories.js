"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropdownNavButton = _interopRequireDefault(require("./DropdownNavButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Buttons/Dropdown Nav Button',
  component: _DropdownNavButton.default,
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
  return /*#__PURE__*/_react.default.createElement(_DropdownNavButton.default, args, /*#__PURE__*/_react.default.createElement("p", null, "Drop down content"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Default Nav Dropdown',
  element: /*#__PURE__*/_react.default.createElement("p", null, "drop down ", /*#__PURE__*/_react.default.createElement("span", {
    className: "small"
  }, "\u25BC"))
};