import * as CountdownActionTypes from '../actiontypes/countdown'

export const startCounter = (title, remainingTime, previousTime) => ({
  type: CountdownActionTypes.START_COUNTER,
  title,
  remainingTime,
  previousTime
})

export const stopCounter = () => ({
  type: CountdownActionTypes.STOP_COUNTER
})

export const decrementCounter = (remainingTime, previousTime) => ({
  type: CountdownActionTypes.DECREMENT_COUNTER,
  remainingTime,
  previousTime
})

export const setTheme = (theme) => ({
  type: CountdownActionTypes.SET_THEME,
  theme
})

export const resetCountdown = () => ({
  type: CountdownActionTypes.RESET_COUNTDOWN
})