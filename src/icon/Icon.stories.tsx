import React from 'react';
import {Icon, IconProps} from "./Icon";
import {Meta, Story} from '@storybook/react/types-6-0';
export default {
    title: 'Visual/Icons',
    component: Icon,
    argTypes: {
        color: {control: 'color'},
    },
} as Meta;

const Template:Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'muncher',
    size: 'small'
};
export const Dark = Template.bind({});
Dark.args = {
    ...Default.args,
    size: 'medium',
    weight: 2
};
export const Medium = Template.bind({});
Medium.args = {
    ...Default.args,
    size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
    ...Default.args,
    size: 'large'
}
