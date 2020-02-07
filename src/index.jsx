import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';

import '../assets/stylesheets/application.scss';
import costsReducer from './reducers/costs_reducer';
import monthNameReducer from './reducers/month_name_reducer';

const initialState = {
  costs: [],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

const reducers = combineReducers({
  costs: costsReducer,
  monthName: monthNameReducer,
  currentUser: initialState.currentUser,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/costs/month/:month" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
