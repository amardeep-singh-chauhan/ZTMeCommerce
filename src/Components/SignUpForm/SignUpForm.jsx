import { useState } from 'react'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { SignupContainer, SignupTitle } from './SignUpFormStyles';
import { signUpUserStart } from '../../Redux/User/UserActions';
import { useDispatch } from 'react-redux';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm() {
  const dispatch = useDispatch();
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    };

    try {
      dispatch(signUpUserStart(email, password, displayName));
      resetFormFields();

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      } else {
        console.log(error)
      }
    }
  }

  return (
    <SignupContainer>
      <SignupTitle>Don't have an account?</SignupTitle>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' name='displayName' value={displayName} type='text' onChange={handleChange} required />
        <FormInput label='Email' name='email' value={email} type='email' onChange={handleChange} required />
        <FormInput label='Password' name='password' value={password} type='password' autoComplete='new-password' onChange={handleChange} required />
        <FormInput label='Confirm Password' name='confirmPassword' value={confirmPassword} type='password' onChange={handleChange} required />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignupContainer>
  )
}

export default SignUpForm