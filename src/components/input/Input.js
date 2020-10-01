import React from "react";
import "./assets/TextInput.scss";
import PropTypes from "prop-types";

export default function Input({name, type, focus, placeHolder, onChange, value, ...props}) {
    return (
        <input
            className="muncher-input"
            name={name}
            autoFocus={focus}
            value={value}
            type={type ? type : 'text'}
            autoComplete="off"
            placeholder={placeHolder}
            onChange={onChange}
            {...props}
        />
    );
}
Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password',
        'range', 'search', 'tel', 'text', 'time', 'url', 'week']),
    focus: PropTypes.bool,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
};

Input.defaultProps = {
    type: 'text',
};