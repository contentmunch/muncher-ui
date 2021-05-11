import React from "react";
import {Meta, Story} from "@storybook/react";
import {Tabs} from "./Tabs";

export default {
    title: "Surfaces/Tab",
    component: Tabs
} as Meta;

const Template: Story = () =>
    <Tabs>{{
        tabs: [
            {
                header: "First",
                body: <p>This is first body</p>
            },
            {
                header: "Second",
                body: <p>This is second body</p>
            },
            {
                header: "Third",
                body: <p>This is third body</p>
            }
        ]
    }}</Tabs>;

export const Default = Template.bind({});
Default.args = {};
