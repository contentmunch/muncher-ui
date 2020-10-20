import React from 'react';
import './assets/Star.scss';
import PropTypes from "prop-types";

const Star = ({rating, ...props}) => {
    return (
        <span className="muncher-star " style={{'--r': rating}} {...props}>

        </span>

    )
};
Star.propTypes = {
    rating: PropTypes.number.isRequired
}
export default Star;