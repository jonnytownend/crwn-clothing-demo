import React from 'react'
import './cart-dropdown.styles.scss'

import { connect } from 'react-redux'

import BlockButton from '../block-button/block-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((item, index) =>
                <div>
                    <CartItem key={index} item={item}/>
                    <div className='divider' />
                </div>
            )}
        </div>
        <BlockButton value='Checkout' />
    </div>
)

const mapPropsToState = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapPropsToState)(CartDropdown)