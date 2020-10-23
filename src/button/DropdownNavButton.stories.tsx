import React from 'react';
import {DropdownNavButton, DropdownNavButtonProps} from "./DropdownNavButton";
import {Meta, Story} from '@storybook/react/types-6-0';

export default {
    title: 'Buttons/Dropdown Nav Button',
    component: DropdownNavButton,
    decorators: [(story: () => React.ReactNode) => <div
        style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
} as Meta;

const Template: Story<DropdownNavButtonProps> = (args) => <DropdownNavButton {...args} ><p>Drop down content</p>
</DropdownNavButton>;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Nav Dropdown',
    element: <p>drop down <span className="small">&#9660;</span></p>
};
