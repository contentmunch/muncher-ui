import React from "react";
import {Meta, Story} from "@storybook/react";
import {Featured, FeaturedProps} from "./Featured";

export default {
    title: "Input/Featured",
    component: Featured
} as Meta;

const Template: Story<FeaturedProps> = (args) => <Featured {...args}/>

export const Default = Template.bind({});
Default.args = {
    isFeatured: true,
    onClick: () => {
        console.log("clicked");
    }

}

export const UnFeatured = Template.bind({});
UnFeatured.args = {
    isFeatured: false,
    onClick: () => {
        console.log("clicked");
    }

}
