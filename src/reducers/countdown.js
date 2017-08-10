import * as CountdownActionTypes from '../actiontypes/countdown'

const initialState = {
  title: '',
  theme: 'green-purple-horizontal',
  isCounting: false,
  remainingTime: 0,
  previousTime: 0,
  hasBeenCounting: false
}

export default function Countdown(state=initialState, action) {
  switch(action.type) {
    case CountdownActionTypes.START_COUNTER: {
      return {
        ...state,
        title: action.title,
        isCounting: true,
        remainingTime: action.remainingTime,
        previousTime: action.previousTime
      }
    }
    case CountdownActionTypes.STOP_COUNTER: {
      return {
        ...state,
        isCounting: false,
        hasBeenCounting: true
      }
    }
    case CountdownActionTypes.RESET_COUNTDOWN: {
      return {
        ...state,
        isCounting: false,
        hasBeenCounting: false
      }
    }
    case CountdownActionTypes.DECREMENT_COUNTER: {
      let remainingTime = action.remainingTime
      if (action.remainingTime < 0) {
        remainingTime = 0
      }
      return {
        ...state,
        previousTime: action.previousTime,
        remainingTime: remainingTime
      }
    }
    case CountdownActionTypes.SET_THEME: {
      return {
        ...state,
        theme: action.theme
      }
    }
    default:
      return state
  }
}