import React from 'react'     
import Link from "next/link";


export default function Navbar() {
    return(
        <nav className='flex space-x-7 py-4'>
            <img src="https://i.imgur.com/6r1X7bF.png" />
             <p className='text-2xl font-bold text-grey-800'>Gemeente Rotterbosch</p>
             <Link href='/blogs/blog35'><p className='text-2xl font-bold text-grey-800'>Recente Blog</p>
             </Link>
        </nav>

    )

}