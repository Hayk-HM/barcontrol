import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../../image/logo.jpg'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {

  const header = useSelector(state => state.header)

  return (
    <div className='header'>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-list'>
          <ul className='nav-item'>
            <li><ScrollLink to='testimonials' smooth={true} duration={1000}>Testimonials</ScrollLink></li>
            <li><ScrollLink to='adventages' smooth={true} duration={1000}>Adventages</ScrollLink></li>
            <li><ScrollLink to='faq' smooth={true} duration={1000}>FAQ</ScrollLink></li>
            <li>Sign In</li>
          </ul>
        </div>
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
