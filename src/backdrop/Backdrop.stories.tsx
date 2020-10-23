import React from "react";
import {Backdrop, BackdropProps} from "./Backdrop";
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: "Feedback/Backdrop",
    component: Backdrop,
}as Meta;
const Template:Story<BackdropProps> = (args) => <Backdrop {...args}/>;

export const Default = Template.bind({});
Default.args = {
    show: true,
    backdropClickHandler: () => {
    }
}