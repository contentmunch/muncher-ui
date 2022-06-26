import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Ul} from "./Ul";
import {Li} from "./Li";

export default {
    title: "List/Unordered List",
    component: Ul
} as ComponentMeta<typeof Ul>;

export const Default: ComponentStory<typeof Ul> = () =>
    <>
        <h3>This is Un-ordered List</h3>
        <Ul>
            <Li isFeatured={true}>Bonus room</Li>
            <Li bulletColor="green" bulletIcon="check">Gourmet kitchen</Li>
            <Li>Wood floors</Li>
            <Li bulletIcon="chevron-right">All-electric</Li>
            <Li>On-site recycling</Li>
        </Ul>
    </>;


