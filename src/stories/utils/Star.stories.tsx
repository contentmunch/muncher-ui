import type {Meta, StoryObj} from '@storybook/react';
import {Star} from "../../components";

const meta: Meta<typeof Star> = {
    component: Star,
    title: 'Utils/Star',
    render: (args) => <Star {...args}/>,
};

export default meta;
type Story = StoryObj<typeof Star>;
export const Default: Story = {
    args: {
        rating: 3.4
    }
};
