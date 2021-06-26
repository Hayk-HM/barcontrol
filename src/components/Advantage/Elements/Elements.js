import React from 'react'
import { useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64';

import './Elements.css'

const Elements = (props) => {

  return (
    <div>
      <div className='element-img'>
        <img src={props.img} alt='img' className='element-photo' />
      </div>
      <div className='element-description'>
        {props.description}
      </div>
    </div>
  )
}

export default Elements
