import React from 'react'
import './cart-dropdown.styles.scss'

import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import BlockButton from '../block-button/block-button.component'
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'

const CartDropdown = ({cartItems, cartTotal, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((item, index) =>
                <div key={index}>
                    <CartItem key={index} item={item}/>
                    <div key={index+1000} className='divider' />
                </div>
            )}
        </div>
        {cartItems.length === 0 ?
        <h3 className='empty-message'>Your cart is empty</h3> :
        (<div className='total'>
            <span>Total</span>
            <span className='price'>{`£${cartTotal}`}</span>
        </div>
        )}
        <Link to='/checkout' onClick={() => dispatch(toggleCartHidden())}>
            <BlockButton className='checkout-button' value='Checkout' />
        </Link>
    </div>
)

const mapPropsToState = (state) => ({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
})

export default connect(mapPropsToState)(CartDropdown)