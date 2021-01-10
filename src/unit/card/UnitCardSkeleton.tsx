import React from "react";
import "./assets/UnitCard.scss";
import Skeleton from "react-loading-skeleton";

export const UnitCardSkeleton: React.FC = () => {
    return (

        <div className="unit-card">
            <Skeleton height={250}/>
            <div className="unit-card-footer">
                <div className="left">
                    <h3 className="truncate">
                        <Skeleton width={300}/>
                    </h3>

                    <p><Skeleton width={100}/></p>
                </div>
                <div className="right">
                    <p><Skeleton width={100}/></p>
                    <p><Skeleton width={100}/></p>
                </div>

            </div>
        </div>
    );
}