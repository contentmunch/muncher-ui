import React from "react";
export declare const Label: React.FC<LabelProps>;
export interface LabelProps {
    /**
     * name of the element that uses the label
     */
    id?: string;
    required?: boolean;
    label?: string;
    onClick?: (e: any) => void;
}
