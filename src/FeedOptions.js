import React from 'react'
import './FeedOptions.css'

function FeedOptions({title,Icon,color}) {
  return (
    <div className='feed__inputOption'>
        <Icon style={{color:color}}/>
        <p>{title}</p>
    </div>
  )
}

export default FeedOptions