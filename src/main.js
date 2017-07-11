import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, browserHistory} from 'react-router-dom'
import Home from './scenes/Home'
import './css/semantic.css'

class App extends Component {

  render () {
    return (
      // <Provider store={{}}>
        <BrowserRouter history={browserHistory}>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </BrowserRouter>
      // </Provider>
    )
  }

}
render(
  <App />,
  document.getElementById('app')
)
