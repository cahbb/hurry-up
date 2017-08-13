import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CountdownActionCreators from '../actions/countdown'
import CreateCountdown from '../components/CreateCountdown'
import Counting from '../components/Counting'
import CountdownSummary from '../components/CountdownSummary'
import Logo from '../components/Logo'
import ChooseTheme from '../components/ChooseTheme'
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

    let view = null
    if (!isCounting && !hasBeenCounting) {
      view = <CreateCountdown
               startCounter={ startCounter }
               setTheme={ setTheme } />
    } else if (isCounting) {
      view = <Counting
               title={ title }
               isCounting={ isCounting }
               remainingTime={ remainingTime }
               previousTime={ previousTime }
               decrementCounter={ decrementCounter }
               stopCounter={ stopCounter }
               setTheme={ setTheme }
               resetCountdown={ resetCountdown } />
    } else if (!isCounting && hasBeenCounting) {
      view = <CountdownSummary
               title={ title }
               resetCountdown={ resetCountdown } />
    }

    return (
      <div className={ `countdown ${theme}` }>
        <Logo />
        { view }
        {
          !isCounting && hasBeenCounting ?
          false
          :
          <ChooseTheme setTheme={ setTheme } />
        }
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
