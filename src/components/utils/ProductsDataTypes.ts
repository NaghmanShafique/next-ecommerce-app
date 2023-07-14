import { Image as IImage } from 'sanity';

export interface singleProductType {
    title: string,
    description: string,
    _id: string,
    price: number,
   image: IImage,
    category: {
        name: string
    },
    subcategory: {
        name: string
    }
}