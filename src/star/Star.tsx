import React from 'react';
import './assets/Star.scss';

export const Star: React.FC<StarProps> = ({rating, color, ...props}) => {
    const style: any = {
        '--r': rating
    }


    return (
        <span className={color ? "muncher-star star-" + color : "muncher-star"} style={style} {...props} />
    )
};

export interface StarProps {
    rating: number;
    color?: 'green' | 'yellow' | 'orange' | 'red'
}
