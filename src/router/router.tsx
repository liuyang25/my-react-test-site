import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from 'stores';

import Main from '../containers/main';
import Blank from '../containers/blank';

export default () => {
  return (
    <Provider {...stores} >
      <Router>
        <Switch>
          <Route path="/blank" component={Blank} />
          {/* <Route path="/Login" component={Login} /> */}
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};