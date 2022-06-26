import React from "react";
import "./assets/Ul.scss";

export const Ul: React.FC<UlProps> = ({children}) => {
    return (<ul className="muncher-ul">{children}</ul>);

}

export interface UlProps {

}