import React from 'react'
import Avatar from './Avatar'

const Navbar = () => {
    return (
        <header className="p-8">
            <nav>
                <div className="flex gap-10 rounded-xl bg-primary w-fit p-2 items-center px-5" >
                    <a href="/" className="flex gap-2 items-center">
                        <Avatar />
                        <span className='bold'>Khushbu Khatri</span></a>
                <a href="/Project" className='p-2 hover:bg-secondry hover:rounded-xl'>Projects</a>
                <a href="/About" className='p-2  hover:bg-secondry hover:rounded-xl'>About</a>
                <a href="/Reviews" className='p-2  hover:bg-secondry hover:rounded-xl'>Reviews</a>
            </div>

        </nav>
        </header >
    )
}
 
export default Navbar
