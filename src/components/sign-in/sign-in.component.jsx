import React from 'react'
import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import Input from '../../components/text-input/text-input.component'
import BlockButton from '../../components/block-button/block-button.component'

export default class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className='form' onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleChange} name='email' type='email' value={this.state.email} required />
                    <Input onChange={this.handleChange} name='password' type='password' value={this.state.password} required />
                    
                    <div className='buttons-div'>
                        <BlockButton type='submit' value='Submit Form' />
                        <BlockButton onClick={signInWithGoogle} value='Sign In with Google' />
                    </div>
                </form>
            </div>
        )
    }
}