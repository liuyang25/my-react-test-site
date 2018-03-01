import * as React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Hello from 'pages/hello';
import Page404 from 'pages/404';

export function mainIndex() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Hello} /> 
      <Redirect to="/404" />
    </Switch>
  );
}

export function blankIndex() {
  return (
    <Switch>
      <Route path="/blank/404" component={Page404} />
      <Redirect to="/blank/404" />
    </Switch>
  );
}