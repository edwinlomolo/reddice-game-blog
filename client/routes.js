import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Greetings from './components/Greetings';
import SignUp from './components/signup/signup';

import App from './components/App';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Greetings
    },
    childRoutes: [
      { path: 'signup', component: SignUp }
    ]
  }
];

export default routes
