import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes';

// Redux store configuration
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk) // Allows dispatching async actions i.e API calls
);


//Render main component on the dom
render(
  <Provider store={store}>
    <Router key={Math.random()} history={browserHistory}>
      {routes}
    </Router>
  </Provider>
,document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
