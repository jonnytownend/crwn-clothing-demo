import ShopActionTypes from './shop.types'
import ShopActionType from './shop.types';

const INITIAL_STATE = null

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionType.UPDATE_COLLECTIONS:
            return action.payload
        default:
            return state;
    }
}

export default shopReducer