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
import AddPostContainer from './containers/AddPostContainer'


import { fetchPosts, syncPosts } from './actions/PostActions'

import '../css/style.css';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
)


// where should a database listener go?

var database = firebase.database();

// var firstPostTitleRef = firebase.database().ref('posts/' + 0 + '/title');
// firstPostTitleRef.on('value', function(snapshot) {
//   // updateStarCount(postElement, snapshot.val());
//   console.log("Listening to changes...")
//   console.log(snapshot.val())
// });

// var postsRef = firebase.database().ref('posts/');
// postsRef.on('value', function(snapshot) {
//   // updateStarCount(postElement, snapshot.val());
//   console.log("Listening to changes to any posts...")
//   console.log(snapshot.val())
// });


// whenever a change happens at the db node,
// we receive the contents of the db node.
// (We also receive the contents of the db node when
//  we first load up.)

// setup listener at Firebase db's 'posts' node

// is this still async?
// i.e.

// is the first retrieval of the 'posts' node async?
//  ... I suspect not, bc we're directly querying the db

// are subseq

// i don't think it's async; it's basically,
// "upon load, and any change, retrieve the node"

// firebase.database().ref('posts/').on('value',
//   function(snapshot) {
//     console.log("Listening to changes to any posts...")
//     console.log(snapshot.val())
// });


// where's the proper place for this initialization logic?

// console.log("About to dispatch fetchPosts")
// store.dispatch(fetchPosts())

console.log("About to dispatch syncPosts")
store.dispatch(syncPosts())




// to see store state:
// console.log(store.getState())

// Main parent comp
export default class PostyApp extends Component {
  render() {
    return (
      <div>
        Salut ! C'est l'appli Posty !
        {/*<Profile />*/}
        <ProfileAvatar />
        <PostsListContainer />
        <CurrentPostContainer />
        {/*<AddPostContainer />*/}
      </div>

    );
  }
}

// render(<Salut />, document.getElementById('app'));

render(
  <Provider store={store}>
    <PostyApp />
  </Provider>,
  document.getElementById('app')
)
