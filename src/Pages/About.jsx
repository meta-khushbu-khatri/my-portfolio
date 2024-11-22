import React from 'react'
import Navbar from '../component/Navbar'

const About = () => {
    return (
        <main className='max-w-5xl mx-auto font-Fav1 flex flex-col gap-24'>
            <Navbar />
          
                <div>  {/* discri  */}
                <div className='w-[60%] flex flex-col gap-10'>
                        <p className='text-6xl tracking-wide'> Hi! I'm Khushbu, <span className='text-cyan-600	-'>A Web Developer and UI/UX Designer </span></p>
                        <div className='tracking-wider text-gray-500	'>Meet Khushbu Khatri!
                            I'm a Web Developer and UI/UX Designer with a passion for creating intuitive and visually appealing digital experiences. Currently, I’m working as a Salesforce Administrator. My diverse expertise bridges technical development and design, enabling me to deliver user-focused solutions that are both functional and aesthetically engaging.
                        </div>
                    <div></div>
                </div>
                <div>  {/* profile */}
                    <div></div>
                    <div></div>
                </div>

            </div>
        </main>

    )
}

export default About
