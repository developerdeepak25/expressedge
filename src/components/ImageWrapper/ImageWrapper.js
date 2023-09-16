import React from 'react'
import './ImageWrapper.scss'

const ImageWrapper = ({src, alt}) => {
  return (
    <>
      <div className="image-wrapper">
        <img src={src} alt={alt} />
      </div>
    </>
  )
}

export default ImageWrapper
