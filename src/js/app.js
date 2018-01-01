import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from 'reducers'
import { Provider } from 'react-redux'
import { retrieveAndSaveCV } from 'actions'
import FullpageApp from 'components/FullpageApp'
import CVApp from 'components/CVApp'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
)

store.dispatch(retrieveAndSaveCV())

render(
  <Provider store={store}>
    <HashRouter>
      <span>
        <Link to='/' />
        <Link to='/cv' />
        <Switch>
          <Route exact path='/' component={FullpageApp} />
          <Route path='/cv' component={CVApp} />
        </Switch>
      </span>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
