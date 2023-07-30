import AllProducts from '@/components/sections/AllProducts';
import React from 'react'
import BASE_PATH_FORAPI from '@/components/shared/BaseApiPath';

async function fetchAllProducts() {
    //let res = await fetch("http://localhost:3000/api/products?start=0&end=10")
    console.log("URL "+BASE_PATH_FORAPI)
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=11&type=Male`)
    if (!res.ok){
        throw new Error("Failed to Fetch Products data.")
    }
    //console.log(res.json());
    return res.json();
}
const Male = async () => {
  const productData = await fetchAllProducts();
  //var { productArray } = productData
  //console.log("data array Male " + productData.productArray[0].title)
  return (
        <div>
          <AllProducts productData={productData} />
        </div>

      )
    
  
}

export default Male