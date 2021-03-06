import React from 'react'
import './sign-up.styles.scss'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import Input from '../../components/text-input/text-input.component'
import BlockButton from '../../components/block-button/block-button.component'

export default class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            emailValid: true,
            password: '',
            confirmPassword: '',
            passwordsMatch: true
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        const newPasswordsMatch = (password === confirmPassword)
        const newEmailValid = email.includes('@') && email.includes('.')

        if (!newPasswordsMatch || !newEmailValid) {
            this.setState({
                emailValid: newEmailValid,
                passwordsMatch: newPasswordsMatch
            })
            return
        }

        this.setState({
            displayName: '',
            email: '',
            emailValid: true,
            password: '',
            confirmPassword: '',
            passwordsMatch: true
        })

        try {
            const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                passwordsMatch: true
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='form' onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleChange} name='displayName' label='display name' value={this.state.displayName} required />
                    <Input
                        onChange={this.handleChange}
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        validateMessage={this.state.emailValid ? null : 'Email must be valid'}
                        showShake={!this.state.emailValid}
                        required />
                    <Input
                        onChange={this.handleChange}
                        name='password' type='password'
                        label='password'
                        value={this.state.password}
                        validateMessage={this.state.passwordsMatch ? null : "Passwords don't match"}
                        showShake={!this.state.passwordsMatch}
                        required
                    />
                    <Input
                        onChange={this.handleChange}
                        name='confirmPassword'
                        type='password'
                        label='confirm password'
                        value={this.state.confirmPassword}
                        validateMessage={this.state.passwordsMatch ? null : "Passwords don't match"}
                        showShake={!this.state.passwordsMatch}
                        required
                    />
                    
                    <div className='buttons-div'>
                        <BlockButton type='submit' value='Sign Up' />
                    </div>
                </form>
            </div>
        )
    }
}