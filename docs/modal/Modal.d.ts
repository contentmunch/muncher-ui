import React from 'react';
export declare const Modal: React.FC<ModalProps>;
export interface ModalProps {
    show: boolean;
    setShow: (b: boolean) => void;
    children?: any;
}
