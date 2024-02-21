import React, { useState, useCallback } from 'react'
import './slider.scss'
import BtnSlider from './BtnSlider'
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

const Slider = ({images, name}) => {

  const [slideIndex, setSlideIndex] = useState(0)

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  return (
    <>
    <div className='container-slider'>
      {images.map((img, index)=>(
        <>
          <div className={slideIndex === index ? 'slide' : 'slide hidden'} key={index} onClick={ () => openImageViewer(index) } title={`${name} preview image`}>
              <img src={img} alt={name}/>
          </div>
        </>
      ))}
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
      <div className="container-dots">
        {Array.from({length: images.length}).map((item, index) => (
          <div className={index === slideIndex ? 'dot dot-active' : 'dot'} onClick={()=>handleDotSlider(index)}></div>
        ))}
      </div>

    </div>
    {isViewerOpen && (
      <ImageViewer
        src={ images }
        currentIndex={ currentImage }
        disableScroll={ true }
        closeOnClickOutside={ true }
        onClose={ closeImageViewer }
      />
    )}
    </>
  )
}

export default Slider
