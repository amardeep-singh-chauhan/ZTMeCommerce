import React, { useState } from 'react'
import './SignInForm.scss'
import { signInUserWithEmailAndPassword, signInwithGooglePopup } from '../../Utils/Firebase/Firebase.utils';
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
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm