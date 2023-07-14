import { NextRequest,NextResponse } from "next/server"
import { Image as IImage } from 'sanity';
import { client } from "../../../lib/sanityClient"

interface IProduct {
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

export async function GET(request:NextRequest) {

    try {
        const result:IProduct[] = await client.fetch(`*[_type=="product"]{
            title,
            description,
            _id,
            price,
           image,
            category -> {
                name
            },
            subcategory -> {
                name
            }
           }`);
            // console.log("API data "+result)
            return NextResponse.json({"data":result});
    } catch (error) {
        console.log((error as {message : string}).message)
        return NextResponse.json({"Error":error});
    }
    
}