import React from 'react';
import SamImg from "../assets/Sam.jpg";
import ArkashImg from "../assets/Arkash.jpg";


const About = () => {
  return (
    <div id="About Us" className='bg-body3 h-[1050px] flex flex-col items-center justify-content'>
    <div  className=' p-[5%] flex flex-row'>
      <img src={SamImg} className="object-container drop-shadow-md rounded-[10%] h-[400px] w-[400px] ml-5"/>
      <div className='flex flex-col justify-between w-full h-[200px]'>
        <h2 className='AboutText1 bg-red text-[26px] font-bold text-left pl-5'>Sam Morra
        </h2>
        <h4 className='AboutText2 pl-5 text-[32px]'>Founder and Host</h4>
        <p
          className='AboutContent font-light text-[1.3rem] text-justify pl-5 pt-5'>
          Sam is a Junior at Boston University studying finance and economics. Sam is originally from Clifton Park, New York, a suburb outside of Albany. 
          The idea to start this podcast came from Sam's desire 
          to pick peoples brains and see new perspectives on life. 
          </p>
        <p 
          className='AboutContent font-light text-[1.3rem] text-justify pl-5 pt-5'>
          Along with running the STU STREET podcast, Sam is the Treasurer of the Boston University Sports Business Club, 
          and the Co-Lead of the Questrom Honors Program Advisory Board. 
        </p>
        <p
          className='AboutContent font-light text-[1.3rem] text-justify pl-5 pt-5'>
            Sam's hobbies include weight lifting, running, basketball, hiking, 
            skiing, and going to stand-up comedy shows.</p>
      </div>
    </div>
    <div  className='p-[5%] mt-[-3%] flex flex-row-reverse'>
      <img src={ArkashImg} className="object-container drop-shadow-md rounded-[10%] h-[400px] w-[400px] ml-5"/>
      <div className='flex flex-col justify-between w-full h-[200px]'>
        <h2 className='AboutText1 bg-red text-[26px] font-bold text-right pl-5'>Arkash Jain
        </h2>
        <h4 className='AboutText2 pl-5 text-[32px] text-right'>CTO and Co-Host</h4>
        <p
          className='AboutContent font-light text-[1.3rem] text-left pl-5 pt-5 text-justify '>
          Arkash is a junior majoring in Statistics and Computer Science at Boston University. Orginallly from India, 
          he has spent every summer of his life in a different country on holiday. Needless to say, he likes travel.
          He previously interned for Battery Ventures for 8 months and is passionate about entrepreneurship and technology.
          </p>
        <p 
          className='AboutContent font-light text-[1.3rem] text-left pl-5 pt-5 text-justify'>
          He loves to work with founders and advises startups on campus. His ideal job out of college would be working at a startup
          as a software engineer.
        </p>
        <p
          className='AboutContent font-light text-[1.3rem] text-left pl-5 pt-5 text-justify'>
            Outside of tech, he likes Lifting, MMA, Soccer, Basketball, Stand-up Comedy, Podcasts and Volunteering.</p>
      </div>
    </div>
    </div>
  )
}

export default About
