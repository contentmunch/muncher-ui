import React from 'react';
import { Variant } from "../button/Button";
export declare const Badge: React.FC<BadgeProps>;
export interface BadgeProps {
    variant?: Variant;
    children: React.ReactNode;
}
