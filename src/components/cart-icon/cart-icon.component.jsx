import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon, ReactComponent } from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className={`cart-icon ${'animate'}`} onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const matchStateToProps = (state) => ({
    itemCount: state.cart.cartItems.map(item => item.quantity).reduce((a,b) => a+b, 0)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(matchStateToProps, mapDispatchToProps)(CartIcon)