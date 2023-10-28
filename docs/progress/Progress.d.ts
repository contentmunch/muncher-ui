import React from "react";
export declare const Progress: React.FC<ProgressProps>;
export interface ProgressProps {
    value: number;
    max: number;
    label?: string;
}
