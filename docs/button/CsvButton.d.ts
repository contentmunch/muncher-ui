import React from "react";
import { AllButtonProps } from "./Button";
export declare const CsvButton: React.FC<CsvButtonProps>;
export interface CsvButtonProps extends AllButtonProps {
    header: string[];
    data: string[][];
    filename: string;
}
