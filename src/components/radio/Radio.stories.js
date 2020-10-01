import React from "react";
import Radio from "./Radio";

export default {
    title: "Input/Radio",
    component: Radio
}
const Template = (args) => <Radio {...args}> Item 1</Radio>

export const Default = Template.bind({});
Default.args = {
    name: 'muncher-radio',

}