import React from "react";
import {Meta, Story} from "@storybook/react";
import {CardSlider, CardSliderProps} from "./CardSlider";
import {Card} from "./data/Card";

export default {
    title: "Slider/Card Slider",
    component: CardSlider
} as Meta;

const Template: Story<CardSliderProps> = () => {
    const cards: Card[] = [
        {
            img: "https://s3.amazonaws.com/launch-pad-production/photos/9471/small_original/IMG_6181_2_3_Balancer.jpg?1564427312",
            text: "1 BD/ 1 BTH",
            url: "https://apartments.scholarsrooftop.com/units/478/madrid",
            title: "Madrid"
        },
        {
            img: "https://s3.amazonaws.com/launch-pad-production/photos/12021/small_original/IMG_8443.jpg?1580157587",
            text: "1 BD/ 1 BTH",
            url: "https://apartments.scholarsrooftop.com/units/480/barcelona",
            title: "Barcelona"
        }
    ];

    return (
        <div>
            <CardSlider cards={cards}/>
        </div>
    );
};

export const Default = Template.bind({});