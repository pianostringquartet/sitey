import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import PostsListContainer from './containers/PostsListContainer'
import CurrentPostContainer from './containers/CurrentPostContainer'
import Profile from './components/Profile'
import ProfileAvatar from './components/ProfileAvatar'
import Drawer from './components/Drawer'
import DrawerContainer from './containers/DrawerContainer'

// import AddPostContainer from './containers/AddPostContainer'


import { syncPosts } from './actions/PostActions'

import '../css/style.css';

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
    {/*<ProfileAvatar />*/}
    {/*<PostsListContainer />*/}
    {/*<CurrentPostContainer />*/}
    {/*<Drawer />*/}
    <DrawerContainer />
  </div>
)

render(
  <Provider store={store}>
    <PostyApp />
  </Provider>,
  document.getElementById('app')
)
