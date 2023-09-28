/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ImageShow({image, alt}) {
  return (
    <div>
      <img src={image} alt={alt}  />
    </div>
  )
}

export default ImageShow