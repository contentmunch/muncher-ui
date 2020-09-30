import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import './RangeSlider.scss';
import PropTypes from "prop-types";

export default function RangeSlider({from, to, min, max ,sign, onSliderChange: sliderChangeHandler, children}) {
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    return (
        <div className="muncher-slider">
            <Range min={min} max={max} defaultValue={[from, to]}
                   tipFormatter={value => `${sign ? sign + value : '$' + value}`} onAfterChange={sliderChangeHandler}/>
            {children}
        </div>

    );
};
RangeSlider.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    sign: PropTypes.string,
    onSliderChange: PropTypes.func,
    children: PropTypes.any,
}