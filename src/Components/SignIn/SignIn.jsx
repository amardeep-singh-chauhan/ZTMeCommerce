import React, { useState } from 'react'
import './signIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { signInWithGoogle } from '../../Firebase/firebase.utils'

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ email: '', password: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' handleChange={handleChange} value={email} required label='Email' />
                <FormInput name='password' type='password' handleChange={handleChange} value={password} required label='Password' />
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}
                        Sign in with google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn