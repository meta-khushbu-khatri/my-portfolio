import React from 'react'
import Navbar from '../component/Navbar'
 import Card from "../component/Cards";
import Footer from "../component/Footer";
import { h1 } from 'framer-motion/client';
 

const Projects = () => {
    const projects = [
    {
      
      imgLink: "/projpic/qd.jpg",
      title: "Random quote generator",
      description: "Random-quote-generator",
      stack: "",
      gitLink: "https://meta-khushbu-khatri.github.io/Random-quote-generator/",
  
    },
    {
       
      imgLink: "/projpic/et.jpg",
      title: "Expanses-Tracker",
      description: "Expanses-Tracker",
      stack: "",
      gitLink: "https://meta-khushbu-khatri.github.io/Expanses-Tracker/",
    
    },
    {
      imgLink: "/projpic/stopwatch.jpg",
      title: "Stop watch",
      description: "Stop-watch",
      stack: "",
      gitLink: "https://meta-khushbu-khatri.github.io/stop-watch/",
   
    },
    {
      imgLink: "/projpic/bmi.jpg",
      title: "BMI Calculatorn",
      description: "BMI Calculator",
      stack: "",
      gitLink: "https://meta-khushbu-khatri.github.io/BMI--Calculator/",
  
    },
    ]

    const designing = [
   
    {
       
      imgLink: "/projpic/tw.jpg",
      title: "The Finance Website",
      description: "The Finance Website",
      stack: "",
       figmalink: "https://tawanjo.vercel.app/",
    
    },
    {
      imgLink: "/projpic/khuchies.jpg",
      title: "The cookie Store",
      description: "The cookie Store",
      stack: "",
      gitLink: "https://khuchies-thecookiestore.vercel.app/all-collections",
   
    },
   {
      imgLink: "/projpic/kk.jpg",
      title: "The cookie Store",
      description: "The cookie Store",
      stack: "",
    figmalink: "https://www.figma.com/design/6xdeTZKId7mHRt8CSGQ4o5/kuchies?node-id=51-79&t=oXRyLynLNvbTOnQO-1"
   }
    ]
    // front endd part
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-1">
      <Navbar />

      <section>
         <h1 className=' text-left font-normal  text-3xl m-2 p-3 tracking-wide'> Front end projects</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {projects.map((proj, index) => {
            return (
              <Card
                key={index}
                imgLink={proj.imgLink}
                title={proj.title}
                description={proj.description}
                stack={proj.stack}
                gitLink={proj.gitLink}
                // liveLink={proj.liveLink}
              />
            );
          })}
        </div>
      </section>

      {/* desiging part */}
      <section>
         <h1 className=' text-left font-normal  text-3xl m-2 p-6 tracking-wide'> Figma projects</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {designing.map((design, index) => {
            return (
              <Card
                key={index}
                imgLink={design.imgLink}
                title={design.title}
                description={design.description}
                stack={design.stack}
                 figmalink={design. figmalink}
                // liveLink={proj.liveLink}
              />
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}


export default Projects
