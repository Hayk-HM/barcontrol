import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Members from './Members/Members'
import left from '../../image/left.png'
import right from '../../image/right.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Testimonials.css'

const Testimonials = () => {

  const testimonials = useSelector(state => state.testimonials)
  const [order, setOrder] = useState(3)

  let testimonialsForView = [...testimonials.members].splice(order, 3)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const handelLeft = () => {
    // if (order === 0) return
    // setOrder(prev => prev - 1)
    document.getElementById('testimonials-list').scrollLeft -= 100;
  }

  const handelRight = () => {
    // if (order === testimonials.members.length - 3) return
    // setOrder(prev => prev + 1)
    document.getElementById('testimonials-list').scrollLeft += 100;
  }

  return (
    <div className='testimonials-main' id="testimonials">
      <div>
        <div data-aos='slide-up' className='testimonials-title'>{testimonials.testimonialsTitle}</div>
        <div data-aos='slide-up' className='testimonials-br'></div>
      </div>
      <div className='testimonials-members'>
        <div className={`testimonials-left ${order === 0 ? 'disableLeft' : null}`} onClick={handelLeft}><img className='left-arrow' src={left} alt='left' /></div>
        <div className='testimonials-list' id='testimonials-list'>
          {
            testimonials.members.map((elem, index) => <div className={index < order + 9 && index >= order ? 'slide active' : 'slide'} > <Members
              key={index}
              memberPhoto={elem.image}
              fullName={elem.fullName}
              location={elem.location}
              rating={elem.rating}
              description={elem.description}
            /> </div>)
          }
        </div>
        <div className={`testimonials-right ${order === testimonials.members.length - 3 ? 'disableLeft' : null}`} onClick={handelRight}><img src={right} alt='right' /></div>
      </div>
    </div>
  )
}

export default Testimonials
