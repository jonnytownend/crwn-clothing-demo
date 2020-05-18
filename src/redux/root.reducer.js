import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createHistoryReducer from './history/history.reducer'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shopData: shopReducer
})

export default persistReducer(persistConfig, createHistoryReducer(rootReducer))