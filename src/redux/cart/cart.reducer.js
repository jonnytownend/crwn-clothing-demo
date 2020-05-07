import CartActionTypes from './cart.types'
import { act } from 'react-dom/test-utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: (state.cartItems.length === 0) ? true : !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            const newItem = action.payload
            const currentItemCount = state.cartItems.map(item => (item.id === newItem.id) ? item.quantity : 0).reduce((a, b) => a+b, 0)
            const itemWithCount = {...action.payload, quantity: currentItemCount + 1}
            return {
                ...state,
                cartItems: [...state.cartItems.filter(item => item.id !== newItem.id), itemWithCount]
            }
        default:
            return state;
    }
}

export default cartReducer