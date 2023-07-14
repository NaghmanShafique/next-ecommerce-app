"use client"
import React, { FC } from 'react'
import { singleProductType } from '../utils/ProductsDataTypes'
import { ItemCard } from '../shared/ItemCard'

const Products :FC<{ProductData :singleProductType[]}>= ({ProductData}) => {
  return (
    <div className='flex'>
        {
            ProductData.map((item:singleProductType,index:number) => (
              <ItemCard ItemData={item}/>
            )
        )}
    </div>
  )
}

export default Products