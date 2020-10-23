import React from "react";
import {Radio, RadioProps} from "./Radio";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "Input/Radio",
    component: Radio
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args}/>

export const Default = Template.bind({});
Default.args = {
    name: 'muncher-radio',
    label: 'radio',

}