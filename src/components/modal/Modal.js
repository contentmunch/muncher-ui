import React, {useCallback, useEffect} from 'react';
import './assets/Modal.scss';
import Backdrop from "../backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = ({show, setShow, children, ...props}) => {
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
Modal.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    children: PropTypes.any,
}
export default Modal;