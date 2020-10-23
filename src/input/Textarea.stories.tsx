import React from 'react';
import {Textarea, TextareaProps} from "./Textarea";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Input/Text area',
    component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "question",
    placeHolder: "Type your question"
};