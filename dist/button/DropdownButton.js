"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownButton;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./assets/DropdownButton.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropdownButton(_ref) {
  var variant = _ref.variant,
      size = _ref.size,
      title = _ref.title,
      active = _ref.active,
      disabled = _ref.disabled,
      element = _ref.element,
      rounded = _ref.rounded,
      drop = _ref.drop,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      showContent = _ref.showContent,
      setShowContent = _ref.setShowContent,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["variant", "size", "title", "active", "disabled", "element", "rounded", "drop", "onClick", "onClose", "showContent", "setShowContent", "children"]);

  var ref = (0, _react.useRef)(null);

  var buttonOnClick = function buttonOnClick(e) {
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }

    setShowContent(true);
  };

  var onContentClose = (0, _react.useCallback)(function () {
    setShowContent(false);

    if (onClose) {
      onClose();
    }
  }, [onClose, setShowContent]);
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

  var dropdownClass = function dropdownClass() {
    switch (drop) {
      case "left":
        return "muncher-dropdown--content drop-left";

      case "nav":
        return "muncher-dropdown--nav";

      default:
        return "muncher-dropdown--content";
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-dropdown",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    type: 'nav' === drop ? 'nav' : 'button',
    onMouseDown: buttonOnClick,
    title: title,
    disabled: disabled,
    rounded: rounded,
    active: active,
    variant: variant,
    size: size
  }, props), element), showContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: dropdownClass()
  }, children) : "");
}

DropdownButton.propTypes = {
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  title: _propTypes.default.string,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  element: _propTypes.default.element.isRequired,
  drop: _propTypes.default.oneOf(['left', 'right', 'nav']),
  onClick: _propTypes.default.func,
  onClose: _propTypes.default.func,
  showContent: _propTypes.default.bool.isRequired,
  setShowContent: _propTypes.default.func.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string])])
};
DropdownButton.defaultProps = {
  size: 'medium',
  variant: 'primary',
  onClick: undefined
};