import { NextRequest,NextResponse } from "next/server"
import { Image as IImage } from 'sanity';
import { client } from "../../../lib/sanityClient"
import { singleProductType } from '@/components/utils/ProductsDataTypes';

// interface IProduct {
//     title: string,
//     description: string,
//     _id: string,
//     price: number,
//    image: IImage,
//     category: {
//         name: string
//     },
//     subcategory: {
//         name: string
//     }
// }

export async function GET(request:NextRequest) {
     
    const productData : singleProductType[] = [];
    const param  = request.nextUrl.searchParams;
    const type = param.get("type");
    let result:singleProductType[] = [];
    try {
        if(type) {
           result = await client.fetch(`*[_type=="product" && category->name==$type]{
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
           }`,{type});
        } else {
            result = await client.fetch(`*[_type=="product"]{
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
        } 
            // console.log("API data "+result)
            productData.push(...result)
            console.log("Product API DATA "+result)
            if(param.has("start") && param.has("end")) {
                console.log("In Has"+param.get("start"))
                 if(productData[Number(param.get("start"))]) {
                    console.log("In Start")
                    const productArray =  productData.slice(Number(param.get("start")) , Number(param.get("end")))
                    console.log("Product Array "+productArray[0].description)
                    return NextResponse.json({productArray});
                 } 
                 return NextResponse.json({productArray : "Naghman Not Found"});   
            }
            
            return NextResponse.json({productArray : productData});
    } catch (error) {
        console.log((error as {message : string}).message)
        return NextResponse.json({"Error":error});
    }
    
}