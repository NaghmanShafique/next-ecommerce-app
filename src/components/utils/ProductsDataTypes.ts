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

