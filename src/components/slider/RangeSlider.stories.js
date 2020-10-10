import React from "react";
import RangeSlider from "./RangeSlider";

export default {
    title: 'Input/Range Slider',
    component: RangeSlider,
}

const Template = (args) => <RangeSlider {...args}>This is a range slider</RangeSlider>

export const Default = Template.bind({});

Default.args = {
    min: 10,
    max: 1100,
    sign: '$',
    onSliderChange: (values) => {
        console.log("lowerValue : " + values[0] + " upperValue : " + values[1]);
    }
}
