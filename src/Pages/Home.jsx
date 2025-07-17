import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Button from '../component/Button'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from "../../Photo.png"
import Skills from '../component/Skills';
import Projects from './Projects';

const Home = () => {
    return (
        <main className='max-w-5xl mx-auto font-Fav1 flex flex-col gap-10'>

            <Navbar />

            {/* Hero Section */}
            <div className='px-8 flex gap-20 mb-28'>
                <div className='flex gap-8 '>

                    {/* BioDiv */}
                    <div className='w-[60%] flex flex-col gap-10'>
                              <p className="text-5xl font-bold text-gray-700 dark:text-gray-500 tracking-wider leading-tight"> Hi there, I'm a <span className='text-cyan-600	-'> Software Engineer</span></p>
                       <div className="text-xl text-gray-600 dark:text-gray-500">Meet Khushbu Khatri!
                            I'm a Web Developer and UI/UX Designer with a passion for creating intuitive and visually appealing digital experiences. Currently, I’m working as a Salesforce Administrator. My diverse expertise bridges technical development and design, enabling me to deliver user-focused solutions that are both functional and aesthetically engaging.
                        </div>
                        <Button />
                    </div>
                    {/* picdiv */}
                    <div className='w-[40%]  flex flex-col'>
                        <img className="flex-grow w-full h-[370px] rounded-3xl " src={img} alt="Bordered avatar" />

                        <div className='flex gap-2 justify-center'>

                            <a href="https://x.com/Khushbu_2405" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className='size-6 m-3 hover:text-cyan-600' />

                            </a>
                            <a href="https://github.com/meta-khushbu-khatri" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='size-6 m-3 hover:text-cyan-600' />
                            </a>

                            <a href="https://www.linkedin.com/in/khushbu-khatri-a10853196/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='size-6 m-3 hover:text-cyan-600' />
                            </a>


                        </div>
                    </div>

                </div>

            </div>
            <div className=' px-8 flex flex-col gap-4 mb-20'>
                <div>
                    <span className='text-4xl tracking-wide text-cyan-600 '>Skills</span>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <Skills/>
                    {/* <div className=' bg-cyan-600 rounded-lg p-2'>HTML5</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>CSS</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>React</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>JavaScript</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Tailwind CSS</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>DBMS</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>GitHub</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Figma</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Wireframing</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Adobe XD</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Sketch</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>Interactive Prototyping</div>
                    <div className=' bg-cyan-600 rounded-lg p-2'>User Personas</div> */}

                </div>

            </div>
            <hr className="w-60 h-1 mx-auto mb-[-19] bg-cyan-600  dark:bg-gray-700" />
          
            <Footer />
        </main>
    )
}

export default Home
