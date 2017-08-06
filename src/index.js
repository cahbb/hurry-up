import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import Countdown from './containers/Countdown'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CountdownReducer from './reducers/countdown'
import './assets/css/base.css'

ReactGA.initialize('UA-91764840-2')

const store = createStore(
  CountdownReducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
  <Countdown />
  </Provider>,
  document.getElementById('root'))
