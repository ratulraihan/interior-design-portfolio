import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {

    return (

        <div className="bg-zinc-50">
            <div className="container flex justify-between ">
                <div className="py-14">
                    <p className="tracking-widest">OFFER FOR THE BEST INTERIOR</p>
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-7xl">An aesthetic room is <br />given harmony</h1>
                    <p className="pt-4 pb-10 text-gray-500">
                        Change your view with the best interior design. <br /> We provide the best interior design for your Home. <br />Make every moment beautiful with the best interior design.
                    </p>
                    <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">Get Started <TbArrowUpRight className="w-5 h-5 ml-2" /></button>
                </div>

                <Image src="/image/kitchen.png" width={800} height={500} alt="" className="absolute right-0 h-[488px] max-md:hidden" />
            </div>
        </div>
    );
}