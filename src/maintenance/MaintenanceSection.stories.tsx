import React from "react";
import {Meta, Story} from "@storybook/react";
import {MaintenanceSection} from "./MaintenanceSection";

export default {
    title: "Section/Maintenance",
    component: MaintenanceSection
} as Meta;

export const Default: Story = () => <MaintenanceSection/>;