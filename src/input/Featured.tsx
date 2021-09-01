import React from "react";
import "./assets/Featured.scss";

export const Featured: React.FC<FeaturedProps> = ({isFeatured, onClick}) => {

    return (
        <div className="div-featured">
            <span className={isFeatured ? "featured-star" : "un-featured-star"} onClick={onClick}>

            </span>
        </div>
    );
}

export interface FeaturedProps {
    isFeatured: boolean;
    onClick: () => void;
}