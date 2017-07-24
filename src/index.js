import React from 'react'
import ReactDOM from 'react-dom'
import Countdown from './containers/Countdown'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Countdown />,
    document.getElementById('root'))
registerServiceWorker()
