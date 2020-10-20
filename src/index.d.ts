import {Component, ReactNode} from "react";

export class Backdrop extends Component<BackdropProps> {
}

interface BackdropProps {
    show?: boolean;
    backdropClickHandler?: () => void;
}

export class Badge extends Component<BadgeProps> {
}

interface BadgeProps {
    children?: any;
}

export class Button extends Component<ButtonProps> {
}

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | 'nav';
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    title?: string;
    active?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    onClick?: () => void;
    onMouseDown?: () => void;
    children?: any;
}

export class DropdownButton extends Component<DropdownButtonProps> {
}

interface DropdownButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    title?: string;
    active?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    element: ReactNode;
    drop?: 'left' | 'right' | 'nav';
    onClick?: () => void;
    onClose?: () => void;
    showContent: boolean;
    setShowContent: () => void;
}

export class DropdownNavButton extends Component<DropdownNavButtonProps> {
}

interface DropdownNavButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    title?: string;
    active?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    element: ReactNode;
    children?: any;
}

export class Icon extends Component<IconProps> {
}

interface IconProps {
    color?: string;
    weight?: 1 | 2 | 3;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    name: "360" | "alert" | "align-center" | "align-justify" | "align-left" | "align-right" | "archive" | "arrow-down" |
        "arrow-left" | "arrow-right" | "arrow-up" | "at" | "award" | "bookmark" | "bulb" | "calendar" | "check" | "chevron-left" |
        "chevron-right" | "close" | "code" | "edit" | "external-link" | "fast-forward" | "filter" | "github" | "grid" |
        "hamburger" | "help" | "image" | "inbox" | "info" | "link" | "loading" | "lock" | "log-in" | "log-out" | "mail" |
        "map" | "minus" | "more" | "muncher" | "mute" | "ordered-list" | "pause" | "phone" | "play" | "plus" | "power" |
        "redo" | "repeat" | "rewind" | "rss" | "save" | "search" | "send" | "settings" | "share" | "shuffle" | "skip-back" |
        "skip-forward" | "smile" | "sort-asc" | "sort-desc" | "star" | "table" | "thumbs-down" | "thumbs-up" | "toggle-left" | "toggle-right" | "trash" | "type" | "undo" |
        "unlink" | "unlock" | "unordered-list" | "upload" | "user" | "video" | "video-off" | "volume" | "youtube";
}


export class Checkbox extends Component<CheckboxProps> {
}

interface CheckboxProps {
    name?: string;
    onChange?: () => void;
    required?: boolean;
    checked?: any;
    label?: string;
}

export class FileInput extends Component<FileInputProps> {
}

interface FileInputProps {
    name: string;
    label?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    required?: boolean;
    active?: boolean;
    onChange?: () => void;
    multiple?: boolean;
    maxFiles?: number;
    setFiles: () => void;
}

export class Input extends Component<InputProps> {
}

interface InputProps {
    name: string;
    label?: string;
    required?: boolean;
    readOnly?: boolean;
    icon?: string;
    type?: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' |
        'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    focus?: boolean;
    placeHolder?: string;
    onChange?: () => void;
    value?: any;
}

export class Label extends Component<LabelProps> {
}

interface LabelProps {
    name: string;
    required?: boolean;
    label?: string;
}

export class Radio extends Component<RadioProps> {
}

interface RadioProps {
    name?: string;
    required?: boolean;
    label?: string;
    onChange?: () => void;
    checked?: any;
}

export class Textarea extends Component<TextareaProps> {
}

interface TextareaProps {

    name: string;
    label?: string;
    required?: boolean;
    readOnly?: boolean;
    rows?: number;
    maxLength?: number;
    focus?: boolean;
    placeHolder?: string;
    onChange?: () => void;
    value?: any;

}

export class TextInputDropdown extends Component<TextInputDropdownProps> {
}

interface TextInputDropdownProps {

    focus?: boolean;
    inputPlaceHolder?: string;
    handleInputChange: () => void;
    showContent: boolean;
    setShowContent: () => void;
    readOnly?: boolean;
    children?: any;

}

export class Modal extends Component<ModalProps> {
}

interface ModalProps {
    show: boolean;
    setShow: () => void;
    children?: any;
}

export class Pill extends Component<PillProps> {
}

interface PillProps {
    pillCloseHandler?: () => void;
    children?: any;
}

export class RangeSlider extends Component<RangeSliderProps> {
}

interface RangeSliderProps {
    min: number;
    max: number;
    sign?: string;
    handleChange: () => void;
    children?: any;
}

export class Spinner extends Component<SpinnerProps> {
}

interface SpinnerProps {

}

export class Star extends Component<StarProps> {
}

interface StarProps {
    rating: number;
}
