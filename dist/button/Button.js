"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./assets/Button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var type = _ref.type,
      variant = _ref.variant,
      size = _ref.size,
      title = _ref.title,
      active = _ref.active,
      disabled = _ref.disabled,
      rounded = _ref.rounded,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["type", "variant", "size", "title", "active", "disabled", "rounded", "onClick", "onMouseDown", "children"]);

  var className = 'muncher-button' + (type && type === 'nav' ? ' muncher-button--nav' : '') + (variant ? ' muncher-button--' + variant : '') + (size ? ' muncher-button--' + size : '') + (active ? ' muncher-button--active' : '') + (rounded ? ' muncher-button--rounded' : '');
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: type ? type !== 'nav' ? type : 'button' : 'button',
    className: className,
    disabled: !!disabled,
    "data-title": title,
    onClick: onClick,
    onMouseDown: onMouseDown
  }, props), children);
};

Button.propTypes = {
  type: _propTypes.default.oneOf(['button', 'submit', 'reset', 'nav']),
  variant: _propTypes.default.oneOf(['primary', 'secondary']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  title: _propTypes.default.string,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string])
};
Button.defaultProps = {
  type: 'button',
  size: 'medium',
  variant: 'primary',
  onClick: undefined
};
var _default = Button;
exports.default = _default;