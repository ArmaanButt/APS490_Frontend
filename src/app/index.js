import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App/App';
import NoMatch from './NoMatch/NoMatch';
import TestComponent from './TestComponent/TestComponent';


const routes = (
  <Route path="/" component={App}>
    <Route path="test" component={TestComponent} />
    <Route path="*" component={NoMatch} />
  </Route>
);


ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root'),
);
