import React from "react";

export default function Label({label, name, required}) {
    return <label htmlFor={name}>{label}{required ? <span className="required">*</span> : ''}</label>;
}