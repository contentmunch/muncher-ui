import React from 'react';
import './assets/Radio.scss';
import PropTypes from "prop-types";

const Radio = ({name, value, onChange, checked, children, ...props}) => {

    return (
        <div className="muncher--checkbox">
            <input type="radio"
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
Radio.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}
export default Radio;