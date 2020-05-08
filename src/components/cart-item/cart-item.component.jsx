import React from 'react'
import './cart-item.styles.scss'

import { connect } from 'react-redux'
import { addItem, removeItem } from '../../redux/cart/cart.actions'

const CartItem = ({item, addItem, removeItem}) => (
    <div className='item-content'>
        <div className='item-image' style={{backgroundImage: `url(${item.imageUrl}`}} />
        <div className='item-details'>
            <h3 className='item-title'>{item.name}</h3>
            <div className='change-quantity'>
                <button className='quantity-button' onClick={() => removeItem(item)}>-</button>
                <span>{item.quantity}</span>
                <button className='quantity-button' onClick={() => addItem(item)}>+</button>
            </div>
            <span className='item-price'>{`${item.quantity ?? 1} x £${item.price}`}</span>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem)