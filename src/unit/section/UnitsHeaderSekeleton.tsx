import React from "react";
import "./assets/UnitsHeader.scss";
import "../filter/assets/UnitDropDown.scss";
import Skeleton from "react-loading-skeleton";

export const UnitsHeaderSkeleton: React.FC<UnitsHeaderSkeletonProps> = ({isCondensed}) => {

    return (
        <header className="units-header">
            <div className={isCondensed ? "" : "container"}>
                <h2><Skeleton/></h2>
                <div className="units-filters">
                    <div className="filter-group">
                        <div className="filters">
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                        </div>
                    </div>
                    <div className="filter-group">
                        <Skeleton/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export interface UnitsHeaderSkeletonProps {
    isCondensed?: boolean;
}