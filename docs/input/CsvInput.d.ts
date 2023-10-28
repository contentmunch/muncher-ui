import React from "react";
export declare const CsvInput: React.FC<CsvInputProps>;
export interface CsvInputProps {
    name: string;
    label?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    required?: boolean;
    active?: boolean;
    handleOnChange?: (file: File) => void;
    isUploading?: boolean;
    warningMessage?: string;
    successMessage?: string;
}
