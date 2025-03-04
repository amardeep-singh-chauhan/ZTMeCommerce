import { useState } from 'react'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { SigninButtonContainer, SigninContainer, SigninTitle } from './SignInFormStyles';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../Redux/User/UserActions';

const defaultFormFields = {
    email: '',
    password: '',
}

function SignInForm() {
    const dispatch = useDispatch();
    const [formFields, setformFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setformFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = () => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password))
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
                <FormInput label='Password' name='password' value={password} type='password' autoComplete='new-password' onChange={handleChange} required />
                <SigninButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </SigninButtonContainer>
            </form>
        </SigninContainer>
    )
}

export default SignInForm