import React from 'react'
import './Authentication.scss'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import SignInForm from '../../Components/SignInForm/SignInForm'

function Authentication() {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication