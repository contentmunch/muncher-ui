import React, {useState} from 'react';
import './assets/Input.scss';
import PropTypes from "prop-types";
import Label from "./Label";

const Checkbox = ({name, required, onChange, checked, label, ...props}) => {

    const [checkboxChecked, setCheckboxChecked] = useState(checked ? checked : false);

    return (
        <div className="muncher-input--div">
            <div className="muncher-checkbox">
                <input type="checkbox"
                       name={name}
                       onChange={event => {
                           setCheckboxChecked(event.target.checked);
                           if (onChange) {
                               onChange(event);
                           }
                       }}
                       checked={checkboxChecked}
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
    checked: PropTypes.any,
    label: PropTypes.string,
};
Checkbox.defaultProps = {
    required: false,
    checked: false,
};
export default Checkbox;