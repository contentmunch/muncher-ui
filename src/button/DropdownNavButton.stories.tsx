import type {Meta} from '@storybook/react';
import {StoryObj} from "@storybook/react";
import "./assets/DropdownButtonStory.scss";
import {DropdownNavButton} from "./DropdownNavButton";

const meta: Meta<typeof DropdownNavButton> = {
    component: DropdownNavButton,
    title: 'Buttons/Dropdown Nav Button',
    decorators: [
        (Story) => (
            <div style={{padding: '2rem', background: '#f5f5f5'}}>
                <Story/>
            </div>)
    ],
    render: (args) => <DropdownNavButton {...args} ><p>Drop down content</p></DropdownNavButton>
};

export default meta;
type Story = StoryObj<typeof DropdownNavButton>;
export const Default: Story = {
    args: {
        title: 'Default Nav Dropdown',
        element: <p>drop down <span className="small">&#9660;</span></p>
    }
};

export const DropLeft: Story = {
    args: {
        title: 'Default Nav Dropdown',
        dropLeft: true,
        element: <p>drop down <span className="small">&#9660;</span></p>
    }
};
