"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _react = _interopRequireDefault(require("react"));

require("./assets/Input.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input(_ref) {
  var name = _ref.name,
      label = _ref.label,
      required = _ref.required,
      readOnly = _ref.readOnly,
      type = _ref.type,
      focus = _ref.focus,
      placeHolder = _ref.placeHolder,
      onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["name", "label", "required", "readOnly", "type", "focus", "placeHolder", "onChange", "value"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-input--div"
  }, label ? /*#__PURE__*/_react.default.createElement(_Label.default, {
    label: label,
    required: required,
    name: name
  }) : '', /*#__PURE__*/_react.default.createElement("input", _extends({
    className: "muncher-input",
    name: name,
    autoFocus: focus,
    value: value,
    type: type ? type : 'text',
    autoComplete: "off",
    placeholder: placeHolder,
    onChange: onChange
  }, props)));
}

Input.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week']),
  focus: _propTypes.default.bool,
  placeHolder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  value: _propTypes.default.any
};
Input.defaultProps = {
  type: 'text'
};