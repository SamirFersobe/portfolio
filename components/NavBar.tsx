import React from 'react'
import Link from 'next/dist/client/link'



export default function NavBar() {
    const style_string_name: string = "bg-gray-100 rounded-md p-1 mx-2 hover:bg-gray-300 "
    return (
        <nav className = "bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center ">
            <ul  className = 'font-sans flex flex-row-reverse m-10 space-x-3.5 text-blue-400 font-extrabold'>
                <li className = {style_string_name} ><Link href='projects'> Projasdasdects </Link></li>
                <li className = {style_string_name} > <Link href='research'> Reseaasdasdrch </Link> </li>
                <li className = {style_string_name} > <Link href='about'> About Me </Link></li>
                <li className = {style_string_name} > <Link href='projects'> Contact </Link> </li>    
            </ul>
            </div>
             </div>
             </div>
        </nav>
    )
}
