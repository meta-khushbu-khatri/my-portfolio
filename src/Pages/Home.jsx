import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Button from '../component/Button'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from "../../Photo.png"

const Home = () => {
    return (
        <main className='max-w-5xl mx-auto font-Fav1 flex flex-col gap-24'>

            <Navbar />

            {/* Hero Section */}
            <div className='px-8'>
                <div className='flex'>

                    {/* BioDiv */}
                    <div className='w-[60%] flex flex-col gap-10'>
                        <p className='text-6xl tracking-wide'> Hi there, I'm a <span className='text-cyan-600	-'> Software Engineer</span></p>
                        <div className='tracking-wider text-gray-500	'>Meet Khushbu Khatri!
                            I'm a Web Developer and UI/UX Designer with a passion for creating intuitive and visually appealing digital experiences. Currently, I’m working as a Salesforce Administrator. My diverse expertise bridges technical development and design, enabling me to deliver user-focused solutions that are both functional and aesthetically engaging.
                        </div>
                        <Button />
                    </div>
                    {/* picdiv */}
                    <div className='w-[40%]  flex flex-col'>
                        <img className="flex-grow w-full h-[370px] rounded-3xl " src={img} alt="Bordered avatar" />

                        <div className='flex gap-2 justify-center'>
                            <FaXTwitter className='size-6 m-3 hover:text-cyan-600' />
                            <FaGithub className='size-6 m-3  hover:text-cyan-600 ' />
                            <FaLinkedin className='size-6 m-3  hover:text-cyan-600' />

                        </div>
                    </div>

                </div>

            </div>
            <div className=' px-8 flex flex-col gap-3'>
                <div>
                    <span className='text-4xl tracking-wide text-cyan-600 '>Skills</span>
                </div>
                <div className='flex gap-4'>
                    <div className=' bg-cyan-600 rounded-lg p-2'>HTML5</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>CSS</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>React</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>JavaScript</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Tailwind CSS</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Git</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Figma</div>


                </div>

            </div>

            <Footer />
        </main>
    )
}

export default Home
