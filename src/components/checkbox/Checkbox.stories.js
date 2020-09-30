import React from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Checkbox",
    component: Checkbox
}
const Template = (args) => <Checkbox {...args}> Item 1</Checkbox>

export const Default = Template.bind({});
Default.args = {
    name: 'muncher-checkbox',

}