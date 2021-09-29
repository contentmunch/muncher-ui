import React, {useState} from 'react';
import './assets/Input.scss';
import {Label} from "./Label";
import {generateId} from "../utils/NewId";

export const Checkbox: React.FC<CheckboxProps> = (
    {
        name, required,
        onChange, checked, label,
        ...props
    }) => {

    const [checkboxChecked, setCheckboxChecked] = useState(checked ? checked : false);
    const id = name ? generateId(name) : generateId("muncher-checkbox");
    return (
        <div className="muncher-input--div">
            <div className="muncher-checkbox">
                <input type="checkbox"
                       id={id}
                       name={name}
                       onChange={event => {
                           setCheckboxChecked(event.target.checked);
                           if (onChange) {
                               onChange();
                           }
                       }}
                       checked={checkboxChecked}
                       required={required}
                       {...props}
                />
                {label ? <Label label={label} required={required} id={id}
                                onClick={() => {
                                    setCheckboxChecked(!checkboxChecked);
                                    if (onChange) {
                                        onChange();
                                    }
                                }}/> : ''}
            </div>
        </div>
    )
};

export interface CheckboxProps {
    name?: string;
    onChange?: () => void;
    required?: boolean;
    checked?: any;
    label?: string;
}

Checkbox.defaultProps = {
    required: false,
    checked: false,
};
