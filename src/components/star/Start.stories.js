import React from "react";
import Star from "./Star";

export default {
    title: 'Utils/Star',
    component: Star
}

const Template = (args) => <Star {...args}/>

export const Default = Template.bind({});
Default.args = {
    rating: 3.4
}