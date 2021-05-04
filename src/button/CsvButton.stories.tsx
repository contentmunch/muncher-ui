import React from 'react';
import {Meta, Story} from '@storybook/react';
import {CsvButton, CsvButtonProps} from "./CsvButton";

export default {
    title: 'Buttons/CSV Button',
    component: CsvButton,
} as Meta;

const Template: Story<CsvButtonProps> = (args) => <CsvButton {...args} >Button</CsvButton>;

export const Default = Template.bind({});
Default.args = {
    title: 'Download Csv',
    variant:'secondary',
    header: ['Name', 'Email'],
    filename:'download',
    data: [
        ['Sam Jackson', 'sam@gmail.com'],
        ['Bob Levy', 'levy_bob@gmail.com']
    ]
};
