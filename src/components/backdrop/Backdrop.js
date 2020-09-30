import React from 'react';
import './assets/Backdrop.scss';
import PropTypes from "prop-types";

const Backdrop = ({show, backdropClickHandler}) => {

    return (
        show ?
            <div className="muncher-backdrop" onClick={backdropClickHandler}>

            </div> : null
    )
};
Backdrop.propTypes = {
    show: PropTypes.bool,
    backdropClickHandler: PropTypes.func
}
export default Backdrop;