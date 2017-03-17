import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import configureStore from './store/configureStore';
import App from './App/App';
import NoMatch from './NoMatch/NoMatch';
import TestComponentContainer from './TestComponent/TestComponentContainer';
import ImageUpload from './ImageUpload/ImageUpload';

const initialState = {};
const store = configureStore(rootReducer, initialState);

const routes = (
  <Route path="/" component={App}>
    <Route path="test" component={TestComponentContainer} />
    <Route path="upload" component={ImageUpload} />
    <Route path="*" component={NoMatch} />
  </Route>
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root'),
);
