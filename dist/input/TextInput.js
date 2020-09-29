"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextInput;

var _react = _interopRequireDefault(require("react"));

require("./assets/TextInput.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextInput(_ref) {
  var name = _ref.name,
      placeHolder = _ref.placeHolder,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react.default.createElement("input", {
    className: "muncher-text-input",
    name: name,
    type: "text",
    autoComplete: "off",
    placeholder: placeHolder,
    onChange: onChange
  });
}

TextInput.propTypes = {
  name: _propTypes.default.string,
  placeHolder: _propTypes.default.string,
  onChange: _propTypes.default.func
};