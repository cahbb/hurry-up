import React, { Component } from 'react'
import CreateCountdown from '../components/CreateCountdown'
import Counting from '../components/Counting'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CountdownActionCreators from '../actions/countdown'
import '../css/countdown.css'
import '../css/themes.css'

class Countdown extends Component {
  render() {
    const { dispatch, title, theme, isCounting, remainingTime, previousTime } = this.props
    const startCounter = bindActionCreators(CountdownActionCreators.startCounter, dispatch)
    const stopCounter = bindActionCreators(CountdownActionCreators.stopCounter, dispatch)
    const decrementCounter = bindActionCreators(CountdownActionCreators.decrementCounter, dispatch)
    const setTheme = bindActionCreators(CountdownActionCreators.setTheme, dispatch)

    return (
      <div className={ `countdown ${theme}` }>
        <CreateCountdown
          isCounting = { isCounting }
          startCounter = { startCounter }
          setTheme = { setTheme } />
        <Counting 
          title = { title }
          isCounting = { isCounting }
          remainingTime = { remainingTime }
          previousTime = { previousTime }
          decrementCounter = { decrementCounter }
          stopCounter = { stopCounter }
          setTheme = { setTheme } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.title,
  theme: state.theme,
  isCounting: state.isCounting,
  remainingTime: state.remainingTime,
  previousTime: state.previousTime
})
 
export default connect(mapStateToProps)(Countdown)
