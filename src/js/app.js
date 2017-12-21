import 'whatwg-fetch'
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'reducers';
import { syncPosts } from 'actions/Actions'

import Drawer from 'components/Drawer'
import ProfileAvatar from 'components/ProfileAvatar'
import DrawerList from 'components/DrawerList'
import MainContent from 'components/MainContent'


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
)

store.dispatch(syncPosts())

const PostyApp = () => (
  <div>
    <Drawer
      appBarTitle = 'The Lived Experience of Programming'
      drawerSideHeader = {<ProfileAvatar />}
      drawerSide = {<DrawerList />}
      drawerMain = {<MainContent />}
    />
  </div>
)

render(
  <Provider store={store}>
    <PostyApp />
  </Provider>,
  document.getElementById('app')
)
