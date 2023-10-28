import React, { ReactNode } from "react";
import { Variant } from "../button/Button";
export declare const Accordion: React.FC<AccordionProps>;
export interface AccordionProps {
    children: {
        /**
         * Folds for accordion
         */
        folds: Fold[];
    };
    /**
     * Variant for fold button
     */
    variant?: Variant;
}
export interface Fold {
    heading: string;
    body: ReactNode;
    foldColor?: "maroon" | "purple" | "green" | "blue" | "orange";
}
