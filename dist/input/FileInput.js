"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FileInput;

var _react = _interopRequireWildcard(require("react"));

require("./assets/FileInput.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FileInput(_ref) {
  var name = _ref.name,
      label = _ref.label,
      variant = _ref.variant,
      size = _ref.size,
      required = _ref.required,
      active = _ref.active,
      onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["name", "label", "variant", "size", "required", "active", "onChange", "value"]);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      fileName = _useState2[0],
      setFileName = _useState2[1];

  var labelClass = 'muncher-button' + (variant ? ' muncher-button--' + variant : '') + (size ? ' muncher-button--' + size : '') + (active ? ' muncher-button--active' : '');

  var handleOnChange = function handleOnChange(event) {
    console.log(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-file-input--div"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: labelClass
  }, /*#__PURE__*/_react.default.createElement(_index.Icon, {
    name: "image"
  }), "\xA0", label, required ? /*#__PURE__*/_react.default.createElement("span", {
    className: "required"
  }, "\xA0*") : ''), /*#__PURE__*/_react.default.createElement("span", {
    className: "span-file-name"
  }, fileName), /*#__PURE__*/_react.default.createElement("input", _extends({
    id: name,
    type: "file",
    className: "muncher-file-input",
    required: required,
    onChange: handleOnChange
  }, props)));
}

;
FileInput.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  required: _propTypes.default.bool,
  active: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  value: _propTypes.default.any
};
FileInput.defaultProps = {
  size: "large",
  variant: "secondary"
};