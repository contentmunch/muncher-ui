import React from "react";
import { Variant } from "../button/Button";
import { IconName } from "../icon/Drawings";
export declare const IconBadge: React.FC<IconBadgeProps>;
export interface IconBadgeProps {
    variant?: Variant;
    icon?: IconName;
    text: String;
    onClick?: () => void;
}
