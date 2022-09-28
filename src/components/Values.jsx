import React from 'react';
import network from "../assets/network.png";
import values from "../assets/values.png";
import startup from "../assets/startup.png";
import podcast from "../assets/contentIphone.jpg";
import byDesign from "../assets/byDesign.png";
import provide from "../assets/provide.png";
import bostonU from "../assets/bostonU.png";
import battery from "../assets/battery.png";
import bufc from "../assets/bufc.png";
import busportb from "../assets/busportb.png";
import qst from "../assets/qst.png";
import igpage from "../assets/igPage.png";

const Values = () => {

  return (
    <div id="Our Values" className='bg-body4 w-full h-[680px]'>
        
        <div className="flex flex-col items-center justify-content w-[33%]">
          {
            valuesArr.map( value => (
              <div className='flex flex-col items-center justify-content pt-8 '>
                <div className={`rounded-full ${value.color}`}>
                  <img src={value.icon} className={`rounded-full object-container ${value.height} w-[20%]`}/>
                </div>
                <h1 className='text-4xl pt-5'>
                  {value.title}
                </h1>
                <p
                  key = {value.id}
                  className = " text-center font-[20px] pt-3 pl-2"
                >
                  {value.content}
                </p>
              </div>
            ))
          }
        </div>
        <div >
          <h1
            className='absolute left-[38%] top-[1100px] text-[34px] mb-5'
          >Our stories hail from People's experiences at...</h1>
          <img src={podcast} className="object-container rounded-xl h-96 absolute left-[40%] top-[1160px]"/>
          <img src={provide} className="object-container rounded-xl h-20 absolute left-[40%] top-[1620px]"/>
          <img src={byDesign} className="object-container rounded-xl h-28 absolute left-[60%] top-[1480px]"/>
          <img src={battery} className="object-container rounded-xl h-32 absolute left-[76%] top-[1330px]"/>
          <img src={bostonU} className="object-container rounded-xl h-32 absolute left-[87.5%] top-[1160px]"/>
          <img src={bufc} className="object-container rounded-xl h-28 absolute left-[76%] top-[1610px]"/>
          <img src={qst} className="object-container rounded-xl h-24 absolute left-[77%] top-[1160px]"/>
          <img src={igpage} className="object-container rounded-xl h-52 absolute left-[59%] top-[1230px]"/>
          <img src={busportb} className="object-container rounded-xl h-32 absolute left-[88%] top-[1500px]"/>
        </div>
    </div>
  )
}

export default Values

const valuesArr = [
  {
      id      :      "networking",
      icon    :       network,
      title   :      "Build a Network",
      content :      "Learn how to expand your network in the Professional world from a host successful people",
      color   :      "bg-green-300",
      height  :      "w-[15%] bg-body4 pr-1"
  },
  {
      id      :       "ambition",
      icon    :        values,
      title   :       "Hear Inspiring Ideas",
      content :       "Hear people at the cutting edge of innovation share their non-traditional journey to success",
      color   :       "bg-purple-300",
      height  :       "h-[30%]"
  },
  {
      id      :       "innovate",
      icon    :        startup,
      title   :       "Innovate",
      content :       "Start Taking Risks, Discover Your Passion and Go Out There & Innovate",
      color   :       "bg-sky-300",
      height  :       "h-[30%]"
  }
]