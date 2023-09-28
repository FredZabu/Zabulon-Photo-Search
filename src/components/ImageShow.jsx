/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ImageList.css'

function ImageShow({image, alt}) {
  return (
    <div className='image_div'>
      <img src={image} alt={alt} />
      <div className='image_text'>
        <p>{ alt }</p>
      </div>
    </div>
  )
}

export default ImageShow