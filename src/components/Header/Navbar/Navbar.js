import { useState } from "react";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../../image/logo.jpg'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import { TiThMenu } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { languageAction } from "../../../redux/actions/language";

const Navbar = () => {

  const header = useSelector(state => state.header)
  const language = useSelector(state => state.language)
  const [isOpen, setIsOpen] = useState(true)
  const [slideOrder, setSlideOrder] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const dispatch = useDispatch()

  const imgUrl = 'https://barcontrol-backend.nextstack.org'

  const handelSlide = (order) => {
    setSlideOrder(order)
    setActiveSlide(order)
  }

  const handelSubmit = (e) => {
    dispatch(languageAction.changeLanguage(e.target.value));
  }

  return (
    <div className='main'>
      {
        header.map((elem, index) => <> <div className={`photo ${elem.order === activeSlide ? 'activePhoto' : 'notActivePhoto'}`}>
          <img src={`${imgUrl}${header[slideOrder].image}`} alt='headerPhoto' className={`backPhoto ${elem.order === activeSlide ? 'activePhoto' : 'notActivePhoto'}`} />
        </div>
          <div className='header'>
            <div className='navbar'>
              <div className='nav-logo'>
                <img src={logo} alt='logo' />
              </div>
              <div className='nav-list'>
                <ul className={`nav-item ${isOpen ? "notActive" : 'nav-item-mobile'}`}>
                  <li><ScrollLink onClick={() => setIsOpen(true)} to='testimonials' smooth={true} duration={1000}>Testimonials</ScrollLink></li>
                  <li><ScrollLink onClick={() => setIsOpen(true)} to='adventages' smooth={true} duration={1000}>Adventages</ScrollLink></li>
                  <li><ScrollLink onClick={() => setIsOpen(true)} to='faq' smooth={true} duration={1000}>FAQ</ScrollLink></li>
                  <li onClick={() => setIsOpen(true)}>Sign In</li>
                </ul>
              </div>
              <select name='language' id='language' onChange={handelSubmit}>
                <option value='_en' selected>EN{getUnicodeFlagIcon('US')}</option>
                <option value='_ru'>RU{getUnicodeFlagIcon('RU')}</option>
                <option value='_hy'>HY{getUnicodeFlagIcon('AM')}</option>
              </select>
              {isOpen ? <div className='nav-menu' onClick={() => setIsOpen(false)}  ><TiThMenu size={40} /></div> : <div className='nav-closeMenu' onClick={() => setIsOpen(true)}><AiOutlineClose size={40} /></div>}
            </div>
            <div className='sub'>
              <div className='description'>
                <div>
                  {
                    header[slideOrder][`text${language.language}`]
                      ? header[slideOrder][`text${language.language}`]
                      : header[slideOrder][`text`]
                  }
                </div>
              </div>
              <div>
                <ScrollLink to='contact' smooth={true} duration={1000}><button className='btn'>Get Started</button></ScrollLink>
              </div>
            </div>
          </div>
        </>)
      }
      <div className='slider'>
        {
          header.map((elem, index) => <div className={`slid ${elem.order === activeSlide ? 'active' : 'notActive'}`} onClick={() => handelSlide(index)}></div>)
        }
      </div>
    </div >
  )
}

export default Navbar
