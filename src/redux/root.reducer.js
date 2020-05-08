import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const RESET_STATE = 'RESET_STATE'
const UNDO = 'UNDO'
const STEP_THROUGH_TIME = 'STEP_THROUGH_TIME'

export const rootResetState = () => ({
    type: RESET_STATE
})

export const stepThroughTime = (index) => ({
    type: STEP_THROUGH_TIME,
    payload: index
})

export const globalUndo = () => ({
    type: UNDO
})

function createHistoryReducer(reducer) {
    const initialReducerState = reducer(undefined, {})
    const initialState = () => ({
        history: [{
            state: initialReducerState,
            timestamp: new Date()
        }],
        currentState: initialReducerState
    })

    return (state = initialState(), action) => {
        switch (action.type) {
            case RESET_STATE:
                return initialState()
            case STEP_THROUGH_TIME:
                return {
                    history: state.history,
                    currentState: state.history[action.payload].state
                }
            case UNDO:
                if (state.history.length === 1) {
                    break
                }
                return {
                    history: state.history.slice(0, state.history.length-1),
                    currentState: state.history[state.history.length-2].state
                }
            default:
                break;
        }
        const newCurrentState = reducer(state.currentState, action)
        const newHistoryState = {
            state: newCurrentState,
            timestamp: new Date()
        }
        const newHistory = [...state.history, newHistoryState]
        return {
            history: newHistory,
            currentState: newCurrentState
        }
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default createHistoryReducer(rootReducer)