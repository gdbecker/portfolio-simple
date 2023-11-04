'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import { BsFillSunFill } from 'react-icons/bs';
import { BsMoonStarsFill } from 'react-icons/bs';

function Navigation() {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
      </>
    )
  }

  return (
    <div class="flex flex-col p-6 h-full items-center justify-between overflow-hidden border-darkBlue border-b-2 bg-white md:flex-row md:h-14 2xl:px-36 dark:border-white dark:bg-darkBlue">
      <div className="flex flex-row mb-3 md:mb-0">
        <a className="text-md" href="#intro">
          <span className="font-geistBold text-darkBlue dark:text-white">GARRETT</span>
          <span className="font-geistSemiBold text-grayishBlue dark:text-lightGray">BECKER</span>
        </a>
      </div>

      <div className="flex flex-row justify-between w-[80%] mb-5 md:justify-start md:w-full md:mb-0 md:mx-3 text-darkBlue dark:text-white">
        <a className="text-sm font-geistMonoSemiBold mx-4 nav-link-light dark:nav-link-dark" href="#about">about</a>
        <a className="text-sm font-geistMonoSemiBold mx-4 nav-link-light dark:nav-link-dark" href="#work">work</a>
        <a className="text-sm font-geistMonoSemiBold mx-4 nav-link-light dark:nav-link-dark" href="#contact">contact</a>
      </div>

      <div className="flex flex-row items-center justify-between w-[80%] text-darkBlue md:justify-between md:w-[30%] dark:text-white">
        <a class="flex items-center justify-center hover:text-mediumGreen dark:hover:text-lightGreen" href="https://github.com/gdbecker" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a class="flex items-center justify-center hover:text-mediumGreen dark:hover:text-lightGreen" href="https://www.frontendmentor.io/profile/gdbecker" target="_blank" rel="noopener noreferrer">
          <SiFrontendmentor />
        </a>
        <a class="flex items-center justify-center hover:text-mediumGreen dark:hover:text-lightGreen" href="https://www.linkedin.com/in/garrett-becker-923b4a106/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a class="flex items-center justify-center hover:text-mediumGreen dark:hover:text-lightGreen" href="mailto: garrettdbecker@gmail.com">
          <FaEnvelope />
        </a>
        
        <div className="h-4 border-mediumGreen border-r-2 dark:border-lightGreen"></div>
        
        <button class="flex items-center justify-center hover:text-mediumGreen dark:hover:text-lightGreen" onClick={()=> setTheme( theme === "dark" ? "light" : "dark")}>
          { theme == "dark" ? 
            (<BsFillSunFill /> ) : 
            (<BsMoonStarsFill />) 
          }
        </button>
      </div>
      
    </div>
  )
}

export default Navigation;