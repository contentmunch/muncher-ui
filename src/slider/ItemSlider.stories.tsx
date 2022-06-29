import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ItemSlider} from "./ItemSlider";
import "./assets/ItemSliderStories.scss";

export default {
    title: "Slider/Item Slider",
    component: ItemSlider
} as ComponentMeta<typeof ItemSlider>;

const Template: ComponentStory<typeof ItemSlider> = (args) => <div className="container"><div className="slider-story"><ItemSlider {...args}/></div> </div> ;

export const Default = Template.bind({});

Default.args = {
    sliderItems: [<div className="slider-story--item"><img src="https://www.renaissancerentals.com/api/asset/download/1s5-NPYxlB5NRsMMhX8MB-pDsN1bqEoZ_"
                            className="slide" /></div>,
        <div className="slider-story--item"><img src="https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_"
                  className="slide" /></div>,
        <div className="slider-story--item"><img src="https://www.renaissancerentals.com/api/asset/download/1rtcmnLUABimyLpQ6kWm2GD3kJLNMBjKB"
                  className="slide"/></div>,


    ]
}

export const SingleItem = Template.bind({});
SingleItem.args = {
    sliderItems: [<img src="https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_"
                       className="slide" width="500" height="300"/>]
}
