import React, {ReactElement, useState} from "react";
import "./assets/ItemSlider.scss";
import {NavigateButton} from "../button/NavigateButton";
import {Size} from "../button/Button";

export const ItemSlider: React.FC<ItemSliderProps> = (
    {sliderItems, navButtonSize, navButtonWeight}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const style = (index: number) => {
        return {transform: `translateX(${100 * (index - currentIndex)}%)`}
    };

    return (
        <div className="muncher-item-slider">

            {sliderItems.length > 1 && currentIndex > 0 ?
                <NavigateButton direction="left" size={navButtonSize} weight={navButtonWeight}
                                onClick={() => {
                                    if (currentIndex === 0)
                                        setCurrentIndex(sliderItems.length - 1);
                                    else
                                        setCurrentIndex(currentIndex - 1);
                                }}/> : ""
            }
            <div className="slider-container">
                {sliderItems.map((sliderItem, index) =>
                    <div className="slider-item"
                         style={style(index)}
                         key={"slider-item" + index}>
                        {
                            sliderItem
                        }
                    </div>
                )}
            </div>
            {sliderItems.length > 1 && currentIndex < sliderItems.length - 1 ?
                <NavigateButton direction="right" size={navButtonSize} weight={navButtonWeight}
                                onClick={() => {
                                    if (currentIndex === sliderItems.length - 1)
                                        setCurrentIndex(0);
                                    else
                                        setCurrentIndex(currentIndex + 1);
                                }}/> : ""}

        </div>
    );
};

export interface ItemSliderProps {
    sliderItems: ReactElement[];
    navButtonSize?: Size;
    navButtonWeight?: 1 | 2 | 3;
}

ItemSlider.defaultProps = {
    navButtonSize: 'large',
    navButtonWeight: 2
};

