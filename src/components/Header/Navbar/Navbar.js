import { useState } from "react";
import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../../image/logo.jpg'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import { TiThMenu } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const header = useSelector(state => state.header)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='header'>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-list'>
          <ul className={`nav-item ${isOpen ? "" : 'nav-item-mobile'}`}>
            <li><ScrollLink onClick={() => setIsOpen(true)} to='testimonials' smooth={true} duration={1000}>Testimonials</ScrollLink></li>
            <li><ScrollLink onClick={() => setIsOpen(true)} to='adventages' smooth={true} duration={1000}>Adventages</ScrollLink></li>
            <li><ScrollLink onClick={() => setIsOpen(true)} to='faq' smooth={true} duration={1000}>FAQ</ScrollLink></li>
            <li onClick={() => setIsOpen(true)}>Sign In</li>
          </ul>
        </div>
        {isOpen ? <div className='nav-menu' onClick={() => setIsOpen(false)}  ><TiThMenu size={40} /></div> : <div className='nav-closeMenu' onClick={() => setIsOpen(true)}><AiOutlineClose size={40} /></div>}
      </div>
      <div className='sub'>
        <div className='description'>
          <div>{header.title}</div>
        </div>
        <div>
          <ScrollLink to='contact' smooth={true} duration={1000}><button className='btn'>Get Started</button></ScrollLink>
        </div>
      </div>
    </div >
  )
}

export default Navbar
