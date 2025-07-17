import React from 'react';
import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contacts = () => {
  return (
    <main className='max-w-5xl mx-auto font-Fav1 flex flex-col gap-10'>
      <Navbar />
      <section className='p-7'>
        <h1 className='text-4xl text-center text-cyan-600 font-bold mt-5'>Connect With Me</h1>
        <div className='flex p-7 gap-5 justify-center'>
          <div className='w-[50%] flex-grow h-auto gap-10 flex flex-col items-center py-5'>
            <div className='flex col gap-7 '>
            <Card
              label="GitHub"
              url="https://github.com/meta-khushbu-khatri"
              icon={<FaGithub className="size-6 m-3 hover:text-white" />}
              bgColor="#0891B2"
            />

            <Card
              label="Twitter"
              url="https://x.com/Khushbu_2405"
              icon={<FaXTwitter className="size-6 m-3 hover:text-white" />}
              bgColor="#0891B2"
            />
</div>
 <div className='flex col gap-7'>
            <Card
              label="LinkedIn"
              url="https://www.linkedin.com/in/khushbu-khatri-a10853196/"
              icon={<FaLinkedin className="size-6 m-3 hover:text-white" />}
              bgColor="#0891B2"
            />
            <Card
              label="Mail"
              url= <p>"khushbukhatri245@gmail.com"</p>
              icon={<IoMail className="size-6 m-3 hover:text-white" />}
              bgColor="#0891B2"
            />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

const Card = ({ icon, label, url, bgColor }) => {
  return (
    <StyledWrapper bgColor={bgColor}>
      <div className="cards">
        <div className="card">
          <p className="tip">{label}</p>
          <a
            href={url}
            className="second-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled-components with dynamic background color
const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 250px;
    border-radius: 10px;
    color: white;
    background-color: ${({ bgColor }) => bgColor || '#0891B2'};
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;

export default Contacts;
