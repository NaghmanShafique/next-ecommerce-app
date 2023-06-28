import Image from "next/image"
import Menu from "../shared/Menu"
import { SearchIcon, ShoppingCartIcon } from "lucide-react"


const Navbar = () => {
  return (
      <nav>
          <div className="flex h-10 bg-gray-100 items-center justify-between px-20 max-[1440px]:">
              <div>
                  <Image src={"/Logo.webp"} alt="Logo" width={150} height={150} />
              </div>
              <div>
                  <Menu />
              </div>
              <div className="flex gap-1 items-center border border-gray-200 rounded-lg bg-white">
                  <SearchIcon size={20}/>
                  <input className="rounded-lg" type="text" placeholder="What are you looking for" />
              </div>
              <div className="h-8 w-8 flex justify-center items-center bg-gray-300 rounded-full relative hover:scale-105 duration-300 ease-in">
                  <ShoppingCartIcon size={21}/>
                  <span className="flex justify-center items-center h-5 w-5 rounded-full bg-red-400 text-white absolute bottom-4 left-6">
                    0
                  </span>
              </div>
          </div>
      </nav>
  )
}

export default Navbar