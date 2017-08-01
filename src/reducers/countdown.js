import * as CountdownActionTypes from '../actiontypes/countdown'

const initialState = {
  title: '',
  targetTime: '',
  isCounting: false,
  remainingTime: 0,
  previousTime: 0
}

export default function Countdown(state=initialState, action) {
  switch(action.type) {
    case CountdownActionTypes.START_COUNTER: {
      return {
        ...state,
        title: action.title,
        targetTime: action.targetTime,
        isCounting: true,
        remainingTime: action.remainingTime,
        previousTime: action.previousTime
      }
    }
    case CountdownActionTypes.STOP_COUNTER: {
      return {
        ...state,
        isCounting: false
      }
    }
    case CountdownActionTypes.DECREMENT_COUNTER: {
      return {
        ...state,
        previousTime: action.previousTime,
        remainingTime: action.remainingTime
      }
    }
    default:
      return state
  }
}