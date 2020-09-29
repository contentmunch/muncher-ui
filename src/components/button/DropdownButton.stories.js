import React, {useState} from 'react';
import DropdownButton from "./DropdownButton";
import {ReactComponent as Icon} from "../icon/assets/muncher.svg";

export default {
    title: 'Buttons/Dropdown Button',
    component: DropdownButton,
};

const Template = (args) => <DropdownButton {...args} ><p>Drop down content</p></DropdownButton>;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Dropdown',
    icon: <Icon/>,
    showContent: false,
    setShowContent: () => {
    }
};
export const WithText = Template.bind({});
WithText.args = {
    ...Default.args,
    title: 'DropDown with text',
    icon: <p>Text drop down</p>
};
export const Secondary = Template.bind({});
Secondary.args = {
    ...Default.args,
    title: 'Secondary DropDown',
    variant: 'secondary'
};

export const Large = Template.bind({});
Large.args = {
    ...Default.args,
    size: 'large',
    title: 'Large DropDown',
};

export const Small = Template.bind({});
Small.args = {
    ...Default.args,
    size: 'small',
    title: 'Small DropDown',
};
export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
    title: 'Disabled DropDown',
};
export const Active = Template.bind({});
Active.args = {
    ...Default.args,
    active: true,
    title: 'Active DropDown',
};
