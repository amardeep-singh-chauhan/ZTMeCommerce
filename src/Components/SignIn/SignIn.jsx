import React, { Component } from 'react'
import './signIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email:'', password: '' })
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} required label='Email' />
                    <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} required label='Password' />
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn