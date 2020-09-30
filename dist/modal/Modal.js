"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./assets/Modal.scss");

var _Backdrop = _interopRequireDefault(require("../backdrop/Backdrop"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Modal = function Modal(_ref) {
  var show = _ref.show,
      modalCloseHandler = _ref.modalCloseHandler,
      children = _ref.children;
  var escFunction = (0, _react.useCallback)(function (event) {
    if (event.keyCode === 27) {
      modalCloseHandler();
    }
  }, [modalCloseHandler]);
  (0, _react.useEffect)(function () {
    document.addEventListener("keydown", escFunction, false);
    return function () {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Backdrop.default, {
    show: show,
    close: modalCloseHandler
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-modal",
    style: {
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }
  }, children));
};

Modal.propTypes = {
  show: _propTypes.default.bool,
  modalCloseHandler: _propTypes.default.func,
  children: _propTypes.default.any
};
var _default = Modal;
exports.default = _default;