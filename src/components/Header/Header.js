import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'
import photo from '../../image/Header.jpg'
import Navbar from './Navbar/Navbar'

const Header = () => {

  const header = useSelector(state => state.header)

  return (
    <div className='main'>
      <div className='photo'>
        <img src={header.url || photo} alt='headerPhoto' className='backPhoto' />
      </div>
      <Navbar />
    </div>
  )
}

export default Header