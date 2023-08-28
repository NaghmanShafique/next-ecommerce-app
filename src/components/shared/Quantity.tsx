"use client"
import React,{useState} from 'react'

const Quantity = () => {
    const [itemQty,setItemQty] = useState(1);
  return (
    <div className='flex gap-x-3'>
        <button onClick={() => {
            setItemQty(itemQty <= 1 ? 1 : itemQty - 1);
        }} 
        className='h-7 w-7 border-2 border-gray-200 rounded-full flex justify-center items-center bg-gray-200'>
            -
        </button>
        <span className='text-lg font-normal flex justify-center items-center'>
            {itemQty}
        </span>
        <button onClick={() => {
            setItemQty(itemQty + 1);
        }} 
        className='h-7 w-7 border-2 border-black rounded-full flex justify-center items-center'>
            +
        </button>
    </div>
  )
}

export default Quantity