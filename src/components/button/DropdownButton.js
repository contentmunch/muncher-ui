import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import './assets/DropdownButton.scss';
import Button from "./Button";

export default function DropdownButton(
    {
        variant, size, title, active, disabled, element, rounded, drop, onClick, onClose,
        showContent, setShowContent, children, ...props
    }) {

    const ref = useRef(null);
    const buttonOnClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
        setShowContent(true);
    }

    const onContentClose = useCallback(() => {
        setShowContent(false);
        if (onClose) {
            onClose();
        }
    }, [onClose, setShowContent]);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            onContentClose();
        }
    }, [onContentClose]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref && ref !== null) {
                const cur = ref.current;
                if (cur && !cur.contains(event.target)) {
                    onContentClose();
                }
            }
        }
        document.addEventListener("keydown", escFunction, false);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction, onContentClose]);
    const dropdownClass = () => {
        switch (drop) {
            case "left":
                return "muncher-dropdown--content drop-left";
            case "nav":
                return "muncher-dropdown--nav"
            default:
                return "muncher-dropdown--content";
        }
    };
    return (
        <div className="muncher-dropdown" ref={ref}>
            <Button type={'nav' === drop ? 'nav' : 'button'} onMouseDown={buttonOnClick} title={title}
                    disabled={disabled} rounded={rounded}
                    active={active} variant={variant} size={size} {...props}
            >{element}</Button>
            {
                showContent ? <div className={dropdownClass()}>
                    {children}
                </div> : ""
            }

        </div>
    );
}
DropdownButton.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary','tertiary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    element: PropTypes.element.isRequired,
    drop: PropTypes.oneOf(['left', 'right', 'nav']),
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    showContent: PropTypes.bool.isRequired,
    setShowContent: PropTypes.func.isRequired,
    children: PropTypes.any
}
DropdownButton.defaultProps = {
    size: 'medium',
};