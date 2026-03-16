import React from "react";
import "./assets/StepContainer.scss";

export const StepContainer: React.FC<StepContainerProps> = ({children}) => {
    return (
        <div className="muncher-step--container">
            {children}
        </div>
    );
};

export interface StepContainerProps {      // whether to show the line to next step
    children: React.ReactNode;
}
