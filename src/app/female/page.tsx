import AllProducts from '@/components/sections/AllProducts';
import React from 'react'
import BASE_PATH_FORAPI from '@/components/shared/BaseApiPath';
import { singleProductType } from '@/components/utils/ProductsDataTypes';

interface propsType {
  result :  singleProductType[];
}

async function fetchFemaleProducts() {
    //let res = await fetch("http://localhost:3000/api/products?start=0&end=10")
    //console.log("URL "+BASE_PATH_FORAPI)
    //let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=11`)
    let res = await fetch("https://kjjyuy0p.api.sanity.io/v2023-06-22/data/query/production?query=*%5B_type%3D%3D%22product%22%20%26%26%20category-%3Ename%3D%3D%22Female%22%5D%7B%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20%20%20_id%2C%0A%20%20%20%20price%2C%0A%20%20%20image%2C%0A%20%20%20Slug%2C%0A%20%20%20%20category%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%7D%2C%0A%20%20%20%20subcategory%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%7D");
    if (!res.ok){
        throw new Error("Failed to Fetch Products data.")
    }
    //console.log("Female 1",res);
    return res.json();
}
const Female = async () => {
  const productData:propsType = await fetchFemaleProducts();
  console.log("Female 2",productData)
    return (
    <div>
        <AllProducts productData = {productData}/>
    </div>
  )
}

export default Female