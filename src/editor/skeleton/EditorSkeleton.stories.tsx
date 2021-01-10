import React from "react";
import {EditorSkeleton} from "./EditorSkeleton";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "Muncher/Skeleton",
    component: EditorSkeleton
} as Meta;

const Template: Story = (() => <EditorSkeleton/>);

export const Default = Template.bind({});
