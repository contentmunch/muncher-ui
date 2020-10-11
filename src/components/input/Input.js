import React from "react";
import "./assets/Input.scss";
import PropTypes from "prop-types";
import Label from "./Label";

export default function Input({name, label, required, readOnly, type, focus, placeHolder, onChange, value, ...props}) {
    return (
        <div className="muncher-input--div">
            {label ? <Label label={label} required={required} name={name}/> : ''}
            <input
                className="muncher-input"
                name={name}
                autoFocus={focus}
                value={value}
                type={type ? type : 'text'}
                autoComplete="off"
                placeholder={placeHolder}
                onChange={onChange}
                required={required}
                readOnly={readOnly}
                {...props}
            />
        </div>

    );
}
Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    type: PropTypes.oneOf(['color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password',
        'range', 'search', 'tel', 'text', 'time', 'url', 'week']),
    focus: PropTypes.bool,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
};

Input.defaultProps = {
    type: 'text',
    focus: false

};