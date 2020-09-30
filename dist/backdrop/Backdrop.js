"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./assets/Backdrop.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Backdrop = function Backdrop(_ref) {
  var show = _ref.show,
      backdropClickHandler = _ref.backdropClickHandler;
  return show ? /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-backdrop",
    onClick: backdropClickHandler
  }) : null;
};

Backdrop.propTypes = {
  show: _propTypes.default.bool,
  backdropClickHandler: _propTypes.default.func
};
var _default = Backdrop;
exports.default = _default;