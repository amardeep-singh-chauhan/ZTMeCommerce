import React from 'react'
import './SignIn.scss'
import { signInwithGooglePopup } from '../../Utils/Firebase/Firebase.utils'

function SignIn() {

  const logGoogleUser = async () => {
    const response = await signInwithGooglePopup();
    console.log(response);
  }

  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </>
  )
}

export default SignIn