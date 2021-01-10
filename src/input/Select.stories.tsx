import React from "react";
import {Meta, Story} from "@storybook/react";
import {Select, SelectProps} from "./Select";

export default {
    title: "Input/Select",
    component: Select
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args}/>

export const Default = Template.bind({});

Default.args = {
    name: "select",
    label: "select what",
    required: true,
    options: ["Option1", "Option2", "Option3"]
};

export const WithError = Template.bind({});
WithError.args = {
    ...Default.args,
    error: "Provide value for select"
};

export const WithValue = Template.bind({});

WithValue.args = {
    ...Default.args,
    value: "Option2"
};
