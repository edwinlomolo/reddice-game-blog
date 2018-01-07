import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

//Render main component on the dom
render(<App />, document.getElementById('app'));
