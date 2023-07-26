import React from 'react'

const NewsLetter = () => {
    return (
        <div className="max-w-[1440px] mx-8">
            <div className='flex flex-col justify-center items-center text-gray-700 space-y-3 h-[70vh] text-center'>
                <h6 className='text-3xl md:text-4xl font-bold'>Subscribe Our Newsletter</h6>
                <p className='text-lg font-extralight'>Get the latest information and promo offers directly</p>
                <div className='space-x-3 flex flex-col md:flex-row justify-center items-center'>
                    <input  type="text" placeholder="Input email address" className='w-52 md:w-72 border px-2 md:px-4 py-1 md:py-2 text-sm font-extralight' />
                    <button className='bg-black text-white w-32 px-3 py-2 border-gray-600 text-sm font-semibold mt-4 md:mt-0'>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default NewsLetter