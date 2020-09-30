import React from "react";
import Pill from "./Pill";

export default {
    title: 'Pill',
    component: Pill
}
const Template = (args) => <Pill {...args}> Item 1</Pill>
export const Default = Template.bind({});
Default.args = {
    pillCloseHandler: () => {
    }
}