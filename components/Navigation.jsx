"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/features', label: 'FEATURES' },
    { href: '/product', label: 'PRODUCT' },
    { href: '/gallery', label: 'GALLERY' },

]

export default function Navigation() {
    const pathname = usePathname()

    return (
        <>
            <nav className="items-center hidden mx-auto font-medium lg:flex gap-x-6">
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} className={
                        pathname === href ? 'text-black font-semibold' : ''
                    }>
                        {label}
                    </Link>
                ))}
            </nav>
        </>
    )
}