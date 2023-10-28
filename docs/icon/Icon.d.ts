import React from "react";
import { IconName } from "./Drawings";
import { Size } from "../button/Button";
export declare const Icon: React.FC<IconProps>;
export interface IconProps {
    /**
     * stroke color of the icon. By default it is set to current color
     */
    color?: string;
    weight?: 1 | 2 | 3;
    size?: Size;
    /**
     * icon click handler
     */
    onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    name?: IconName;
    iconString?: string;
    orientation?: "left" | "right";
    children?: any;
}
