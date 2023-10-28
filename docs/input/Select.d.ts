import React from "react";
export declare const Select: React.FC<SelectProps>;
export interface SelectProps {
    name: string;
    options: string[];
    label?: string;
    required?: boolean;
    multiple?: boolean;
    onChange?: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: any;
    error?: string;
}
