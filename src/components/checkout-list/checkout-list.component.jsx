import React from 'react'
import './checkout-list.styles.scss'

import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../checkout-item/checkout-item.component'

const CheckoutCollection = ({items, total}) => (
    <div>
        <div className='table-row checkout-header'>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </div>
        {items.map((item, index) =>
            <div key={item.id}>
                <div className='divider' />
                <CheckoutItem className='table-row' item={item} />
                {index === items.length-1 ? (<div className='divider' />) : null}
            </div>
        )}
        <div className='table-row checkout-footer'>
            <span>Total</span>
            <span></span>
            <span></span>
            <span className='price'>{`£${total}`}</span>
            <span></span>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    items: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutCollection)