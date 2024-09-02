import React from 'react'
import "./text.css"
const Text = ({h2 ,p}) => {
  return (
    <div className='text'>
        <h2>{h2}</h2>
        <p>{p}</p>
    </div>
  )
}

export default Text