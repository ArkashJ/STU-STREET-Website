import React from 'react';
import logo from "../assets/mainImg.png";

const Header = () => {
 
  return (
    <nav className="w-full bg-main flex p-6 justify-between items-center">
        <img src={logo} className="object-contain h-10 w-25"/>
          <ul className="hidden md:flex">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-[600] cursor-pointer text-[18px] text-white
                  ${index === navLinks.length - 1 ? "mr-0" : "mr-12"}`
                  }
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
          </ul>
    </nav>
  )
}

export default Header

const navLinks = [
  {
      id      :   "Introduction",
      title   :   "Home"
  },
  {
    id      :   "Interviews",
    title   :   "Interviews"
  },  
  {
      id      :   "Our Values",
      title   :   "Our Values"
      
  },
  {
      id      :   "About Us",
      title   :   "About Us"
  },
  {
      id      :   "Contact",
      title   :   "Contact"
  }
];