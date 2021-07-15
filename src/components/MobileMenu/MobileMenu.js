import React from 'react'
import './mobileMenu.css'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../image/logo.jpg'
import { Link as ScrollLink } from 'react-scroll'

const MobileMenu = (props) => {

  return (
    <div data-aos='slide-up' className='mobileMenu'>
      <div className='mobileMenu-header'>
        <div className={`mobileMenu-logo`}>
          <img src={logo} alt='logo' />
        </div>
        <div className='mobileMenu-closeMenu' onClick={() => props.setIsOpen(true)}><AiOutlineClose size={40} /></div>
      </div>
      <div className='mobileMenu-section'>
        <ul className='mobileMenu-ul'>
          <li><ScrollLink onClick={() => props.setIsOpen(true)} to='testimonials' smooth={true} duration={1000}>Testimonials</ScrollLink></li>
          <li><ScrollLink onClick={() => props.setIsOpen(true)} to='adventages' smooth={true} duration={1000}>Adventages</ScrollLink></li>
          <li><ScrollLink onClick={() => props.setIsOpen(true)} to='faq' smooth={true} duration={1000}>FAQ</ScrollLink></li>
          <li onClick={() => props.setIsOpen(true)}>Sign In</li>
        </ul>
      </div>
      <div className='mobileMenu-button'>
        <ScrollLink to='contact' smooth={true} duration={1000}><button className='btn' onClick={() => props.setIsOpen(true)}>Get Started</button></ScrollLink>
      </div>
    </div>
  )
}

export default MobileMenu