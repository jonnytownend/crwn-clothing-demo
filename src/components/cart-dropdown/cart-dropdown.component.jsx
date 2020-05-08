import React from 'react'
import './cart-dropdown.styles.scss'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import BlockButton from '../block-button/block-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((item, index) =>
                <div key={index}>
                    <CartItem key={index} item={item}/>
                    <div key={index+1000} className='divider' />
                </div>
            )}
        </div>
        <div className='total'>
            <span>Total</span>
            <span className='price'>{`£${cartItems.map(item => item.quantity * item.price).reduce((a,b) => a+b, 0)}`}</span>
        </div>
        <BlockButton value='Checkout' />
    </div>
)

const mapPropsToState = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapPropsToState)(CartDropdown)