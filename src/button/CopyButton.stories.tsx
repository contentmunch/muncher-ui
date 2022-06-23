import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {CopyButton} from "./CopyButton";

export default {
    title: "Buttons/Copy Button",
    component: CopyButton
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = (args) => <CopyButton {...args}/>;

export const Default = Template.bind({});

Default.args = {
    text: "This is the text from clipboard"
}
