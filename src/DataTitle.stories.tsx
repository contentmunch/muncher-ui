import React from "react";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Utils/DataTitle',
} as Meta;

const Template:Story = (args) => <a href='#home' {...args}>Hover here</a>
export const Default = Template.bind({});
Default.args = {
    'data-title': 'This will show up on hover'
}
