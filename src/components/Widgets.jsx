import React from 'react'


function Widgets(props){
  return (
    <div className='bg-white flex flex-col justify-between items-center h-[320px] w-[330px] rounded-xl m-8 drop-shadow-md'>
        <div className='flex flex-row w-[310px] h-[30px] px-5 py-[25px] justify-between items-center'>
            <h1 className='text-[#065f46] font-[700] text-[15px]'>{props.item.name}</h1>
            <h3 className="text-[#065f46] text-[15px] font-[600] tracking-wide">{props.item.episode} - {props.item.time}</h3>
        </div>
        <p className='podcast-title font-bold w-[310px] px-5'>{props.item.title}</p>
        <iframe 
          className="px-5 py-7 m-0"
          width="300" height="200" 
          src={props.item.youtube}
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>
    </div>
  )
}

export default Widgets