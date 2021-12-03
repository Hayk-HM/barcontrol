import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import Members from './Members/Members'
import left from '../../image/left.png'
import right from '../../image/right.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";

import './Testimonials.css'



const Testimonials = () => {

  const testimonials = useSelector(state => state.testimonials)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [slideIndex, setSlideIndex] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)
  const [mySlideToShow, setMySlideToShow] = useState(3)
  const slider = useRef()
  const [width, height] = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useLayoutEffect(() => {
    if (width < 800) {
      setMySlideToShow(1)
    } else if (width < 1100) {
      setMySlideToShow(2)
    } else {
      setMySlideToShow(3)
    }
  }, [width])

  // const resize = () => {
  //   if (window.innerWidth = 900) {
  //     setMySlideToShow(1)
  //   } else if (window.innerWidth = 1100) {
  //     setMySlideToShow(2)
  //   } else {
  //     setMySlideToShow(3)
  //   }
  // }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: mySlideToShow,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(pre => pre + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };
  return (

    <div>
      <div className='testimonials-main' id="testimonials">
        <div data-aos='slide-up' className='testimonials-title'>{testimonials.testimonialsTitle}</div>
        <div data-aos='slide-up' className='testimonials-br'></div>
      </div>
      <Slider ref={slider} {...settings} className='testimonials-slider-main'>
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
      </Slider>
      <input
        className='sliderInput'
        onChange={e => slider.current.slickGoTo(e.target.value)}
        value={slideIndex}
        type="range"
        min={0}
        max={testimonials.members.length - 1}
      />
    </div>
  )
}

export default Testimonials
