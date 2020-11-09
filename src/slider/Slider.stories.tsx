import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import {Slider, SliderProps} from "./Slider";

export default {
    title: 'Input/Slider',
    component: Slider
} as Meta;

export const Default: Story<SliderProps> = (args) => {
    const [value, setValue] = useState(50);
    return (
        <Slider  {...args} min={1} max={1000}
                 numberFormatter={num => new Intl.NumberFormat('en-US', {
                     style: 'currency',
                     currency: 'USD'
                 }).format(num)}
                 value={value}
                 setValue={setValue}
        />
    );
}

