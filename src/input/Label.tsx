import React from "react";

export const Label: React.FC<LabelProps> = ({label, onClick, id, required}) => {
    return <label htmlFor={id} onClick={onClick}>{label}{required ? <span className="required">*</span> : ''}</label>;
}

export interface LabelProps {
    /**
     * name of the element that uses the label
     */
    id?: string;

    required?: boolean;

    label?: string;
    onClick?: () => void;
}

Label.defaultProps = {
    required: false
};
