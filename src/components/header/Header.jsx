import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img1.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Hung</h1>
      <h5 className="text-light">Font-End Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img className='img_me' src={ME} alt="me" />
      </div>
      
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Header