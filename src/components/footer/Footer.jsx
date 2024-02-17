import React from 'react'
import './footer.scss'
import Logo from '../../media/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Logo} alt="PellegrinoPiccolo" onClick={()=>window.open("https://pellegrinopiccolo.github.io/")} title='Visit my portfolio'/>
      <p>VISIT MY PORTFOLIO WEBSITE ON <a href="https://pellegrinopiccolo.github.io/" target="_blank" rel="noopener noreferrer">THIS LINK (pellegrinopiccolo.github.io)</a></p>
    </div>
  )
}

export default Footer
