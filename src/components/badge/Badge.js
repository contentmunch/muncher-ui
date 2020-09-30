import React from 'react';
import './assets/Badge.scss';
import PropTypes from "prop-types";

const Badge = ({children}) => {
    return (
        <div className="muncher-badge">
            {children}
        </div>
    )
};
Badge.propTypes = {
    children: PropTypes.any
}
export default Badge;