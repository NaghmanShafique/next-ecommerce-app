import Image from 'next/image'
import React from 'react'
import Twitter from "../assets/images/twitter-com.png"
import FaceBook from "../assets/images/facebook-com.png"
import LinkedIn from "../assets/images/linkedin-com.png"

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font max-w-[1440px] mx-8">
            <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-72 flex-shrink-0 md:mx-0 mx-8 text-left md:text-center">
                    {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span> */}
                    {/* </a> */}

                    <a className='flex items-center justify-start  text-gray-800'>
                        <div>
                            <Image src={"/Logo.webp"} alt="Logo" width={150} height={150} />
                        </div>
                    </a>


                    <p className="mt-8 text-base text-gray-700 text-left">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                  <div className='flex gap-4 mt-10'>
                    
                        <div className='bg-gray-100 w-12 h-12 rounded-lg flex justify-center items-center'>
                            <Image width={30} height={30} src={Twitter} alt="Twitter"/>
                         </div>
                    
                         <div className='bg-gray-100 w-12 h-12 rounded-lg flex justify-center items-center f'>
                       <Image width={26}  src={FaceBook} alt="FaceBook"/>
                       </div>
                       
                    
                       <div className='bg-gray-100 w-12 rounded-lg flex justify-center items-center'>
                     <Image width={40} src={LinkedIn} alt="LinkedIn"/>
                     </div>
                       
                    
                  </div>
                </div>
                <div className="flex flex-col flex-grow md:flex-row justify-between md:pl-20 -mb-10 md:mt-0 mt-10 text-left md:text-center">
                    <div className="px-10">
                        <h2 className="text-2xl font-bold text-gray-500 mb-3">Company</h2>
                        <nav className="list-none mb-10 text-lg">
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">About</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Term of Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">How it works</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </nav>
                    </div>
                    <div className="px-10">
                        <h2 className="text-2xl font-bold text-gray-500 mb-3">Support</h2>
                        <nav className="list-none mb-10 text-lg">
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Support Carrer</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">24h Service</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
                            </li>
                        </nav>
                    </div>
                    <div className="px-10">
                        <h2 className="text-2xl font-bold text-gray-500 mb-3">Contact</h2>
                        <nav className="list-none mb-10 text-lg">
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
                            </li>
                            <li className='mb-2'>
                                <a className="text-gray-600 hover:text-gray-800">Support 24h</a>
                            </li>
                        </nav>
                    </div>

                </div>
            </div>
            {/* <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer