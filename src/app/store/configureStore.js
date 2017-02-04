import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import remoteActionMiddleware from '../middlewares/remoteActionMiddleware';

function configureStore(rootReducer, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      remoteActionMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}

export default configureStore;
