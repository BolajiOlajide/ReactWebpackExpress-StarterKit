import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Index from './components/Index.component';

import './assets/styles.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app')
);
