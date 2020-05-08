import React from 'react'
import './checkoutpage.styles.scss'

import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { Link } from 'react-router-dom'
import BlockButton from '../../components/block-button/block-button.component'

import CheckoutList from '../../components/checkout-list/checkout-list.component'

const CheckoutPage = ({cartItemsCount}) => (
    <div className='checkout-collection'>
        {cartItemsCount > 0 ?
            <CheckoutList /> :
            <div className='empty-state'>
                <h2 className='empty-cart-text'>Your cart is emtpy.</h2>
                <Link to='/shop'>
                    <BlockButton type='button' value='Start shopping' />
                </Link>
            </div>
        }
    </div>
)

const mapStateToProps = (state) => ({
    cartItemsCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CheckoutPage)