import React from "react";
import {Meta, Story} from "@storybook/react";
import {TeamCard, TeamCardProps} from "./TeamCard";
import {TeamMember} from "../data/TeamMember";

export default {
    title: "Card/Team Card",
    component: TeamCard
} as Meta;

export const Default: Story<TeamCardProps> = () => {
    const member: TeamMember = {
        name: "John Cena",
        jobTitle: "Wrestler",
        blogUrl: "https://myblog.com",
        emailAddress: "johncena@gmail.com"
    } as TeamMember;
    return (
        <TeamCard member={member}/>
    );
};