import { createSelector } from 'reselect'

const selectUser = (state) => state.currentState.user

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)