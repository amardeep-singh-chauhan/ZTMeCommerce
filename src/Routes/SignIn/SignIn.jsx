import React from 'react'
import './SignIn.scss'
import { createUserDocumentFromAuth, signInwithGooglePopup } from '../../Utils/Firebase/Firebase.utils'

function SignIn() {

  const logGoogleUser = async () => {
    const {user} = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    
  }

  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </>
  )
}

export default SignIn