import * as CountdownActionTypes from '../actiontypes/countdown'

const initialState = {
  countdownTitle: 'burger time',
  countdownDay: '20',
  countdownMonth: 'July',
  countdownTime: '20:07'
}

export default function Player(state=initialState, action) {
  switch(action.type) {
    case CountdownActionTypes.ADD_COUNTDOWN: {
      return {
        ...state,
        countdownTitle: action.countdownTitle,
        countdownDay: action.countdownDay,
        countdownMonth: action.countdownMonth,
        countdownTime: action.countdownTime
      }
    }
    default:
      return state
  }
}