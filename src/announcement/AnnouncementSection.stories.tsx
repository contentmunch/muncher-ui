import React from "react";
import {AnnouncementSection, AnnouncementSectionProps} from "./AnnouncementSection";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Section/Announcement",
    component: AnnouncementSection
} as Meta;

const Template: Story<AnnouncementSectionProps> = () => {
    return (
        <div>
            <p><strong>This section loads after 3 seconds</strong></p>
            <AnnouncementSection handleContactClicked={() => {
                console.log("contact clicked");
            }}/>
        </div>
    );
};
export const Default = Template.bind({});