import React, {useState} from 'react';
import {DropdownButton, DropdownButtonProps} from "./DropdownButton";
import {Meta, Story} from '@storybook/react';
import {Icon} from "..";
import "./assets/DropdownButtonStory.scss";

export default {
    title: 'Buttons/Dropdown Button',
    component: DropdownButton,
    decorators: [(story: () => React.ReactNode) => <div
        style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
    args: {element: <p>drop down&nbsp;<span className="small">&#9660;</span></p>}
} as Meta;

const Template: Story<DropdownButtonProps> = (args) => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div className="muncher-dropdown-story">
            <span>a long text&nbsp;</span>
            <DropdownButton {...args} showContent={showContent} setShowContent={setShowContent}>
                <p>Drop down content little longer</p>
            </DropdownButton>
        </div>
    )
};

export const Default = Template.bind({});
Default.args = {
    drop: "middle"
};

export const DropRight = Template.bind({});
Default.args = {
    drop: "right"
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
    ...Default.args,
    size: 'small',
    title: 'Icon dropdown text',
    element: <Icon name='muncher'/>
};
export const RoundedDropdown = Template.bind({});
RoundedDropdown.args = {
    ...IconDropdown.args,
    title: 'Rounded dropdown',
    size: 'small',
    rounded: true,
    variant: 'secondary',
    element: <Icon name='muncher' size='small' weight={1}/>
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
