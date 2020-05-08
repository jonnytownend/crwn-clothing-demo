import React from 'react'
import './checkout-item.styles.scss'

import { connect } from 'react-redux'
import { addItem, removeItem, removeAllItemsOf } from '../../redux/cart/cart.actions'

const CheckoutItem = ({item, addItem, removeItem, removeAllItemsOf, className}) => (
    <div className={`item ${className}`}>
        <div className='image' style={{backgroundImage: `url(${item.imageUrl})`}} />
        <span className='description'>{item.name}</span>
        <div className='quantity'>
            <button className='quantity-button' onClick={() => removeItem(item)}>{'-'}</button>
            <span className='quantity-count'>{item.quantity}</span>
            <button className='quantity-button' onClick={() => addItem(item)}>{'+'}</button>
        </div>
        <span className='price'>{`£${item.price}`}</span>
        <button className='remove-button' onClick={() => removeAllItemsOf(item)}>&#10005;</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    removeAllItemsOf: (item) => dispatch(removeAllItemsOf(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)