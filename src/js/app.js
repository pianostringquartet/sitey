import 'whatwg-fetch'
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers'

import MainContent from 'components/MainContent'

import IntroMessage from 'components/IntroMessage'

import AboutPanel from 'components/about/AboutPanel'
import NowPanel from 'components/now/NowPanel'
import ProjectsPanel from 'components/projects/ProjectsPanel'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
)

const PostyApp = () => (
  <div>
    <MainContent />
  </div>
)

render(
  <Provider store={store}>
    <PostyApp />
  </Provider>,
  document.getElementById('app')
)
