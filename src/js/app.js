import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import PostsListContainer from './containers/PostsListContainer'
import CurrentPostContainer from './containers/CurrentPostContainer'
import Profile from './components/Profile'
import AddPostContainer from './containers/AddPostContainer'

import '../css/style.css';

// import keenImage from '../assets/keen.png';

// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");
// require("firebase/storage");

// // Leave out Storage
// //require("firebase/storage");

// var config = {
//     apiKey: "AIzaSyBVyfV_ysOYzzBSvxfGlFJrLnXYvf94qCE",
//     authDomain: "posty-blog-app.firebaseapp.com",
//     databaseURL: "https://posty-blog-app.firebaseio.com",
//     projectId: "posty-blog-app",
//     storageBucket: "posty-blog-app.appspot.com",
//     messagingSenderId: "983394009155"
//   };

// firebase.initializeApp(config);


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// Main parent comp
export default class PostyApp extends Component {
  render() {
    return (
      <div>
        Salut ! C'est l'appli Posty !
        <Profile />
        <PostsListContainer />
        <CurrentPostContainer />
        <AddPostContainer />
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
