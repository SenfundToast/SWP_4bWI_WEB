import React from 'react'

export default function Card({name,title,imageUrl}) {
  return (
    <div className="border-solid border-4 border-black bg-lime-700 flex ">
        <div className="card2">
            <h2>{name}</h2>
            <h4>{title}</h4>
        </div>
        <div className="w-80 h-80 bg-green-500">
            <img src={imageUrl} alt='' className="w-full h-full"/>
        </div>
    </div>
  )
}
