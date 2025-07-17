import React from 'react'
import Avatar from './Avatar'
import DarkMode from './DarkMode'


const Navbar = () => {
    return (
        <header className="p-8">
     
            <nav>
                < div className="flex gap-10 rounded-xl bg-primary w-fit text-white p-2 items-center px-5" >
                    <a href="/" className="flex gap-2 items-center">
                        <Avatar />
                        <span className='bold rounded-none'>Khushbu Khatri</span></a>
                <a href="/projects" className='p-2 hover:bg-secondry hover:rounded-xl'>Projects</a>
                <a href="/about" className='p-2  hover:bg-secondry hover:rounded-xl'>About</a>
                <a href="/contacts" className='p-2  hover:bg-secondry hover:rounded-xl'>Contact</a>
                  <div className='flex items-end text-black'> <DarkMode/></div>
            </div>
            
        
      
         

        </nav>
        </header >
    )
}
 
export default Navbar
