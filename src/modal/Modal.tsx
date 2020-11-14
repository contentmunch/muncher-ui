import React, {useCallback, useEffect} from 'react';
import './assets/Modal.scss';
import {Backdrop} from '..';

export const Modal: React.FC<ModalProps> = ({show, setShow, children, ...props}) => {
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setShow(false);
        }
    }, [setShow]);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
    return (
        <React.Fragment>
            <Backdrop show={show} backdropClickHandler={() => setShow(false)}/>
            <div className="muncher-modal"
                 style={{
                     transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: show ? '1' : '0'
                 }}
                 {...props}
            >

                {children}
            </div>
        </React.Fragment>
    )
};

export interface ModalProps {
    show: boolean;
    setShow: (b: boolean) => void;
}

Modal.defaultProps = {
    show: false
};
