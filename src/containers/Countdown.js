import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CountdownActionCreators from '../actions/countdown'
import CreateCountdown from '../components/CreateCountdown'
import Counting from '../components/Counting'
import CountdownSummary from '../components/CountdownSummary'
import '../assets/css/countdown.css'
import '../assets/css/themes.css'

class Countdown extends Component {
  render() {
    const { dispatch, title, theme, isCounting, remainingTime, previousTime, hasBeenCounting } = this.props
    const startCounter = bindActionCreators(CountdownActionCreators.startCounter, dispatch)
    const stopCounter = bindActionCreators(CountdownActionCreators.stopCounter, dispatch)
    const decrementCounter = bindActionCreators(CountdownActionCreators.decrementCounter, dispatch)
    const setTheme = bindActionCreators(CountdownActionCreators.setTheme, dispatch)

    return (
      <div className={ `countdown ${theme}` }>
        <img className="logo" src={require('../assets/images/logo.svg')} alt="hurry up!"/>
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
          setTheme = { setTheme } />
        <CountdownSummary 
          title = { title }
          isCounting = { isCounting }
          hasBeenCounting = { hasBeenCounting } />
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
