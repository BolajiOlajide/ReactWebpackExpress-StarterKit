import React from "react";
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';

import "./assets/styles.css";

const App = () => {
  return (
    <h1> I AM ALIVE!!</h1>
  );
};

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
