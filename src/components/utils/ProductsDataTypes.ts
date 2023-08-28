import { Image as IImage } from 'sanity';

export type singleProductType = {
    title: string,
    description: string,
    _id: string,
    price: number,
   image: IImage,
   Slug: {
       _type : string,
       current : string
   }
    category: {
        name: string
    },
    subcategory: {
        name: string
    }
};

export interface slugType {
    _type: string,
    current: string,
};

export interface assetImageType {
    _type: string,
    _ref: string,
};

export interface imagesType {
    asset : assetImageType,
    _type : string,
    _key  : string
}