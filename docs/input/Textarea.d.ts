import React from 'react';
export declare const Textarea: React.FC<TextareaProps>;
export interface TextareaProps {
    name: string;
    label?: string;
    required?: boolean;
    readOnly?: boolean;
    rows?: number;
    maxLength?: number;
    focus?: boolean;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: any;
}
