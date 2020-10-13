import React from 'react';
import PropTypes from "prop-types";
import './assets/DropdownNavButton.scss';
import Button from "./Button";

export default function DropdownNavButton(
    {
        variant, size, title, active, disabled, element, rounded,
        children, ...props
    }) {

    return (
        <div className="muncher-dropdown-nav">
            <Button type="nav" title={title} disabled={disabled} rounded={rounded}
                    active={active} variant={variant} size={size} {...props}>
                {element}
            </Button>
            <div className="muncher-dropdown-nav--content">
                {children}
            </div>
        </div>
    );
}
DropdownNavButton.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    element: PropTypes.element.isRequired,
    children: PropTypes.any
}
DropdownNavButton.defaultProps = {
    size: 'medium',
};