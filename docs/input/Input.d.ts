import React from "react";
import { IconName } from "../icon/Drawings";
export declare const Input: React.FC<InputProps>;
export type InputType = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
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
