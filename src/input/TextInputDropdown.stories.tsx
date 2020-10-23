import React from 'react';
import {TextInputDropdown, TextInputDropdownProps} from "./TextInputDropdown";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Input/Text Input Dropdown',
    component: TextInputDropdown,
} as Meta;

const Template: Story<TextInputDropdownProps> = (args) => <TextInputDropdown {...args} >
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p><p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>
    <p>Drop down content</p>

</TextInputDropdown>;

export const Default = Template.bind({});
Default.args = {
    focus: true,
    inputPlaceHolder: "Start typing..",
    handleInputChange: (input) => {
        console.log(input);
    },
    showContent: false,
    setShowContent: () => {
    }
};