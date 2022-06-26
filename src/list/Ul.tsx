import React, {ReactElement} from "react";
import "./assets/Ul.scss";
import {Li} from "./Li";

export const Ul: React.FC<UlProps> = ({children}) => {
    return (<ul className="muncher-ul">{children}</ul>);

}

export interface UlProps {
    children: ReactElement<typeof Li> | ReactElement<typeof Li>[];
}