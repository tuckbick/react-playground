import express from 'express';
import React from 'react'; // eslint-disable-line no-unused-vars
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import { match } from 'redux-router/server';
import createHistory from 'history/lib/createMemoryHistory';

import routes from '../../common/routes';
import rootReducer from '../../common/reducers/root';
import Html from '../../common/components/html';

const router = express.Router();

const getMarkup = (store) => {
  const component = (
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  );
  const content = renderToString(<Html component={component} store={store} />);

  return `<!DOCTYPE html>${content}`;
}

router.use((req, res) => {
  const store = reduxReactRouter({ routes, createHistory })(createStore)(rootReducer);
  const url = req.path;

  const returnVal = match(url, (error, redirectLocation, routerState) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!routerState) {
      res.sendStatus(404);
    } else {
      res.send(getMarkup(store));
    }
  });

  console.log(returnVal);

  store.dispatch(returnVal);
});

export default router;
/*




router.get('*', (req, res) => {

  // const client = new ApiClient(req);

  // webRoutes is our object of React routes
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // if we got props, that means we found a valid component to render
      // for the given route

      const store = createRootStore();

      Promise
        .all(props.components
          .filter(component => component.fetchData) // only components with `.fetchData()`
          .map(component => {
            return component.fetchData(props, store.dispatch);
          }))
        .then(() => {
          // components have ran `fetchData`, so we know state has been updated
          const component = (
            <Provider store={store}>
              <RoutingContext {...props} />
            </Provider>
          );
          const content = renderToString(<Html component={component} store={store} />);

          res.send(`<!DOCTYPE html>${content}`);
        });

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});

export default router;
*/
