import type {Meta} from '@storybook/react';
import {StoryObj} from "@storybook/react";
import "./assets/DropdownButtonStory.scss";
import {NavigateButton} from "../../components/button/NavigateButton.tsx";

const meta: Meta<typeof NavigateButton> = {
    component: NavigateButton,
    title: 'Buttons/Navigate Button',
    decorators: [
        (Story) => (
            <div style={{padding: '2rem', background: '#f5f5f5'}}>
                <Story/>
            </div>),
    ],
    render: (args) => <NavigateButton {...args} />
};

export default meta;
type Story = StoryObj<typeof NavigateButton>;
export const Default: Story = {
    args: {
        direction: "right"
    }
};
export const Left: Story = {
    args: {
        direction: "left"
    }
};
export const Disabled: Story = {
    args: {
        direction: "left",
        isDisabled: true
    }
};
