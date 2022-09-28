import React from 'react';

import mic2 from "../assets/mic_img.png";
import mic3 from "../assets/mic3.png";
import hphone from "../assets/headphones1.png";
import beats from "../assets/beats.png";
import arrow from "../assets/arrow.png";

const LandingPage = () => {
  return (
    <div>
        <div id="Introduction" className="bg-body1 w-full h-[300px]">
        <div className="container flex flex-initial flex-col-reverse md:flex-row justify-between items-center px-6 mx-auto">
          {/* Image 1*/}
          <img src={mic2} alt="mic image 2" className="object-contain h-100 w-20 mt-5"/>
            {/* Content*/}
            <div className="absolute flex flex-col text-white font-avro mt-14 ml-[-4px] space-y-6 md:w-1/2 left-[20%]">
                <h1 
                  className =
                    'text-4xl w-[400px] font-bold text-left sm:text-5x '
                  >
                  A Podcast Doing The Networking For You
                </h1>
                <p 
                  className = "text-body2 w-[475px] text-left ml-[-5px] rounded-xl mx-4 my-2 p-2"
                  >
                    We bring knowledge from <strong className='text-[1.2rem] text-stu1'>CEOs, Professors, Alumni, Artists</strong> and 
                    most importantly...<strong className='text-stu1 text-[1.2rem]'>Students</strong> just like you, in a podcast form every week!
                </p> 
            </div>
            {/* Image 2*/}
            
        </div>
        
        <div className='flex flex-row items-center justify-content space-x-[40px] absolute left-[60%] top-[180px]'>
          <a href="https://www.linkedin.com/company/stustreet/"><img src={mic3} alt="mic image 3" className="test1 object-contain h-20 w-13  ml-5 rounded-xl"/></a>
          <a href="https://lnkd.in/dwqKxArU">
            <div className='relative top-[10%] test2 rounded-xl w-[65px] h-[80px]'>
              <img src={hphone} className="relative top-[18%] testImg object-contain relative h-19 w-12 mx-auto"/>
            </div>
          </a>
          <a href="https://www.instagram.com/stu.street/">
            <div className='relative top-[10%] test3 rounded-xl w-[65px] h-[80px]'>
              <img src={beats} className="relative top-[18%] testImg object-contain relative h-19 w-12 mx-auto"/>
            </div>
          </a>
          <a href="https://lnkd.in/dXvcYPSN">
            <div className='relative top-[5%] test4 rounded-xl w-[65px] h-[80px]'>
              <img src={arrow} className="relative top-[18%] testImg object-contain relative h-19 w-12 mx-auto"/>
            </div>
          </a>
        </div>
        
      </div>
    </div>
    
  )
}

export default LandingPage