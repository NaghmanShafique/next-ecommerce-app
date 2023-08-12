import React, { FC } from 'react'
import { singleProductType } from '@/components/utils/ProductsDataTypes';
import { fetchAllProducts } from '@/app/product/page';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image'

interface propsType {
  result: singleProductType[];
}



export default async function Catalog({ params }: { params: { slug: string } }) {
  const productData: propsType = await fetchAllProducts();
  //console.log("Product Route ", params.slug)

  const oneProduct = productData.result.filter((item) => item.Slug.current === params.slug)
  console.log("One Product Data", oneProduct)
  return (
    <>
      {
        oneProduct.map((item: singleProductType) => (
          <div>
            <div>
              <Image
                width={400}
                height={400}
                src={urlForImage(item.image).url()} alt="Product" />
            </div>
            <div>
              Product Details
            </div>
          </div>
        ))
      }
    </>
  )
}

