import React from "react";
import {Checkbox, DropDownFilter} from "../../..";
import {fullMonths, Month} from "../../data/Calendar";

export const sortAvailability = (a: Month, b: Month) => (fullMonths[a] - fullMonths[b]);
export const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({filters, handleFilterChange, currentFilters}) => {

    return (
        <DropDownFilter label="Availability">
            {Array.from(filters.keys()).sort(sortAvailability).map((filter: Month) => (
                <Checkbox key={filter.toString()} label={filter.toString()} name={filter.toString()}
                          onChange={() => {
                              handleFilterChange(filter)
                          }}
                          checked={() => currentFilters.indexOf(filter) > -1}
                />
            ))}
        </DropDownFilter>
    );
};

export interface AvailabilityFilterProps {
    filters: Set<Month>;
    handleFilterChange: (filter: Month) => void;
    currentFilters: Month[];
}