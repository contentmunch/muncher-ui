import React from 'react';
export declare const Checkbox: React.FC<CheckboxProps>;
export interface CheckboxProps {
    name?: string;
    onChange?: () => void;
    required?: boolean;
    checked?: any;
    label?: string;
}
