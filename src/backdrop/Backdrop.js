import React from 'react';
import './assets/Backdrop.scss';

const Backdrop = ({show, backdropClickHandler, ...props}) => {

    return (
        show ?
            <div className="muncher-backdrop" onClick={backdropClickHandler} {...props}>

            </div> : null
    )
};

Backdrop.defaultProps = {
    show: false
};
export default Backdrop;