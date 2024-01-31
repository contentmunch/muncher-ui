import type {Meta, StoryObj} from '@storybook/react';
import {IconBadge} from "./IconBadge";
import {Button} from "../button/Button";

const meta: Meta<typeof IconBadge> = {
    component: IconBadge,
    title: 'Data Display/IconBadge',
    render: (args) => <div style={
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }><Button>Button</Button><IconBadge {...args}/></div>,
};

export default meta;
type Story = StoryObj<typeof IconBadge>;
export const Default: Story = {
    args: {
        text: '12',
        onClick: () => {
            console.log("clicked");
        }
    }
};
