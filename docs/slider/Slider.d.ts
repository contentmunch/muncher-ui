import React from "react";
export declare const Slider: React.FC<SliderProps>;
export interface SliderProps {
    min: number;
    max: number;
    value: number;
    setValue: (num: number) => void;
    numberFormatter?: (num: number) => string;
}
