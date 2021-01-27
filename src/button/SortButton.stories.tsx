import React from "react";
import {Meta, Story} from "@storybook/react";
import {SortButton, SortButtonProps} from "./SortButton";

export default {
    title: 'Buttons/Sort Button',
    component: SortButton
} as Meta;
const Template: Story<SortButtonProps> = (args) => <SortButton {...args} >Button</SortButton>;
export const Default = Template.bind({});
Default.args = {
    title: 'Sort Button',
};

export const Active = Template.bind({});
Active.args = {
    ...Default.args,
    active: true
};