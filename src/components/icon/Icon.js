import React from "react";
import PropTypes from "prop-types";
import {iconDrawings} from "./IconDrawings";
import './assets/Icon.scss';

export default function Icon({color, name, size, weight}) {
    const iconClass = size ? 'muncher-icon muncher-icon--' + size : 'muncher-icon muncher-icon--small';

    return (

        <svg
            className={iconClass}
            stroke={color ? color : 'currentColor'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={weight ? weight : 2}
            strokeLinecap="round"
            strokeLinejoin="round"

        >
            {iconDrawings(name)}
        </svg>
    );
}
Icon.propTypes = {
    color: PropTypes.string,
    weight: PropTypes.oneOf([1, 2, 3]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    name: PropTypes.oneOf(['align-center', 'align-justify', 'align-left', 'align-right', 'arrow-left',
        'arrow-right', 'calendar', 'close', 'code', 'edit', 'hamburger', 'image', 'link', 'loading', 'minus', 'muncher',
        'mute', 'ordered-list', 'phone', 'plus', 'redo', 'search', 'settings', 'smile', 'toggle-left', 'toggle-right',
        'type', 'undo', 'unlink', 'unordered-list', 'youtube', 'volume']).isRequired
};
