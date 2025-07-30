import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Button from '../component/Button';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from "../../photo.png";
import Skills from '../component/Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <main className='max-w-5xl mx-auto font-Fav1 flex flex-col gap-10'>
      <Navbar />

      {/* Hero Section */}
      <div className='px-8 mb-28'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
          {/* BioDiv */}
          <div className='w-full lg:w-[60%] flex flex-col gap-10'>
            <p className="text-4xl sm:text-5xl font-bold text-gray-700 dark:text-gray-500 tracking-wider leading-tight">
              Hi there, I'm a <span className='text-cyan-600'>Software Engineer</span>
            </p>
            <div className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-500">
              Meet Khushbu Khatri! I'm a Web Developer and UI/UX Designer with a passion for creating intuitive and visually appealing digital experiences. Currently, I’m working as a Salesforce Administrator...
            </div>
            <Button />
          </div>

          {/* picdiv */}
          <div className='w-full lg:w-[40%] flex flex-col items-center'>
            <img className="w-full h-auto max-h-[370px] rounded-3xl object-cover" src={img} alt="Bordered avatar" />

            <div className='flex gap-2 justify-center mt-4'>
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

      {/* Skills Section */}
      <div className='px-8 flex flex-col gap-4 mb-20'>
        <div>
          <span className='text-3xl sm:text-4xl tracking-wide text-cyan-600'>Skills</span>
        </div>
        <div className='flex flex-wrap gap-4'>
          <Skills />
        </div>
      </div>

      <hr className="w-60 h-1 mx-auto bg-cyan-600 dark:bg-gray-700" />
      <Footer />
      <div className="mb-20" /> {/* Extra space after footer */}
    </main>
  );
};

export default Home;
