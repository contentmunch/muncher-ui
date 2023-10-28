import React from 'react';
export declare const Star: React.FC<StarProps>;
export interface StarProps {
    rating: number;
    color?: 'green' | 'yellow' | 'orange' | 'red' | 'blue';
    size?: 'small' | 'medium' | 'large';
}
