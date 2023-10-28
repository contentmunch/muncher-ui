import React from 'react';
export declare const TextInputDropdown: React.FC<TextInputDropdownProps>;
export interface TextInputDropdownProps {
    focus?: boolean;
    inputPlaceHolder?: string;
    handleInputChange: (value: string) => void;
    showContent: boolean;
    setShowContent: (b: boolean) => void;
    readOnly?: boolean;
    children?: any;
    value?: any;
    label?: string;
    required?: boolean;
    error?: string;
}
