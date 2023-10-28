import React from 'react';
export declare const Radio: React.FC<RadioProps>;
export interface RadioProps {
    name?: string;
    required?: boolean;
    label?: string;
    onChange?: () => void;
    checked?: any;
}
