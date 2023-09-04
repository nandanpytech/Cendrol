import React from 'react'
import './Card.css'

export default function Card({categoryName}) {
  return (
    <div className="white-card">
       <h1 className='categoryName'>{categoryName}</h1>
       <p className="desc">Unlimited Jokes on {categoryName}</p>
    </div>
  )
}
