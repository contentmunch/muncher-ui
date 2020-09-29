import React from "react";
import "./assets/MuncherIcon.scss";
import {ReactComponent as Icon} from "./assets/muncher.svg";
import PropTypes from "prop-types";

export default function MuncherIcon({variant, onClick, ...props}) {
    const className = variant ? 'span-muncher--icon muncher-icon--' + variant : 'span-muncher--icon';
    return (
        <span
            className={className}
            data-title="Muncher Home"
            onClick={onClick}
            {...props}
        >
            <Icon/>
        </span>
    );
}
MuncherIcon.propTypes = {
    variant: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
};

MuncherIcon.defaultProps = {
    variant: 'medium',
    onClick: undefined,
};