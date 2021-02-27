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
    options: ["Option1", "Option2", "Option3"],
    onChange: (e) => {
        console.log(e.target.value);
    }
}
;
export const Multiple = Template.bind({});
Multiple.args = {
    ...Default.args,
    multiple: true
}
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
