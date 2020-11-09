import React from "react";
import {Spinner} from "./Spinner";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Utils/Spinner',
    component: Spinner
} as Meta;
const Template: Story = (args) => <Spinner {...args}/>

export const Default = Template.bind({});

Default.args = {}
