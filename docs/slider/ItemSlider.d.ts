import React, { ReactElement } from "react";
import { NavIcon } from "../button/NavigateButton";
import { Size, Variant } from "../button/Button";
export declare const ItemSlider: React.FC<ItemSliderProps>;
export interface ItemSliderProps {
    sliderItems: ReactElement[];
    navButtonSize?: Size;
    navButtonWeight?: 1 | 2 | 3;
    navIcon?: NavIcon;
    variant?: Variant;
}
