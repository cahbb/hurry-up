import * as CountdownActionTypes from '../actiontypes/countdown'

export const addCountdown = (countdownTitle, countdownDay, countdownMonth, countdownTime) => {
  return {
    type: CountdownActionTypes.ADD_COUNTDOWN,
    countdownTitle,
    countdownDay,
    countdownMonth,
    countdownTime
  }
}