import React from 'react';
export declare const DropdownNavButton: React.FC<DropdownNavButtonProps>;
export interface DropdownNavButtonProps {
    /**
     *  button title, corresponds to title on hover
     */
    title?: string;
    active?: boolean;
    disabled?: boolean;
    /**
     * if true, the button edges are rounded
     */
    rounded?: boolean;
    element: React.ReactNode;
    children?: any;
}
