import React from 'react';
import Icon from "./Icon";

export default {
    title: 'Visual/Icons',
    component: Icon,
    argTypes: {
        color: {control: 'color'},
    },
};

const Template = (args) => <Icon {...args} />;

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
