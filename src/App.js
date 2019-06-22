import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import * as screens from 'screens';
import { store, history } from './configureStore';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={screens.HomeScreen} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
