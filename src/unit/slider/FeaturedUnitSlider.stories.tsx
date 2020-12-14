import React from "react";
import {Meta, Story} from "@storybook/react";
import {FeaturedUnitSlider, FeaturedUnitSliderProps} from "./FeaturedUnitSlider";

export default {
    title: "Slider/ Featured Unit Slider",
    component: FeaturedUnitSlider
} as Meta;

const Template: Story<FeaturedUnitSliderProps> = (args) => {
    return (
        <FeaturedUnitSlider {...args}/>
    );
};

export const Default = Template.bind({});

Default.args = {
    domain: "scholarsrooftop"
};