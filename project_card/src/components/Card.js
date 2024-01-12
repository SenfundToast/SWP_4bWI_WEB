import React from 'react'

export default function Card({name,title,imageUrl}) {
  return (
    <div className="card">
        <div className="card2">
            <h2>{name}</h2>
            <h4>{title}</h4>
        </div>
        <div className="imageContainer">
            <img src={imageUrl} alt='' className="image"/>
        </div>
    </div>
  )
}
