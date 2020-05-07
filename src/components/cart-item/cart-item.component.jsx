import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({item}) => (
    <div className='item-content'>
        <div className='item-image' style={{backgroundImage: `url(${item.imageUrl}`}} />
        <div className='item-details'>
            <h3 className='item-title'>{item.name}</h3>
            <span className='item-price'>{`${item.quantity ?? 1} x £${item.price}`}</span>
        </div>
    </div>
)

export default CartItem