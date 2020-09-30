import React from 'react';
import PropTypes from 'prop-types';
import './assets/Button.scss';

const Button = ({type, variant, size, title, active, disabled, onClick, onMouseDown, children, ...props}) => {
    const className = 'muncher-button' +
        (type && type === 'nav' ? ' muncher-button--nav' : '') +
        (variant ? ' muncher-button--' + variant : '') +
        (size ? ' muncher-button--' + size : '') +
        (active ? ' muncher-button--active' : '');
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
    variant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Button.defaultProps = {
    type: 'button',
    size: 'medium',
    variant: 'primary',
    onClick: undefined,
};
export default Button;