import { createSelector } from 'reselect'
import { selectCurrentState } from '../history/history.selectors'

const selectUser = createSelector(
    [selectCurrentState],
    (currentState) => currentState.user
)

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)