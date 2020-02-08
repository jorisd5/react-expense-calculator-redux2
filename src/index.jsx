import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';

import '../assets/stylesheets/application.scss';
import costsMonthReducer from './reducers/costs_month_reducer';

const numberOfMonth = (new Date()).getMonth() + 1;

const monthName = (language, monthNumber) => {
  const d = new Date(2020, monthNumber);
  const options = { month: 'long' };
  return new Intl.DateTimeFormat(language, options).format(d);
};

const monthNamesArray = () => {
  const monthsArray = [];
  Array.from(Array(12).keys()).forEach(month => monthsArray.push(monthName('en-US', month)));
  return monthsArray;
};

const initialState = {
  monthNames: monthNamesArray,
  costs: [],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

const reducers = combineReducers({
  monthNames: initialState.monthNames,
  costsMonth: costsMonthReducer,
  currentUser: initialState.currentUser,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/costs/month/:month" component={App} />
        <Redirect from="/" to={{ pathname: `costs/month/${numberOfMonth}` }} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
