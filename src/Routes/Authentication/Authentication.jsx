import React from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import SignInForm from '../../Components/SignInForm/SignInForm'
import { AuthenticationContainer } from './AuthenticationStyles'

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication