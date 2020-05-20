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

export const selectCollectionsAsArray = createSelector(
    [selectShopData],
    (shopData) => shopData ? Object.keys(shopData).map(key => shopData[key]) : null
)