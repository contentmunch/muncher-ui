import React from 'react';
import {Input, InputProps} from "./Input";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Input/Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "query",
    type: "text",
    placeholder: "Type your query"

};
export const TextWithLabel = Template.bind({});
TextWithLabel.args = {
    ...Default.args,
    label: 'Search',
    required: true,
};
export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
    ...TextWithLabel.args,
    icon: "muncher"
};
export const Color = Template.bind({});
Color.args = {
    ...Default.args,
    type: 'color'
};
export const Date = Template.bind({});
Date.args = {
    ...Default.args,
    type: 'date'
};
export const DateTime = Template.bind({});
DateTime.args = {
    ...Default.args,
    type: 'datetime-local'
};
export const Email = Template.bind({});
Email.args = {
    ...Default.args,
    type: 'email',
    placeholder: "Email",
    icon: "mail"
};
export const Month = Template.bind({});
Month.args = {
    ...Default.args,
    type: 'month',
};
export const Number = Template.bind({});
Number.args = {
    ...Default.args,
    type: 'number',
    placeholder: "Phone number",
    icon: "phone"
};
export const Password = Template.bind({});
Password.args = {
    ...Default.args,
    type: 'password',
    placeholder: "Type password"
};
export const Range = Template.bind({});
Range.args = {
    ...Default.args,
    type: 'range'
};
export const Search = Template.bind({});
Search.args = {
    ...Default.args,
    type: 'search',
};
export const Tel = Template.bind({});
Tel.args = {
    ...Default.args,
    type: 'tel',
};
export const Time = Template.bind({});
Time.args = {
    ...Default.args,
    type: 'time',
};
export const Url = Template.bind({});
Url.args = {
    ...Default.args,
    type: 'url',
    placeholder: 'type url'
};
export const Week = Template.bind({});
Week.args = {
    ...Default.args,
    type: 'week',
};
