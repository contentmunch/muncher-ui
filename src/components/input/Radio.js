import React from 'react';
import './assets/Input.scss';
import PropTypes from "prop-types";
import Label from "./Label";

const Radio = ({name, value, required, onChange, checked, label, ...props}) => {

    return (
        <div className="muncher-input--div">
            <div className="muncher-radio">
                <input className="muncher-input"
                    type="radio"
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    {...props}
                />
                {label ? <Label label={label} required={required} name={name}/> : ''}
            </div>
        </div>
    )
};
Radio.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
}
export default Radio;