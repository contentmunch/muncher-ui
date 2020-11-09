import React from "react";
import "./assets/Input.scss";
import {Label} from "./Label";
import {Icon} from "../icon/Icon";
import {IconName} from "../icon/Drawings";


export const Input: React.FC<InputProps> = (
    {
        name, label, required,
        readOnly, icon,
        type, list,
        focus, placeholder, onChange,
        value, ...props
    }
) => {

    return (
        <div className="muncher-input--div">
            {label ? <Label label={label} required={required} name={name}/> : ''}
            <div className="muncher-input-element">
                {icon ? <Icon name={icon}/> : ""}
                <input
                    className={icon ? "muncher-input muncher-input-icon" : "muncher-input"}
                    name={name}
                    autoFocus={focus}
                    value={value}
                    type={type ? type : 'text'}
                    autoComplete="off"
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    readOnly={readOnly}
                    list={list}
                    {...props}
                />
            </div>
        </div>

    );
}

export type InputType = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' |
    'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

export interface InputProps {
    name: string;
    label?: string;
    required?: boolean;
    readOnly?: boolean;
    icon?: IconName;
    type?: InputType;
    focus?: boolean;
    placeholder?: string;
    list?: string;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
}

Input.defaultProps = {
    type: 'text',
    focus: false

};
