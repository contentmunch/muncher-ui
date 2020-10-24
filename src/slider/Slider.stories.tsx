import React, {useState} from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Slider, SliderProps} from "./Slider";

export default {
    title: 'Input/Slider',
    component: Slider
} as Meta;

const Template: Story<SliderProps> = () => {
    const [value, setValue] = useState(400);
    return (
        <Slider min={1} max={1000}
                setValue={setValue}
                value={value}
                numberFormatter={num => new Intl.NumberFormat('ja-JP', {
                    style: 'currency',
                    currency: 'JPY'
                }).format(num)}
        />
    );
}
export const Default = Template.bind({});

