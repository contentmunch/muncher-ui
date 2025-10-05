import React from 'react';
import './assets/DropdownNavButton.scss';
import {Button} from "./Button";

export const DropdownNavButton: React.FC<DropdownNavButtonProps> = (
    {
        title,
        active,
        disabled,
        element,
        rounded,
        dropLeft,
        children,
        ...props
    }) => {
    return (
        <div className={`muncher-dropdown-nav ${dropLeft ? 'drop-left' : ''}`}>
            <Button
                type="nav"
                title={title}
                disabled={disabled}
                rounded={rounded}
                active={active}
                {...props}
            >
                {element}
            </Button>
            <div className="muncher-dropdown-nav--content">
                {children}
            </div>
        </div>
    );
};

export interface DropdownNavButtonProps {
    title?: string;
    active?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    element: React.ReactNode;
    children?: any;

    /** If true, dropdown opens from parent’s right edge and expands leftward */
    dropLeft?: boolean;
}
