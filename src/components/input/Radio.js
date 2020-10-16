import React, {useState} from 'react';
import './assets/Input.scss';
import PropTypes from "prop-types";
import Label from "./Label";

const Radio = ({name, required, onChange, checked, label, ...props}) => {
    const [radioChecked, setRadioChecked] = useState(checked ? checked : false);
    return (
        <div className="muncher-input--div">
            <div className="muncher-radio">
                <input
                    type="radio"
                    name={name}
                    onChange={event => {
                        setRadioChecked(event.target.checked);
                        if (onChange) {
                            onChange(event);
                        }
                    }}
                    checked={radioChecked}
                    {...props}
                />
                {label ? <Label label={label} required={required} name={name}/> : ''}
            </div>
        </div>
    )
};
Radio.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
};
Radio.defaultProps = {
    required: false,
    checked: false
};
export default Radio;