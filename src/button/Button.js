import React from 'react';
import PropTypes from 'prop-types';
import './assets/Button.scss';

const Button = ({type, variant, size, title, active, disabled, rounded, onClick, onMouseDown, children, ...props}) => {
    const className = 'muncher-button' +
        (type && type === 'nav' ? ' muncher-button--nav' : '') +
        (variant ? ' muncher-button--' + variant : '') +
        (size ? ' muncher-button--' + size : '') +
        (active ? ' muncher-button--active' : '') +
        (rounded ? ' muncher-button--rounded' : '');
    return (
        <button
            type={type ? type !== 'nav' ? type : 'button' : 'button'}
            className={className}
            disabled={!!disabled}
            data-title={title}
            onClick={onClick}
            onMouseDown={onMouseDown}

            {...props}
        >
            {children}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'nav']),
    variant: PropTypes.oneOf(['primary', 'secondary','tertiary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    children: PropTypes.any,
};

Button.defaultProps = {
    type: 'button',
    size: 'medium',
};
export default Button;