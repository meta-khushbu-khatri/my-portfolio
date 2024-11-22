import React from 'react'
import Avatar from './Avatar'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className='p-8'>

            <div className='flex  p-5 justify-between items-center gap-6'>
                <a href='/' className="flex gap-2 items-center">
                    <Avatar /><span className='font-bold'>Khushbu Khatri</span>
                </a>
                <div className='flex gap-7'>
                    <div className='hover:text-cyan-600'>Project</div>
                    <div className='hover:text-cyan-600'>About</div>
                    <div className='hover:text-cyan-600'>Review</div>
                </div>
                <div className='flex gap-6'>
                <FaXTwitter className='size-6 hover:text-cyan-600'/>
                <FaGithub className='size-6 hover:text-cyan-600'/>
                <FaLinkedin className='size-6 hover:text-cyan-600'/>
              



                </div>
            </div>
            
        </footer>
    )
}

export default Footer
