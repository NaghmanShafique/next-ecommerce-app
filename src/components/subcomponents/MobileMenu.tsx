import { MenuIcon, X } from "lucide-react"
import Link from "next/link"

const MobileMenu = () => {

    return (
        <div className="mx-7 z-10">
            <div className="bg-gray-200 py-4 px-6">
              <li className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none flex justify-center items-center">
                 <Link href={"/"}>Female</Link>
              </li> 
              <li className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none flex justify-center items-center">
                 <Link href={"/"}>Male</Link>
              </li> 
              <li className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none flex justify-center items-center">
                 <Link href={"/"}>Kids</Link>
              </li> 
              <li className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none flex justify-center items-center">
                 <Link href={"/"}>All Products</Link>
              </li>    
            </div>
        </div>
    )
}

export default MobileMenu