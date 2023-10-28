import React from 'react';
export declare const Spinner: React.FC<SpinnerProps>;
export interface SpinnerProps {
    size?: SpinnerSize;
}
export type SpinnerSize = 'tiny' | 'small' | 'medium' | 'large';
