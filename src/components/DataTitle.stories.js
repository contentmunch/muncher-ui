import React from "react";

export default {
    title: 'Utils/DataTitle',
}

const Template = (args) => <a href='#' {...args}>Hover here</a>
export const Default = Template.bind({});
Default.args = {
    'data-title': 'This will show up on hover'
}
