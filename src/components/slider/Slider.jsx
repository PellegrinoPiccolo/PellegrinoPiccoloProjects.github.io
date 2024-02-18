import React, { useState } from 'react'
import './slider.scss'
import BtnSlider from './BtnSlider'

const Slider = ({images, name}) => {
  return (
    <div className='container-slider'>
      {images.map((img)=>(
        <div className='slide'>
            <img src={img} alt={name} />
        </div>
      ))}
      <BtnSlider />
      <BtnSlider />
    </div>
  )
}

export default Slider
