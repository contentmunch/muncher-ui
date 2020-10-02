import React, {Fragment} from "react";

export const iconDrawings = {
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
        'fast-forward':
            <Fragment>
                <polygon points="13 19 22 12 13 5 13 19"/>
                <polygon points="2 19 11 12 2 5 2 19"/>
            </Fragment>,
        'pause':
            <Fragment>
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
            </Fragment>,
        'play':
            <Fragment>
                <polygon points="5 3 19 12 5 21 5 3"/>
            </Fragment>,
        'power':
            <Fragment>
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
                <line x1="12" y1="2" x2="12" y2="12"/>
            </Fragment>,
        'repeat':
            <Fragment>
                <polyline points="17 1 21 5 17 9"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                <polyline points="7 23 3 19 7 15"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </Fragment>,
        'rewind':
            <Fragment>
                <polygon points="11 19 2 12 11 5 11 19"/>
                <polygon points="22 19 13 12 22 5 22 19"/>
            </Fragment>,
        'shuffle':
            <Fragment>
                <polyline points="16 3 21 3 21 8"/>
                <line x1="4" y1="20" x2="21" y2="3"/>
                <polyline points="21 16 21 21 16 21"/>
                <line x1="15" y1="15" x2="21" y2="21"/>
                <line x1="4" y1="4" x2="9" y2="9"/>
            </Fragment>,
        'skip-back':
            <Fragment>
                <polygon points="19 20 9 12 19 4 19 20"/>
                <line x1="5" y1="19" x2="5" y2="5"/>
            </Fragment>,
        'skip-forward':
            <Fragment>
                <polygon points="5 4 15 12 5 20 5 4"/>
                <line x1="19" y1="5" x2="19" y2="19"/>
            </Fragment>,
        'alert':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </Fragment>,
        'arrow-down':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="8 12 12 16 16 12"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
            </Fragment>,
        'arrow-up':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="16 12 12 8 8 12"/>
                <line x1="12" y1="16" x2="12" y2="8"/>
            </Fragment>,
        'check':
            <Fragment>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </Fragment>,
        'help':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </Fragment>,
        'info':
            <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
            </Fragment>,
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
        'search':
            <Fragment>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
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
                <circle cx="8" cy="12" r="3"/>
            </Fragment>
        ,
        'toggle-right':
            <Fragment>
                <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/>
                <circle cx="16" cy="12" r="3"/>
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
        'volume':
            <Fragment>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            </Fragment>
    }
;