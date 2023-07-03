"use client"
import Image from "next/image"
import Menu from "../shared/Menu"
import { SearchIcon, ShoppingCartIcon ,MenuIcon ,X} from "lucide-react"
import MobileMenu from "../subcomponents/MobileMenu"
import { useState } from "react"


const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
    return (
        <nav className="sticky top-0 z-10 backdrop-blur-lg bg-[#ffffffba]">
            <div className="flex h-10 items-center justify-between px-20 max-w-[1440px]">
                <div className="flex-shrink-0 w-40">
                    <Image src={"/Logo.webp"} alt="Logo" width={150} height={150} />
                </div>
                <div className="hidden lg:flex items-center justify-between gap-x-14 w-full ml-10">
                    <div>
                        <Menu />
                    </div>
                    <div className="flex gap-1 items-center border border-gray-200 rounded-lg bg-white">
                        <SearchIcon size={20} />
                        <input className="rounded-lg flex-grow" type="text" placeholder="What are you looking for" />
                    </div>
                    <div className="flex-shrink-0 h-8 w-8 flex justify-center items-center bg-gray-300 rounded-full relative hover:scale-105 duration-300 ease-in">
                        <ShoppingCartIcon size={21} />
                        <span className="flex justify-center items-center h-5 w-5 rounded-full bg-red-400 text-white absolute bottom-4 left-6">
                            0
                        </span>
                    </div>
                </div>
                <div  className="flex" onClick={()=>setNavbarOpen(!isNavbarOpen)}>
                {
                  isNavbarOpen ?
                    <div className="lg:hidden"> 
                        <X size={30}/>
                    </div>
                    :
                    <div className="lg:hidden ">
                        <MenuIcon size={30} />
                    </div>
                }
              </div>
              
            </div>
            {isNavbarOpen && <MobileMenu/>}
        </nav>
       
         
    )
}

export default Navbar