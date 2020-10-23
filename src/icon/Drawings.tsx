import React, {Fragment} from "react";

export type IconName =
    "360"
    | "alert"
    | "align-center"
    | "align-justify"
    | "align-left"
    | "align-right"
    | "archive"
    | "arrow-down"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "at"
    | "award"
    | "bookmark"
    | "bulb"
    | "calendar"
    | "check"
    | "chevron-left"
    | "chevron-right"
    | "close"
    | "code"
    | "edit"
    | "external-link"
    | "fast-forward"
    | "filter"
    | "github"
    | "grid"
    | "hamburger"
    | "help"
    | "image"
    | "inbox"
    | "info"
    | "link"
    | "loading"
    | "lock"
    | "log-in"
    | "log-out"
    | "mail"
    | "map"
    | "minus"
    | "more"
    | "muncher"
    | "mute"
    | "ordered-list"
    | "pause"
    | "phone"
    | "play"
    | "plus"
    | "power"
    | "redo"
    | "repeat"
    | "rewind"
    | "rss"
    | "save"
    | "search"
    | "send"
    | "settings"
    | "share"
    | "shuffle"
    | "skip-back"
    | "skip-forward"
    | "smile"
    | "sort-asc"
    | "sort-desc"
    | "star"
    | "table"
    | "thumbs-down"
    | "thumbs-up"
    | "toggle-left"
    | "toggle-right"
    | "trash"
    | "type"
    | "undo"
    | "unlink"
    | "unlock"
    | "unordered-list"
    | "upload"
    | "user"
    | "video"
    | "video-off"
    | "volume"
    | "youtube";

export const drawings = {
        'align-center':
            <Fragment>
                <line x1="18" y1="10" x2="6" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="18" y1="18" x2="6" y2="18"/>
            </Fragment>,
        'align-justify':
            <Fragment>
                <line x1="21" y1="10" x2="3" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="21" y1="18" x2="3" y2="18"/>
            </Fragment>,
        'align-left':
            <Fragment>
                <line x1="17" y1="10" x2="3" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="17" y1="18" x2="3" y2="18"/>
            </Fragment>,
        'align-right':
            <Fragment>
                <line x1="21" y1="10" x2="7" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="21" y1="18" x2="7" y2="18"/>
            </Fragment>,
        'arrow-left':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 8 8 12 12 16"/>
                <line x1="16" y1="12" x2="8" y2="12"/>
            </Fragment>,
        'arrow-right':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 16 16 12 12 8"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
            </Fragment>,
        'at':
            <Fragment>
                <circle cx="12" cy="12" r="4"/>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
            </Fragment>,
        'award': <Fragment>
            <circle cx="12" cy="8" r="7"/>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </Fragment>,
        'bookmark':
            <Fragment>
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </Fragment>,
        'bulb':
            <Fragment>
                <line x1="9" y1="18" x2="15" y2="18"/>
                <line x1="10" y1="22" x2="14" y2="22"/>
                <path
                    d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>
            </Fragment>,
        'chevron-left':
            <Fragment>
                <polyline points="15 18 9 12 15 6"/>
            </Fragment>,
        'chevron-right':
            <Fragment>
                <polyline points="9 18 15 12 9 6"/>
            </Fragment>,
        'fast-forward':
            <Fragment>
                <polygon points="13 19 22 12 13 5 13 19"/>
                <polygon points="2 19 11 12 2 5 2 19"/>
            </Fragment>
        ,
        'pause':
            <Fragment>
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
            </Fragment>
        ,
        'play':
            <Fragment>
                <polygon points="5 3 19 12 5 21 5 3"/>
            </Fragment>
        ,
        'power':
            <Fragment>
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
                <line x1="12" y1="2" x2="12" y2="12"/>
            </Fragment>
        ,
        'repeat':
            <Fragment>
                <polyline points="17 1 21 5 17 9"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                <polyline points="7 23 3 19 7 15"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </Fragment>
        ,
        'rewind':
            <Fragment>
                <polygon points="11 19 2 12 11 5 11 19"/>
                <polygon points="22 19 13 12 22 5 22 19"/>
            </Fragment>
        ,
        'shuffle':
            <Fragment>
                <polyline points="16 3 21 3 21 8"/>
                <line x1="4" y1="20" x2="21" y2="3"/>
                <polyline points="21 16 21 21 16 21"/>
                <line x1="15" y1="15" x2="21" y2="21"/>
                <line x1="4" y1="4" x2="9" y2="9"/>
            </Fragment>
        ,
        'skip-back':
            <Fragment>
                <polygon points="19 20 9 12 19 4 19 20"/>
                <line x1="5" y1="19" x2="5" y2="5"/>
            </Fragment>
        ,
        'skip-forward':
            <Fragment>
                <polygon points="5 4 15 12 5 20 5 4"/>
                <line x1="19" y1="5" x2="19" y2="19"/>
            </Fragment>
        ,
        'alert':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </Fragment>
        ,
        'arrow-down':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="8 12 12 16 16 12"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
            </Fragment>
        ,
        'arrow-up':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="16 12 12 8 8 12"/>
                <line x1="12" y1="16" x2="12" y2="8"/>
            </Fragment>
        ,
        'check':
            <Fragment>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </Fragment>
        ,
        'help':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </Fragment>
        ,
        'info':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
            </Fragment>
        ,
        'calendar':
            <Fragment>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
            </Fragment>
        ,
        'close':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
            </Fragment>
        ,
        'code':
            <Fragment>
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </Fragment>
        ,
        'edit':
            <Fragment>
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </Fragment>
        ,
        'hamburger':
            <Fragment>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </Fragment>
        ,
        'image':
            <Fragment>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
            </Fragment>
        ,
        'link':
            <Fragment>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </Fragment>
        ,
        'loading':
            <Fragment>
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </Fragment>
        ,
        'minus':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
            </Fragment>
        ,
        'archive':
            <Fragment>
                <polyline points="21 8 21 21 3 21 3 8"/>
                <rect x="1" y="3" width="22" height="5"/>
                <line x1="10" y1="12" x2="14" y2="12"/>
            </Fragment>
        ,
        'external-link':
            <Fragment>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </Fragment>
        ,
        'filter':
            <Fragment>
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
            </Fragment>
        ,
        'github':
            <Fragment>
                <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </Fragment>
        ,
        'grid':
            <Fragment>
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
            </Fragment>
        ,
        'log-in':
            <Fragment>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
            </Fragment>
        ,
        'log-out':
            <Fragment>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
            </Fragment>
        ,
        'more':
            <Fragment>
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
            </Fragment>
        ,
        'share':
            <Fragment>
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
            </Fragment>
        ,
        'thumbs-down':
            <Fragment>
                <path
                    d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
            </Fragment>
        ,
        'thumbs-up':
            <Fragment>
                <path
                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </Fragment>
        ,
        'trash':
            <Fragment>
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </Fragment>
        ,
        'user':
            <Fragment>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </Fragment>
        ,
        'muncher':
            <Fragment>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="7" y1="10" x2="17" y2="10"/>
                <line x1="7" y1="14" x2="17" y2="14"/>
                <line x1="7" y1="18" x2="17" y2="18"/>
            </Fragment>
        ,
        'mute':
            <Fragment>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
            </Fragment>
        ,
        'ordered-list':
            <Fragment>
                <line x1="9" y1="5" x2="21" y2="5"/>
                <line x1="9" y1="12" x2="21" y2="12"/>
                <line x1="9" y1="19" x2="21" y2="19"/>
                <polyline points="3 10 5 10 3 13 5 13"/>
                <polyline points="3 3 4 3 4 6"/>
                <path d="M3 17H4H5L4 19C4.55 19 5 19.45 5 20C5 20.55 4.55 21 4 21H3"/>
            </Fragment>
        ,
        'mail':
            <Fragment>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </Fragment>
        ,
        'phone':
            <Fragment>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
            </Fragment>
        ,
        'plus':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
            </Fragment>
        ,
        'redo':
            <Fragment>
                <polyline points="22 10 22 16 16 16"/>
                <path d="m1.9935 16c1.8136-6.5424 9.5593-9.4823 15.36-4.36l4.64 4.36"/>
            </Fragment>
        ,
        'save':
            <Fragment>
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                <polyline points="17 21 17 13 7 13 7 21"/>
                <polyline points="7 3 7 8 15 8"/>
            </Fragment>
        ,
        'rss':
            <Fragment>
                <path d="M4 11a9 9 0 0 1 9 9"/>
                <path d="M4 4a16 16 0 0 1 16 16"/>
                <circle cx="5" cy="19" r="1"/>
            </Fragment>
        ,
        'unlock':
            <Fragment>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
            </Fragment>
        ,
        'inbox':
            <Fragment>
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                <path
                    d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
            </Fragment>,
        'upload':
            <Fragment>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
            </Fragment>
        ,
        'lock':
            <Fragment>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </Fragment>
        ,
        'search':
            <Fragment>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </Fragment>
        ,
        'send': <Fragment>
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </Fragment>,
        'sort-asc':
            <Fragment>
                <path d="M11 5h4"/>
                <path d="M11 9h7"/>
                <path d="M11 13h10"/>
                <path d="M3 17l3 3 3-3"/>
                <path d="M6 18V4"/>

            </Fragment>,
        'sort-desc':
            <Fragment>
                <path d="M11 5h10"/>
                <path d="M11 9h7"/>
                <path d="M11 13h4"/>
                <path d="M3 17l3 3 3-3"/>
                <path d="M6 18V4"/>
            </Fragment>,
        'star':
            <Fragment>
                <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </Fragment>,
        'table':
            <Fragment>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="3" y1="15" x2="21" y2="15"/>
                <line x1="12" y1="3" x2="12" y2="21"/>
            </Fragment>,
        'map':
            <Fragment>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
            </Fragment>
        ,
        'settings':
            <Fragment>
                <circle cx="12" cy="12" r="3"/>
                <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </Fragment>
        ,
        'smile':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
            </Fragment>
        ,
        'toggle-left':
            <Fragment>
                <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/>
                <circle cx="8" cy="12" r="3" color="grey"/>
            </Fragment>
        ,
        'toggle-right':
            <Fragment>
                <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/>
                <circle cx="16" cy="12" r="3" color="green"/>
            </Fragment>
        ,
        'type':
            <Fragment>
                <polyline points="4 7 4 4 20 4 20 7"/>
                <line x1="9" y1="20" x2="15" y2="20"/>
                <line x1="12" y1="4" x2="12" y2="20"/>
            </Fragment>
        ,
        'undo':
            <Fragment>
                <polyline points="2 10 2 16 8 16"/>
                <path d="m22 16c-1.8136-6.5424-9.5593-9.4823-15.36-4.36l-4.64 4.36"/>
            </Fragment>
        ,
        'unlink':
            <Fragment>
                <path d="M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/>
                <path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/>
                <line x1="8" y1="2" x2="8" y2="5"/>
                <line x1="2" y1="8" x2="5" y2="8"/>
                <line x1="16" y1="19" x2="16" y2="22"/>
                <line x1="19" y1="16" x2="22" y2="16"/>
            </Fragment>
        ,
        'unordered-list':
            <Fragment>
                <line x1="9" y1="5" x2="21" y2="5"/>
                <line x1="9" y1="12" x2="21" y2="12"/>
                <line x1="9" y1="19" x2="21" y2="19"/>
                <circle cx="4" cy="12" r="1"/>
                <circle cx="4" cy="5" r="1"/>
                <circle cx="4" cy="19" r="1"/>
            </Fragment>
        ,
        'youtube':
            <Fragment>
                <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </Fragment>
        ,
        'video':
            <Fragment>
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </Fragment>,
        'video-off':
            <Fragment>
                <path
                    d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
            </Fragment>,
        'volume':
            <Fragment>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            </Fragment>,
        '360':
            <Fragment>
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                <text x="6" y="14" fontSize="6" fontFamily="'Lucida Grande', sans-serif">360</text>
            </Fragment>
    }
;
