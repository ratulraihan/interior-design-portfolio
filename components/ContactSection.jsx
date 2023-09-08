import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-zinc-100">
            <div className="container flex items-center justify-between border-b-2 py-14">
                <div>
                    <p className="text-2xl">Lets</p>
                    <h1 className="text-6xl font-medium">Get in touch</h1>
                </div>
                <a className="inline-flex items-center gap-1 px-6 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">CONTACTUS <TbArrowUpRight className="text-xl" /> </a>
            </div>
        </div>
    )
}