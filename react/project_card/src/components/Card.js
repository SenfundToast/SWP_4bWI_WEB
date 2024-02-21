import React from 'react'

export default function Card({name,title,imageUrl}) {
  console.log("image", imageUrl);
  return (
    <div className="border-solid border-4 border-black grid grid-cols-2 bg-lime-700 w-full">
        <div className="p-2">
            <h2 className='font-bold text-xl'>{name}</h2>
            <h4>{title}</h4>
        </div>
        <div className="w-40 h-40 bg-green-800">
            <img src={imageUrl} alt='' className="w-full h-full"/>
        </div>
    </div>
  )
}
