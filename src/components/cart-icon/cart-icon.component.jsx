import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon, ReactComponent } from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className={`cart-icon ${'animate'}`} onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const matchStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(matchStateToProps, mapDispatchToProps)(CartIcon)