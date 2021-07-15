import React from 'react'

import './Elements.css'

const Elements = (props) => {

  return (
    <div className='main-element'>
      <div className='element-img'>
        <img src={props.img} alt='img' className={` element-photo`} />
      </div>
      <div className='element-description'>
        {props.description}
      </div>
    </div>
  )
}

export default Elements
