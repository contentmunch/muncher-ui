import React from "react";
import PropTypes from "prop-types";
import {iconDrawings} from "./IconDrawings";
import './assets/Icon.scss';

export default function Icon({color, name, size, weight, onClick, ...props}) {
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
            onClick={onClick}
            {...props}
        >
            {iconDrawings[name]}
        </svg>
    );
}
export const iconNames =
    ['align-center', 'align-justify', 'align-left', 'align-right', 'arrow-left',
        'arrow-right', 'at','award','bookmark','calendar', 'close', 'code', 'edit', 'hamburger', 'image', 'link', 'loading', 'minus', 'muncher',
        'mute', 'ordered-list', 'phone', 'plus', 'redo', 'search', 'send','settings', 'smile', 'toggle-left', 'toggle-right',
        'type', 'inbox','undo', 'unlink', 'unordered-list', 'youtube', 'volume', 'fast-forward', 'pause', 'play', 'power',
        'repeat', 'rewind', 'shuffle', 'skip-back', 'skip-forward', 'alert', 'arrow-down', 'arrow-up', 'check', 'help', 'info',
        'archive', 'external-link', 'filter', 'github', 'grid', 'log-in', 'log-out', 'more', 'share', 'thumbs-down', 'thumbs-up',
        'trash', 'user', 'lock', 'unlock', 'rss', 'save', 'upload', 'mail','map'
    ];
Icon.propTypes = {
    color: PropTypes.string,
    weight: PropTypes.oneOf([1, 2, 3]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
    name: PropTypes.oneOf(iconNames).isRequired
};
Icon.defaultProps = {
    name: "muncher",
    weight: 2,
    size: "small"
};