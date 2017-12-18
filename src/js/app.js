import 'whatwg-fetch'
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


import { addPosts } from './actions/PostActions'
// Firebase file storage
// var storage = firebase.storage();



// // // probably better to just retrieve all files at once,
// // // instead of one at a time?
// // // var gsReference = storage.refFromURL('gs://posty-blog-app.appspot.com/Glossary.md')
// var storageRef = storage.refFromURL('gs://posty-blog-app.appspot.com')


// // ##########
// // WORKED to make a request, after setting permissions on Cloud Storage
// // var storageRef = firebase.storage().ref("/Glossary.md");
// // storageRef.getDownloadURL().then(function(url) {
// //   console.log(url);
// // });
// // ##########

// storageRef.child('Glossary.md').getDownloadURL().then(function(url) {
//   fetch(url).then(
//     function(response) {
//       // handle HTTP response
//       console.log("fetch url response: ")
//       // console.log(response.text())

//       // this works...
//       response.text().then(
//         function(md) {
//           console.log("md is: \n \n" + md)
//           const md_posts = [
//             {id: 0,
//               title: "A very special post...",
//               content: md
//             }
//           ]
//           // return store.dispatch(addPosts(md_posts))
//           // works! :-)
//           store.dispatch(addPosts(md_posts))


//         }
//         // I want to set md as the value of a post
//         // store.dispatch(syncPosts())
//         )

//       // console.log(response.json())
//     },
//     function(error) {
//       // handle network error
//       console.log("fetch url error: ")
//       console.log(error)
//     }
//   )
// })





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
