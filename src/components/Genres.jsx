import React from 'react';

function Genres(props){
    return (
        <div 
            className = 
            {`GenreText text-center inline-block
                text-white bg-teal-500  rounded-xl 
                border py-1 px-3 h-auto ml-[10px]`}
            >{props.item.name}
        </div>
    )
}

export default Genres;