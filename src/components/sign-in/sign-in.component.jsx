import React from 'react'
import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
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

    handleSubmit2 = () => {
        console.log('Submitting...')
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch(error) {
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
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className='form' onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleChange} name='email' type='email' label='email' value={this.state.email} required />
                    <Input onChange={this.handleChange} name='password' type='password' label='password' value={this.state.password} required />
                    
                    <div className='buttons-div'>
                        <BlockButton type='submit' value='Submit Form' />
                        <BlockButton hoverColor='rgb(20, 123, 249)' onClick={signInWithGoogle} value='Sign In with Google' />
                    </div>
                </form>
            </div>
        )
    }
}