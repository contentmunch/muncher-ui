import React, {useState} from 'react';
import "./assets/Input.scss";
import {Label} from './Label';

export const Textarea: React.FC<TextareaProps> = (
    {
        name, label, required, readOnly,
        rows, maxLength, focus,
        placeHolder, onChange, value, ...props
    }
) => {
    const [textareaValue, setTextareaValue] = useState(value);
    const handleTextareaChange = (event: any) => {
        setTextareaValue(event.target.value);
        if (onChange)
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
            <p>{textareaValue ? maxLength ? maxLength - textareaValue.length : 1000 : maxLength} characters left</p>
        </div>

    );
}

export interface TextareaProps {
    name: string;
    label?: string;
    required?: boolean;
    readOnly?: boolean;
    rows?: number;
    maxLength?: number;
    focus?: boolean;
    placeHolder?: string;
    onChange?: (event: any) => void;
    value?: any;
}

Textarea.defaultProps = {
    readOnly: false,
    focus: false,
    rows: 6,
    maxLength: 1000
};
