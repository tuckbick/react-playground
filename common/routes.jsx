import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/app';
import IndexComponent from './components/index';
import NoteComponent from './components/note';

const routes = (
  <Route component={AppComponent} path="/">
    <IndexRoute component={IndexComponent} />
    <Route component={NoteComponent} path="/n/:id" />
  </Route>
);

export default routes;
