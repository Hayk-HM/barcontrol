import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { isOpen } from '../../../redux/actions/question'

import './Question.css'

const Question = (props) => {

  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(isOpen(id))
  }

  return (
    <div className={`question-main ${props.isOpen ? 'open' : null}  `} onClick={() => handleClick(props.id)}>
      <div className='question'>{props.question}</div>
      <div className='question-plus'>
        {
          props.isOpen ? < AiFillMinusCircle size={29} color='#247A50' /> : <AiFillPlusCircle size={29} color='#247A50' />
        }
      </div>
      {
        props.isOpen ? <div className='question-answer'>{props.answer}</div> : undefined
      }
    </div>
  )
}

export default Question
