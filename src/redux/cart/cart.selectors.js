import { createSelector } from 'reselect'
import { store } from '../store'
import { selectCurrentUser } from '../user/user.selectors'
import { selectCurrentState } from '../history/history.selectors'

const selectCart = createSelector(
    [selectCurrentState],
    (currentState) => currentState.cart
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)