import React from "react";
import {Progress, ProgressProps} from "./Progress";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "Feedback/Progress",
    component: Progress
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress{...args}/>;

export  const Default = Template.bind({});
Default.args = {
    max:100,
    value: 30,
    label: "Progress: "
};