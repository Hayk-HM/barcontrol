import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Members from './Members/Members'
import left from '../../image/left.png'
import right from '../../image/right.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Testimonials.css'

const Testimonials = () => {

  const testimonials = useSelector(state => state.testimonials)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='testimonials-main' id="testimonials">
      <div className='testimonials-left'>
        <div data-aos='slide-up' className='testimonials-title'>{testimonials.testimonialsTitle}</div>
        <div data-aos='slide-up' className='testimonials-br'></div>
      </div>
      <div className='testimonials-members'>
        <div className='testimonials-list'>
          <div className='testimonials-left'><img className='left-arrow' src={left} alt='left' /></div>
          {
            testimonials.members.map((elem, index) => <Members
              key={index}
              memberPhoto={elem.image}
              fullName={elem.fullName}
              location={elem.location}
              rating={elem.rating}
              description={elem.description}
            />)
          }
          <div className='testimonials-right'><img src={right} alt='right' /></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
