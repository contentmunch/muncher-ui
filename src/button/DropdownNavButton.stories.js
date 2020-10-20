import React from 'react';
import DropdownNavButton from "./DropdownNavButton";

export default {
    title: 'Buttons/Dropdown Nav Button',
    component: DropdownNavButton,
    decorators: [story => <div style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
};

const Template = (args) => <DropdownNavButton {...args} ><p>Drop down content</p></DropdownNavButton>;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Nav Dropdown',
    element: <p>drop down <span className="small">&#9660;</span></p>
};
