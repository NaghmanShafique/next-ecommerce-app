"use client"
import React, { FC } from 'react'
import { Image as IImage} from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image'
import { singleProductType } from '../utils/ProductsDataTypes';

export const ItemCard: FC<{ ItemData:singleProductType }> = ({ ItemData })=> {

    const addToCartHandler = async () =>{
        const res = await fetch('/api/cart',{
           method:"POST",
           body: JSON.stringify({
             product_id : ItemData._id,
           })

        })
        const result = await res.json();
        console.log(result);
    }

  return (
    <div>
        <Image 
                width={400}
                height={400}
                className='max-h-[400px] object-cover object-bottom'
                src={urlForImage(ItemData.image).url()} alt="Product"/>
                <h1>{ItemData.title}</h1>
                <h3>${ItemData.price}</h3>
                <button onClick={()=>addToCartHandler()} className='bg-black text-white py-2 w-32 rounded-md '>Add To Cart</button>
    </div>
  )
}
