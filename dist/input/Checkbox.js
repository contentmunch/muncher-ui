"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./assets/Input.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      required = _ref.required,
      onChange = _ref.onChange,
      checked = _ref.checked,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["name", "value", "required", "onChange", "checked", "label"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-input--div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "checkbox",
    name: name,
    value: value,
    onChange: onChange,
    checked: checked,
    required: required
  }, props)), label ? /*#__PURE__*/_react.default.createElement(_Label.default, {
    label: label,
    required: required,
    name: name
  }) : ''));
};

Checkbox.propTypes = {
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  value: _propTypes.default.any,
  checked: _propTypes.default.bool,
  label: _propTypes.default.string
};
var _default = Checkbox;
exports.default = _default;