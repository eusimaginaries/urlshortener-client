import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Redirect } from './pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/:id">
        <Redirect />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>

);

export default App;
