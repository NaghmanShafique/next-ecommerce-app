import Image from 'next/image'
import { client } from "../lib/sanityClient"
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';
import {ItemCard}  from '@/components/shared/ItemCard';
import Hero from '@/components/sections/Hero';
import Promotions from '@/components/sections/Promotions';
import { NextResponse } from 'next/server';
import Products from '@/components/sections/Products';
import { singleProductType } from '@/components/utils/ProductsDataTypes';
import Jewllery from '@/components/sections/Jewllery';
import NewsLetter from '@/components/sections/NewsLetter';



const getProducts = async () => {
    const result:singleProductType[] = await client.fetch(`*[_type=="product"]{
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
    return result;
} 

export default async function Home() {
    const res:singleProductType[] = await getProducts();
    console.log("My Product 3" ,res)

    return (
        <>
            <Hero />
            <Promotions/>
            <Products ProductData={res}/>
            <Jewllery/>
            <NewsLetter/>
            {/* <AllProducts/> */}
            {/* <div className='grid grid-cols-[auto,auto,auto] justify-center gap-x-10 mt-5'>
                {res.map((item, index:number) => (
                    <div key={index}>
                        <ItemCard itemData={item} />
                    </div>
                ))} */}
            {/* </div> */}
            
        </>

    )
}
