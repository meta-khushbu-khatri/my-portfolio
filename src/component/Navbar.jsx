import React, { useState } from 'react';
import Avatar from './Avatar';
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <header className="p-8">
      <nav>
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Left: Name and Avatar */}
          <div className="flex items-center gap-2 rounded-xl bg-primary text-white p-2 px-5 ">
            <a href="/" className="flex gap-2 items-center">
              <Avatar />
              <span className="font-bold">Khushbu Khatri</span>
            </a>
          </div>

          {/* Right: Menu + Dark Mode */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-primary text-white p-2 px-5 flex-1 ">
            <div className="flex gap-4">
              <a href="/projects" className="p-2 hover:bg-secondry hover:rounded-xl items-center">Projects</a>
              <a href="/about" className="p-2 hover:bg-secondry hover:rounded-xl items-center">About</a>
              <a href="/contacts" className="p-2 hover:bg-secondry hover:rounded-xl items-center">Contact</a>
            </div>
            <div className="flex items-end text-black">
              <DarkMode />
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
