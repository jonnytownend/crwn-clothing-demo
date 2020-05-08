import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            let itemAdded = false
            let newItems = state.cartItems.map(item => {
                if (item.id === action.payload.id) {
                    itemAdded = true
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            if (!itemAdded) {
                newItems.push({...action.payload, quantity: 1})
            }
            return {
                ...state,
                cartItems: newItems
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems
                    .map(item => (item.id === action.payload.id) ? {...item, quantity: item.quantity-1} : item)
                    .filter(item => item.quantity !== 0)
            }
        case CartActionTypes.REMOVE_ALL_ITEMS_OF:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer