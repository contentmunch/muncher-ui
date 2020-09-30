"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./assets/Spinner.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-spinner"
  });
};

var _default = Spinner;
exports.default = _default;