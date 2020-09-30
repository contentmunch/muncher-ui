import React from "react";
import Badge from "./Badge";
import Icon from "../icon/Icon";

export default {
    title: 'Badge',
    component: Badge,
    decorators: [story => <div style={{padding: '2rem', maxWidth: '7rem'}}>{story()}</div>]
}

const Template = (args) => <Badge {...args}>Muncher&nbsp;&nbsp;<Icon name='muncher'/></Badge>

export const Default = Template.bind({});
Default.args = {};