import React, { useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import './Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const initialValues = {
    email: '',
    owner: '',
    phone: '',
    details: '',
  }

  return (
    <div id='contact'>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={
          Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            owner: Yup.string().max(30).required('Owner name is required'),
            phone: Yup.number().min(30).required('Phone number is required'),
            details: Yup.string().max(255).required('Details is required'),
          })
        }
        onSubmit={(values, { resetForm }) => {
          resetForm()
        }}
      >

        {
          ({ errors, handleBlur, handleChange, isSubmitting, touched, values, handleSubmit, resetForm }) => (
            <form onSubmit={handleSubmit}>
              <div data-aos='fade-up-left' className='contact-main' >
                <div className='contact-us'>Contact us</div>
                <div className='contact-left'>
                  <input
                    className='contact-form'
                    type='text'
                    placeholder='Owner Operator/Company Name'
                    error={Boolean(touched.owner && errors.owner)}
                    helperText={touched.owner && errors.owner}
                    name="owner"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.owner}
                  />
                  <div className='color'>{errors.owner && touched.owner && errors.owner}</div>
                  <input
                    className='contact-form'
                    type='text'
                    placeholder='Phone'
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                  />
                  <div className='color'>{errors.phone && touched.phone && errors.phone}</div>
                </div>
                <div className='contact-right'>
                  <input
                    className='contact-form'
                    type='text'
                    placeholder='Email'
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div className='color'>{errors.email && touched.email && errors.email}</div>
                  <input
                    className='contact-form'
                    type='text'
                    placeholder='Details'
                    error={Boolean(touched.details && errors.details)}
                    helperText={touched.details && errors.details}
                    name="details"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.details}
                  />
                  <div className='color'> {errors.details && touched.details && errors.details} </div>
                </div>
                <button disabled={isSubmitting} type="submit" className='contact-button'>Request a Callback</button>
              </div>
            </form>
          )}
      </Formik>
    </div>
  )
}

export default Contact
