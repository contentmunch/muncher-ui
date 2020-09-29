"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MuncherIcon;

var _react = _interopRequireDefault(require("react"));

require("./assets/MuncherIcon.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MuncherSvg = _interopRequireDefault(require("./assets/MuncherSvg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MuncherIcon(_ref) {
  var variant = _ref.variant,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["variant", "onClick"]);

  var className = variant ? 'span-muncher--icon muncher-icon--' + variant : 'span-muncher--icon';
  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: className,
    "data-title": "Muncher Home",
    onClick: onClick
  }, props), /*#__PURE__*/_react.default.createElement(_MuncherSvg.default, null));
}

MuncherIcon.propTypes = {
  variant: _propTypes.default.oneOf(['small', 'medium', 'large']),
  onClick: _propTypes.default.func
};
MuncherIcon.defaultProps = {
  variant: 'medium',
  onClick: undefined
};