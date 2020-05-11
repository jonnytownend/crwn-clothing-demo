import HistoryActionTypes from './history.types'

export const rootResetState = () => ({
    type: HistoryActionTypes.RESET_STATE
})

export const stepThroughTime = (index) => ({
    type: HistoryActionTypes.STEP_THROUGH_TIME,
    payload: index
})

export const globalUndo = () => ({
    type: HistoryActionTypes.UNDO
})