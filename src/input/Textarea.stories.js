import React from 'react';
import Textarea from "./Textarea";

export default {
    title: 'Input/Text area',
    component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "question",
    placeHolder: "Type your question"

};
