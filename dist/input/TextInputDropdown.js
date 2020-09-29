"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextInputDropdown;

var _react = _interopRequireWildcard(require("react"));

require("./assets/TextInputDropdown.scss");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TextInputDropdown(_ref) {
  var focus = _ref.focus,
      inputPlaceHolder = _ref.inputPlaceHolder,
      handleInputChange = _ref.handleInputChange,
      showContent = _ref.showContent,
      setShowContent = _ref.setShowContent,
      children = _ref.children;
  var ref = (0, _react.useRef)(null);

  var handleQueryChange = function handleQueryChange(e) {
    setShowContent(true);
    handleInputChange(e.target.value);
  };

  var onContentClose = (0, _react.useCallback)(function () {
    setShowContent(false);
  }, [setShowContent]);
  var escFunction = (0, _react.useCallback)(function (event) {
    if (event.keyCode === 27) {
      onContentClose();
    }
  }, [onContentClose]);
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref && ref !== null) {
        var cur = ref.current;

        if (cur && !cur.contains(event.target)) {
          onContentClose();
        }
      }
    };

    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, onContentClose]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-input-drop-down",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    focus: focus,
    placeHolder: inputPlaceHolder,
    name: "query",
    onChange: function onChange(e) {
      return handleQueryChange(e);
    }
  }), showContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-input-drop-down--content"
  }, children) : "");
}

TextInputDropdown.propTypes = {
  focus: _propTypes.default.bool,
  inputPlaceHolder: _propTypes.default.string,
  handleInputChange: _propTypes.default.func.isRequired,
  showContent: _propTypes.default.bool.isRequired,
  setShowContent: _propTypes.default.func.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string])])
};