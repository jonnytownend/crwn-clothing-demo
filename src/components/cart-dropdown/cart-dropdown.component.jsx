import React from 'react'
import './cart-dropdown.styles.scss'

import BlockButton from '../block-button/block-button.component'

const CartDropdownItem = ({item}) => (
    <div className='cart-item'>
        <div className='item-content'>
            <div className='item-image' style={{backgroundImage: `url(${item.imageUrl}`}} />
            <div className='item-details'>
                <h3 className='item-title'>{item.name}</h3>
                <span className='item-price'>{`£${item.price}`}</span>
            </div>
        </div>
        <div className='divider' />
    </div>
)

const CartDropdown = ({items}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {items.map((item, index) => <CartDropdownItem key={index} item={item}/>)}
        </div>
        <BlockButton value='Checkout' />
    </div>
)

export default CartDropdown