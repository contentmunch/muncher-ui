import React, {useState} from "react";
import "./assets/FileInput.scss";
import PropTypes from "prop-types";
import {Icon} from "../index";

export default function FileInput({name, label, variant, size, required, active, onChange, multiple, ...props}) {
    const [fileName, setFileName] = useState();
    const labelClass = 'muncher-button' +
        (variant ? ' muncher-button--' + variant : '') +
        (size ? ' muncher-button--' + size : '') +
        (active ? ' muncher-button--active' : '');

    const handleOnChange = (event) => {
        if (multiple) {
            setFileName(Array.from(event.currentTarget.files).map(file => file.name).join(", "));
        } else {
            setFileName(event.currentTarget.files[0].name);
        }

        if (onChange)
            onChange(event);
    }
    return (
        <div className="muncher-file-input--div">
            <label htmlFor={name} className={labelClass}>
                <Icon name="image"/>&nbsp;{label}{required ? <span className="required">&nbsp;*</span> : ''}
            </label>
            <span className="span-file-name">{fileName}</span>
            <input id={name} type="file" className="muncher-file-input" required={required} onChange={handleOnChange}
                   multiple={multiple} {...props}/>
        </div>

    );
};
FileInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    required: PropTypes.bool,
    active: PropTypes.bool,
    onChange: PropTypes.func,
    multiple: PropTypes.bool
};

FileInput.defaultProps = {
    size: "large",
    variant: "secondary",
    multiple: false
};