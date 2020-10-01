import React, {Fragment} from "react";

export const iconDrawings = (name) => {
    switch (name) {
        case 'align-center':
            return <Fragment>
                <line x1="18" y1="10" x2="6" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="18" y1="18" x2="6" y2="18"/>
            </Fragment>
        case 'align-justify':
            return <Fragment>
                <line x1="21" y1="10" x2="3" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="21" y1="18" x2="3" y2="18"/>
            </Fragment>
        case 'align-left':
            return <Fragment>
                <line x1="17" y1="10" x2="3" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="17" y1="18" x2="3" y2="18"/>
            </Fragment>
        case 'align-right':
            return <Fragment>
                <line x1="21" y1="10" x2="7" y2="10"/>
                <line x1="21" y1="6" x2="3" y2="6"/>
                <line x1="21" y1="14" x2="3" y2="14"/>
                <line x1="21" y1="18" x2="7" y2="18"/>
            </Fragment>
        case 'arrow-left':
            return <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 8 8 12 12 16"/>
                <line x1="16" y1="12" x2="8" y2="12"/>
            </Fragment>
        case 'arrow-right':
            return <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 16 16 12 12 8"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
            </Fragment>
        case 'calendar':
            return <Fragment>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </Fragment>
        case 'close':
            return <Fragment>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
            </Fragment>
        case 'code':
            return <Fragment>
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </Fragment>
        case 'edit':
            return <Fragment>
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </Fragment>
        case 'hamburger':
            return <Fragment>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </Fragment>
        case 'image':
            return <Fragment>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
            </Fragment>
        case 'link':
            return <Fragment>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </Fragment>
        case 'loading':
            return <Fragment>
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </Fragment>
        case 'minus':
            return <Fragment>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </Fragment>
        case 'muncher':
            return <Fragment>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="7" y1="10" x2="17" y2="10"></line>
                <line x1="7" y1="14" x2="17" y2="14"></line>
                <line x1="7" y1="18" x2="17" y2="18"></line>
            </Fragment>
        case 'mute':
            return <Fragment>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
            </Fragment>
        case 'ordered-list':
            return <Fragment>
                <line x1="9" y1="5" x2="21" y2="5"/>
                <line x1="9" y1="12" x2="21" y2="12"/>
                <line x1="9" y1="19" x2="21" y2="19"/>
                <polyline points="3 10 5 10 3 13 5 13"/>
                <polyline points="3 3 4 3 4 6"/>
                <path d="M3 17H4H5L4 19C4.55 19 5 19.45 5 20C5 20.55 4.55 21 4 21H3"/>
            </Fragment>
        case 'phone':
            return <Fragment>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </Fragment>
        case 'plus':
            return <Fragment>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </Fragment>
        case 'redo':
            return <Fragment>
                <polyline points="22 10 22 16 16 16"/>
                <path d="m1.9935 16c1.8136-6.5424 9.5593-9.4823 15.36-4.36l4.64 4.36"/>
            </Fragment>
        case 'search':
            return <Fragment>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </Fragment>
        case 'settings':
            return <Fragment>
                <circle cx="12" cy="12" r="3"/>
                <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </Fragment>
        case 'smile':
            return <Fragment>
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
            </Fragment>
        case 'toggle-left':
            return <Fragment>
                <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/>
                <circle cx="8" cy="12" r="3"/>
            </Fragment>
        case 'toggle-right':
            return <Fragment>
                <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/>
                <circle cx="16" cy="12" r="3"/>
            </Fragment>
        case 'type':
            return <Fragment>
                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                <line x1="9" y1="20" x2="15" y2="20"></line>
                <line x1="12" y1="4" x2="12" y2="20"></line>
            </Fragment>
        case 'undo':
            return <Fragment>
                <polyline points="2 10 2 16 8 16"/>
                <path d="m22 16c-1.8136-6.5424-9.5593-9.4823-15.36-4.36l-4.64 4.36"/>
            </Fragment>
        case 'unlink':
            return <Fragment>
                <path d="M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/>
                <path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/>
                <line x1="8" y1="2" x2="8" y2="5"/>
                <line x1="2" y1="8" x2="5" y2="8"/>
                <line x1="16" y1="19" x2="16" y2="22"/>
                <line x1="19" y1="16" x2="22" y2="16"/>
            </Fragment>

        case 'unordered-list':
            return <Fragment>
                <line x1="9" y1="5" x2="21" y2="5"/>
                <line x1="9" y1="12" x2="21" y2="12"/>
                <line x1="9" y1="19" x2="21" y2="19"/>
                <circle cx="4" cy="12" r="1"/>
                <circle cx="4" cy="5" r="1"/>
                <circle cx="4" cy="19" r="1"/>
            </Fragment>
        case 'youtube':
            return <Fragment>
                <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </Fragment>
        case 'volume':
            return <Fragment>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            </Fragment>
        default:
            return null;

    }
};