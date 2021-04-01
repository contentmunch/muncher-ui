import React, {useState} from 'react';
import './assets/Input.scss';
import {Label} from "./Label";

export const Checkbox: React.FC<CheckboxProps> = (
    {
        name, required,
        onChange, checked, label,
        ...props
    }) => {

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
                {label ? <Label label={label} required={required} name={name}
                                onClick={() => setCheckboxChecked(!checkboxChecked)}/> : ''}
            </div>
        </div>
    )
};

export interface CheckboxProps {
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    checked?: any;
    label?: string;
}

Checkbox.defaultProps = {
    required: false,
    checked: false,
};
