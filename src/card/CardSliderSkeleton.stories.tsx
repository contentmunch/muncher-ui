import React from "react";
import {Meta, Story} from "@storybook/react";
import {CardSliderSkeleton} from "./CardSliderSkeleton";

export default {
    title: "Slider/Card Slider Skeleton",
    component: CardSliderSkeleton
} as Meta;

export const Default: Story = () => <CardSliderSkeleton/>;
