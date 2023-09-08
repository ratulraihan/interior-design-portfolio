import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="container flex items-center justify-between py-8">

            <Image src={logo} alt="logo" className="w-40 h-6" />

            <Navigation />

            <Link href="/contact" className="inline-flex items-center px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow hover:bg-gray-100">
                Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>

        </div>
    );
}