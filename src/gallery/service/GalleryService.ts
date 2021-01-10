import {GalleryImage} from "../data/GalleryImage";
import Api from "../../service/Api";
import _ from "lodash";

const removeExtension = (filename: string) => {
    if (filename) {
        return filename.split(".", 1)[0];
    }
};
export const getGalleryImages = (folderId: string): Promise<GalleryImage[]> => {
    return Api.get("drive/list/" + folderId)
        .then(response => _.orderBy(response.data, o => parseInt(o.name)).map((image: any) => ({
                src: image.webContentLink,
                thumbnail: image.webContentLink,
                name: removeExtension(image.name),
            } as GalleryImage))
        );
};

export const sortGallery = (images: GalleryImage[]): GalleryImage[] => {
    return _.orderBy(images, 'name', 'asc');
};