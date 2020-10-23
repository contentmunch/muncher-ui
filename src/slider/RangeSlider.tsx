import React, {useState} from 'react';
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import './assets/RangeSlider.scss';

export const RangeSlider: React.FC<RangeSliderProps> = (
    {min, max, sign, handleChange, children}
) => {
    const [to, setTo] = useState(min);
    const [from, setFrom] = useState(max);
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const onSliderChange = (values: React.SetStateAction<number>[]) => {
        setTo(values[0]);
        setFrom(values[1]);
        if (handleChange)
            handleChange(values);
    }
    return (
        <div className="muncher-slider">
            <Range min={min} max={max} defaultValue={[to, from]}
                   tipFormatter={value => `${sign ? sign + value : '$' + value}`} onAfterChange={onSliderChange}/>
            <div className="muncher-slider-content">
                {children}
            </div>
        </div>

    );
};

export interface RangeSliderProps {
    min: number;
    max: number;
    sign?: string;
    handleChange: (values:React.SetStateAction<number>[]) => void;
    children?: any;
}

RangeSlider.defaultProps = {
    sign: "$"
};