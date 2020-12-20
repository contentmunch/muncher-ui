import {Month} from "./Calendar";
export const defaultMinRent = 100;
export const defaultMaxRent = 4000;
export interface Unit {
    img: string;
    coverImg:string;
    community:string;
    url: string;
    title: string;
    featured: boolean;
    virtualTour?: string;
    video?: string;
    rate: string;
    minRate: number;
    bedrooms: number;
    bathrooms: number;
    squareFoot: number;
    style: string;
    availability: Month[];
}

