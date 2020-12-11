import React, {useEffect, useState} from "react";
import {Meta, Story} from "@storybook/react";
import {Gallery, GalleryProps} from "./Gallery";
import {GalleryImage} from "./data/GalleryImage";
import {getGalleryImages} from "./service/GalleryService";

export default {
    title: "Section/Gallery",
    component: Gallery
} as Meta;
const Template: Story<GalleryProps> = (args) => {
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        getGalleryImages("0B6C97UNWKNaIMXNZWFBBNmV2enM").then(galleryImages => {
            setImages(galleryImages.filter((value, index) => index < 9));

            setIsLoading(false);
        })
    }, []);

    return (
        <Gallery {...args} images={images} isLoading={isLoading}/>
    );
};

export const GridGallery = Template.bind({});
GridGallery.args = {
    type: "grid"
};

export const SimpleGallery = Template.bind({});
SimpleGallery.args = {
    type: "simple"
};