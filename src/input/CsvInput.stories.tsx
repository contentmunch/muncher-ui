import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CsvInput, CsvInputProps} from "./CsvInput";

export default {
    title: 'Input/Csv Input',
    component: CsvInput,
} as Meta;

const Template: Story<CsvInputProps> = (args) => <CsvInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "file",
    required: true,
    isUploading: true,
    handleOnChange: (file: File) => {

    }
};
