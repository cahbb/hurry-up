import * as CountdownActionTypes from '../actiontypes/countdown'

export const startCounter = (title, remainingTime, previousTime) => {
  return {
    type: CountdownActionTypes.START_COUNTER,
    title,
    remainingTime,
    previousTime
  }
}

export const stopCounter = () => {
  return {
    type: CountdownActionTypes.STOP_COUNTER
  }
}

export const decrementCounter = (remainingTime, previousTime) => {
  return {
    type: CountdownActionTypes.DECREMENT_COUNTER,
    remainingTime,
    previousTime
  }
}

export const setTheme = (theme) => {
  return {
    type: CountdownActionTypes.SET_THEME,
    theme
  }
}