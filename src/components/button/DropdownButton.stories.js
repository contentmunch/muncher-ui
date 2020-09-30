import React from 'react';
import DropdownButton from "./DropdownButton";
import Icon from "../icon/Icon";

export default {
    title: 'Buttons/Dropdown Button',
    component: DropdownButton,
    decorators: [story => <div style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
};

const Template = (args) => <DropdownButton {...args} ><p>Drop down content</p></DropdownButton>;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Dropdown',
    element: <p>drop down</p>,
    showContent: false,
    setShowContent: () => {
    }
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
    ...Default.args,
    size: 'small',
    title: 'DropDown with text',
    element: <Icon name='muncher'/>
};
export const WithText = Template.bind({});
WithText.args = {
    ...Default.args,
    title: 'DropDown with text',
    element: <p>Text drop down</p>
};

export const NavDropDown = Template.bind({});
NavDropDown.args = {
    ...Default.args,
    title: 'Nav drop down',
    drop: 'nav',
    element: <h4>Nav Item</h4>
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
