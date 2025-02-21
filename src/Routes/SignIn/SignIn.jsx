import React, { useEffect } from 'react'
import './SignIn.scss'
import { auth, createUserDocumentFromAuth, signInwithGooglePopup, signInwithGoogleRedirect } from '../../Utils/Firebase/Firebase.utils'
import { getRedirectResult } from 'firebase/auth'

function SignIn() {

  useEffect(async () => {
    const {user} = await getRedirectResult(auth)
    if (user){
      const userDocRef = await createUserDocumentFromAuth(user);
    }
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={signInwithGoogleRedirect}>Sign In with Google Redirect</button>
    </>
  )
}

export default SignIn