import React from 'react';
import { Size, Variant } from "./Button";
export declare const CopyButton: React.FC<CopyButtonProps>;
export interface CopyButtonProps {
    variant?: Variant;
    size?: Size;
    text: string;
}
