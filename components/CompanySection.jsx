import Image from "next/image";

export default function CompanySection() {
    return (
        <div className="py-4 bg-zinc-100">
            <p className="py-4 text-lg font-medium text-center opacity-40">Trusted by the world’s best companies</p>
            <div className="container flex flex-wrap items-center justify-between">

                <Image src="/image/air-company-logo.png" width={128} height={128} alt="" className="opacity-40" />
                <Image src="/image/nike.png" width={128} height={128} alt="" className="opacity-40" />
                <Image src="/image/samsung.png" width={128} height={128} alt="" className="opacity-40" />
                <Image src="/image/amazon-pay.png" width={128} height={128} alt="" className="opacity-40" />
            </div>
        </div>
    );
}