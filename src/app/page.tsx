import Image from 'next/image'
import {client} from "../lib/sanityClient"
import { Image as IImage} from 'sanity';
import { urlForImage } from '../../sanity/lib/image';
import { AddToCart } from '@/components/AddToCart';

interface IProduct  {
    title:string,
    description:string,
    _id:string,
    price:number,
    image:IImage,
    category:{
        name:string
    },
    subcategory:{
        name:string
    }


}
export const getProducts = async ()=> {
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
   return result;
}
export default async function Home() {
    const data = await getProducts();
    //console.log(data)
    return (
      <div className='grid grid-cols-[auto,auto,auto] justify-center gap-x-10'>
          {data.map((item,key=item.price)=>(
           <div>
            <AddToCart item={item}/>
           </div>
               
          ))}
      </div>  
      
    )
}
