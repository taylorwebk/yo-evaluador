import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Header from './components/Header'
import Body from './components/Body'
class Home extends Component {

  render () {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <Body />
        </TransitionGroup>
      </div>
    )
  }

}

export default Home
