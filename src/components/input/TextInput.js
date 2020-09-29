import React from "react";
import "./assets/TextInput.scss";
import PropTypes from "prop-types";

export default function TextInput({name, placeHolder, onChange}) {
    return (
        <input
            className="muncher-text-input"
            name={name}
            type="text"
            autoComplete="off"
            placeholder={placeHolder}
            onChange={onChange}/>
    );
}
TextInput.propTypes = {
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
};
