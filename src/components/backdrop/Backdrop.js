import React from 'react';
import './assets/Backdrop.scss';
import PropTypes from "prop-types";

const Backdrop = ({show, backdropClickHandler, ...props}) => {

    return (
        show ?
            <div className="muncher-backdrop" onClick={backdropClickHandler} {...props}>

            </div> : null
    )
};
Backdrop.propTypes = {
    show: PropTypes.bool,
    backdropClickHandler: PropTypes.func
};
Backdrop.defaultProps = {
    show: false
};
export default Backdrop;