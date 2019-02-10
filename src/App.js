import React from 'react';
import { Switch, Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import * as screens from 'screens';
import configureStore from './configureStore';

const history = createHistory();
const store = configureStore(history);

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
