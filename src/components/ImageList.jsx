/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ImageShow from './ImageShow';

function ImageList({ images }) {
  console.log(images);
  const handledImages = images.map((image) => {
    return <ImageShow key={image.id} image = {image.urls.small} alt = {image.alt_description
} />
  })
  return (
    <div>
      {handledImages}
    </div>
  )
}

export default ImageList