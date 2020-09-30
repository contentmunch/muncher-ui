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

function DropdownButton(_ref) {
  var variant = _ref.variant,
      size = _ref.size,
      title = _ref.title,
      active = _ref.active,
      disabled = _ref.disabled,
      element = _ref.element,
      drop = _ref.drop,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      showContent = _ref.showContent,
      setShowContent = _ref.setShowContent,
      children = _ref.children;
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
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: 'nav' === drop ? 'nav' : 'button',
    onMouseDown: buttonOnClick,
    title: title,
    disabled: disabled,
    active: active,
    variant: variant,
    size: size
  }, element), showContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: dropdownClass()
  }, children) : "");
}

DropdownButton.propTypes = {
  variant: _propTypes.default.oneOf(['primary', 'secondary']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  title: _propTypes.default.string,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
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