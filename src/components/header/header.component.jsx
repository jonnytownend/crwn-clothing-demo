import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg'
import UnderlineButton from '../../components/underline-button/underline-button.component'

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <CrownLogo className='logo' />
        </Link>
        <div className='links-container'>
            <UnderlineButton text="Shop" link="shop" />
            <UnderlineButton text="Contact" link="contact" />
            <UnderlineButton text="Sign In" link="sign-in" />
        </div>
    </div>
)

export default Header