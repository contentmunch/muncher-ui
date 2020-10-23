import React from 'react';
import './assets/Backdrop.scss';

export const Backdrop: React.FC<BackdropProps> =
    ({
         show,
         backdropClickHandler, ...props
     }) => {

        return (
            show ?
                <div className="muncher-backdrop" onClick={backdropClickHandler} {...props}>

                </div> : null
        )
    };

Backdrop.defaultProps = {
    show: false
};

export interface BackdropProps {
    /**
     * Show and hide backdrop
     */
    show?: boolean;
    /**
     * backdrop click handler
     */
    backdropClickHandler?: () => void;
}