import * as CountdownActionTypes from '../actiontypes/countdown'

export const startCounter = (title, targetTime, remainingTime, previousTime) => {
  return {
    type: CountdownActionTypes.START_COUNTER,
    title,
    targetTime,
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