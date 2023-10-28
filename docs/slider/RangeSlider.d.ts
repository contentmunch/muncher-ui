import React from "react";
export declare const RangeSlider: React.FC<RangeSliderProps>;
export interface Range {
    min: number;
    max: number;
}
export interface RangeSliderProps extends Range {
    minValue: number;
    maxValue: number;
    setMinValue: (num: number) => void;
    setMaxValue: (num: number) => void;
    numberFormatter?: (num: number) => string;
    children?: any;
}
