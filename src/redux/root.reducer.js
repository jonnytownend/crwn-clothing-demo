import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const RESET_STATE = 'RESET_STATE'

export const rootResetState = () => ({
    type: RESET_STATE
})

const appReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default (state, action) => {
    if (action.type === RESET_STATE) {
        state = undefined
    }
    return appReducer(state, action)
}