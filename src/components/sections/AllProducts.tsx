"use client"
import { Component, ReactNode } from "react";
import { singleProductType } from '../utils/ProductsDataTypes'
import { ItemCard } from '../shared/ItemCard'

interface propsType {
    productArray :  Array<singleProductType>
}
export default class AllProducts extends Component<{productData : propsType}> {
   getData = ()=> {
    console.log(this.props.productData);
   }
    render(){
       return(
            // <div onClick={this.getData}>{this.props.productData.productArray[0].description}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 py-10 max-w-[1440px] mx-8">
                    {
                        this.props.productData.productArray.map((item:singleProductType,index:number) => (
                            <ItemCard key={item._id} ItemData={item}/>
                          )
                      )
                    }
                </div>
            )
    }   
   }
