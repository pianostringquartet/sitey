import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import PostsListContainer from './containers/PostsListContainer'
import CurrentPostContainer from './containers/CurrentPostContainer'
import Profile from './components/Profile'

import '../css/style.css';

// import keenImage from '../assets/keen.png';




const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// Main parent comp
export default class PostyApp extends Component {
  render() {
    return (
      <div>
        {/*Salut ! Je m'appelles l'appli React et Redux !*/}
        <Profile />
        <PostsListContainer />
        <CurrentPostContainer />

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
