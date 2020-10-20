import React from 'react';
import './assets/Badge.scss';
import PropTypes from "prop-types";

const Badge = ({children, ...props}) => {
    return (
        <div className="muncher-badge" {...props}>
            {children}
        </div>
    )
};
Badge.propTypes = {
    children: PropTypes.any
}
export default Badge;