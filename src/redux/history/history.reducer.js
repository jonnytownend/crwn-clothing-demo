import HistoryActionTypes from './history.types'

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
            case HistoryActionTypes.RESET_STATE:
                return initialState()
            case HistoryActionTypes.STEP_THROUGH_TIME:
                return {
                    history: state.history,
                    currentState: state.history[action.payload].state
                }
            case HistoryActionTypes.UNDO:
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

export default createHistoryReducer