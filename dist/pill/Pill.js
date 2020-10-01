"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./assets/Pill.scss");

var _Icon = _interopRequireDefault(require("../icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Pill = function Pill(_ref) {
  var pillCloseHandler = _ref.pillCloseHandler,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["pillCloseHandler", "children"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "muncher-pill"
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "close",
    onClick: pillCloseHandler
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, " ", children));
};

Pill.propTypes = {
  pillCloseHandler: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string])
};
var _default = Pill;
exports.default = _default;