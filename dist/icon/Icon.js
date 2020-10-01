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

function Icon(_ref) {
  var color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      weight = _ref.weight;
  var iconClass = size ? 'muncher-icon muncher-icon--' + size : 'muncher-icon muncher-icon--small';
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: iconClass,
    stroke: color ? color : 'currentColor',
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: weight ? weight : 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0, _IconDrawings.iconDrawings)(name));
}

Icon.propTypes = {
  color: _propTypes.default.string,
  weight: _propTypes.default.oneOf([1, 2, 3]),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  name: _propTypes.default.oneOf(['align-center', 'align-justify', 'align-left', 'align-right', 'arrow-left', 'arrow-right', 'calendar', 'close', 'code', 'edit', 'hamburger', 'image', 'link', 'loading', 'minus', 'muncher', 'mute', 'ordered-list', 'phone', 'plus', 'redo', 'search', 'settings', 'smile', 'toggle-left', 'toggle-right', 'type', 'undo', 'unlink', 'unordered-list', 'youtube', 'volume']).isRequired
};