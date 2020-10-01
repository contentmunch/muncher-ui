import React from 'react';
import './assets/Checkbox.scss';
import PropTypes from "prop-types";

const Checkbox = ({name, value, onChange, checked, children, ...props}) => {

    return (
        <div className="muncher--checkbox">
            <input type="checkbox"
                   name={name}
                   value={value}
                   onChange={onChange}
                   checked={checked}
                   {...props}
            />
            <label htmlFor={name}> {children}</label>
        </div>
    )
};
Checkbox.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}
export default Checkbox;