import React, {useState} from "react";
import "./assets/Input.scss";
import PropTypes from "prop-types";
import Label from "./Label";

export default function Textarea({name, label, required, readOnly, rows, maxLength, focus, placeHolder, onChange, value, ...props}) {
    const [textareaValue, setTextareaValue] = useState(value);
    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
        onChange(event);
    }
    return (
        <div className="muncher-input--div">
            {label ? <Label label={label} required={required} name={name}/> : ''}
            <textarea
                className="muncher-textarea"
                rows={rows}
                maxLength={maxLength}
                name={name}
                autoFocus={focus}
                value={value}
                placeholder={placeHolder}
                onChange={handleTextareaChange}
                required={required}
                readOnly={readOnly}
                {...props}
            />
            <p>{textareaValue ? maxLength - textareaValue.length : maxLength} characters left</p>
        </div>

    );
}
Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
    focus: PropTypes.bool,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
};

Textarea.defaultProps = {
    readOnly: false,
    focus: false,
    rows: 6,
    maxLength: 1000
};