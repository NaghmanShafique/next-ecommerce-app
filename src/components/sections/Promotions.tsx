import Image from "next/image"
import PromoGirl from "@/components/assets/images/PromoGirl.webp"
import PromoBoy from "@/components/assets/images/promoboy.webp"
import PromoBoy2 from "@/components/assets/images/promoboy2.webp"

const Promotions = () => {
   return (
      <div className="mt-10 max-w-[1440px] mx-20">
         <div className="max-w=[1440] mt-10 text-center">
            <p className="text-lg font-semibold text-blue-600">PROMOTIONS</p>
            <h4 className="text-3xl font-bold text-gray-800">Our Promotions Events</h4>
         </div>
         <div className="my-4">
            <div className="grid grid-cols-4 gap-5">
               <div className="flex justify-evenly items-center bg-[#d6d6d8] col-span-2">
                  <div className="max-w-[10rem] my-2 mx-8">
                     <h4 className="text-3xl font-semibold px-1">
                        GET UP TO <span className="text-4xl font-semibold">60%</span>
                     </h4>
                     <p className="text-xl font-normal w-36 px-1">
                        For the summer season
                     </p>
                  </div>
                  <div>
                     <Image src={PromoGirl} alt={"Promo Girl"} width={240} />
                  </div>
               </div>
               <div className="bg-[#efe1c7] w-full h-full row-span-2">
                  <div className="pt-6 px-6">
                     <p>Flex Sweetshirt</p>
                     <p><s>$100.00</s>&nbsp;&nbsp;<span className="text-xl font-semibold">$75.00</span></p>
                  </div>
                  <div>
                     <Image src={PromoBoy} alt={"Promo Boy"} width={240} />
                  </div>
               </div>
               <div className="bg-[#d7d7d9] w-full h-full row-span-2 ">
                  <div className="pt-6 px-6">
                     <p>Flex Push Button Bomber</p>
                     <p><s>$1225.00</s>&nbsp;&nbsp;<span className="text-xl font-semibold">$190.00</span> </p>
                  </div>
                  <div>
                     <Image src={PromoBoy2} alt={"Promo Boy-2"} width={240} />
                  </div>
               </div>
               <div className="bg-[#212121] w-full h-44 col-span-2">
                  <div className="text-white text-center mt-9">
                     <h2 className="text-4xl font-bold">Get 30% off</h2>
                     <p className="text-sm font-medium mt-5">USE PROMO CODE</p>
                  </div>
                  <div className="text-center">
                     <button className="bg-[#474747] tracking-widest text-white font-bold text-lg w-[280px] rounded-lg h-9 py-1 mt-1">DINEWEEKENDSALE</button>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Promotions