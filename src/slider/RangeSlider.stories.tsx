import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import {RangeSlider, RangeSliderProps} from "./RangeSlider";
import "./assets/SliderStories.scss";


export default {
    title: 'Input/Range Slider',
    component: RangeSlider
} as Meta;

const Template: Story<RangeSliderProps> = (args) => {
    const [minValue, setMinValue] = useState(20);
    const [maxValue, setMaxValue] = useState(600);
    return (
        <div className="slider-story">
            <RangeSlider {...args} min={1} max={1000}
                         minValue={minValue} maxValue={maxValue}
                         setMinValue={setMinValue} setMaxValue={setMaxValue}
                         numberFormatter={num => new Intl.NumberFormat('en-UK', {
                             style: 'currency',
                             currency: 'GBP'
                         }).format(num)}

            />
        </div>
    );
}
export const Default = Template.bind({});

