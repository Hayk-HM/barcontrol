import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Faq.css'
import Question from './Question/Question'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Faq = () => {

  const faq = useSelector(state => state.faq)
  const language = useSelector(state => state.language)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div id='faq'>
      <div data-aos='slide-up' className='faq-main'>
        <div className='faq-head' >
          <div className='faq-title' >FAQ</div>
          <div className='faq-br'></div>
        </div>
        <div className='faq-questionList'>
          {
            faq.map((elem, index) => <Question key={index} id={elem.id} question={elem[`question${language.language}`] ? elem[`question${language.language}`] : elem[`question`]} answer={elem[`answer${language.language}`] ? elem[`answer${language.language}`] : elem[`answer`]} isOpen={elem.isOpen} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Faq