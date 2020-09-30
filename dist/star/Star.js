"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./assets/Star.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Star = function Star(_ref) {
  var rating = _ref.rating;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-star ",
    style: {
      '--r': rating
    }
  });
};

Star.propTypes = {
  rating: _propTypes.default.number.isRequired
};
var _default = Star;
exports.default = _default;