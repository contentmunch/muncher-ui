import React from 'react';
export declare const Button: React.FC<ButtonProps>;
export type ButtonTypes = 'button' | 'submit' | 'reset' | 'nav';
export interface AllButtonProps {
    variant?: Variant;
    size?: Size;
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
    children?: any;
}
export interface ButtonProps extends AllButtonProps {
    type?: ButtonTypes;
    /**
     * button click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * button mouse down handler
     */
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'danger';
export type Size = 'small' | 'medium' | 'large';
