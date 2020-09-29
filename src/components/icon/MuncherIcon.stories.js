import React from 'react';
import MuncherIcon from "./MuncherIcon";

export default {
    title: 'Icons/Muncher Icon',
    component: MuncherIcon,
};

const Template = (args) => <MuncherIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
    variant: "large",
};

export const Small = Template.bind({});
Small.args = {
    variant: "small",
};
