import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {NavigateButton} from "./NavigateButton";

export default {
    title: "Buttons/Navigate Button",
    component: NavigateButton
} as ComponentMeta<typeof NavigateButton>;

const Template: ComponentStory<typeof NavigateButton> = (args) => <NavigateButton {...args}/>;

export const Default = Template.bind({});

Default.args = {
    direction: "right"
}

export const Left = Template.bind({});

Left.args = {
    direction: "left"
}
export const Disabled = Template.bind({});

Disabled.args = {
    ...Left.args, isDisabled: true
}