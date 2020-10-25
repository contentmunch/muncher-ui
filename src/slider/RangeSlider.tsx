import React from "react";
import "./assets/Slider.scss";

export const RangeSlider: React.FC<RangeSliderProps> = (
    {
        min, max, minValue, maxValue,
        setMinValue, setMaxValue, numberFormatter
    }) => {


    const handleMinChange = (event: any) => {
        const currentValue = +event.target.value;
        setMinValue(currentValue < maxValue - 1 ? currentValue : minValue);
    };
    const handleMaxChange = (event: any) => {
        const currentValue = +event.target.value;
        setMaxValue(currentValue > minValue + 1 ? currentValue : maxValue);
    };

    const formatNumber = (num: number) => {
        if (numberFormatter) {
            return numberFormatter(num);
        } else {
            return num;
        }
    }
    return (
        <div className="muncher-slider">
            <input className="muncher-range" type="range" min={min} max={max} value={minValue}
                   onChange={handleMinChange}/>
            <input className="muncher-range" type="range" min={min} max={max} value={maxValue}
                   onChange={handleMaxChange}/>
            <div className="slider-values">
                <div className="slider-min">{formatNumber(min)}</div>
                <div className="slider-max">{formatNumber(max)}</div>
            </div>
            <div className="slider-footer"><p>{formatNumber(minValue) + " - " + formatNumber(maxValue)}</p></div>
        </div>
    );
}

export interface RangeSliderProps {
    min: number;
    max: number;
    minValue: number;
    maxValue: number;
    setMinValue: (minValue: number) => void;
    setMaxValue: (maxValue: number) => void;
    numberFormatter?: (num: number) => string;
}
