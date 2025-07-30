import React from 'react';
import Avatar from './Avatar';
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledWrapper>
            <footer className='p-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>

                    {/* Logo/Name */}
                    <a href='/' className="flex gap-2 items-center">
                        <Avatar />
                        <span className='font-bold hover:text-cyan-600'>Khushbu Khatri</span>
                    </a>

                    {/* Navigation */}
                    <div className='flex flex-wrap justify-center gap-7'>
                        <a href="/projects" className='hover:text-cyan-600 cursor-pointer'>Project</a>
                        <a href="/about" className='hover:text-cyan-600 cursor-pointer'>About</a>
                        <a href="/contacts" className='hover:text-cyan-600 cursor-pointer'>Contact</a>
                    </div>

                    {/* Glass Social Icon Selector */}
                    <div className="glass-radio-group mt-4">
                        <input type="radio" name="social" id="x" defaultChecked />
                        <label htmlFor="x">
                            <a href="https://x.com/Khushbu_2405" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter />
                            </a>
                        </label>

                        <input type="radio" name="social" id="github" />
                        <label htmlFor="github">
                            <a href="https://github.com/meta-khushbu-khatri" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </label>

                        <input type="radio" name="social" id="linkedin" />
                        <label htmlFor="linkedin">
                            <a href="https://www.linkedin.com/in/khushbu-khatri-a10853196/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </label>

                        <input type="radio" name="social" id="youtube" />
                        <label htmlFor="youtube">
                            <a href="https://www.youtube.com/@khushbukhatri" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </label>

                        <div className="glass-glider" />
                    </div>
                </div>
            </footer>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;

    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    font-size: 20px;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;

    svg {
      transition: transform 0.3s ease-in-out;
    }

    &:hover svg {
      transform: scale(1.2);
      color: white;
    }
  }

  .glass-radio-group input:checked + label svg {
    color: #fff;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(100% / 4);
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }

  #x:checked ~ .glass-glider {
    transform: translateX(0%);
    background: linear-gradient(135deg, #1da1f2, #0d8ddb);
    box-shadow: 0 0 15px #1da1f2aa;
  }

  #github:checked ~ .glass-glider {
    transform: translateX(100%);
    background: linear-gradient(135deg, #333, #6e6e6e);
    box-shadow: 0 0 15px #333a;
  }

  #linkedin:checked ~ .glass-glider {
    transform: translateX(200%);
    background: linear-gradient(135deg, #0077b5, #00a0dc);
    box-shadow: 0 0 15px #0077b5aa;
  }

  #youtube:checked ~ .glass-glider {
    transform: translateX(300%);
    background: linear-gradient(135deg, #ff0000, #cc0000);
    box-shadow: 0 0 15px #ff0000aa;
  }
`;

export default Footer;
