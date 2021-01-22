import React from "react";
import "./assets/IconBadge.scss";
import {Icon} from "../icon/Icon";
import {Variant} from "../button/Button";
import {IconName} from "../icon/Drawings";
import {Badge} from "./Badge";

export const IconBadge: React.FC<IconBadgeProps> = (
    {
        variant,
        icon,
        text,
        onClick,
        ...props
    }) => {

    return (
        <div
            className="muncher-icon-badge" onClick={onClick} {...props}>
            <Icon name={icon}/>
            <Badge variant={variant}>{text}</Badge>
        </div>
    );
};
IconBadge.defaultProps = {
    variant: "primary",
    icon: "bell"
}

export interface IconBadgeProps {
    variant?: Variant;
    icon?: IconName;
    text: String;
    onClick?: () => void;
}
