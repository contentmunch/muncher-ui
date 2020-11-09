import React, {useState} from "react";
import {Pill, PillProps} from "./Pill";
import {Meta, Story} from "@storybook/react";
import "./assets/PillStory.scss";
import {Button} from "..";

export default {
    title: 'Data Display/Pill',
    component: Pill
} as Meta;

const Template: Story<PillProps> = () => {
    const [pills, setPills] = useState(["Pill 1"]);
    const addPills = () => {
        const currentPills = [...pills];
        currentPills.push("Pill " + (currentPills.length + 1));
        setPills(currentPills);
    };
    const removePill = (pill: string) => {
        const currentPills = [...pills];
        const index = currentPills.indexOf(pill);
        currentPills.splice(index, 1);
        setPills(currentPills);
    };
    return (
        <div className="muncher-pill-story">

            <Button variant={"tertiary"} onClick={addPills}>Add pills</Button>
            <br/><br/>
            {pills.map(pill => (
                <Pill key={pill} pillCloseHandler={() => removePill(pill)}>{pill}</Pill>
            ))}

        </div>
    );
}
export const Default = Template.bind({});