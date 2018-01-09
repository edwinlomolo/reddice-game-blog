import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';


if (module.hot) {
  module.hot.accept();
}

//Render main component on the dom
render(
  <Router key={Math.random()} history={browserHistory}>
    {routes}
  </Router>,
document.getElementById('app'));
