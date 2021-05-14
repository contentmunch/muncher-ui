import React from "react";

export const Label: React.FC<LabelProps> = ({label, onClick, name, required}) => {
    return <label htmlFor={name} onClick={onClick}>{label}{required ? <span className="required">*</span> : ''}</label>;
}

export interface LabelProps {
    /**
     * name of the element that uses the label
     */
    name?: string;

    required?: boolean;

    label?: string;
    onClick?: () => void;
}

Label.defaultProps = {
    required: false
};
