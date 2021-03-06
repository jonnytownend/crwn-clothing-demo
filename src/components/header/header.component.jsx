import React from 'react'
import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import UnderlineButton from '../../components/underline-button/underline-button.component'

const Header = ({currentUser, hidden, resetState}) => (
    <div>
        <div className='header'>
            <div className='logo-container'>
                <Link to='/' className='logo-container'>
                    <CrownLogo className='logo' />
                </Link>
                {currentUser ? <span>{`Hello ${currentUser.displayName}`}</span> : null}
            </div>
            <div className='links-container'>
                <Link to='/shop'>
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
                <CartIcon />
                {
                    hidden ? null : <CartDropdown className='cart-dropdown' />
                }
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)