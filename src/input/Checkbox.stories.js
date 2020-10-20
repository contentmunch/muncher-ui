import React from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Input/Checkbox",
    component: Checkbox
}
const Template = (args) => <Checkbox {...args}/>

export const Default = Template.bind({});
Default.args = {
    name: 'muncher-checkbox',
    label: 'Item 1',
}