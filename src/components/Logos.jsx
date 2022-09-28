import React from 'react';
import apple_podcasts from "../assets/apple_podcasts.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";

const Logos = () => {
  return (
    <div id="Contact" className="bg-teal-500 w-full h-[94px] flex justify-between items-center py-4 px-4">
        
        {
          footerLinks.map( foot => (
            
            <div className='flex items-center mx-12'>
              <img src={foot.icon} className="object-container h-15 w-12 px-2"/>
              <p
                key = {foot.name}
                className="cursor-pointer text-[16px] text-black font-poppins font-[700]"
                >
                  <a href={foot.link}>
                    {foot.name}
                  </a>
              </p>
            </div>
          ))}
        
    </div>
  )
}

export default Logos

const footerLinks = [
  {
      name  :     "Linkedin",
      link  :     "https://www.linkedin.com/company/stustreet/",
      icon  :     linkedin
  },
  {
      name  :     "Apple Podcasts",
      link  :     "https://lnkd.in/dwqKxArU",
      icon  :     apple_podcasts
  },
  {
      name  :     "Instagram",
      link  :     "https://www.instagram.com/stu.street/",
      icon  :     instagram
  },
  {
      name  :     "Youtube",
      link  :     "https://lnkd.in/dXvcYPSN",
      icon  :     youtube
  },
  {
    name  :     "TikTok",
    link  :     "https://lnkd.in/dXvcYPSN",
    icon  :     tiktok
},
];