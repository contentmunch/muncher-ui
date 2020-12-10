import React from "react";
import {Meta, Story} from "@storybook/react";
import {UnitsSection, UnitsSectionProps} from "./UnitsSection";

export default {
    title: "Section/Units",
    component: UnitsSection
} as Meta;

const Template: Story<UnitsSectionProps> = (args => {
    return (
        <UnitsSection {...args}/>
    );
});
export const Default = Template.bind({});
Default.args = {
    domain: "porto-flats",
    skeletonCount: 20,
    title: "Find Your Apartment"
};