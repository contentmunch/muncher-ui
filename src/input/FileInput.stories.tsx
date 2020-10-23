import React from 'react';
import {FileInput, FileInputProps} from "./FileInput";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Input/File Input',
    component: FileInput,
} as Meta;

const Template: Story<FileInputProps> = (args) => <FileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "file",
    label: "upload file",
    required: true,
    setFiles: () => {
    }
};
