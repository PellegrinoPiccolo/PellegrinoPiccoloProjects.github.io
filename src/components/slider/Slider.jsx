import React, { useState } from 'react'
import './slider.scss'
import BtnSlider from './BtnSlider'

const Slider = ({images, name}) => {

  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () =>{
    if(slideIndex !== images.length){
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1){
      setSlideIndex(0)
    }
    console.log(slideIndex);
  }

  const prevSlide = () =>{

  }

  return (
    <div className='container-slider'>
      {images.map((img, index)=>(
        <div className={slideIndex === index ? 'slide' : 'slide hidden'} key={index}>
            <img src={img} alt={name} />
        </div>
      ))}
      <div className="container_button">
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      </div>
    </div>
  )
}

export default Slider
