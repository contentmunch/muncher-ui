import React from 'react';
import './assets/Spinner.scss';
import {Size} from "../button/Button";

export const Spinner: React.FC<SpinnerProps> = ({size, ...props}) =>
    <div
        className={size ? "muncher-spinner muncher-spinner-" + size : "muncher-spinner"} {...props}
    />

export interface SpinnerProps {
    size?: Size
}