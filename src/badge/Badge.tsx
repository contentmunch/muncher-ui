import React from 'react';
import './assets/Badge.scss';

export const Badge: React.FC<BadgeProps> = ({children, ...props}) => {
    return (
        <div className="muncher-badge" {...props}>
            {children}
        </div>
    )
};
export interface BadgeProps {
    children: React.ReactNode;
}
