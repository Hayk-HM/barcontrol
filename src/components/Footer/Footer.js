import React from 'react'
import { useSelector } from 'react-redux'
import { GoMail, AiOutlineGlobal, ImLocation2, FaPhoneAlt, FaFacebook, IoLogoInstagram, AiFillTwitterCircle } from 'react-icons/all'

import './Footer.css'

const Footer = () => {

  const footer = useSelector(state => state.footer)

  return (
    <div className='footer-main'>
      <div className='footer-contact'>
        <div className='footer-phone'>
          <div><FaPhoneAlt color='#ffffff' size={16} /></div>
          <div className='footer-info'>{footer.phone}</div>
        </div>
        <div className='footer-email'>
          <div><GoMail color='#ffffff' size={16} /></div>
          <div className='footer-info'>{footer.email}</div>
        </div>
        <div className='footer-domain'>
          <div><AiOutlineGlobal color='#ffffff' size={16} /></div>
          <div className='footer-info'>{footer.domain}</div>
        </div>
        <div className='footer-location'>
          <div><ImLocation2 color='#ffffff' size={16} /></div>
          <div className='footer-info'>{footer.location}</div>
        </div>
      </div>
      <div className='footer-information' >
        <div className='footer-information-title'>Information</div>
        <div className='footer-information-description footer-info'>{footer.information}</div>
      </div>
      <div className='footer-aboutUs'>
        <div className='footer-aboutUs-title'>About Us</div>
        <div className='footer-aboutUs-description footer-info'>{footer.aboutUs}</div>
      </div>
      <div className='footer-social'>
        <div className='footer-social-title'>Find Us on social media</div>
        <div className='footer-social-description footer-info'>
          {
            footer.social.map((elem, index) => (elem === 'facebook') ? <a key={index} href='https://www.facebook.com/'><FaFacebook className='footer-logo' color='#ffffff' size={32} /> </a> : (elem === 'instagram') ? <a href='https://www.instagram.com/' > <IoLogoInstagram className='footer-logo' size={37} color='#ffffff' /></a> : (elem === 'twitter') ? <a href='https://www.twitter.com/'><AiFillTwitterCircle className='footer-logo' size={37} color='#ffffff' /></a> : null)
          }
        </div>
      </div>
    </div >
  )
}

export default Footer
