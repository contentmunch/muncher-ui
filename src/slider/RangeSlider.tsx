import React, {useState} from "react";
import "./assets/Slider.scss";

export const RangeSlider: React.FC<RangeSliderProps> = (
    {
        min, max, defaultMin, defaultMax,
        numberFormatter, handleChange
    }) => {
    const [minValue, setMinValue] = useState<number>(defaultMin ? defaultMin : min);
    const [maxValue, setMaxValue] = useState<number>(defaultMax ? defaultMax : max);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = +event.target.value;
        const currentMinValue = currentValue < maxValue - 1 ? currentValue : minValue
        handleChange({min: currentMinValue, max: maxValue});
        setMinValue(currentMinValue);
    };
    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = +event.target.value;
        const currentMaxValue = currentValue > minValue + 1 ? currentValue : maxValue;
        handleChange({min: minValue, max: currentMaxValue});
        setMaxValue(currentMaxValue);
    };

    const formatNumber = (num?: number) => {
        if (numberFormatter && num) {
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

export interface Range {
    min: number;
    max: number;
}

export interface RangeSliderProps extends Range {
    defaultMin?: number;
    defaultMax?: number;
    numberFormatter?: (num: number) => string;
    handleChange: (range: Range) => void;
}

RangeSlider.defaultProps = {
    numberFormatter: (num => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(num))
}