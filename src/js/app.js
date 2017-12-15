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

var database = firebase.database();
// console.log("typeof(database): ...")
// console.log(typeof(database))

function addPostToDB(postID, title, content) {
  database.ref('posts/' + postID).set({
    title: title,
    content: content,
  });
}

// console.log("Calling addPostToDB...")
// addPostToDB(0, "First FB DB Post", "This is the content. Nice!")

// console.log("Calling addPostToDB again...")
// addPostToDB(1, "Second FB DB Post", "werd muh bruh go")

// use postID to construct a path, then "remove node at that path"
function removePostFromDB(postID) {
  database.ref('posts/' + postID).remove()
    .then(function() {
      console.log("Remove successful")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    })
}
// remove() is async? (.then and .catch are for promises...)

// console.log("Calling removePostFromDB again...")
// removePostFromDB(0)

function retrievePostFromDB(postID) {
  database.ref('posts/' + postID).once('value')
      .then(function(snapshot) {
        console.log("retrievePostFromDB: posts/" + postID)
        console.log(snapshot.val())
      })
      .catch(function(error) {
        console.log("Retrieval failed: " + error.message)
      })
}

retrievePostFromDB(2)





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
