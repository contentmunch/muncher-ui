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

var Pill = function Pill(_ref) {
  var pillCloseHandler = _ref.pillCloseHandler,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-pill"
  }, /*#__PURE__*/_react.default.createElement("div", {
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