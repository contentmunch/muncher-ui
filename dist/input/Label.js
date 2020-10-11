"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(_ref) {
  var label = _ref.label,
      name = _ref.name,
      required = _ref.required;
  return /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name
  }, label, required ? /*#__PURE__*/_react.default.createElement("span", {
    className: "required"
  }, "*") : '');
}

Label.propTypes = {
  name: _propTypes.default.string.isRequired,
  required: _propTypes.default.bool,
  label: _propTypes.default.string
};
Label.defaultProps = {
  required: false
};