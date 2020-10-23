import React from 'react';
import './assets/DropdownNavButton.scss';
import {AllButtonProps, Button} from "./Button";

export const DropdownNavButton: React.FC<DropdownNavButtonProps> = (
    {
        variant, size, title, active, disabled, element, rounded,
        children, ...props
    }) => {

    return (
        <div className="muncher-dropdown-nav">
            <Button type="nav" title={title} disabled={disabled} rounded={rounded}
                    active={active} variant={variant} size={size} {...props}>
                {element}
            </Button>
            <div className="muncher-dropdown-nav--content">
                {children}
            </div>
        </div>
    );
}

DropdownNavButton.defaultProps = {
    size: 'medium',
};

export interface DropdownNavButtonProps extends AllButtonProps {
    element: React.ReactNode;
}
