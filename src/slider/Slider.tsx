import React from "react";
import "./assets/Slider.scss";

export const Slider: React.FC<SliderProps> = (
    {
        min, max, value, setValue, numberFormatter
    }) => {
    const formatNumber = (num: number) => {
        if (numberFormatter) {
            return numberFormatter(num);
        } else {
            return num;
        }
    };
    return (
        <div className="muncher-slider">
            <input className="muncher-range" type="range" min={min} max={max} value={value}
                   onChange={(e => {
                       setValue(+e.target.value)
                   })}/>
            <div className="slider-values">
                <div className="slider-min">{formatNumber(min)}</div>
                <div className="slider-max">{formatNumber(max)}</div>
            </div>
            <div className="slider-footer"><p>{formatNumber(value)}</p></div>
        </div>
    );
}

export interface SliderProps {
    min: number;
    max: number;
    value: number;
    setValue: (value: number) => void;
    numberFormatter?: (num: number) => string;
}
