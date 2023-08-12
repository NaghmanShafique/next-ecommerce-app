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
     
    let productData : Array<singleProductType> = [];
    const param  = request.nextUrl.searchParams;
    const type = param.get("type");
    let result
    try {
        if(param.has("type")) {
            console.log("with Type query")
           result = await client.fetch(`*[_type=="product" && category->name==$type]{
            title,
            description,
            _id,
            price,
           image,
           Slug,
            category -> {
                name
            },
            subcategory -> {
                name
            }
           }`,{type});
        } else {
            console.log("without Type query")
            result = await client.fetch(`*[_type=="product"]{
                title,
                description,
                _id,
                price,
               image,
               Slug,
                category -> {
                    name
                },
                subcategory -> {
                    name
                }
               }`);
        } 
             //console.log("API data Female",result)
            productData.push(...result)
            //console.log("Product API DATA New "+productData)
            if(param.has("start") && param.has("end")) {
                //console.log("In Has"+param.get("start"))
                 if(productData[Number(param.get("start"))]) {
                    //console.log("In Start")
                    const result =  productData.slice(Number(param.get("start")) , Number(param.get("end")))
                    console.log("Female Array slug",result[0].Slug.current)
                    return NextResponse.json({result});
                 } 
                 //console.log("Product Array")
                 //return NextResponse.json({productArray : "Products Not Found"});   
                 return NextResponse.json({result : [{title:"Products Not Found"}]}); 
            }
            
            return NextResponse.json({result : productData});
    } catch (error) {
        console.log((error as {message : string}).message)
        return NextResponse.json({"Error":error});
    }
    
}