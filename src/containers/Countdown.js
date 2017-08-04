import React, { Component } from 'react'
import CreateCountdown from '../components/CreateCountdown'
import Counting from '../components/Counting'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CountdownActionCreators from '../actions/countdown'
import '../css/countdown.css'
import '../css/gradients.css'

class Countdown extends Component {
  render() {
    const { dispatch, title, isCounting, remainingTime, previousTime } = this.props
    const startCounter = bindActionCreators(CountdownActionCreators.startCounter, dispatch)
    const stopCounter = bindActionCreators(CountdownActionCreators.stopCounter, dispatch)
    const decrementCounter = bindActionCreators(CountdownActionCreators.decrementCounter, dispatch)

    return (
      <div className="countdown blue-diagonal">
        <CreateCountdown
          startCounter = { startCounter } />
        <hr/>
        <Counting 
          title = { title }
          isCounting = { isCounting }
          remainingTime = { remainingTime }
          previousTime = { previousTime }
          decrementCounter = { decrementCounter }
          stopCounter = { stopCounter } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.title,
  isCounting: state.isCounting,
  remainingTime: state.remainingTime,
  previousTime: state.previousTime
})
 
export default connect(mapStateToProps)(Countdown)
