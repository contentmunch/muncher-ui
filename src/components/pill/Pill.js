import React from 'react';
import PropTypes from "prop-types";
import './assets/Pill.scss';
import Icon from "../icon/Icon";

const Pill = ({pillCloseHandler, children,...props}) => {
    return (
        <div className="muncher-pill" {...props}>
            <div className="close" onClick={pillCloseHandler}><Icon name="close"/></div>
            <div className="content"> {children}</div>
        </div>
    )
};
Pill.propTypes = {
    pillCloseHandler: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default Pill;