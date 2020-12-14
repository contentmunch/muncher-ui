import React from "react";
import {Meta, Story} from "@storybook/react";
import {ContactSection, ContactSectionProps} from "./ContactSection";

export default {
    title: "Section/Contact",
    component: ContactSection
} as Meta;

const Template: Story<ContactSectionProps> = (args) => {
    return (
        <ContactSection {...args}/>
    );
};
export const Default = Template.bind({});

Default.args = {
    subject: "Test subject",
    to: "asikpradhan@icloud.com",
    cc: "asikpradhan@gmail.com",
    variant: "long"
}