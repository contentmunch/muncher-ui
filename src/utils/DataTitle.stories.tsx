import type {Meta, StoryObj} from '@storybook/react';
import {Star} from "../star/Star";

const meta: Meta<typeof Star> = {
    title: 'Utils/DataTitle',
    render: (args) => <a href='#home' {...args}>Hover here</a>,
};

export default meta;
type Story = StoryObj;
export const Default: Story = {
    args: {
        'data-title': 'This will show up on hover'
    }
};
