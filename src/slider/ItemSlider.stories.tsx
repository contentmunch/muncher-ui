import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ItemSlider} from "./ItemSlider";

export default {
    title: "Slider/Item Slider",
    component: ItemSlider
} as ComponentMeta<typeof ItemSlider>;

const Template: ComponentStory<typeof ItemSlider> = (args) => <ItemSlider {...args}/>;

export const Default = Template.bind({});

Default.args = {
    sliderItems: [<img src="https://www.renaissancerentals.com/api/asset/download/1s5-NPYxlB5NRsMMhX8MB-pDsN1bqEoZ_"
                       className="slide" width="500" height="300"/>,
        <img src="https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_"
             className="slide" width="500" height="300"/>,
        <img src="https://www.renaissancerentals.com/api/asset/download/1rtcmnLUABimyLpQ6kWm2GD3kJLNMBjKB"
             className="slide" width="500" height="300"/>,
        <div style={{width: '500px', height: '300px', background: "green"}}><p>This is a paragraph</p></div>

    ]
}

export const SingleItem = Template.bind({});
SingleItem.args = {
    sliderItems: [<img src="https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_"
                       className="slide" width="500" height="300"/>]
}
