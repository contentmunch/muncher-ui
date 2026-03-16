import React from 'react';
import "./assets/LargeRoundedBadge.scss";
import {Badge} from "./Badge";
import {Icon} from "../icon/Icon";
import {Variant} from "../button/Button";


export const LargeRoundedBadge: React.FC<LargeRoundedBadgeProps> = ({variant, completed, children}) => {


    return (
        <div className="muncher-badge--large-rounded">
            <Badge variant={variant ? variant : "tertiary"} rounded={true}>
                {completed ?
                    <div className="badge-content">
                        <Icon name="simple-check"/>
                    </div> :
                    children}
            </Badge>
        </div>
    )
};

export interface LargeRoundedBadgeProps {
    variant?: Variant;
    completed?: boolean;
    children: React.ReactNode;
}

