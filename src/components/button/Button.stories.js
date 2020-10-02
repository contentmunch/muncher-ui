import React from 'react';

import Button from './Button';
import Icon from "../icon/Icon";

export default {
    title: 'Buttons/Button',
    component: Button,
    decorators: [story => <div style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
};

const Template = (args) => <Button {...args} >Button</Button>;
const IconTemplate = (args) => <Button {...args}><Icon name='muncher'/></Button>
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