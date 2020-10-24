import React, {useState} from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import {RangeSlider, RangeSliderProps} from "./RangeSlider";

export default {
    title: 'Input/Range Slider',
    component: RangeSlider
} as Meta;

const Template: Story<RangeSliderProps> = () => {
    const [minValue, setMinValue] = useState(40);
    const [maxValue, setMaxValue] = useState(600);
    return (
        <RangeSlider min={1} max={1000}
                     setMaxValue={setMaxValue}
                     setMinValue={setMinValue}
                     minValue={minValue}
                     maxValue={maxValue}
                     numberFormatter={num => new Intl.NumberFormat('en-UK', {
                         style: 'currency',
                         currency: 'GBP'
                     }).format(num)}
        />
    );
}
export const Default = Template.bind({});

