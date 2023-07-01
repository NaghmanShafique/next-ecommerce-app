"use client"
import React, { FC } from 'react'
import { Image as IImage} from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image'

export const AddToCart: FC<{ item:any }> = ({ item })=> {

    const addToCartHandler = async () =>{
        const res = await fetch('/api/cart',{
           method:"POST",
           body: JSON.stringify({
             product_id : item._id,
           })

        })
        const result = await res.json();
        console.log(result);
    }

  return (
    <div>
        <Image 
                width={200}
                height={200}
                className='max-h-[200px] object-cover object-bottom'
                src={urlForImage(item.image).url()} alt="Product"/>
                <h1>{item.title}</h1>
                <h3>${item.price}</h3>
                <button onClick={()=>addToCartHandler()} className='bg-black text-white py-2 w-32 rounded-md '>Add To Cart</button>
    </div>
  )
}
