"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconDrawings = require("./IconDrawings");

require("./assets/Icon.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Icon(_ref) {
  var color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      weight = _ref.weight,
      props = _objectWithoutProperties(_ref, ["color", "name", "size", "weight"]);

  var iconClass = size ? 'muncher-icon muncher-icon--' + size : 'muncher-icon muncher-icon--small';
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    className: iconClass,
    stroke: color ? color : 'currentColor',
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: weight ? weight : 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _IconDrawings.iconDrawings[name]);
}

Icon.propTypes = {
  color: _propTypes.default.string,
  weight: _propTypes.default.oneOf([1, 2, 3]),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  name: _propTypes.default.oneOf(['align-center', 'align-justify', 'align-left', 'align-right', 'arrow-left', 'arrow-right', 'calendar', 'close', 'code', 'edit', 'hamburger', 'image', 'link', 'loading', 'minus', 'muncher', 'mute', 'ordered-list', 'phone', 'plus', 'redo', 'search', 'settings', 'smile', 'toggle-left', 'toggle-right', 'type', 'undo', 'unlink', 'unordered-list', 'youtube', 'volume', 'fast-forward', 'pause', 'play', 'power', 'repeat', 'rewind', 'shuffle', 'skip-back', 'skip-forward', 'alert', 'arrow-down', 'arrow-up', 'check', 'help', 'info', 'archive', 'external-link', 'filter', 'github', 'grid', 'log-in', 'log-out', 'more', 'share', 'thumbs-down', 'thumbs-up', 'trash', 'user', 'lock', 'unlock', 'rss', 'save', 'upload']).isRequired
};
Icon.defaultProps = {
  name: "muncher",
  weight: 2,
  size: "small"
};