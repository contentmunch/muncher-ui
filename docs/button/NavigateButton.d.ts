import React from 'react';
import { Size, Variant } from "./Button";
export declare const NavigateButton: React.FC<NavigateButtonProps>;
export interface NavigateButtonProps {
    size?: Size;
    weight?: 1 | 2 | 3;
    direction: "left" | "right";
    isDisabled?: boolean;
    variant?: Variant;
    navIcon?: NavIcon;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export type NavIcon = "arrow" | "chevron" | "skip" | "forward";
