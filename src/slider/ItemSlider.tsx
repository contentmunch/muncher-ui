import React, {ReactElement, useState} from "react";
import "./assets/ItemSlider.scss";
import {NavigateButton} from "../button/NavigateButton";

export const ItemSlider: React.FC<ItemSliderProps> = ({sliderItems}) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className="muncher-item-slider">
            <div className="slider-container">
                <NavigateButton direction="left" size="large" weight={2}
                                onClick={() => {
                                    if (currentIndex === 0)
                                        setCurrentIndex(sliderItems.length - 1);
                                    else
                                        setCurrentIndex(currentIndex - 1);
                                }}/>
                {sliderItems.map((sliderItem, index) =>
                    <div className={index === currentIndex ? "slider-item current fade" : "slider-item fade"}
                         key={"slider-item" + index}>
                        {
                            sliderItem
                        }
                    </div>
                )}
                <NavigateButton direction="right" size="large" weight={2}
                                onClick={() => {
                                    if (currentIndex === sliderItems.length-1)
                                        setCurrentIndex(0);
                                    else
                                        setCurrentIndex(currentIndex + 1);
                                }}/>
            </div>
        </div>
    );
};

export interface ItemSliderProps {
    sliderItems: ReactElement[];
}

