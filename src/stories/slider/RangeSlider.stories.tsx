import type {Meta} from '@storybook/react';
import {StoryFn} from "@storybook/react";
import {RangeSlider} from "../../components";
import {useState} from "react";
import "./assets/ItemSliderStories.scss";

const meta: Meta<typeof RangeSlider> = {
    component: RangeSlider,
    title: 'Slider/Range Slider'
};
export default meta;
type Story = StoryFn<typeof meta>;
export const Default: Story = (args) => {
    const [minValue, setMinValue] = useState(20);
    const [maxValue, setMaxValue] = useState(600);
    return (
        <div className="slider-story">
            <RangeSlider {...args} min={1} max={1000}
                         minValue={minValue} maxValue={maxValue}
                         setMinValue={setMinValue} setMaxValue={setMaxValue}
                         numberFormatter={num => new Intl.NumberFormat('en-UK', {
                             style: 'currency',
                             currency: 'GBP'
                         }).format(num)}

            />
        </div>
    );
}

