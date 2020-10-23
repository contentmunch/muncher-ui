import React from "react";

export const Label: React.FC<LabelProps> = ({label, name, required}) => {
    return <label htmlFor={name}>{label}{required ? <span className="required">*</span> : ''}</label>;
}

export interface LabelProps {
    name?: string;
    required?: boolean;
    label?: string;
}
Label.defaultProps = {
    required: false
};