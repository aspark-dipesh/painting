import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={'/'}>Hand Painting</Link></li>
                        <li><Link href={'/'}>Portrait</Link></li>
                        <li><Link href={'/'}>Wall Panting</Link></li>
                        <li><Link href={'/'}>Oil Panting</Link></li>
                        <li><Link href={'/'}>Watercolor Panting</Link></li>
                        <li><Link href={'/'}>Acrylic Panting</Link></li>

                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost text-xl">Painters</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-lg font-semibold">
                    <li><Link href={'/'}>Hand Painting</Link></li>
                    <li><Link href={'/'}>Portrait</Link></li>
                    <li><Link href={'/'}>Wall Panting</Link></li>
                    <li><Link href={'/'}>Oil Panting</Link></li>
                    <li><Link href={'/'}>Watercolor Panting</Link></li>
                    <li><Link href={'/'}>Acrylic Panting</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/cart'} className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                </Link>
            </div>
        </div>
    )
}
