import React from "react";
import {Icon} from "../icon/Icon";
import {Size} from "../button/Button";
import {IconName} from "../icon/Drawings";

export const Li: React.FC<LiProps> = (
    {isFeatured, bulletIcon, bulletWeight, bulletSize, bulletColor, children}) => {
    return (
        <li className={isFeatured ? "muncher-li featured" : "muncher-li"}><Icon name={bulletIcon} weight={bulletWeight}
                                                                                size={bulletSize}
                                                                                color={bulletColor}>{children}</Icon>
        </li>);
}

export interface LiProps {
    isFeatured?: boolean;
    bulletColor?: string;
    bulletWeight?: 1 | 2 | 3;
    bulletSize?: Size;
    bulletIcon?: IconName;
    children?: any;
}

Li.defaultProps = {
    bulletWeight: 2,
    bulletSize: "small",
    bulletIcon: "arrow-right"
};
