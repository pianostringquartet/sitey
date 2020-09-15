import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import FullpageApp from "./components/FullpageApp";
import CVApp from "./components/CVApp";

import { store } from './store';
import { retrieveCV } from './cvSlice';

store.dispatch(retrieveCV())

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <span>
          <Link to="/" />
          <Link to="/cv" />
          <Switch>
            <Route exact path="/" component={FullpageApp} />
            <Route path="/cv" component={CVApp} />
          </Switch>
        </span>
      </HashRouter>
    </Provider>,
  document.getElementById("app")
);
