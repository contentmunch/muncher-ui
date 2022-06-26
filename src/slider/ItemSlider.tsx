import React, {ReactElement, useState} from "react";
import "./assets/ItemSlider.scss";
import {NavigateButton} from "../button/NavigateButton";
import {Size} from "../button/Button";

export const ItemSlider: React.FC<ItemSliderProps> = (
    {sliderItems, navButtonSize, navButtonWeight}) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className="muncher-item-slider">
            <div className="slider-container">
                {sliderItems.length > 1 ?
                    <NavigateButton direction="left" size={navButtonSize} weight={navButtonWeight}
                                    onClick={() => {
                                        if (currentIndex === 0)
                                            setCurrentIndex(sliderItems.length - 1);
                                        else
                                            setCurrentIndex(currentIndex - 1);
                                    }}/> : ""
                }

                {sliderItems.map((sliderItem, index) =>
                    <div className={index === currentIndex ? "slider-item current fade" : "slider-item fade"}
                         key={"slider-item" + index}>
                        {
                            sliderItem
                        }
                    </div>
                )}
                {sliderItems.length > 1 ?
                    <NavigateButton direction="right" size={navButtonSize} weight={navButtonWeight}
                                    onClick={() => {
                                        if (currentIndex === sliderItems.length - 1)
                                            setCurrentIndex(0);
                                        else
                                            setCurrentIndex(currentIndex + 1);
                                    }}/> : ""}
            </div>
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

