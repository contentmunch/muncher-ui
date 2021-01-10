import React from "react";
import {Meta, Story} from "@storybook/react";
import {TeamSection, TeamSectionProps} from "./TeamSection";

export default {
    title: "Section/Team",
    component: TeamSection

} as Meta;

const Template: Story<TeamSectionProps> = (args) => <TeamSection {...args}/>;

export const Default = Template.bind({});

Default.args = {
    communityId: "covenanter-hill"
}

export const AllMembers = Template.bind({});
