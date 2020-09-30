"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./assets/Checkbox.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      checked = _ref.checked,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher--checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: name,
    onChange: onChange,
    checked: checked
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name
  }, " ", children));
};

Checkbox.propTypes = {
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  checked: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string])
};
var _default = Checkbox;
exports.default = _default;