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
    [
        "360", "alert", "align-center", "align-justify", "align-left", "align-right", "archive", "arrow-down",
        "arrow-left", "arrow-right", "arrow-up", "at", "award", "bookmark", "calendar", "check", "chevron-left",
        "chevron-right", "close", "code", "edit", "external-link", "fast-forward", "filter", "github", "grid",
        "hamburger", "help", "image", "inbox", "info", "link", "loading", "lock", "log-in", "log-out", "mail",
        "map", "minus", "more", "muncher", "mute", "ordered-list", "pause", "phone", "play", "plus", "power",
        "redo", "repeat", "rewind", "rss", "save", "search", "send", "settings", "share", "shuffle", "skip-back",
        "skip-forward", "smile", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "trash", "type", "undo",
        "unlink", "unlock", "unordered-list", "upload", "user", "video", "video-off", "volume", "youtube"
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