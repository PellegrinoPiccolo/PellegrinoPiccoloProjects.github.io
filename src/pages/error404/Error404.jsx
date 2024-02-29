import React, { useEffect } from 'react'
import Erro404 from '../../media/404.png'
import './error404.scss'
import { Link } from 'react-router-dom'
import BackIcon from '../../media/icon/back.png'

const Error404 = () => {

  useEffect(()=>{
    document.title = "404 - @PellegrinoPiccolo Projects"
  })

  return (
    <div className='error'>
        <img src={Erro404} alt="@PellegrinoPiccolo Projects" className='error404'/>
        <h1 className="title">This page doesn't exists please tun back to <Link to="/" style={{textDecoration: 'none'}}>Homepage</Link></h1>
        <Link to="/">
          <img src={BackIcon} alt="" className='backIcon'/>
        </Link>
    </div>
  )
}

export default Error404
