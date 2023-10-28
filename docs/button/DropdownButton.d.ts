import React from 'react';
import { ButtonProps } from "./Button";
export declare const DropdownButton: React.FC<DropdownButtonProps>;
export interface DropdownButtonProps extends ButtonProps {
    /**
     * base on drop value, it will either drop left or right
     */
    drop?: 'left' | 'right' | 'middle';
    /**
     * shows or hides drop down content
     */
    showContent: boolean;
    /**
     * event to set show content value
     */
    setShowContent: (show: boolean) => void;
    /**
     * button mouse down handler
     */
    onClose?: () => void;
    element: React.ReactNode;
    withDropIcon?: boolean;
}
