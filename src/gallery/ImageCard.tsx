import React from 'react';
import './assets/ImageCard.scss';
import {GalleryImage} from "./data/GalleryImage";

export const ImageCard: React.FC<ImageCardProps> = ({image, onClick}) => {
    return (
        <div className="image-card" onClick={onClick}>
            <img src={image.thumbnail} alt={image.name}/>
            <div className="image-card--footer">
                <p>{image.name}</p>
            </div>
        </div>
    );
}

export interface ImageCardProps {
    image: GalleryImage;
    onClick: () => void;
}