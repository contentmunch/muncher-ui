import React, {useState} from 'react';
import './assets/ShareButton.scss';
import {Button, Size, Variant} from "./Button";
import {DropdownButton} from "./DropdownButton";
import {Icon} from "../icon/Icon";
import {CopyButton} from "./CopyButton";

export const ShareButton: React.FC<ShareButtonProps> = (
    {
        variant, size, title,
        children, ...props
    }) => {
    const [showContent, setShowContent] = useState(false);


    return (
        <div className="muncher-share">
            <DropdownButton title="Share to Social Media" showContent={showContent} setShowContent={setShowContent}
                            variant={variant}
                            size={size}
                            element={
                                <Icon name="share" orientation="right">
                                    Share
                                </Icon>
                            }>
                <Button size="small" variant={variant}>
                    <a href={"https://twitter.com/share?url=" + window.location.href + "&text=" + title}
                       target="_blank" title="Share link to Twitter"><Icon name="twitter"/></a>
                </Button>
                <Button size="small" variant={variant}>
                    <a href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.href}
                       target="_blank" title="Share link to Facebook"><Icon name="facebook"/></a>
                </Button>

                <Button size="small" variant={variant}>
                    <a href={"mailto:?subject=" + title + "&body=" + window.location.href}
                       target="_blank" title="share link by Email"><Icon name="mail"/></a>
                </Button>
                <CopyButton text={window.location.href}/>

            </DropdownButton>
        </div>
    );
};

export interface ShareButtonProps {
    variant?: Variant;
    size?: Size;
    title: string;
    children: any;
}

ShareButton.defaultProps = {
    size: 'medium',
    variant: 'secondary'
};
