import React from "react";
import Radio from "./Radio";

export default {
    title: "Input/Radio",
    component: Radio
}
const Template = (args) => <Radio {...args}/>

export const Default = Template.bind({});
Default.args = {
    name: 'muncher-radio',
    label: 'radio',

}