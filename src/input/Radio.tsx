import React, {useState} from 'react';
import './assets/Input.scss';
import {Label} from './Label';

export const Radio: React.FC<RadioProps> = ({name, required, onChange, checked, label, ...props}) => {
    const [radioChecked, setRadioChecked] = useState(checked ? checked : false);
    return (
        <div className="muncher-input--div">
            <div className="muncher-radio">
                <input
                    type="radio"
                    name={name}
                    onChange={event => {
                        setRadioChecked(event.target.checked);
                        if (onChange) {
                            onChange(event);
                        }
                    }}
                    checked={radioChecked}
                    {...props}
                />
                {label ? <Label label={label} required={required} name={name}/> : ''}
            </div>
        </div>
    )
};

export interface RadioProps {
    name?: string;
    required?: boolean;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: any;
}

Radio.defaultProps = {
    required: false,
    checked: false
};
