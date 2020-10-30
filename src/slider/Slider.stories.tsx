import React from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Slider, SliderProps} from "./Slider";

export default {
    title: 'Input/Slider',
    component: Slider
} as Meta;

export const Default: Story<SliderProps> = (args) => {

    return (
        <Slider  {...args} min={1} max={1000}
                 numberFormatter={num => new Intl.NumberFormat('en-US', {
                     style: 'currency',
                     currency: 'USD'
                 }).format(num)}
                 handleChange={(value => {
                     console.log(value)
                 })}
        />
    );
}

