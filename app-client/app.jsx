import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

import routes from '../common/routes';
import rootReducer from '../common/reducers/root';

const store = reduxReactRouter({ routes, createHistory })(createStore)(rootReducer, window.__data);

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('app')
)
