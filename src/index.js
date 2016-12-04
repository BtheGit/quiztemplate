import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { quiz } from './reducers/index';

import App from './App';
import IntroPage from './components/IntroPage/IntroPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';

import './index.css';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    quiz,
    routing: routerReducer
  })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route name='home' path='/' component={App}>
        <IndexRoute component={IntroPage}/>
        <Route name='intro' path='' component={IntroPage} />
        <Route name='questions' path='/questions' component={QuestionsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
