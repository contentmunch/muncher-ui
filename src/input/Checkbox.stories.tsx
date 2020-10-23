import React from "react";
import {Checkbox, CheckboxProps} from "./Checkbox";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "Input/Checkbox",
    component: Checkbox
} as Meta;

const Template:Story<CheckboxProps> = (args) => <Checkbox {...args}/>

export const Default = Template.bind({});
Default.args = {
    name: 'muncher-checkbox',
    label: 'Item 1',
}
