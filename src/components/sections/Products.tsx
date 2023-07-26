"use client"
import React, { FC } from 'react'
import { singleProductType } from '../utils/ProductsDataTypes'
import { ItemCard } from '../shared/ItemCard'

const Products :FC<{ProductData :singleProductType[]}>= ({ProductData}) => {
  return (
    <div className="mt-10 max-w-[1440px] mx-8' h-[620px]">
      <div>
      <div className="max-w=[1440] mt-20 text-center">
            <p className="text-lg font-semibold text-blue-600">Products</p>
            <h4 className="text-3xl font-bold text-gray-800">Check What We Have</h4>
      </div>
      <div className='flex  mt-14 mx-8 h-48'>
        {
            ProductData.map((item:singleProductType,index:number) => (
              <ItemCard key={item._id} ItemData={item}/>
            )
        )}
       </div> 
    </div>
    </div>  
  )
}

export default Products