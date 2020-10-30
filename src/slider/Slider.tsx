import React, {useState} from "react";
import "./assets/Slider.scss";

export const Slider: React.FC<SliderProps> = (
    {
        min, max, defaultValue, handleChange, numberFormatter
    }) => {
    const [value, setValue] = useState<number>(defaultValue ? defaultValue : max);
    const formatNumber = (num: number) => {
        if (numberFormatter) {
            return numberFormatter(num);
        } else {
            return num;
        }
    };
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = +e.target.value;
        setValue(currentValue);
        handleChange(currentValue);
    }
    return (
        <div className="muncher-slider">
            <input className="muncher-range" type="range" min={min} max={max} value={value}
                   onChange={handleValueChange}/>
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
    defaultValue?: number;
    numberFormatter?: (num: number) => string;
    handleChange: (value: number) => void;
}

Slider.defaultProps = {
    numberFormatter: (num => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(num))
}