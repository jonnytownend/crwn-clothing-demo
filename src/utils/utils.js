import { act } from "@testing-library/react"

export default class StateHistory {

    constructor(initialState) {
        this.initialState = initialState
        this.history = []
    }

    addAction(action) {
        this.history.push({
            action: action,
            timestamp: new Date()
        })
    }

    playBack() {
        const firstActionTime = this.history[0].timestamp
        this.history.forEach(action => {
            const timeDiff = (action.timestamp.getTime() - firstActionTime.getTime()) / 1000
            setTimeout(() => {
                
            }, timeDiff)
        })
    }

}