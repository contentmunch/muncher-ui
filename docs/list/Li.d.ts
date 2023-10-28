import React from "react";
import { Size } from "../button/Button";
import { IconName } from "../icon/Drawings";
export declare const Li: React.FC<LiProps>;
export interface LiProps {
    isFeatured?: boolean;
    bulletColor?: string;
    bulletWeight?: 1 | 2 | 3;
    bulletSize?: Size;
    bulletIcon?: IconName;
    children?: any;
}
