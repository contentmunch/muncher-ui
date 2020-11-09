import React from "react";
import {Badge, BadgeProps} from "./Badge";
import {Meta, Story} from '@storybook/react';

export default {
    title: 'Data Display/Badge',
    component: Badge
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Muncher&nbsp;&nbsp;</Badge>

export const Default = Template.bind({});
Default.args = {};
