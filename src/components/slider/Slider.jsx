import React, { useState } from 'react'
import './slider.scss'
import BtnSlider from './BtnSlider'

const Slider = ({images, name}) => {

  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () =>{
    if(slideIndex !== images.length - 1){
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1){
      setSlideIndex(0)
    }
  }

  const prevSlide = () =>{
    if(slideIndex > 0){
      setSlideIndex(slideIndex - 1)
    }else if(slideIndex === 0){
      setSlideIndex(images.length - 1)
    }
  }

  const handleDotSlider = (index) =>{
    setSlideIndex(index)
  }

  return (
    <div className='container-slider'>
      {images.map((img, index)=>(
        <div className={slideIndex === index ? 'slide' : 'slide hidden'} key={index}>
            <img src={img} alt={name} />
        </div>
      ))}
      <div className="container_button">
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
      </div>
      <div className="container-dots">
        {Array.from({length: images.length}).map((item, index) => (
          <div className={index === slideIndex ? 'dot dot-active' : 'dot'} onClick={()=>handleDotSlider(index)}></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
