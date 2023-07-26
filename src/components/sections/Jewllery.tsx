import Image from 'next/image'
import React from 'react'
import JewelleryGirl from "@/components/assets/images/jewellerygirl.webp"

const Jewllery = () => {
  return (
    <div className="max-w-[1440px] mx-8 mt-20 text-gray-700">
       {/* Top Div */}
       
       <div className='flex justify-start md:justify-end text-4xl md:text-5xl font-bold md:font-semibold mb-8'>
            <h6 className='w-full lg:max-w-[30rem]'>
            Unique and Authentic Vintage Designer Jewellery
            </h6>
       </div>  
       
       {/* Botton Div */}
       <div className='flex flex-col lg:flex-row justify-between'>
         
         {/* Left Side Div */}
         
         <div className='relative grid grid-cols-2 grid-rows-2 gap-6 lg:gap-10 basis-1/2'>
            <div className="absolute -z-10">
               <h6 className='text-[6rem] md:text-8xl lg:text-[7rem] font-extrabold leading-[6.1rem] text-gray-100'>
                Diffrent from others</h6>
            </div>
            <div className='max-w-[11rem] space-y-3'>
                <h6 className='font-semibold text-xl'>Using Good Quality Materials</h6>
                <p className='text-base font-light leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className='max-w-[11rem] space-y-3' >
               <h6 className='font-semibold text-xl'>100% Handmade Products</h6>
                <p className='text-base font-light leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p> 
            </div>
            <div className='max-w-[11rem] space-y-3'>
               <h6 className='font-semibold text-xl'>Modern Fashion Design</h6>
                <p className='text-base font-light leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className='max-w-[11rem] space-y-3'>
                <h6 className='font-semibold text-xl'>Discount for Bulk Orders</h6>
                <p className='text-base font-light leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
         </div>
        
        {/* Right Side Div */}
         
         <div className='flex flex-col md:flex-row basis-1/2 py-2'>
            <div className='w-full pb-6 lg:pb-0 md:w-72 shrink-0'>
                   <Image width={1000} height={1000} src={JewelleryGirl} alt="Jewllery Girl"/>
            </div>
            <div className='px-6'>
                <p style ={{wordSpacing:"0.85rem"}}className='shrink-0 w-full lg:max-w-xs'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <button className='text-white bg-black w-56 lg:w-28 px-10 lg:px-6 py-2 mt-16 text-lg font-normal'>See All Products</button>
            </div>
         </div>
       </div>  
    </div>
    
  )
}

export default Jewllery