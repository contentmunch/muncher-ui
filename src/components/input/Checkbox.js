import React from 'react';
import './assets/Input.scss';
import PropTypes from "prop-types";
import Label from "./Label";

const Checkbox = ({name, value, required, onChange, checked, label, ...props}) => {

    return (
        <div className="muncher-input--div">
            <div className="muncher-checkbox">
                <input type="checkbox"
                       name={name}
                       value={value}
                       onChange={onChange}
                       checked={checked}
                       required={required}
                       {...props}
                />
                {label ? <Label label={label} required={required} name={name}/> : ''}
            </div>
        </div>
    )
};
Checkbox.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    value: PropTypes.any,
    checked: PropTypes.bool,
    label: PropTypes.string,
}
export default Checkbox;