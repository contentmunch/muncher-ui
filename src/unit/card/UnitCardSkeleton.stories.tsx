import React from "react";
import {Meta, Story} from "@storybook/react";
import {UnitCardSkeleton} from "./UnitCardSkeleton";

export default {
    title: "Card/Unit Card Skeleton",
    component: UnitCardSkeleton
} as Meta;

export const Default: Story = () => {

    return (
        <UnitCardSkeleton/>
    );
};