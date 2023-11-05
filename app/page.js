'use client';
import React from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';

import GarrettBeckerProfPic from '../public/GarrettBeckerProfPic.jpg';

import ReactImg from '../public/skills/react.png';
import NextJsImg from '../public/skills/nextjs.svg';
import BootstrapImg from '../public/skills/bootstrap.png';
import TailwindImg from '../public/skills/tailwind.svg';
import SassImg from '../public/skills/sass.png';

import PythonImg from '../public/skills/python.png';
import DjangoImg from '../public/skills/django.png';
import FlaskImg from '../public/skills/flask.png';
import NodeJsImg from '../public/skills/nodejs.png';
import JWTImg from '../public/skills/jwt.svg';
import ReduxJsImg from '../public/skills/reduxjs.svg';
import SQLiteImg from '../public/skills/sqlite.png';

import AnacondaImg from '../public/skills/anaconda.png';
import JupyterImg from '../public/skills/jupyter.png';
import PowerBIImg from '../public/skills/powerbi.png';

import VSCodeImg from '../public/skills/vscode.png';
import PyCharmImg from '../public/skills/pycharm.png';
import AdobeXDImg from '../public/skills/adobexd.png';

import LoadingPage from './loading';
import ProjectSet from './components/ProjectSet';

function Home() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   import ('bootstrap/dist/js/bootstrap.min.js');
  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return <LoadingPage />
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var name = e.target.name.value;
    var phone = e.target.phone.value;
    var email = e.target.email.value;
    var message = e.target.message.value;

    if (email.match(validRegex)) {
      var params = {
        "name": name,
        "phone": phone,
        "email": email,
        "message": message
      };

      emailjs.send(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        params, // the values for the EmailJS template
        process.env.EMAIL_JS_USER,
      )
      .then((result) => {
        // Show success message
        alert("Message has been sent! Garrett will get in touch soon!");
      }, (error) => {
        // Show error message
        alert("Error sending message, try again later");
      });
    } else {
      alert('Please enter a valid email address');
    }
  }

  return (
    <main className="font-geistMonoRegular bg-offWhite 2xl:px-36 dark:bg-darkBlue-100">

      <section id="intro" className="flex flex-col md:flex-row">
        <div className="flex flex-row w-full p-6 text-darkBlue-100 bg-dot-light md:p-20 md:flex-row dark:bg-dot-dark">
          <div className="bg-offWhite dark:bg-darkBlue-100">
            <div className="p-6 text-darkBlue-100 dark:text-offWhite">
              <h1 className="font-geistBold text-5xl mt-0 py-2 md:text-8xl">Garrett<br></br>Becker</h1>
              <h2 className="font-geistMonoRegular text-2xl md:text-4xl">I build with purpose</h2>
              <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
              <p className="text-lg text-black font-geistMonoRegular leading-8 py-4 dark:text-offWhite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Eget sit amet tellus cras adipiscing enim eu. 
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full overflow-hidden md:flex-col md:basis-1/3">
          <Image 
            src={GarrettBeckerProfPic}
            alt="Profile Photo"
            // width={300}
            // height={300}
            className="relative rounded-full h-56 w-56 my-8 border-mediumGreen border-2 md:absolute md:h-60 md:w-60 md:top-1/4 md:ml-[-85px] lg:h-72 lg:w-72 lg-top-1/5 lg:ml-[-50px] xl:h-80 xl:w-80 dark:border-offWhite"
          />   
        </div>
      </section>

      <section id="about" className="flex flex-col p-6 md:p-20 bg-offWhite text-darkBlue-100 dark:bg-darkBlue-100 dark:text-offWhite">
        <div className="flex flex-row w-full">
          <div className="p-6">
            <h1 className="font-geistBold text-4xl mt-0 pb-2 md:text-6xl">about</h1>
            <p className="text-md text-black font-geistMonoRegular leading-8 py-4">
              These are current tools in my repertoire I love building with, and I always enjoy experimenting and trying out new things. 
              It's my goal to keep learning and growing as much as I can!
            </p>
            <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col px-6 h-full justify-between">
            <div className="flex flex-row py-6 justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">front-end</h1>
            </div>
            <div className="flex flex-wrap h-full items-center justify-center gap-7 md:justify-start">
              <a className="flex" href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <Image src={ReactImg} alt="React" className="w-20 h-16"/>
              </a>
              <a className="flex" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                <Image src={NextJsImg} alt="NextJs" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                <Image src={BootstrapImg} alt="Bootstrap" className="w-20 h-16"/>
              </a>
              <a className="flex" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                <Image src={TailwindImg} alt="Tailwind" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
                <Image src={SassImg} alt="Sass" className="w-16 h-16"/>
              </a>
            </div>
            <div className="flex flex-row py-6 justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">back-end</h1>
            </div>
            <div className="flex flex-wrap h-full items-center justify-center gap-7 md:justify-start">
              <a className="flex" href="https://www.python.org" target="_blank" rel="noopener noreferrer">
                <Image src={PythonImg} alt="Python" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer">
                <Image src={DjangoImg} alt="Django" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer">
                <Image src={FlaskImg} alt="Flask" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
                <Image src={NodeJsImg} alt="NodeJs" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://jwt.io" target="_blank" rel="noopener noreferrer">
                <Image src={JWTImg} alt="JWT" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                <Image src={ReduxJsImg} alt="ReduxJs" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">
                <Image src={SQLiteImg} alt="SQLite" className="w-16 h-16"/>
              </a>
            </div>
            <div className="flex flex-row py-6 justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">analytics</h1>
            </div>
            <div className="flex flex-wrap h-full items-center justify-center gap-7 md:justify-start">
              <a className="flex" href="https://www.anaconda.com" target="_blank" rel="noopener noreferrer">
                <Image src={AnacondaImg} alt="Anaconda" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://jupyter.org" target="_blank" rel="noopener noreferrer">
                <Image src={JupyterImg} alt="Jupyter" className="w-14 h-16"/>
              </a>
              <a className="flex" href="https://powerbi.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
                <Image src={PowerBIImg} alt="PowerBI" className="w-16 h-16"/>
              </a>
            </div>
            <div className="flex flex-row py-6 justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">apps</h1>
            </div>
            <div className="flex flex-wrap h-full items-center justify-center gap-7 md:justify-start">
              <a className="flex" href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
                <Image src={VSCodeImg} alt="VSCode" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
                <Image src={PyCharmImg} alt="PyCharm" className="w-16 h-16"/>
              </a>
              <a className="flex" href="https://helpx.adobe.com/xd/user-guide.html" target="_blank" rel="noopener noreferrer">
                <Image src={AdobeXDImg} alt="AdobeXD" className="w-16 h-16"/>
              </a> 
            </div>
          </div>    
        </div>
      </section>

      <section id="work" className="flex flex-col md:flex-row">
        <div className="flex flex-row w-full h-full p-6 text-darkBlue-100 bg-dot-light md:bg-[length:1.1%] md:flex-row md:p-20 dark:bg-dot-dark">
          <div className="flex w-full bg-offWhite dark:bg-darkBlue-100">
            <div className="p-6 text-darkBlue-100 dark:text-offWhite">
              <h1 className="font-geistBold text-4xl mt-0 pb-2 md:text-6xl">work</h1>
              <p className="text-md text-black font-geistMonoRegular leading-8 py-4">
                Explore samples of projects I've worked on across full-stack web apps, various Python challenges, and data analysis
                & engineering!
              </p>
              <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>

              <ProjectSet 
                number="01"
                title="HikingVentures Web App"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide1"
                slide2="slide2"
                slide3="slide3"
                code_url="https://github.com/gdbecker/HikingVenturesProject"
                demo_url="https://analytics-showcase-gdbecker.netlify.app"
                description="Personal project. Lead developer and designer"
              />

              <ProjectSet 
                number="02"
                title="Frontend Mentor Projects"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide4"
                slide2="slide5"
                slide3="slide6"
                code_url="https://github.com/gdbecker/FrontendMentorProjects"
                demo_url="https://frontend-mentor-showcase-gdbecker.netlify.app"
                description="Challenge projects to grow in front-end development"
              />

              <ProjectSet 
                number="03"
                title="100 Days of Code: Python"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide7"
                slide2="slide8"
                slide3="slide9"
                code_url="https://github.com/gdbecker/100DaysOfCodePython"
                demo_url="https://100-days-of-code-python-gdbecker.netlify.app"
                description="Challenge projects from Angela Yu's Udemy course"
              />

              <ProjectSet 
                number="04"
                title="Data Analytics & Engineering Projects"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide10"
                slide2="slide11"
                slide3="slide12"
                code_url="https://github.com/gdbecker/AnalyticsPortfolio"
                demo_url="https://analytics-showcase-gdbecker.netlify.app"
                description="Professional client projects & personal learning"
              />

              {/* <div className="flex flex-col h-fit py-5 justify-between md:px-10">
                <div className="flex flex-row gap-2 items-end justify-between">
                  <h1 className="">04</h1>
                  <h1 className="text-lg text-themeNavy text-right">Data Analysis & Engineering Projects</h1>
                </div>
                <div className="flex flex-col py-2 md:flex-row">
                  <div className="relative carousel h-full w-full pt-2">
                    <div id="slide1" className="relative carousel-item w-full">
                      <div className="project-analytics-1 h-60 w-full md:h-80"></div>
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❮</a> 
                        <a href="#slide2" className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❯</a>
                      </div>
                    </div>
                    <div id="slide2" className="relative carousel-item w-full">
                      <div className="project-analytics-2 h-60 w-full md:h-80"></div>
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❮</a> 
                        <a href="#slide3" className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❯</a>
                      </div>
                    </div> 
                    <div id="slide3" className="relative carousel-item w-full">
                      <div className="project-analytics-3 h-60 w-full md:h-80"></div>
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❮</a> 
                        <a href="#slide1" className="btn rounded-none border-0 bg-mediumGreen hover:bg-lightGreen">❯</a>
                      </div>
                    </div> 
                  </div>
                  <div className="flex flex-row gap-2 pt-2 items-end justify-between md:flex-col md:w-24 md:pt-1 md:pl-2 md:justify-center">
                    <button className="flex bg-darkBlue-100 p-5 text-offWhite hover:bg-mediumGreen dark:bg-offWhite dark:text-darkBlue-100 dark:hover:bg-lightGreen">
                      <a class="" href="https://github.com/gdbecker" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    </button>
                    <button className="flex bg-darkBlue-100 p-5 text-offWhite hover:bg-mediumGreen dark:bg-offWhite dark:text-darkBlue-100 dark:hover:bg-lightGreen">
                      <a class="" href="/" target="_blank" rel="noopener noreferrer">
                        <BiMoviePlay />
                      </a>
                    </button>
                    <h2 className="flex text-right text-darkBlue-100 break-normal md:text-right md:h-44 md:[writing-mode:vertical-rl] dark:text-offWhite">
                      Professional client projects from work
                    </h2>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col p-6 md:p-20 bg-contact-section text-darkBlue-100 dark:text-offWhite">
        <div className="flex flex-row w-full">
          <div className="p-6 w-full bg-offWhite dark:bg-darkBlue-100">
            <h1 className="font-geistBold text-4xl mt-0 pb-2 md:text-6xl">let's chat!</h1>
            <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
            <form className="pt-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="name">
                  Name
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="name" 
                  type="text" 
                  placeholder="name" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="phone">
                  Phone Number
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="phone" 
                  type="text" 
                  placeholder="phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="email">
                  Email
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="email" 
                  type="text" 
                  placeholder="email" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="message">
                  Message
                </label>
                <textarea 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="message" 
                  type="text" 
                  placeholder="message"
                  minLength="10"
                  required
                />
              </div>
              <button className="px-10 py-4 mb-12 text-offWhite bg-darkBlue-100 hover:bg-mediumGreen dark:bg-offWhite dark:text-darkBlue-100 dark:hover:bg-lightGreen">
                send message
              </button>
            </form>
          </div>
        </div>
        
      </section>

      <section id="footer" className="flex flex-row h-full w-full text-center items-center justify-center text-grayishBlue text-[0.8rem] border-darkBlue-100 border-t-2 bg-white dark:text-lightGray dark:border-white dark:bg-darkBlue-200">
        <p className="flex p-5 w-fit">Designed and developed with ❤️ by Garrett Becker. &copy; 2023 All rights reserved.</p>
      </section>
    
    </main>     
  )
}

export default Home;
