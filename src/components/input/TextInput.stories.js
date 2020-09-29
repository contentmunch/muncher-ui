import React from 'react';
import TextInput from "./TextInput";

export default {
    title: 'Input/Text Input',
    component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "query",
    placeHolder: "Type your query"

};
export const WithFocus = Template.bind({});
WithFocus.args = {
    ...Default.args,
    focus: true
};
