import React from "react";
import {Meta, Story} from "@storybook/react";
import {RangeSlider, RangeSliderProps} from "./RangeSlider";

export default {
    title: 'Input/Range Slider',
    component: RangeSlider
} as Meta;

const Template: Story<RangeSliderProps> = (args) => {

    return (
        <RangeSlider {...args} min={1} max={1000}
                     handleChange={(range => {
                         console.log(range.min, range.max);
                     })}
                     numberFormatter={num => new Intl.NumberFormat('en-UK', {
                         style: 'currency',
                         currency: 'GBP'
                     }).format(num)}

        />
    );
}
export const Default = Template.bind({});

