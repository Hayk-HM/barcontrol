import React, { useEffect, useState } from 'react'
import './Members.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiFillStar } from 'react-icons/ai';


const Members = (props) => {


  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  let arr = []

  for (let i = 0; i < props.rating; i++) {
    arr.push('star')
  }

  return (
    <div data-aos='zoom-in' className={`members-main`} id={props.id} >
      <div className='members-info'>
        <div className='members-img'>
          <img src={props.memberPhoto} alt='memberPhoto' className='memberPhoto' />
        </div>
        <div className='members-right'>
          <div className='members-fullName'>{props.fullName}</div>
          <div className='members-location'>{props.location}</div>
          <div className='members-rating'>
            {
              arr.map((elem, index) => <AiFillStar key={index} color='#FF8A34' />)
            }
          </div>
        </div>
      </div>
      <div className='members-description'>
        <div></div>
        <div className='members-text'>{props.description}</div>
      </div>
    </div>
  )
}

export default Members
