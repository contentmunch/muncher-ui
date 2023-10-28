import React from 'react';
export declare const Backdrop: React.FC<BackdropProps>;
export interface BackdropProps {
    /**
     * Show and hide backdrop
     */
    show?: boolean;
    /**
     * backdrop click handler
     */
    backdropClickHandler?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
