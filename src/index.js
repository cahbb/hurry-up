import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import Countdown from './containers/Countdown'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CountdownReducer from './reducers/countdown'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import './assets/styles/base.css'

ReactGA.initialize('UA-91764840-2')

const persistedState = loadState()
const store = createStore(
  CountdownReducer,
  persistedState,
  window.devToolsExtension && window.devToolsExtension()
)

store.subscribe(throttle(() => {
  if (store.getState().isCounting) {
    saveState(store.getState())
  }
}, 1000))

ReactDOM.render(
  <Provider store={store}>
  <Countdown />
  </Provider>,
  document.getElementById('root'))
