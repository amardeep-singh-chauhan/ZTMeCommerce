import React, { useState } from 'react'
import { signInUserWithEmailAndPassword, signInwithGooglePopup } from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { SigninButtonContainer, SigninContainer, SigninTitle } from './SignInFormStyles';

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

    const signInWithGoogle = async () => {
        await signInwithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password)
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('Invalid credentials')
            } else {
                console.error(error)
            }
        }
    }

    return (
        <SigninContainer>
            <SigninTitle>Already have an account?</SigninTitle>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' name='email' value={email} type='email' onChange={handleChange} required />
                <FormInput label='Password' name='password' value={password} type='password' onChange={handleChange} required />
                <SigninButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </SigninButtonContainer>
            </form>
        </SigninContainer>
    )
}

export default SignInForm