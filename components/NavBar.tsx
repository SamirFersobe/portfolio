import React from 'react'
import Link from 'next/dist/client/link'



export default function NavBar() {
    const style_string_name: string = " p-1 mx-2 hover:text-white"
    const style_home_page: string =  "p-1 mr-auto hover:text-white text-xl"
    return (
        <nav className = "bg-black">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center justify-end w-full">
                <ul  className = ' w-full font-sans flex flex-row m-10 space-x-3.5 text-blue-400 font-extrabold text-lg lg:gap-12 sm:gap-4'>
                <li className = {style_home_page} ><Link href= '/'> Samir Fersobe </Link></li>
                <li className = {style_string_name} ><Link href='projects'> Projects </Link></li>
                <li className = {style_string_name} > <Link href='research'>Research </Link> </li>
                <li className = {style_string_name} > <Link href='about'> About Me </Link></li>
                <li className = {style_string_name} > <Link href='projects'> Contact Me</Link> </li>    
             </ul>
            </div>
             </div>
             </div>
        </nav>
    )
}
