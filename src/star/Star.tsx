import React from 'react';
import './assets/Star.scss';

export const Star: React.FC<StarProps> = ({rating, ...props}) => {
    const ratingStyle: any = {
        '--r': rating
    }
    return (
        <span className="muncher-star " style={ratingStyle} {...props}>

        </span>

    )
};

export interface StarProps {
    rating: number;
}
