import React from "react";
import RangeSlider from "./RangeSlider";

export default {
    title: 'Range Slider',
    component: RangeSlider,
}

const Template = (args) => <RangeSlider {...args}>This is a range slider</RangeSlider>

export const Default = Template.bind({});

Default.args = {
    from: 100,
    to: 1000,
    min: 10,
    max: 1100,
    onSliderChange: (values) => {
        console.log("lowerValue : " + values[0] + " upperValue : " + values[1]);
    }
}
