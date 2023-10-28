import React from 'react';
import { Size, Variant } from "./Button";
export declare const ShareButton: React.FC<ShareButtonProps>;
export interface ShareButtonProps {
    variant?: Variant;
    size?: Size;
    title: string;
}
