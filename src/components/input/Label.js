import React from "react";
import PropTypes from "prop-types";

export default function Label({label, name, required}) {
    return <label htmlFor={name}>{label}{required ? <span className="required">*</span> : ''}</label>;
}
Label.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    label: PropTypes.string,
};
Label.defaultProps = {
    required: false
};