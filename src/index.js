import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { quiz } from './reducers/index';
import App from './App';
import './index.css';

const store = createStore(
  combineReducers({
    quiz
  })
);

const root = document.getElementById('root');

if(root) {
  ReactDOM.render(
    <Provider store={store}>
    <App></App>
    </Provider>,
    document.getElementById('root')
  );
}
