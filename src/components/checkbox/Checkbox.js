import React from 'react';
import './assets/Checkbox.scss';
import PropTypes from "prop-types";

const Checkbox = ({name, onChange, checked, children}) => {

    return (
        <div className="muncher--checkbox">
            <input type="checkbox"
                   name={name}
                   onChange={onChange}
                   checked={checked}
            />
            <label htmlFor={name}> {children}</label>
        </div>
    )
};
Checkbox.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}
export default Checkbox;