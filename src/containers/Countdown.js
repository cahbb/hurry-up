import React, { Component } from 'react'
import CreateCountdown from '../components/CreateCountdown'
import Counting from '../components/Counting'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CountdownActionCreators from '../actions/countdown'

class Countdown extends Component {
  render() {
    const { dispatch, countdownTitle, countdownDay, countdownMonth, countdownTime } = this.props
    const addCountdown = bindActionCreators(CountdownActionCreators.addCountdown, dispatch)

    return (
      <div className="countdown">
        <CreateCountdown
          countdownTitle = { countdownTitle }
          countdownDay = { countdownDay }
          countdownMonth = { countdownMonth }
          countdownTime = { countdownTime }
          addCountdown = { addCountdown } />
        <hr/>
        <Counting 
          countdownTitle = { countdownTitle }
          countdownDay = { countdownDay }
          countdownMonth = { countdownMonth }
          countdownTime = { countdownTime } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countdownTitle: state.countdownTitle,
  countdownDay: state.countdownDay,
  countdownMonth: state.countdownMonth,
  countdownTime: state.countdownTime
})
 
export default connect(mapStateToProps)(Countdown)
