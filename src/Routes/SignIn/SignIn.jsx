import React, { useEffect } from 'react'
import './SignIn.scss'
import { auth, createUserDocumentFromAuth, signInwithGooglePopup, signInwithGoogleRedirect } from '../../Utils/Firebase/Firebase.utils'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

function SignIn() {

  useEffect(() => {

    const getUser = async () => {
      try {
        const response = await getRedirectResult(auth)
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
          return userDocRef
        }
      } catch (error) {
        console.error('Error signing in:', error);
      }
    }

    getUser();
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    return userDocRef;
  }

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={signInwithGoogleRedirect}>Sign In with Google Redirect</button>
      <SignUpForm />
    </>
  )
}

export default SignIn