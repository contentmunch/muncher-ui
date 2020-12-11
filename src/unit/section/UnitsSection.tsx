import React, {useEffect, useState} from "react";
import "./assets/UnitsSection.scss";
import {UnitsHeader} from "./UnitsHeader";
import {Domain, Unit, UnitCard, UnitCardSkeleton} from "../..";
import {filtersFrom, getUnits, sortUnits} from "../service/UnitService";
import {UnitFilters} from "../data/UnitFilters";
import {UnitsHeaderSkeleton} from "./UnitsHeaderSekeleton";

export const UnitsSection: React.FC<UnitsSectionProps> = ({title, domain, filterFunction, skeletonCount, isCondensed}) => {
    const [units, setUnits] = useState<Unit[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredUnits, setFilteredUnits] = useState<Unit[]>([]);
    const [filteredUnitsCount, setFilteredUnitsCount] = useState<number>(0);
    const [filters, setFilters] = useState<UnitFilters>({} as UnitFilters);

    useEffect(() => {

        getUnits(domain, filterFunction).then(units => {
            const sortedUnits = sortUnits(units, "featured");
            setUnits(sortedUnits);
            setFilters(filtersFrom(sortedUnits));
            setFilteredUnits(sortedUnits);
            setFilteredUnitsCount(sortedUnits.length);
            setIsLoading(false);
        });
    }, [domain, filterFunction]);

    const setCurrentUnits = (currentUnits: Unit[]) => {
        setFilteredUnits(currentUnits);
        setFilteredUnitsCount(currentUnits.length);
    }

    return (
        <section className="section-units">
            <div className={isCondensed ? "container" : ""}>
                {isLoading ? <UnitsHeaderSkeleton isCondensed={isCondensed}/> :
                    <UnitsHeader title={title} filters={filters} units={units} setCurrentUnits={setCurrentUnits}
                                 isCondensed={isCondensed} currentUnitsCount={filteredUnitsCount}/>}

                <div className={isCondensed ? "" : "container"}>
                    <div className="units-body">
                        {isLoading ?
                            [...Array(skeletonCount)].map((_, i) => (<UnitCardSkeleton key={i}/>)) :
                            filteredUnits.map((unit, i) => (<UnitCard unit={unit} key={i}/>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export interface UnitsSectionProps {
    title?: string;
    domain: Domain;
    skeletonCount?: number;
    filterFunction?: (unit: Unit) => boolean;
    isCondensed?: boolean;
}

UnitsSection.defaultProps = {
    title: "Floor plans",
    skeletonCount: 8,
    isCondensed: true,
}