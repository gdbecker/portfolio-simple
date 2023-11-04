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
    <main className="font-geistMonoRegular bg-white dark:bg-darkBlue">
      <div className="flex flex-col md:flex-row">
        <div id="intro" className="flex flex-row w-full p-6 text-darkBlue bg-dot-light md:p-20 md:flex-row dark:bg-dot-dark">
          <section className="bg-white dark:bg-darkBlue">
            <div className="p-6">
              <h1 className="font-geistMonoSemiBold text-3xl text-darkBlue mt-0 py-2 md:text-8xl dark:text-white">Garrett Becker</h1>
              <h2 className="font-geistMonoRegular text-2xl md:text-4xl">and I build with purpose</h2>
              <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
              <p className="text-lg text-black font-geistMonoRegular leading-8 py-4 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Eget sit amet tellus cras adipiscing enim eu. 
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-row justify-center w-full overflow-hidden md:flex-col md:basis-1/2">
          <Image 
            src={GarrettBeckerProfPic}
            alt="Profile Photo"
            // width={300}
            // height={300}
            className="relative rounded-full h-52 w-52 my-8 border-mediumGreen border-2 md:absolute md:h-56 md:w-56 md:top-1/4 md:ml-[-90px] lg:h-72 lg:w-72 lg:ml-[-50px] dark:border-white"
          />   
        </div>
      </div>

      {/* <section id="contact" className="flex flex-row">
        <div className="relative flex flex-col basis-1/2 min-h-screen w-full bg-contact-section">   
        </div>
        <div className="relative flex flex-col min-h-screen w-full p-1 pt-12 text-white">
          <div  className="p-4 ml-[-70px] mb-8 bg-themeGray w-full dark:bg-themeNavy">
            <h1 className="pb-5 font-aileronSemiBold text-4xl">Let's chat!</h1>
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="name">
                  Name
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="name" 
                  type="text" 
                  placeholder="Name" 
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
                  placeholder="Phone Number"
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
                  placeholder="Email" 
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
                  placeholder="Message"
                  minLength="10"
                  required
                />
              </div>
              <button className="bg-themeNavy px-10 py-4 mb-12 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section> */}

      <section id="footer" className="flex flex-row h-full w-full text-center items-center justify-center text-grayishBlue text-[0.8rem] border-darkBlue border-t-2 dark:text-lightGray dark:border-white dark:bg-darkBlue">
        <p className="flex bg-white p-5 w-fit dark:bg-darkBlue">Designed and developed with ❤️ by Garrett Becker. &copy; 2023 All rights reserved.</p>
      </section>
    
    </main>     
  )
}

export default Home;
