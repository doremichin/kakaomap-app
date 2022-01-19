import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Write from './pages/Write';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/write" component={Write} />
    </Switch>
  );
}

export default Router;
