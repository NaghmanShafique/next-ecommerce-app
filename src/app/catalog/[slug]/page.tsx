import React, { FC } from 'react'
import { singleProductType } from '@/components/utils/ProductsDataTypes';
import { fetchAllProducts } from '@/app/product/page';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image'
import Quantity from '@/components/shared/Quantity';
import AddToCartBtn from '@/components/shared/AddToCartBtn';

interface propsType {
  result: singleProductType[];
}

const sizez = ['XS', 'S', 'M', 'L', 'XL']

export default async function Catalog({ params }: { params: { slug: string } }) {
  const productData: propsType = await fetchAllProducts();
  //console.log("Product Route ", params.slug)

  const oneProduct = productData.result.filter((item) => item.Slug.current === params.slug)
  console.log("One Product Data", oneProduct)
  return (
    <>
      {
        oneProduct.map((item: singleProductType) => (
          <div className='mt-10 pb-10 max-w-[1440px] mx-8 bg-slate-50 flex-shrink-0'>
            <div className='grid grid-cols-1 px-10 flex-shrink-0 md:grid-cols-1 lg:grid-cols-2 gap-4  '>
              {/* Image Div */}
              <div className='flex justify-center items-center flex-shrink-0 w-full h-full'>
                <Image
                  width={550}
                  height={550}
                  src={urlForImage(item.image).url()} alt="Product" />
              </div>
              {/* Left Side Parent Div */}
              <div className='w-full flex-shrink-0 '>
                {/* Item Title / Sub-Category */}
                <div className='mt-16'>
                  <h1 className='text-4xl'>{item.title}</h1>
                  <h2 className='text-xl text-gray-400  font-semibold'>{item.subcategory.name}</h2>
                </div>
                {/* Item Size Div */}
                <div>
                  <h3 className='text-sm font-semibold mt-6'>Select Size</h3>
                  <div className='flex gap-x-4'>
                    {
                      sizez.map((size) => (
                        <div className='flex justify-center items-center w-7 h-7 mt-4 rounded-full hover:shadow-gray-400 hover:shadow-xl duration-300'>
                          <span key={size} className='font-semibold text-gray-500'>{size}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
                {/* Item Quantity div */}
                <div className='flex gap-x-3 mt-6 items-center'>
                  <h3 className='text-lg font-semibold'>Quantity :</h3>
                  <p className='text-base font-normal'><Quantity /></p>
                </div>
                {/* Item Add to Cart Div */}
                <div className='mt-8 flex gap-x-4'>
                  <div>
                    <AddToCartBtn />
                  </div>
                  <p className='text-3xl font-bold'>${item.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className='m-10 bg-white'>
              <div className='mx-10 border-b-2 p-14 relative z-10'>
                
                <h3 className='text-2xl font-semibold w-[25%]'>Product Information
                </h3>
                <h1 className='text-7xl top-12 left-10 lg:text-9xl font-bold text-gray-100 absolute lg:top-0 lg:left-10 -z-20'>Overview</h1>
              </div>
              <div className='flex mt-10 mx-10'>
                <h3 className='text-lg font-semibold text-gray-600 w-1/4'>PRODUCT DETAILS</h3>
                <p className='w-3/4 px-10 tracking-widest text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className='flex mt-10 mx-10'>
                <h3 className='text-lg font-semibold text-gray-600 w-1/4'>PRODUCT CARE</h3>
                <ol className='w-3/4 text-normal font-semibold text-gray-600 px-12 list-disc'>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit</li>
                </ol>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

