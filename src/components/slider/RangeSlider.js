import React, {useState} from 'react';
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import './RangeSlider.scss';
import PropTypes from "prop-types";

export default function RangeSlider({min, max, sign, handleChange, children}) {
    const [to, setTo] = useState(min);
    const [from, setFrom] = useState(max);
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const onSliderChange = (values) => {
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
RangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    sign: PropTypes.string,
    handleChange: PropTypes.func,
    children: PropTypes.any,
};
RangeSlider.defaultProps = {
    sign: "$"
};