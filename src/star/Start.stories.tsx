import React from "react";
import {Star, StarProps} from "./Star";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Utils/Star',
    component: Star
} as Meta;

const Template: Story<StarProps> = (args) => <Star {...args}/>

export const Default = Template.bind({});
Default.args = {
    rating: 3.4
}