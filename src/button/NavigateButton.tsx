import React from 'react';
import './assets/NavigateButton.scss';
import {Button, Size} from "./Button";
import {Icon} from "../icon/Icon";

export const NavigateButton: React.FC<NavigateButtonProps> = (
    {
        direction, size, weight, isDisabled, onClick
    }) => {

    return (
        <div className="muncher-button--navigate">

            <Button onClick={onClick} disabled={isDisabled} size="small"
                    title={direction === "left" ? "Navigate Left" : "Navigate Right"}>
                <Icon name={direction === "left" ? "chevron-left" : "chevron-right"} size={size} weight={weight}/>
            </Button>
        </div>
    );
};

export interface NavigateButtonProps {
    size?: Size;
    weight?: 1 | 2 | 3;
    direction: "left" | "right";
    isDisabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

NavigateButton.defaultProps = {
    size: 'small',
};
