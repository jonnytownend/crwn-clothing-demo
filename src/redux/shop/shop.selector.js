import { createSelector } from 'reselect'
import { selectCurrentState } from '../history/history.selectors'

export const selectShopData = createSelector(
    [selectCurrentState],
    (state) => state.shopData
)

export const selectCollection = (collectionName) => createSelector(
    [selectShopData],
    (shopData) => shopData[collectionName]
)