import React from "react";
import "./assets/Input.scss";
import {Label} from "./Label";
import {Icon} from "..";
import {IconName} from "../icon/Drawings";

export const Input: React.FC<InputProps> = (
    {
        name, label, required,
        readOnly, icon, hoverIcon, onHoverIconClick,
        type, list, onBlur,
        onKeyDown, error, focus, placeholder,
        onChange, step, value, maxLength, ...props
    }
) => {
    const hasError = () => error && error !== "";
    const className = () => {
        let inputClass = "muncher-input";
        if (icon || hoverIcon) inputClass += " muncher-input-icon";
        if (hasError()) inputClass += " muncher-input-error";
        return inputClass;
    };
    return (
        <div className="muncher-input--div">
            {label ? <Label label={label} required={required} id={name}/> : ''}
            <div className="muncher-input-element">
                {icon ? <Icon name={icon}/> : ""}
                {hoverIcon ? <span className="muncher-icon-hover"><Icon name={hoverIcon}
                                                                        onClick={onHoverIconClick}/> </span> : ""}
                <input
                    id={name}
                    className={className()}
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
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    step={step}
                    maxLength={maxLength}
                    {...props}
                />
            </div>
            {hasError() ?
                <div className="muncher-input-error-message"><Icon name="alert">{error}</Icon></div> : ""}
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
    hoverIcon?: IconName;
    type?: InputType;
    focus?: boolean;
    placeholder?: string;
    list?: string;
    onHoverIconClick?: () => void;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value?: any;
    error?: string;
    step?: number;
    maxLength?: number;

}

Input.defaultProps = {
    type: 'text',
    focus: false

};
