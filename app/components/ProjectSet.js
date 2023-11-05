'use client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';

function ProjectSet({ number, title, img1, img2, img3, slide1, slide2, slide3, code_url, demo_url, description }) {

  return (
   <div className="flex flex-col h-fit py-5 justify-between md:px-10">
      <div className="flex flex-row gap-2 items-end justify-between">
        <h1 className="font-geistBold text-lg">{number}</h1>
        <h1 className="font-geistSemiBold text-lg text-right">{title}</h1>
      </div>
      <div className="flex flex-col py-2 md:flex-row">
        <div className="relative carousel h-full w-full pt-2">
          <div id={slide1} className="relative carousel-item w-full">
            <div className={`${ img1 } h-60 w-full md:h-80`}></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#${slide3}`} className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❮</a> 
              <a href={`#${slide2}`} className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❯</a>
            </div>
          </div>
          <div id={slide2} className="relative carousel-item w-full">
            <div className={`${ img2 } h-60 w-full md:h-80`}></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#${slide1}`} className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❮</a> 
              <a href={`#${slide3}`} className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❯</a>
            </div>
          </div> 
          <div id={slide3} className="relative carousel-item w-full">
            <div className={`${ img3 } h-60 w-full md:h-80`}></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#${slide2}`} className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❮</a> 
              <a href={`#${slide1}`} className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❯</a>
            </div>
          </div> 
        </div>
        <div className="flex flex-row gap-2 pt-2 items-end justify-between md:flex-col md:w-24 md:pt-1 md:pl-2 md:justify-center">
          <a class="" href={code_url} target="_blank" rel="noopener noreferrer">
            <button className="flex bg-darkBlue-100 p-5 text-offWhite hover:bg-mediumGreen dark:bg-offWhite dark:text-darkBlue-100 dark:hover:bg-lightGreen">
              <FaGithub />
            </button>
          </a>
          <a class="" href={demo_url} target="_blank" rel="noopener noreferrer">
            <button className="flex bg-darkBlue-100 p-5 text-offWhite hover:bg-mediumGreen dark:bg-offWhite dark:text-darkBlue-100 dark:hover:bg-lightGreen">
              <BiMoviePlay />
            </button>
          </a>
          <h2 className="flex text-right text-darkBlue-100 break-normal md:text-right md:h-44 md:[writing-mode:vertical-rl] dark:text-offWhite">
            {description}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectSet;