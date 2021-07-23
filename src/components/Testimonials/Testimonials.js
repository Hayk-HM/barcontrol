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
  const [scrollElement, setScrollElement] = useState(null)
  const [scrollThumbWidth, setScrollThumbWidth] = useState(null)
  const [scrollTrackWidth, setScrollTrackWidth] = useState(null)
  const swiperScrollbarRef = useRef()
  const swiperScrollbarDragRef = useRef()

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

  useEffect(() => {
    const elemWidth = document.querySelectorAll('.members-main')[0].offsetWidth || null
    const oneElemWidth = elemWidth / testimonials.members.length
    setScrollElement(oneElemWidth)

    const scrollTrackWidth = document.querySelectorAll('.swiper-scrollbar')[0].offsetWidth || null
    setScrollTrackWidth(scrollTrackWidth)
    const oneScrollWidth = scrollTrackWidth / (testimonials.members.length - 2)
    setScrollThumbWidth(oneScrollWidth)
  }, [document.body.offsetWidth])


  const handelScroll = (e) => {
    // document.querySelector('.swiper-scrollbar').addEventListener("click", (event) => {
    //   const page = Math.floor(event.offsetX / scrollThumbWidth)
    //   setOrder(page)
    //   console.log('offsetX', event.offsetX);
    //   console.log('order', order);
    //   console.log('scrollThumbWidth', scrollThumbWidth);
    //   console.log('scrollTrackWidth', scrollTrackWidth);
    //   console.log('page', page);
    // });
    const pageNumber = (Math.floor(e.clientX / swiperScrollbarDragRef.current.clientWidth));
    if (pageNumber > testimonials.members.length - 3) {
      setOrder(testimonials.members.length - 3)
    } else {
      setOrder(pageNumber);
    }
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
            testimonials.members.map((elem, index) => <div style={{ transform: `translate3d(${order * -(scrollElement * testimonials.members.length + 20)}px, 0px, 0px)`, transitionDuration: '1000ms' }} id='slide' className={index < order + 9 && index >= order ? 'slide active' : 'slide active'} > <Members
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
      <div className='swiper-scrollbar' ref={swiperScrollbarRef} onClick={(e) => handelScroll(e)}>
        <div
          ref={swiperScrollbarDragRef}
          className='swiper-scrollbar-drag'
          style={{
            width: scrollThumbWidth,
            transform: `translate3d(${(order) * (scrollThumbWidth)}px, 0px, 0px)`,
            transitionDuration: '1000ms'
          }}
        ></div>
      </div>
    </div>
  )
}

export default Testimonials
