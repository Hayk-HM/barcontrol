import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Advantage.css'
import Elements from './Elements/Elements'

const Advantage = () => {

  const advantage = useSelector(state => state.advantage)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='main-advantage _anim-item' id='adventages' >
      <div className='advantage-description'>
        <div data-aos='fade-up' className='advantageTitle'>{advantage.advantageTitle}</div>
        <div data-aos='fade-up' className='br'></div>
        <div data-aos='fade-up' className='advantageDescription'>{advantage.advantageDescription}</div>
        <div>
          <button data-aos='fade-up' className='advantage-btn'>Get started</button>
        </div>
      </div>
      <div data-aos='fade-left' className='advantage-services'>
        {
          advantage.services.map((elem, index) => <Elements key={index} img={elem.img} description={elem.description} />)
        }
      </div>
    </div>
  )
}

export default Advantage
