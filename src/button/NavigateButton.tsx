import React from 'react';
import './assets/NavigateButton.scss';
import {Button, Size} from "./Button";
import {Icon} from "../icon/Icon";

export const NavigateButton: React.FC<NavigateButtonProps> = (
    {
        direction, size, isDisabled, onClick
    }) => {

    return (
        <div className="muncher-button--navigate">

            <Button size={size} onClick={onClick} disabled={isDisabled}
                    title={direction === "left" ? "Navigate Left" : "Navigate Right"}>
                <Icon name={direction === "left" ? "chevron-left" : "chevron-right"}/>
            </Button>
        </div>
    );
};

export interface NavigateButtonProps {
    size?: Size;
    direction: "left" | "right";
    isDisabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

NavigateButton.defaultProps = {
    size: 'small',
};
