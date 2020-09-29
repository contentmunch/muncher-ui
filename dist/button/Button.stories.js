"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Submit = exports.Active = exports.Disabled = exports.Small = exports.Large = exports.Secondary = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Default Button'
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