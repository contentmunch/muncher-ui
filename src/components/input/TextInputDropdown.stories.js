import React from 'react';
import TextInputDropdown from "./TextInputDropdown";

export default {
    title: 'Input/Text Input Dropdown',
    component: TextInputDropdown,
};

const Template = (args) => <TextInputDropdown {...args} ><p>Drop down content</p></TextInputDropdown>;

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