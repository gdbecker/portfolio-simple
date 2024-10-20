'use client';
import React from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import GarrettBeckerProfPic from '../public/GarrettBecker2.jpg';
import data from './json/data.json';

import FamilyPic from '../public/about/Family.jpeg';
import LEGOCustomPic from '../public/about/LEGOCustom.jpeg';
import LEGOMandoPic from '../public/about/LEGOMando.jpeg';
import CrossStitchPic from '../public/about/CrossStitch.jpeg';
import DonutsPic from '../public/about/Donuts.jpeg';
import PeppermintCookiesPic from '../public/about/PeppermintCookies.jpeg';
import OlympicNationalParkPic from '../public/about/OlympicNationalPark.jpeg';
import SunsetPic from '../public/about/Sunset.jpeg';

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
              <h2 className="font-geistMonoRegular text-2xl mt-2 md:text-4xl">Analytics Engineer & Developer</h2>
              <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
              <p className="text-xl text-black font-geistMonoRegular leading-8 py-4 dark:text-offWhite">
                I aim to build with purpose and care for others with my work.
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
              I believe that we are made to thrive and create, and when we live with intention and purpose, we bring out the best in each
              other and empower one another to succeed.
            </p>
            <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-between md:flex-row">
          <div className="flex flex-col px-6 w-full h-full justify-between">
            <div className="flex-col w-full">
              <p className="flex w-full leading-6 py-3">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies est ornare cubilia commodo sollicitudin faucibus non 
                consequat arcu. Lobortis vitae gravida curabitur ligula hac. Curae habitasse morbi massa imperdiet dapibus ultrices. 
                Ullamcorper rhoncus tempus suspendisse nunc himenaeos commodo. Adipiscing libero dictum interdum elementum; lacinia 
                ullamcorper.
              </p>
              <p className="flex w-full leading-6 py-3">
                Venenatis faucibus cras; a etiam nisi dapibus. Maximus mi in velit cubilia suscipit placerat himenaeos. 
                Himenaeos vel et; curabitur sit ornare quam. Hac ornare congue penatibus eleifend maecenas; tristique dui suspendisse? 
                Molestie per adipiscing quis sit curabitur justo facilisis lorem. Curabitur pulvinar nec massa gravida curae eleifend 
                luctus habitasse. Interdum venenatis nulla in facilisis vehicula fermentum aptent enim aliquam.
              </p>
              <p className="flex w-full leading-6 py-3">
                Venenatis faucibus cras; a etiam nisi dapibus. Maximus mi in velit cubilia suscipit placerat himenaeos. 
                Himenaeos vel et; curabitur sit ornare quam. Hac ornare congue penatibus eleifend maecenas; tristique dui suspendisse? 
                Molestie per adipiscing quis sit curabitur justo facilisis lorem. Curabitur pulvinar nec massa gravida curae eleifend 
                luctus habitasse. Interdum venenatis nulla in facilisis vehicula fermentum aptent enim aliquam.
              </p>
            </div>
          </div> 
          <div className="flex flex-col px-6 w-full h-full justify-between md:basis-1/2">
            <div class="grid grid-cols-2 gap-4 w-full">
              <Image 
                src={OlympicNationalParkPic}
                alt="OlympicNationalPark"
                width={300}
                height={300}
                className="col-span-1 border-mediumGreen border-2 dark:border-offWhite"
              /> 
              <Image 
                src={LEGOMandoPic}
                alt="LEGOMando"
                width={300}
                height={300}
                className="col-span-1 border-mediumGreen border-2 dark:border-offWhite"
              /> 
              <Image 
                src={CrossStitchPic}
                alt="CrossStitch"
                width={300}
                height={300}
                className="col-span-1 border-mediumGreen border-2 dark:border-offWhite"
              /> 
              <Image 
                src={DonutsPic}
                alt="Donuts"
                width={300}
                height={300}
                className="col-span-1 border-mediumGreen border-2 dark:border-offWhite"
              /> 
              <Image 
                src={LEGOCustomPic}
                alt="LEGOCustom"
                width={300}
                height={300}
                className="col-span-1 border-mediumGreen border-2 dark:border-offWhite"
              /> 
              <Image 
                src={SunsetPic}
                alt="Sunset"
                width={300}
                height={300}
                className="col-span-1 border-mediumGreen border-2 dark:border-offWhite"
              /> 
            </div>
          </div>  
        </div>
      </section>

      <section id="work" className="flex flex-col md:flex-row">
        <div className="flex flex-row w-full h-full p-6 text-darkBlue-100 bg-dot-light md:bg-[length:1.1%] md:flex-row md:p-20 dark:bg-dot-dark dark:md:bg-[length:1.1%]">
          <div className="flex w-full bg-offWhite dark:bg-darkBlue-100">
            <div className="p-6 text-darkBlue-100 dark:text-offWhite">
              <h1 className="font-geistBold text-4xl mt-0 pb-2 md:text-6xl">work</h1>
              <p className="text-md text-black font-geistMonoRegular leading-8 py-4">
                Explore samples of projects I've worked on across data engineering & analytics, full-stack web apps, and Python challenges!
              </p>
              <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>

              <ProjectSet 
                number="01"
                title="Data Engineering & Analytics Projects"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide1"
                slide2="slide2"
                slide3="slide3"
                code_url="https://github.com/gdbecker/AnalyticsPortfolio"
                demo_url="https://analytics-showcase-gdbecker.netlify.app"
                description="Professional client projects & personal learning"
              />

              <ProjectSet 
                number="02"
                title="HikingVentures Web App"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide4"
                slide2="slide5"
                slide3="slide6"
                code_url="https://github.com/gdbecker/HikingVenturesProject"
                demo_url="https://analytics-showcase-gdbecker.netlify.app"
                description="Personal project. Lead developer and designer"
              />

              <ProjectSet 
                number="03"
                title="Frontend Mentor Projects"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide7"
                slide2="slide8"
                slide3="slide9"
                code_url="https://github.com/gdbecker/FrontendMentorProjects"
                demo_url="https://frontend-mentor-showcase-gdbecker.netlify.app"
                description="Challenge projects to grow in front-end development"
              />

              <ProjectSet 
                number="04"
                title="100 Days of Code: Python"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide10"
                slide2="slide11"
                slide3="slide12"
                code_url="https://github.com/gdbecker/100DaysOfCodePython"
                demo_url="https://100-days-of-code-python-gdbecker.netlify.app"
                description="Challenge projects from Angela Yu's Udemy course"
              />

              <ProjectSet 
                number="05"
                title="Web Development Projects"
                img1="project-analytics-1"
                img2="project-analytics-2"
                img3="project-analytics-3"
                slide1="slide13"
                slide2="slide14"
                slide3="slide15"
                code_url="https://github.com/gdbecker/WebDevelopmentProjects"
                demo_url="https://web-development-showcase-gdbecker.netlify.app"
                description="Personal showcase of various web development work"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="flex flex-col p-6 md:p-20 bg-offWhite text-darkBlue-100 dark:bg-darkBlue-100 dark:text-offWhite">
        <div className="flex flex-row w-full">
          <div className="p-6">
            <h1 className="font-geistBold text-4xl mt-0 pb-2 md:text-6xl">skills & certifications</h1>
            <p className="text-md text-black font-geistMonoRegular leading-8 py-4">
              These are current tools in my repertoire I love building with, and I always enjoy experimenting and trying out new things. 
              Also check out certifications I've earned and keeping up to date. It's my goal to keep learning & growing and get better everyday!
            </p>
            <div className="py-3 border-mediumGreen border-b-2 dark:border-lightGreen"></div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center md:justify-between md:flex-row">
          <div className="flex flex-row flex-wrap px-6 h-full w-full justify-between md:flex-col">
            <div className="flex flex-row py-6 w-full justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">data engineering & analytics</h1>
            </div>
            <div className="flex flex-wrap h-full w-full items-center justify-center gap-7 md:justify-start">
              {data['skills'].filter((skill) => skill.type == 'analytics').map((s) => (
                <a className="flex" href={s.link} target="_blank" rel="noopener noreferrer">
                  <Image src={s.img} alt={s.name} width={100} height={100} className="w-16 h-16"/>
                </a>
              ))}
            </div>
            <div className="flex flex-row py-6 w-full justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">front-end</h1>
            </div>
            <div className="flex flex-wrap h-full w-full items-center justify-center gap-7 md:justify-start">
              {data['skills'].filter((skill) => skill.type == 'frontend').map((s) => (
                <a className="flex" href={s.link} target="_blank" rel="noopener noreferrer">
                  <Image src={s.img} alt={s.name} width={100} height={100} className="w-16 h-16"/>
                </a>
              ))}
            </div>
            <div className="flex flex-row py-6 w-full justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">back-end</h1>
            </div>
            <div className="flex flex-wrap h-full w-full items-center justify-center gap-7 md:justify-start">
              {data['skills'].filter((skill) => skill.type == 'backend').map((s) => (
                <a className="flex" href={s.link} target="_blank" rel="noopener noreferrer">
                  <Image src={s.img} alt={s.name} width={100} height={100} className="w-16 h-16"/>
                </a>
              ))}
            </div>
            <div className="flex flex-row py-6 w-full justify-center md:justify-start">
              <h1 className="text-geistMonoBold text-md">apps</h1>
            </div>
            <div className="flex flex-wrap h-full w-full items-center justify-center gap-7 md:justify-start">
              {data['skills'].filter((skill) => skill.type == 'apps').map((s) => (
                <a className="flex" href={s.link} target="_blank" rel="noopener noreferrer">
                  <Image src={s.img} alt={s.name} width={100} height={100} className="w-16 h-16"/>
                </a>
              ))}
            </div>
          </div>
          <div className="px-6">
            <div className="py-3 my-6 border-mediumGreen border-b-2 dark:border-lightGreen md:hidden"></div>
          </div>
          <div className="flex flex-wrap px-6 h-full w-full justify-between overflow-hidden md:flex-col">
            {data['certifications'].map((c) => (
              <div className="flex flex-row w-full py-6 justify-between items-center">
                <Image src={c.img} alt={c.type} width={100} height={100} className="w-16 h-16"/>
                <div className="flex-col justify-end">
                  <a className="" href={c.link} target="_blank" rel="noopener noreferrer">
                    <h1 className="text-geistMonoBold font-bold text-md text-right hover:text-mediumGreen dark:hover:text-lightGreen">{c.name}</h1>
                  </a> 
                  <h2 className="text-geistMonoBold text-md text-right">Earned {c.date}</h2>
                </div>
              </div>
            ))}
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

      <section id="footer" className="h-full text-center text-grayishBlue text-[0.8rem] border-darkBlue-100 border-t-2 bg-white dark:text-lightGray dark:border-white dark:bg-darkBlue-200">
        <p className="p-5">Designed and developed with ❤️ by Garrett Becker. &copy; 2023-2024 All rights reserved.</p>
      </section>
    
    </main>     
  )
}

export default Home;
