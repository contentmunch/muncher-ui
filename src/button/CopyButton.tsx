import React, {useState} from 'react';
import './assets/ShareButton.scss';
import {Button, Size, Variant} from "./Button";
import {Icon} from "../icon/Icon";
import {copyToClipboard} from "../utils/Utils";
import {IconName} from "../icon/Drawings";

export const CopyButton: React.FC<CopyButtonProps> = (
    {
        text, variant, size
    }) => {
    const [color, setColor] = useState<string>();
    const [name, setName] = useState<IconName>("copy");
    const [title, setTitle] = useState<string>("copy link");
    const copyButtonClicked = () => {
        copyToClipboard(text);
        setColor("green");
        setName("check");
        setTitle("copied!");
        setTimeout(function () {
            setColor("");
            setName("copy");
        }, 2000);

    }
    return (


        <Button size={size} variant={variant} title={title}
                onClick={copyButtonClicked}>
            <Icon name={name} color={color}/>
        </Button>

    );
};

export interface CopyButtonProps {
    variant?: Variant;
    size?: Size;
    text: string;
}

CopyButton.defaultProps = {
    size: 'small',
    variant: 'secondary'
};
