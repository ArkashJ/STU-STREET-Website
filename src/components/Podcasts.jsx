import React from 'react';
import Widgets from './Widgets';
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Genres from "./Genres";


const Podcasts = () => {
  const widget = files.map(file =>{
    return (
      <Widgets 
        key = {file.id}
        item = {file}
        />
    )
  })

  const genre = genresList.map((elem) =>{
    return (
      <Genres 
        key     =   {elem.id}
        item    =   {elem}
        />
    )
  })

  

  return (
    <div id="Interviews" className="bg-sky-50 w-full h-[600px]">
      <h1 className='text-center text-[35px] pt-[50px] pb-[30px]'>Find Your Niche</h1>
      <div className='flex flex-direction justify-between items-center px-10'>
        {genre}
      </div>
      <div className="flex flex-row items-center justify-between pl-10 py-3">
        {widget}
      </div>
    </div>
  )
}

export default Podcasts

const files = [
  {
    id      : 1,
    name    : "Alex Dunne",
    episode : "Episode 5",
    time    : "37 min",
    img     :  Img1,
    title   : "Do you need to go to college for a job Software Engineering?",
    youtube : "https://www.youtube.com/embed/Sa2oz0xqWbU",
    genre   : ["Entrepreneurship", "Engineering", "Web3 & Tech"]
  },
  {
    id      : 2,
    name    : "Gordon Gilkes",
    episode : "Episode 2",
    time    : "45 min",
    img     :  Img2,
    title   : "How I broke into web3, entrepreneurship and education",
    youtube : "https://www.youtube.com/embed/Bri6eySvdKQ",
    genre   : ["Venture Capital", "Web3 & Tech", "Finance"]
  },
  {
    id      : 3,
    name    : "Uchenna Nwosu",
    episode : "Episode 4",
    time    : "37 min",
    img     :  Img3,
    title   : "Being a D1 Student Athelete... and an Engineer!",
    youtube : "https://www.youtube.com/embed/2sNmOmNte-s",
    genre   : ["Sports", "Student Life", "Motivation"]
  },
]

const genresList = [
  {
    id      : 1,
    name    : "Engineering",
    color   : "bg-red-600"
  },
  {
    id      : 2,
    name    : "Entrepreneurship",
    color   : "bg-orange-500"
  },
  {
    id      : 3,
    name    : "Web3 & Tech",
    color   : "bg-amber-600"
  },
  {
    id      : 4,
    name    : "Finance",
    color   : "bg-lime-600"
  },
  {
    id      : 5,
    name    : "Sports",
    color   : "bg-green-600"
  },
  {
    id      : 6,
    name    : "Venture Capital",
    color   : "bg-teal-600"
  },
  {
    id      : 7,
    name    : "Research",
    color   : "bg-blue-600"
  },
  {
    id      : 8,
    name    : "Volunteering",
    color   : "bg-indigo-500"
  }
]