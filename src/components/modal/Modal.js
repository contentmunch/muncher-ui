import React, {useCallback, useEffect} from 'react';
import './assets/Modal.scss';
import Backdrop from "../backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = ({show, modalCloseHandler, children,...props}) => {
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            modalCloseHandler();
        }
    }, [modalCloseHandler]);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
    return (
        <React.Fragment>
            <Backdrop show={show} close={modalCloseHandler}/>
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
Modal.propTypes = {
    show: PropTypes.bool,
    modalCloseHandler: PropTypes.func,
    children: PropTypes.any,
}
export default Modal;