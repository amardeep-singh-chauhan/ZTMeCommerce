import React, { useEffect, useState } from 'react'
import './SignInForm.scss'
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInwithGooglePopup, signInwithGoogleRedirect } from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const defaultFormFields = {
    email: '',
    password: '',
}

function SignInForm() {
    const [formFields, setformFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setformFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value });
    }

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

    const signInWithGoogle = async () => {
        const { user } = await signInwithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password)

            resetFormFields();
            return user;

        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('Invalid credentials')
            } else {
                console.log(error)
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' name='email' value={email} type='email' onChange={handleChange} required />
                <FormInput label='Password' name='password' value={password} type='password' onChange={handleChange} required />
                <div className="buttons-container" style={{marginBottom:'1rem'}}>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
            <Button buttonType='google' onClick={signInwithGoogleRedirect}>Google Redirect Sign In</Button>
        </div>
    )
}

export default SignInForm