import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from '../initialState';

const configureStore = (initialState) => {
  return createStore(
    initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
