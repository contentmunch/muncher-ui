"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Feedback/Modal',
  component: _Modal.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, args, /*#__PURE__*/_react.default.createElement("h2", null, "Modal title"), /*#__PURE__*/_react.default.createElement("section", null, "Modal Mody"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  show: true,
  modalCloseHandler: function modalCloseHandler() {}
};