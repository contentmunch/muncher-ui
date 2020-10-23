import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Button, ButtonProps} from './Button';
import {Icon} from "../icon/Icon";

export default {
    title: 'Buttons/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Button</Button>;
const IconTemplate: Story<ButtonProps> = (args) => <Button {...args}><Icon name='muncher'/></Button>
export const Default = Template.bind({});
Default.args = {
    title: 'Default Button',
};
export const IconButton = IconTemplate.bind({});
IconButton.args = {
    title: 'Icon Button',
    size: 'small'
};
export const RoundedButton = IconTemplate.bind({});
RoundedButton.args = {
    ...IconButton.args,
    title: 'Rounded Button',
    variant: 'secondary',
    rounded: true,
};
export const NavButton = Template.bind({});
NavButton.args = {
    title: 'Nav Button',
    type: 'nav',
};
export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Secondary Button',
    variant: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    title: 'Tertiary Button',
    variant: 'tertiary'
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    title: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    title: 'Small Button',
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    title: 'Disabled Button',
};
export const Active = Template.bind({});
Active.args = {
    active: true,
    title: 'Active Button',
};
export const Submit = Template.bind({});
Submit.args = {
    type: 'submit',
    title: 'Submit Button',
};