import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Members from './Members/Members'
import left from '../../image/left.png'
import right from '../../image/right.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Testimonials.css'

const Testimonials = () => {

  const testimonials = useSelector(state => state.testimonials)
  const [order, setOrder] = useState(0)
  const myRef = useRef()

  //style="transform: translate3d(-480px, 0px, 0px); transition-duration: 0ms;"

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const handelLeft = () => {
    if (order === 0) return
    setOrder(pre => pre - 1)
  }

  const handelRight = () => {
    if (order === testimonials.members.length - 3) return
    setOrder(pre => pre + 1)
  }



  return (
    <div className='testimonials-main' id="testimonials">
      <div>
        <div data-aos='slide-up' className='testimonials-title'>{testimonials.testimonialsTitle}</div>
        <div data-aos='slide-up' className='testimonials-br'></div>
      </div>
      <div className='testimonials-members'>

        <div className={`testimonials-left ${order === 0 ? 'disableLeft' : null}`} >
          <img onClick={handelLeft} id='left-arrow' className='left-arrow' src={left} alt='left' />
        </div>

        <div className={`testimonials-list container x mandatory-scroll-snapping`} dir="ltr" id='testimonials-list'>
          {
            testimonials.members.map((elem, index) => <div style={{ transform: `translate3d(${order * -400}px, 0px, 0px)`, transitionDuration: '1000ms' }} id='slide' className={index < order + 9 && index >= order ? 'slide active' : 'slide active'} > <Members
              key={index}
              memberPhoto={elem.image}
              fullName={elem.fullName}
              location={elem.location}
              rating={elem.rating}
              description={elem.description}
            /> </div>)
          }
        </div>

        <div className={`testimonials-right ${order === testimonials.members.length - 3 ? 'disableLeft' : null}`}>
          <img onClick={handelRight} id='right-arrow' className='right-arrow' src={right} alt='right' />
        </div>

      </div>
    </div>
  )
}

export default Testimonials
