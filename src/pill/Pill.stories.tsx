import React from "react";
import {Pill, PillProps} from "./Pill";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Data Display/Pill',
    component: Pill
} as Meta;

const Template: Story<PillProps> = (args) => <Pill {...args}> Item 1</Pill>
export const Default = Template.bind({});
Default.args = {
    pillCloseHandler: () => {
    }
}