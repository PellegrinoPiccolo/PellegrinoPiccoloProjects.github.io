import React from 'react'
import './slider.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const BtnSlider = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next right' : 'btn-slide prev left'} title={direction === 'next' ? 'Next image' : 'Previus image'}>
      {direction === 'next' ? (
        <MdKeyboardArrowRight />
      ) : (
        <MdKeyboardArrowLeft />
      )}
    </button>
  )
}

export default BtnSlider
