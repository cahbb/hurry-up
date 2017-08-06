import React from 'react'
import ReactDOM from 'react-dom'
import Countdown from './containers/Countdown'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CountdownReducer from './reducers/countdown'
import registerServiceWorker from './registerServiceWorker'
import './assets/css/base.css'

const store = createStore(
  CountdownReducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
  <Countdown />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
