import React from "react";
import "./assets/TextInput.scss";
import PropTypes from "prop-types";

export default function TextInput({name, focus, placeHolder, onChange}) {
    return (
        <input
            className="muncher-text-input"
            name={name}
            autoFocus={focus}
            type="text"
            autoComplete="off"
            placeholder={placeHolder}
            onChange={onChange}/>
    );
}
TextInput.propTypes = {
    name: PropTypes.string,
    focus: PropTypes.bool,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
};
