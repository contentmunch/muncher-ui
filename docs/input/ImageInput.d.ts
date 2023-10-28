import React from "react";
export declare const ImageInput: React.FC<ImageInputProps>;
export interface ImageInputProps {
    name: string;
    label?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    error?: string;
    required?: boolean;
    active?: boolean;
    multiple?: boolean;
    maxFiles?: number;
    setFiles: (files: any) => void;
}
