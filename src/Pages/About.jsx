import React from 'react'
import Navbar from '../component/Navbar'
import img from "../../photo.png"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from '../component/Footer';


const About = () => {
    return (
        <main className='max-w-5xl mx-auto font-Fav1 flex flex-col gap-10'>
            <Navbar />

            <div className='px-8'>  {/* discri  */}
                <div className='flex gap-10'>
                    {/* left div */}
                    <div className='w-[75%] flex flex-col gap-5'>
                        <p className="text-5xl font-bold text-gray-600 dark:text-gray-500 tracking-wider leading-tight "> Hi! I'm Khushbu, <span className='text-cyan-600'>A Web Developer and UI/UX Designer </span></p>
                        <div className='tracking-wider text-gray-600 dark:text-gray-500 leading-loose font-Fav1 text-lg '>Meet Khushbu Khatri!
                            I'm a Web Developer and UI/UX Designer with a passion for creating intuitive and visually appealing digital experiences. Currently, I’m working as a Salesforce Administrator. My diverse expertise bridges technical development and design, enabling me to deliver user-focused solutions that are both functional and aesthetically engaging.
                        </div>
                    </div>

                    {/* right div */}
                    <div className='w-[25%] '>  {/* profile */}
                        <img className="flex-grow border rounded-3xl " src={img} alt="Bordered avatar" />
                        <div className=' p-2 flex  gap-3 p'>
                            <FaXTwitter className='size-6 m-3 hover:text-cyan-600' />
                            <FaGithub className='size-6 m-3  hover:text-cyan-600 ' />
                            <FaLinkedin className='size-6 m-3  hover:text-cyan-600' />
                        </div>
                    </div>
                </div>
            </div>

            <div  className='px-8 flex flex-col gap-5 mb-20'>
                <p className='text-4xl tracking-wide text-cyan-600'>Experince  </p>
                <div className=" text-gray-600 dark:text-gray-500  mt-5 leading-loose text-lg ">Salesforce Administrator Salesforce CRM-Sales cloud and Service cloud. Lightning experience in SFDC administrative tasks like creating profiles, Roles, Users, Page layouts, Approvals, Workflow, Reports, Dashboards,
                    Tasks, and events. Also, basic knowledge of LWC, Apex Responsible for Installation, Upgrade, and maintenance of FinancialForce packages in the Salesforce environment

                    <div className=" text-gray-600 dark:text-gray-500  mt-4 leading-loose text-lg">
                        Experienced in both Lightning and Classic mode of Salesforce environment. Created customized dashboards and
                        reports for the case team members to keep track of the cases/opportunities to share insight across the company

                        <div className=" text-gray-600 dark:text-gray-500  mt-4 leading-loose text-lg">
                            I have practical experience in UI/UX design using Figma, where I created wireframes, interactive prototypes, and high-fidelity mockups for web and mobile applications. I used Figma’s advanced features such as components, auto-layout, and variants to design clean, responsive interfaces. For each project, I started by creating low-fidelity wireframes to outline structure and functionality, then transformed them into detailed interactive prototypes to simulate real user experiences. These prototypes were used to gather feedback, which I implemented in iterative design improvements. Through this process, I developed a strong understanding of layout, spacing, typography, and design systems, all while maintaining a user-centered approach throughout the design journey.
                        </div>
                    </div>
         </div>
      <Footer /> </div>
    </main>
                    

  );
};
export default About;
