import React from "react";
import {Meta, Story} from "@storybook/react";
import {Table} from "./Table";
import "./assets/Table.stories.scss";

export default {
    title: "Data Display/Table",
    component: Table
} as Meta;

const Template: Story = () =>
    <div className="story-table">
        <Table>{{
            header: [
                {name: "Id", title: "Id"},
                {name: "Name", title: "First name and Last name"},
                {name: "Email", title: "Email Address", visibility: "large-screen"},
                {name: "Phone", title: "Phone Number", visibility: "large-screen"},
                {name: "Eligibility", title: "Eligibility"},

            ], rows: [
                [
                    {value: "1", content: <a href="google.com">1</a>},
                    {value: "James Dean", content: "James Dean"},
                    {value: "jamesdean@gmail.com", content: <a href="mailto:jamesdean@gmail.com">jamesdean@gmail.com</a>},
                    {value: "123456", content: <a href="test:123456">123-456</a>},
                    {value: "false", content: "No"},
                ],
                [
                    {value: "2", content: <a href="google.com">2</a>},
                    {value: "Dean Smith", content: "Dean Smith"},
                    {value: "dean@gmail.com", content: <a href="mailto:dean@gmail.com">dean@gmail.com</a>},
                    {value: "111456", content: <a href="test:111456">111-456</a>},
                    {value: "true", content: "Yes"},
                ],
                [
                    {value: "3", content: <a href="google.com">3</a>},
                    {value: "James Buckner", content: "James Buckner"},
                    {value: "james@gmail.com", content: <a href="mailto:james@gmail.com">james@gmail.com</a>},
                    {value: "123777", content: <a href="test:123777">123-777</a>},
                    {value: "true", content: "Yes"},
                ],
                [
                    {value: "4", content: <a href="google.com">4</a>},
                    {value: "Robert Muller", content: "Robert Muller"},
                    {value: "muller@gmail.com", content: <a href="mailto:muller@gmail.com">muller@gmail.com</a>},
                    {value: "112576", content: <a href="test:112576">112-576</a>},
                    {value: "true", content: "Yes"},
                ],
                [
                    {value: "5", content: <a href="google.com">5</a>},
                    {value: "Herman Miller", content: "Herman Miller"},
                    {value: "millern@gmail.com", content: <a href="mailto:millern@gmail.com">millern@gmail.com</a>},
                    {value: "116754", content: <a href="test:116754">116-754</a>},
                    {value: "false", content: "No"},
                ],
            ]
        }}</Table>
    </div>
    ;

export const Default = Template.bind({});
Default.args = {};
