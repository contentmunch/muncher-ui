import React from 'react';
import './assets/Star.scss';
import PropTypes from "prop-types";

const Star = ({rating}) => {
    return (
        <span className="muncher-star " style={{'--r': rating}}>

        </span>

    )
};
Star.propTypes = {
    rating: PropTypes.number.isRequired
}
export default Star;