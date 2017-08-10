import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CountdownActionCreators from '../actions/countdown'
import CreateCountdown from '../components/CreateCountdown'
import Counting from '../components/Counting'
import CountdownSummary from '../components/CountdownSummary'
import '../assets/styles/components/Countdown.css'
import '../assets/styles/components/Themes.css'

class Countdown extends Component {
  render() {
    const { dispatch, title, theme, isCounting, remainingTime, previousTime, hasBeenCounting } = this.props
    const startCounter = bindActionCreators(CountdownActionCreators.startCounter, dispatch)
    const stopCounter = bindActionCreators(CountdownActionCreators.stopCounter, dispatch)
    const resetCountdown = bindActionCreators(CountdownActionCreators.resetCountdown, dispatch)
    const decrementCounter = bindActionCreators(CountdownActionCreators.decrementCounter, dispatch)
    const setTheme = bindActionCreators(CountdownActionCreators.setTheme, dispatch)

    return (
      <div className={ `countdown ${theme}` }>
        <div className="logo">
          <img src={require('../assets/images/logo.svg')} alt="hurry up!"/>
        </div>
        <CreateCountdown
          isCounting = { isCounting }
          hasBeenCounting = { hasBeenCounting }
          startCounter = { startCounter }
          setTheme = { setTheme } />
        <Counting 
          title = { title }
          isCounting = { isCounting }
          remainingTime = { remainingTime }
          previousTime = { previousTime }
          decrementCounter = { decrementCounter }
          stopCounter = { stopCounter }
          setTheme = { setTheme }
          resetCountdown = { resetCountdown } />
        <CountdownSummary 
          title = { title }
          isCounting = { isCounting }
          hasBeenCounting = { hasBeenCounting }
          resetCountdown = { resetCountdown } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.title,
  theme: state.theme,
  isCounting: state.isCounting,
  hasBeenCounting: state.hasBeenCounting,
  remainingTime: state.remainingTime,
  previousTime: state.previousTime
})
 
export default connect(mapStateToProps)(Countdown)
