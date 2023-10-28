import React from "react";
import { Size, Variant } from "./Button";
export declare const SortButton: React.FC<SortButtonProps>;
export interface SortButtonProps {
    variant?: Variant;
    size?: Size;
    /**
     *  button title, corresponds to title on hover
     */
    title?: string;
    /**
     * if true, the button edges are rounded
     */
    rounded?: boolean;
    active?: boolean;
    sortAsc?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: any;
}
