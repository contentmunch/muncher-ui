import React from "react";
import "./assets/CardSlider.scss";
import Skeleton from "react-loading-skeleton";

export const CardSliderSkeleton: React.FC = () => {

    return (

        <div className="card-slider">
            <div className="card-slider-body">
                <Skeleton className="card-slider-image"/>

            </div>
            <div className="card-slider-footer">
                <h3><Skeleton/></h3>
                <h4><Skeleton/></h4>
            </div>
        </div>

    );
}
