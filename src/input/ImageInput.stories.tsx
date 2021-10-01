import React from 'react';
import {ImageInput, ImageInputProps} from "./ImageInput";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Input/Image Input',
    component: ImageInput,
} as Meta;

const Template: Story<ImageInputProps> = (args) => <ImageInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "file",
    label: "upload image",
    required: true,
    multiple: true,
    setFiles: () => {
    }
};
