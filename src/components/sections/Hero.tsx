import Image from "next/image"
import HeroGirlImage from "../assets/images/HeroGirl.webp"
import Bazar from "../assets/images/bazar.webp"
import Bustle from "../assets/images/bustle.webp"
import Versace from "../assets/images/versace.webp"
import Instyle from "../assets/images/instyle.webp"
import { ShoppingCart } from "lucide-react"

const Hero = () => {
    const btnLabel = "Start\n Shopping"
    const heroText = "An Industrial\nTake On\nStreewear"
    return (
        <div className="flex justify-between items-center mt-10 max-w-[1440px] mx-20">
            {/* Left Side of a Hero Section */}
            <div className="max-w-[720]">
                <button className="rounded-md bg-blue-200 text-blue-700 font-bold w-28 px-4 py-2">Sale 70%</button>
                <h1 className="scroll-m-20 text-5xl text-gray-800 font-bold tracking-tight lg:text-6xl whitespace-pre my-10">
                    {heroText}
                </h1>
                <p className="leading-7 my-6 text-gray-600">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <button className="flex justify-center items-center gap-x-4 bg-black text-white px-4 py-2 right-2 ring-slate-800 w-46">
                    <ShoppingCart size={21} />
                    <p className="whitespace-pre font-bold">{btnLabel}</p>
                </button>
                <div className="flex-row sm:flex flex-shrink-0 gap-x-4 mt-10 w-full">
                    <Image className="flex-shrink-0" src={Bazar} alt="Bazar" />
                    <Image className="flex-shrink-0" src={Bustle} alt="Bustle" />
                    <Image className="flex-shrink-0" src={Versace} alt="Versace" />
                    <Image className="flex-shrink-0" src={Instyle} alt="In Style" />
                </div>
            </div>
            {/* Right Side of a Hero Section */}
            <div className="hidden md:flex flex-shrink-0 max-w-[720] w-[600px] h-[600px] rounded-full bg-[#FFECE3]">
                <Image height={600} src={HeroGirlImage} alt="Hero Girls Image" />
            </div>
        </div>
    )
}

export default Hero