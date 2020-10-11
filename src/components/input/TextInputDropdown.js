import React, {useCallback, useEffect, useRef} from 'react';
import "./assets/TextInputDropdown.scss";
import PropTypes from "prop-types";
import Input from "./Input";

export default function TextInputDropdown({focus, inputPlaceHolder, handleInputChange, showContent, setShowContent, children}) {
    const ref = useRef(null);

    const handleQueryChange = (e) => {
        setShowContent(true);
        handleInputChange(e.target.value);
    };
    const onContentClose = useCallback(() => {
        setShowContent(false);

    }, [setShowContent]);

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            onContentClose();
        }
    }, [onContentClose]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref && ref !== null) {
                const cur = ref.current;
                if (cur && !cur.contains(event.target)) {
                    onContentClose();
                }
            }
        }
        document.addEventListener("keydown", escFunction, false);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction, onContentClose]);
    return (
        <div className="muncher-input-drop-down" ref={ref}>
            <Input focus={focus} placeHolder={inputPlaceHolder} name="query" onChange={e => handleQueryChange(e)}/>

            {
                showContent ?
                    <div className="muncher-input-drop-down--content">
                        {children}
                    </div> : ""
            }

        </div>

    );
}
TextInputDropdown.propTypes = {
    focus: PropTypes.bool,
    inputPlaceHolder: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
    showContent: PropTypes.bool.isRequired,
    setShowContent: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOfType([PropTypes.element, PropTypes.string])])
};
TextInputDropdown.defaultProps = {
    focus: false,
    showContent: false
};