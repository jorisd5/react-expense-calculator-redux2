import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import App from './components/app';
import CostsShow from './containers/costs_show';
import CostsNew from './containers/costs_new';

import '../assets/stylesheets/application.scss';
import costsMonthReducer from './reducers/costs_month_reducer';
import costReducer from './reducers/cost_reducer';

const numberOfMonth = (new Date()).getMonth() + 1;
// TODO: can languageLocal only be defined in initialState ?
const languageLocale = 'nl-BE';

const monthName = (language, monthNumber) => {
  const d = new Date(2020, monthNumber);
  const options = { month: 'long' };
  return new Intl.DateTimeFormat(language, options).format(d);
};

const monthNamesArray = () => {
  const monthsArray = [];
  Array.from(Array(12).keys()).forEach(month =>
    monthsArray.push(monthName(languageLocale, month)));
  return monthsArray;
};

const initialState = {
  monthNames: monthNamesArray,
  costs: [],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  languageLocale,
};

const reducers = combineReducers({
  languageLocale: initialState.languageLocale,
  monthNames: initialState.monthNames,
  costFromDb: costReducer,
  costsMonth: costsMonthReducer,
  currentUser: initialState.currentUser,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="costs/new" exact component={CostsNew} />
        <Route path="/costs/:id" component={CostsShow} />
        <Route path="/costs/month/:month" component={App} />
        <Redirect from="/" to={{ pathname: `costs/month/${numberOfMonth}` }} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
