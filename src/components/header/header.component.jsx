import React from 'react'
import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'

import { Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg'
import UnderlineButton from '../../components/underline-button/underline-button.component'

const Header = ({currentUser}) => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/' className='logo-container'>
                <CrownLogo className='logo' />
            </Link>
            {currentUser ? <span>{`Hello ${currentUser.displayName}`}</span> : null}
        </div>
        <div className='links-container'>
            <Link to='shop'>
                <UnderlineButton>SHOP</UnderlineButton>
            </Link>
            <Link to='contact'>
                <UnderlineButton>CONTACT</UnderlineButton>
            </Link>
            {
                currentUser ?
                <UnderlineButton onClick={() => {auth.signOut()}}>SIGN OUT</UnderlineButton> :
                <Link to='sign-in'>
                    <UnderlineButton>SIGN IN</UnderlineButton>
                </Link>
            }
        </div>
    </div>
)

export default Header