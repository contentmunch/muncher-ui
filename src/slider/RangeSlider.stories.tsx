import React from "react";
import {RangeSlider, RangeSliderProps} from "./RangeSlider";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Input/Range Slider',
    component: RangeSlider,
} as Meta;

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args}>This is a range slider</RangeSlider>

export const Default = Template.bind({});

Default.args = {
    min: 10,
    max: 1100,
    sign: '$',
    handleChange: (values: React.SetStateAction<number>[]) => {
        console.log("lowerValue : " + values[0] + " upperValue : " + values[1]);
    }
}
