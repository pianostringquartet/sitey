import 'whatwg-fetch'

import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import { syncPosts } from './actions/PostActions'

import PostsListContainer from './containers/PostsListContainer'

import PostsList from 'components/PostsList'

import ProfileAvatar from './components/ProfileAvatar'
import DrawerContainer from 'containers/DrawerContainer'

import DrawerList from 'components/DrawerList'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
)

console.log("About to dispatch syncPosts")
store.dispatch(syncPosts())

// Main parent component
const PostyApp = () => (
  <div>
    <DrawerContainer />
  </div>
)

render(
  <Provider store={store}>
    <PostyApp />
  </Provider>,
  document.getElementById('app')
)
