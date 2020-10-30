import React, {useCallback, useEffect, useRef} from 'react';
import './assets/DropdownButton.scss';
import {Button, ButtonProps} from "./Button";


export const DropdownButton: React.FC<DropdownButtonProps> = (
    {
        variant, size, title, active,
        disabled, element,
        rounded, drop, onClick, onClose,
        showContent, setShowContent, children, ...props
    }) => {

    const ref = useRef<HTMLDivElement>(null);
    const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
        if (setShowContent) {
            setShowContent(true);
        }
    }

    const onContentClose = useCallback(() => {
        setShowContent(false);
        if (onClose) {
            onClose();
        }
    }, [onClose, setShowContent]);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            onContentClose();
        }
    }, [onContentClose]);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref && ref.current) {
                if (event.target instanceof HTMLElement && !ref.current.contains(event.target)) {
                    onContentClose();
                }
            }
        };
        document.addEventListener("keydown", escFunction, false);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction, onContentClose]);
    const dropdownClass = () => {
        switch (drop) {
            case "left":
                return "muncher-dropdown--content drop-left";
            default:
                return "muncher-dropdown--content";
        }
    };

    return (
        <div className="muncher-dropdown" ref={ref}>
            <Button onClick={buttonOnClick} title={title}
                    disabled={disabled} rounded={rounded}
                    active={active} variant={variant} size={size} {...props}
            >{element}</Button>
            {
                showContent ? <div className={dropdownClass()}>
                    {children}
                </div> : ""
            }

        </div>
    );
};

DropdownButton.defaultProps = {
    size: 'medium',
};

export interface DropdownButtonProps extends ButtonProps {
    /**
     * base on drop value, it will either drop left or right
     */
    drop?: 'left' | 'right';
    /**
     * shows or hides drop down content
     */
    showContent: boolean;
    /**
     * event to set show content value
     */
    setShowContent: (show: boolean) => void;

    /**
     * button mouse down handler
     */
    onClose?: () => void;
    element: React.ReactNode;

}
