import React from "react";
import {Meta, Story} from "@storybook/react";
import {UnitCard, UnitCardProps} from "./UnitCard";
import {Unit} from "../..";

export default {
    title: "Card/Unit Card",
    component: UnitCard
} as Meta;

export const Default: Story<UnitCardProps> = () => {
    const unit: Unit = {
        availability: ["April", "May"],
        community: "summer house",
        coverImg:"https://s3.amazonaws.com/launch-pad-production/photos/12953/small_original/IMG_9237.jpg?1590698919",
        bathrooms: 2,
        bedrooms: 2,
        featured: true,
        img: "https://s3.amazonaws.com/launch-pad-production/photos/12953/small_original/IMG_9237.jpg?1590698919",
        minRate: 2000,
        rate: "$2000 - $2300",
        squareFoot: 1500,
        style: "apartment",
        title: " my unit",
        url: "https://apartments.summerhouseatindiana.com/units/346/mccormick",
        video: "https://www.youtube.com/watch?v=m9eqmQx0w30",
        virtualTour: "https://www.paneek.net/#/tour/view/4239"
    }

    return (
        <UnitCard unit={unit}/>
    );
};