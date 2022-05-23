import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ShareButton} from "./ShareButton";

export default {
    title: "Buttons/Share Button",
    component: ShareButton
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = (args) => <ShareButton {...args}/>;

export const Default = Template.bind({});

Default.args = {
    title: "Check out this apartment"
}
