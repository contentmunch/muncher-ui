import React from "react";
import {Meta, Story} from '@storybook/react';
import {IconBadge, IconBadgeProps} from "./IconBadge";
import {Button} from "../button/Button";

export default {
    title: 'Data Display/Icon Badge',
    component: IconBadge
} as Meta;

const Template: Story<IconBadgeProps> = (args) => <div style={
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}><Button>Button</Button><IconBadge {...args}/></div>

export const Default = Template.bind({});
Default.args = {
    text: "12",
    onClick: () => {
        console.log("clicked");
    }
};
