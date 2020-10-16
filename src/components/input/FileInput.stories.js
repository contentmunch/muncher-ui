import React from 'react';
import FileInput from "./FileInput";

export default {
    title: 'Input/File Input',
    component: FileInput,
};

const Template = (args) => <FileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "file",
    label: "upload file",
    required: true,
    progress: 50,

};