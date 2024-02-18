import React from 'react'
import './slider.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const BtnSlider = ({direction, moveSlide}) => {
  console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      {direction === 'next' ? (
        <MdKeyboardArrowLeft />
      ) : (
        <MdKeyboardArrowRight />
      )}
    </button>
  )
}

export default BtnSlider
